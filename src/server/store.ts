import "server-only";
import { promises as fs } from "node:fs";
import path from "node:path";
import { del, list, put } from "@vercel/blob";
import type { Category, Product } from "@/lib/products";
import { SEED_PRODUCTS } from "./seed";

// En producción (Vercel) se usa Vercel Blob; en local, archivos del proyecto.
const useBlob = !!process.env.BLOB_READ_WRITE_TOKEN;
const DATA_DIR = path.join(process.cwd(), "data");
const UPLOADS_DIR = path.join(process.cwd(), "public", "uploads");

async function readJson<T>(name: string): Promise<T | null> {
  if (useBlob) {
    const { blobs } = await list({ prefix: `data/${name}`, limit: 1 });
    if (!blobs[0]) return null;
    const res = await fetch(`${blobs[0].url}?t=${Date.now()}`, { cache: "no-store" });
    return (await res.json()) as T;
  }
  try {
    return JSON.parse(await fs.readFile(path.join(DATA_DIR, name), "utf8")) as T;
  } catch {
    return null;
  }
}

async function writeJson(name: string, data: unknown) {
  const json = JSON.stringify(data, null, 2);
  if (useBlob) {
    await put(`data/${name}`, json, {
      access: "public",
      addRandomSuffix: false,
      allowOverwrite: true,
      contentType: "application/json",
    });
    return;
  }
  await fs.mkdir(DATA_DIR, { recursive: true });
  await fs.writeFile(path.join(DATA_DIR, name), json);
}

export const slugify = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, 50) || "item";

/* ---------- Productos ---------- */

export async function getAllProducts(): Promise<Product[]> {
  const data = await readJson<Product[]>("products.json");
  if (data) return data;
  await writeJson("products.json", SEED_PRODUCTS);
  return SEED_PRODUCTS;
}

export const saveAllProducts = (products: Product[]) => writeJson("products.json", products);

/* ---------- Categorías ---------- */

export async function getCategories(): Promise<Category[]> {
  const existing = await readJson<Category[]>("categories.json");
  if (existing) return existing;

  // Primera vez: se crean a partir de los nombres de categoría de los productos
  // y los productos pasan a referenciarlas por id.
  const products = await getAllProducts();
  const names = Array.from(new Set(products.map((p) => p.category)));
  const categories: Category[] = names.map((name, i) => ({ id: slugify(name), name, active: true, order: i }));
  const byName = new Map(categories.map((c) => [c.name, c.id]));
  await saveAllProducts(products.map((p) => ({ ...p, category: byName.get(p.category) ?? p.category })));
  await writeJson("categories.json", categories);
  return categories;
}

export const saveCategories = (categories: Category[]) => writeJson("categories.json", categories);

/* ---------- Lo que ve la tienda ---------- */

export async function getStorefront(wholesale = false) {
  const categories = (await getCategories()).filter((c) => c.active).sort((a, b) => a.order - b.order);
  const names = new Map(categories.map((c) => [c.id, c.name]));
  const products = (await getAllProducts())
    .filter((p) => p.active && names.has(p.category))
    .sort((a, b) => a.createdAt - b.createdAt)
    // Minorista: el precio mayorista nunca viaja al navegador.
    .map((p) => ({ ...p, category: names.get(p.category)!, wholesalePrice: wholesale ? p.wholesalePrice : null }));
  return { products, categories: categories.map((c) => c.name) };
}

/* ---------- Imágenes ---------- */

const EXT: Record<string, string> = { "image/jpeg": "jpg", "image/png": "png", "image/webp": "webp" };

export async function uploadImage(file: File, slug: string): Promise<string> {
  const ext = EXT[file.type];
  if (!ext) throw new Error("Formato no válido. Usa JPG, PNG o WebP.");
  if (file.size > 4 * 1024 * 1024) throw new Error("La imagen pesa demasiado (máx. 4 MB).");
  const name = `${slug}-${Date.now()}.${ext}`;
  if (useBlob) {
    const blob = await put(`products/${name}`, file, { access: "public", addRandomSuffix: false });
    return blob.url;
  }
  await fs.mkdir(UPLOADS_DIR, { recursive: true });
  await fs.writeFile(path.join(UPLOADS_DIR, name), Buffer.from(await file.arrayBuffer()));
  return `/uploads/${name}`;
}

export async function deleteImage(url: string | null | undefined) {
  if (!url) return;
  try {
    if (url.startsWith("/uploads/")) {
      await fs.unlink(path.join(UPLOADS_DIR, path.basename(url)));
    } else if (useBlob && url.startsWith("http")) {
      await del(url);
    }
  } catch {}
}
