import "server-only";
import { createHash, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

export const WHOLESALE_COOKIE = "gruta_wholesale";

export const wholesaleConfigured = () => !!process.env.WHOLESALE_CODE;

const norm = (v: string) => v.trim().toLowerCase();

export const wholesaleToken = (code: string) =>
  createHash("sha256")
    .update(`${norm(code)}:${process.env.ADMIN_SECRET ?? "gruta-wholesale"}`)
    .digest("hex");

const same = (a: string, b: string) => {
  const x = Buffer.from(a);
  const y = Buffer.from(b);
  return x.length === y.length && timingSafeEqual(x, y);
};

export const checkWholesaleCode = (input: string) =>
  wholesaleConfigured() && same(wholesaleToken(input), wholesaleToken(process.env.WHOLESALE_CODE!));

export async function isWholesale() {
  if (!wholesaleConfigured()) return false;
  const v = (await cookies()).get(WHOLESALE_COOKIE)?.value;
  return !!v && same(v, wholesaleToken(process.env.WHOLESALE_CODE!));
}
