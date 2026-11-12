export const LOCALES = ["es", "ca", "en"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "es";
export const LOCALE_COOKIE = "NEXT_LOCALE";

export const LOCALE_LABELS: Record<Locale, { short: string; name: string; intl: string; og: string }> = {
  es: { short: "ES", name: "Castellano", intl: "es-ES", og: "es_ES" },
  ca: { short: "CA", name: "Català", intl: "ca-ES", og: "ca_ES" },
  en: { short: "EN", name: "English", intl: "en-GB", og: "en_GB" },
};

export const isLocale = (v: string | undefined | null): v is Locale => !!v && (LOCALES as readonly string[]).includes(v);

/** Sustituye {clave} por su valor. */
export const fmt = (s: string, vars: Record<string, string | number> = {}) =>
  s.replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? ""));
