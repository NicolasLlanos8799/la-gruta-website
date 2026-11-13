"use server";

import { cookies } from "next/headers";
import { checkWholesaleCode, WHOLESALE_COOKIE, wholesaleToken } from "@/server/wholesale-auth";

export async function unlockWholesale(code: string): Promise<{ ok: boolean }> {
  // Pequeña espera para frenar adivinar códigos a la fuerza bruta.
  await new Promise((r) => setTimeout(r, 600));
  if (!checkWholesaleCode(String(code ?? ""))) return { ok: false };
  (await cookies()).set(WHOLESALE_COOKIE, wholesaleToken(process.env.WHOLESALE_CODE!), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });
  return { ok: true };
}

export async function lockWholesale() {
  (await cookies()).delete(WHOLESALE_COOKIE);
}
