import Link from "next/link";
import type { Locale } from "@/i18n/config";

const TEXT: Record<Locale, { title: string; body: string; back: string }> = {
  es: {
    title: "Próximamente",
    body: "Estamos preparando la tienda online de La Gruta. Muy pronto podrás comprar aquí nuestras prendas.",
    back: "Volver al inicio",
  },
  ca: {
    title: "Aviat",
    body: "Estem preparant la botiga en línia de La Gruta. Molt aviat podràs comprar aquí les nostres peces.",
    back: "Tornar a l'inici",
  },
  en: {
    title: "Coming soon",
    body: "We're getting La Gruta's online shop ready. Very soon you'll be able to shop our pieces right here.",
    back: "Back to home",
  },
};

export default function ComingSoon({ lang }: { lang: Locale }) {
  const t = TEXT[lang];
  return (
    <main className="coming-soon">
      <p className="coming-soon-brand">La Gruta</p>
      <h1>{t.title}</h1>
      <p>{t.body}</p>
      <Link href={`/${lang}`} className="coming-soon-link">← {t.back}</Link>
    </main>
  );
}
