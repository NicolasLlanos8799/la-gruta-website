"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import type { Category, Product } from "@/lib/products";
import { ADMIN_COOKIE, checkPassword, isAdmin, tokenFor } from "@/server/admin-auth";
import {
  deleteImage,
  getAllProducts,
  getCategories,
  getSettings,
  saveAllProducts,
  saveCategories,
  saveSettings,
  slugify,
  uploadImage,
} from "@/server/store";

type Result = { ok: true } | { ok: false; error: string };

async function guard() {
  if (!(await isAdmin())) throw new Error("No autorizado");
}

const refresh = () => {
  revalidatePath("/[lang]/tienda", "page");
  revalidatePath("/tienda");
  revalidatePath("/mayorista");
  revalidatePath("/admin");
};

const num = (v: FormDataEntryValue | null) => {
  const s = String(v ?? "").trim().replace(",", ".");
  if (s === "") return null;
  const n = Number(s);
  return Number.isFinite(n) && n >= 0 ? Math.round(n * 100) / 100 : NaN;
};

export async function login(_prev: { error?: string } | undefined, formData: FormData) {
  const pass = String(formData.get("password") ?? "");
  if (!checkPassword(pass)) return { error: "Contraseña incorrecta." };
  (await cookies()).set(ADMIN_COOKIE, tokenFor(process.env.ADMIN_PASSWORD!), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 14,
  });
  redirect("/admin");
}

export async function logout() {
  (await cookies()).delete(ADMIN_COOKIE);
  redirect("/admin");
}

export async function saveProduct(formData: FormData): Promise<Result> {
  try {
    await guard();
    const id = String(formData.get("id") ?? "");
    const name = String(formData.get("name") ?? "").trim();
    const category = String(formData.get("category") ?? "").trim();
    const price = num(formData.get("price"));
    const wholesalePrice = num(formData.get("wholesalePrice"));
    if (!name) return { ok: false, error: "El nombre es obligatorio." };
    if (!category) return { ok: false, error: "La categoría es obligatoria." };
    if (price === null || Number.isNaN(price)) return { ok: false, error: "Indica un precio minorista válido." };
    if (Number.isNaN(wholesalePrice)) return { ok: false, error: "El precio mayorista no es válido." };

    await getCategories(); // asegura la migración inicial de categorías
    const categories = await getCategories();
    if (!categories.some((c) => c.id === category)) return { ok: false, error: "Elige una categoría válida." };
    const products = await getAllProducts();
    const existing = products.find((p) => p.id === id);

    // Imagen
    let image = existing?.image ?? null;
    const file = formData.get("image");
    if (file instanceof File && file.size > 0) {
      const newUrl = await uploadImage(file, slugify(name));
      await deleteImage(image);
      image = newUrl;
    } else if (formData.get("removeImage") === "1") {
      await deleteImage(image);
      image = null;
    }

    const data = {
      name,
      category,
      price,
      wholesalePrice,
      description: String(formData.get("description") ?? "").trim(),
      details: String(formData.get("details") ?? "")
        .split("\n")
        .map((l) => l.trim())
        .filter(Boolean),
      badge: String(formData.get("badge") ?? "").trim() || undefined,
      active: formData.get("active") === "on",
      image,
    };

    if (existing) {
      const next = products.map((p) => (p.id === id ? ({ ...p, ...data } as Product) : p));
      await saveAllProducts(next);
    } else {
      let newId = slugify(name);
      while (products.some((p) => p.id === newId)) newId += "-2";
      await saveAllProducts([...products, { id: newId, createdAt: Date.now(), ...data } as Product]);
    }
    refresh();
    return { ok: true };
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : "No se pudo guardar." };
  }
}

export async function toggleActive(id: string): Promise<Result> {
  try {
    await guard();
    const products = await getAllProducts();
    await saveAllProducts(products.map((p) => (p.id === id ? { ...p, active: !p.active } : p)));
    refresh();
    return { ok: true };
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : "Error" };
  }
}

export async function deleteProduct(id: string): Promise<Result> {
  try {
    await guard();
    const products = await getAllProducts();
    const target = products.find((p) => p.id === id);
    await saveAllProducts(products.filter((p) => p.id !== id));
    await deleteImage(target?.image);
    refresh();
    return { ok: true };
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : "Error" };
  }
}

/* ---------- Categorías ---------- */

export async function saveCategory(formData: FormData): Promise<Result> {
  try {
    await guard();
    const id = String(formData.get("id") ?? "");
    const name = String(formData.get("name") ?? "").trim();
    const active = formData.get("active") === "on";
    if (!name) return { ok: false, error: "El nombre es obligatorio." };
    const categories = await getCategories();
    if (categories.some((c) => c.id !== id && c.name.toLowerCase() === name.toLowerCase()))
      return { ok: false, error: "Ya existe una categoría con ese nombre." };

    if (id) {
      await saveCategories(categories.map((c) => (c.id === id ? { ...c, name, active } : c)));
    } else {
      let newId = slugify(name);
      while (categories.some((c) => c.id === newId)) newId += "-2";
      const order = categories.reduce((m, c) => Math.max(m, c.order), -1) + 1;
      await saveCategories([...categories, { id: newId, name, active, order }]);
    }
    refresh();
    return { ok: true };
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : "No se pudo guardar." };
  }
}

export async function toggleCategory(id: string): Promise<Result> {
  try {
    await guard();
    const categories = await getCategories();
    await saveCategories(categories.map((c) => (c.id === id ? { ...c, active: !c.active } : c)));
    refresh();
    return { ok: true };
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : "Error" };
  }
}

export async function deleteCategory(id: string): Promise<Result> {
  try {
    await guard();
    const [categories, products] = await Promise.all([getCategories(), getAllProducts()]);
    const used = products.filter((p) => p.category === id).length;
    if (used > 0)
      return {
        ok: false,
        error: `No se puede eliminar: tiene ${used} producto${used === 1 ? "" : "s"}. Muévelos a otra categoría o desactívala.`,
      };
    await saveCategories(categories.filter((c) => c.id !== id));
    refresh();
    return { ok: true };
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : "Error" };
  }
}

/* ---------- Tienda abierta / cerrada ---------- */

export async function setShopOpen(open: boolean): Promise<Result> {
  try {
    await guard();
    await saveSettings({ ...(await getSettings()), shopOpen: open });
    refresh();
    return { ok: true };
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : "Error" };
  }
}
