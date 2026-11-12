import { NextResponse, type NextRequest } from "next/server";
import { DEFAULT_LOCALE, LOCALE_COOKIE, LOCALES, isLocale, type Locale } from "@/i18n/config";

/** Elige idioma: cookie (elección previa) > Accept-Language > castellano. */
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
    .sort((a, b) => b.q - a.q);
  for (const { code } of ranked) if ((LOCALES as readonly string[]).includes(code)) return code as Locale;
  return DEFAULT_LOCALE;
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
