import "server-only";
import { createHash, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

export const ADMIN_COOKIE = "gruta_admin";

export const adminConfigured = () => !!process.env.ADMIN_PASSWORD;

export const tokenFor = (password: string) =>
  createHash("sha256")
    .update(`${password}:${process.env.ADMIN_SECRET ?? "gruta-admin"}`)
    .digest("hex");

const same = (a: string, b: string) => {
  const x = Buffer.from(a);
  const y = Buffer.from(b);
  return x.length === y.length && timingSafeEqual(x, y);
};

// Tolera espacios al final y mayúsculas (los teclados del móvil las añaden solos).
const norm = (v: string) => v.trim().toLowerCase();
export const checkPassword = (input: string) =>
  adminConfigured() && same(tokenFor(norm(input)), tokenFor(norm(process.env.ADMIN_PASSWORD!)));

export async function isAdmin() {
  if (!adminConfigured()) return false;
  const v = (await cookies()).get(ADMIN_COOKIE)?.value;
  return !!v && same(v, tokenFor(process.env.ADMIN_PASSWORD!));
}

/* ---------- Acceso privado a la tienda mientras está cerrada (/secret-tienda) ---------- */

export const PREVIEW_COOKIE = "gruta_preview";

export const makePreviewToken = () =>
  createHash("sha256").update(`preview:${process.env.ADMIN_SECRET ?? "gruta-admin"}`).digest("hex");

export async function hasPreviewAccess() {
  const v = (await cookies()).get(PREVIEW_COOKIE)?.value;
  return !!v && same(v, makePreviewToken());
}
