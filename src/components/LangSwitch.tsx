"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LOCALES, LOCALE_COOKIE, LOCALE_LABELS, isLocale, type Locale } from "@/i18n/config";

/** Selector de idioma: mantiene la misma página y recuerda la elección en una cookie. */
export default function LangSwitch({ lang, label }: { lang: Locale; label: string }) {
  const pathname = usePathname() || `/${lang}`;
  const parts = pathname.split("/");
  const rest = isLocale(parts[1]) ? parts.slice(2).join("/") : parts.slice(1).join("/");
  const hrefFor = (l: Locale) => `/${l}${rest ? `/${rest}` : ""}`;

  return (
    <div className="lang-switch" role="group" aria-label={label}>
      {LOCALES.map((l) => (
        <Link
          key={l}
          href={hrefFor(l)}
          hrefLang={l}
          lang={l}
          title={LOCALE_LABELS[l].name}
          aria-label={LOCALE_LABELS[l].name}
          aria-current={l === lang ? "true" : undefined}
          className={l === lang ? "on" : undefined}
          onClick={() => {
            document.cookie = `${LOCALE_COOKIE}=${l}; path=/; max-age=31536000; samesite=lax`;
          }}
        >
          {LOCALE_LABELS[l].short}
        </Link>
      ))}
    </div>
  );
}
