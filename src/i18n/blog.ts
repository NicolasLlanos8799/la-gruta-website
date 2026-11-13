import type { Locale } from "./config";
import { getDictionary } from "./dictionaries";

/** Slugs de los artículos, en el mismo orden que `home.seo.blocks` de cada idioma. */
export const BLOG_SLUGS = ["moda-con-alma", "que-encontraras", "espacio-para-todes", "compra-como-prefieras"] as const;

export const blogUi: Record<Locale, { title: string; description: string; back: string; read: string }> = {
  es: { title: "Blog", description: "Moda alternativa, técnicas artesanales y novedades de La Gruta, tienda independiente en Gràcia, Barcelona.", back: "← Volver al blog", read: "Leer →" },
  ca: { title: "Blog", description: "Moda alternativa, tècniques artesanals i novetats de La Gruta, botiga independent a Gràcia, Barcelona.", back: "← Tornar al blog", read: "Llegir →" },
  en: { title: "Blog", description: "Alternative fashion, artisan techniques and news from La Gruta, an independent shop in Gràcia, Barcelona.", back: "← Back to the blog", read: "Read →" },
};

export function getPosts(lang: Locale) {
  const blocks = getDictionary(lang).home.seo.blocks;
  return BLOG_SLUGS.map((slug, i) => ({ slug, ...blocks[i] }));
}
