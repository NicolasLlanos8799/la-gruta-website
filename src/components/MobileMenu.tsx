"use client";

import { useEffect, useState } from "react";
import LangSwitch from "./LangSwitch";
import type { Locale } from "@/i18n/config";

const LABELS: Record<Locale, { open: string; close: string }> = {
  es: { open: "Abrir menú", close: "Cerrar menú" },
  ca: { open: "Obrir menú", close: "Tancar menú" },
  en: { open: "Open menu", close: "Close menu" },
};

/** Menú hamburguesa para móvil. Los enlaces son los mismos que los del navbar de escritorio. */
export default function MobileMenu({
  lang,
  links,
  languageLabel,
}: {
  lang: Locale;
  links: { label: string; href: string }[];
  languageLabel: string;
}) {
  const [open, setOpen] = useState(false);
  const l = LABELS[lang];

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        className={`burger${open ? " is-open" : ""}`}
        aria-label={open ? l.close : l.open}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((v) => !v)}
      >
        <span /><span /><span />
      </button>
      <nav id="mobile-menu" className={`mobile-menu${open ? " is-open" : ""}`} aria-hidden={!open} onClick={() => setOpen(false)}>
        <div className="mobile-menu-panel" onClick={(e) => e.stopPropagation()}>
          {links.map((x) => (
            <a key={x.href} href={x.href} tabIndex={open ? 0 : -1} onClick={() => setOpen(false)}>{x.label}</a>
          ))}
          <div className="mobile-menu-lang">
            <p>{languageLabel}</p>
            <LangSwitch lang={lang} label={languageLabel} />
          </div>
        </div>
      </nav>
    </>
  );
}
