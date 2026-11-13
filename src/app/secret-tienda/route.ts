import { NextResponse, type NextRequest } from "next/server";
import { PREVIEW_COOKIE, makePreviewToken } from "@/server/admin-auth";

/** /secret-tienda deja ver la tienda aunque esté cerrada (cookie de 90 días). */
export async function GET(req: NextRequest) {
  const res = NextResponse.redirect(new URL("/tienda", req.url));
  res.cookies.set(PREVIEW_COOKIE, makePreviewToken(), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 90,
  });
  res.headers.set("X-Robots-Tag", "noindex");
  return res;
}
