import Link from "next/link";
import type { Locale } from "@/i18n/config";

const TEXT: Record<Locale, { kicker: string; title: [string, string]; body: string; back: string; sticker: [string, string]; band: string }> = {
  es: {
    kicker: "Tienda online",
    title: ["Muy", "pronto"],
    body: "Estamos preparando la tienda online de La Gruta. Muy pronto podrás comprar aquí nuestras prendas.",
    back: "Volver al inicio",
    sticker: ["Abrimos", "pronto"],
    band: "Moda y arte",
  },
  ca: {
    kicker: "Botiga en línia",
    title: ["Molt", "aviat"],
    body: "Estem preparant la botiga en línia de La Gruta. Molt aviat podràs comprar aquí les nostres peces.",
    back: "Tornar a l'inici",
    sticker: ["Obrim", "aviat"],
    band: "Moda i art",
  },
  en: {
    kicker: "Online shop",
    title: ["Coming", "soon"],
    body: "We're getting La Gruta's online shop ready. Very soon you'll be able to shop our pieces right here.",
    back: "Back to home",
    sticker: ["Opening", "soon"],
    band: "Fashion & art",
  },
};

export default function ComingSoon({ lang }: { lang: Locale }) {
  const t = TEXT[lang];
  return (
    <main className="cs">
      <div className="cs-burst" aria-hidden="true" />
      <div className="cs-card">
        <img className="cs-logo" src="/images/la-gruta-logo.png" alt="La Gruta — Moda y arte" width={1046} height={689} />
        <p className="cs-kicker">{t.kicker}</p>
        <h1>
          {t.title[0]} <em>{t.title[1]}</em>
        </h1>
        <p className="cs-body">{t.body}</p>
        <Link href={`/${lang}`} className="cs-button">
          <span aria-hidden="true">←</span> {t.back}
        </Link>
        <span className="cs-sticker" aria-hidden="true">
          {t.sticker[0]}
          <br />
          {t.sticker[1]}
        </span>
      </div>
      <div className="cs-band" aria-hidden="true">
        {Array.from({ length: 6 }).map((_, i) => (
          <span key={i}>{t.band} <b>✺</b></span>
        ))}
      </div>
    </main>
  );
}
