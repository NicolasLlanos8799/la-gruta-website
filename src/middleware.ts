import { NextResponse, type NextRequest } from "next/server";
import { LOCALE_COOKIE, isLocale, type Locale } from "@/i18n/config";

/** Elige idioma: cookie (elección manual previa) > idioma principal del dispositivo.
 *  Cualquier variante de español → es, catalán → ca, cualquier otro idioma → inglés. */
function pickLocale(req: NextRequest): Locale {
  const saved = req.cookies.get(LOCALE_COOKIE)?.value;
  if (isLocale(saved)) return saved;
  const header = req.headers.get("accept-language") ?? "";
  const ranked = header
    .split(",")
    .map((part) => {
      const [tag, q] = part.trim().split(";q=");
      return { code: tag.toLowerCase().split("-")[0], q: q ? parseFloat(q) : 1 };
    })
    .filter((l) => l.code && l.code !== "*")
    .sort((a, b) => b.q - a.q);
  const primary = ranked[0]?.code;
  if (primary === "es") return "es";
  if (primary === "ca") return "ca";
  return "en";
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  // Solo redirigimos las rutas antiguas sin prefijo de idioma.
  const legacy = pathname === "/" || /^\/(tienda|mayorista)(\/|$)/.test(pathname);
  if (!legacy) return NextResponse.next();
  const url = req.nextUrl.clone();
  url.pathname = `/${pickLocale(req)}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = { matcher: ["/", "/tienda/:path*", "/mayorista/:path*"] };
