import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import HeroScroll from "@/components/HeroScroll";
import LangSwitch from "@/components/LangSwitch";
import { LOCALES, isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { PRIVACY_READY, privacy } from "@/i18n/privacy";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  return { alternates: { languages: Object.fromEntries(LOCALES.map((l) => [l, `/${l}`])) } };
}

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const d = getDictionary(lang);
  const t = d.home;
  const base = `/${lang}`;
  return <main>
    <header className="site-header">
      <a className="brand gruta-brand" href="#top"><img className="gruta-logo" src="/images/la-gruta-logo.png" alt={d.common.logoAlt} /></a>
      <nav><Link href={`${base}/tienda`}>{t.navRetail}</Link><Link href={`${base}/mayorista`}>{t.navWholesale}</Link><a href="#coleccion">{t.navCollections}</a><a href="#historia">{t.navAbout}</a></nav>
      <div className="header-tools" aria-label={t.tools}><LangSwitch lang={lang} label={d.common.language} /><Link href={`${base}/tienda`} aria-label={t.search} className="search-icon"></Link><Link href={`${base}/tienda`} aria-label={t.bag} className="bag-icon"></Link></div>
    </header>

    <section className="hero hero-reference" id="top">
      <HeroScroll />
      <div className="hero-sunburst" aria-hidden="true" />
      <picture>
        <source media="(max-width: 650px)" srcSet="/images/la-gruta-hero-mobile-model.png" />
        <img className="hero-model" src="/hero-model.png" alt={t.heroAlt} />
      </picture>
      <div className="hero-copy">
        <p className="eyebrow hero-kicker">{t.heroKicker}</p>
        <h1>{t.heroLine1}<br/><span>{t.heroLine2}</span></h1>
        <p className="intro">{t.intro}</p>
        <Link className="button hero-button" href={`${base}/tienda`}>{t.viewShop}</Link>      </div>
    </section>

    <section className="collection-editorial" id="coleccion" aria-labelledby="collection-title">
      <div className="collection-editorial-copy">
        <p className="eyebrow">{t.collectionEyebrow}</p>
        <h2 id="collection-title">{t.collectionLine1}<br/>{t.collectionLine2}<br/><em>{t.collectionEm}</em></h2>
        <p className="collection-editorial-description">{t.collectionDescription}</p>
        <Link className="collection-editorial-button" href={`${base}/tienda`}>{t.viewShop} <span aria-hidden="true">→</span></Link>
      </div>
      <div className="collection-editorial-art">
        <img src="/images/la-gruta-collection-editorial.png" alt={t.collectionAlt} />
        <svg width="0" height="0" aria-hidden="true" focusable="false" style={{position:"absolute"}}><defs><clipPath id="collection-blob" clipPathUnits="objectBoundingBox"><path d="M0.2,0.14 C0.249,0.088 0.317,0.083 0.39,0.06 C0.463,0.037 0.563,0.005 0.64,0 C0.717,-0.005 0.795,0.010 0.85,0.03 C0.905,0.050 0.945,0.067 0.97,0.12 C0.995,0.173 0.995,0.250 1,0.35 C1.005,0.450 1.018,0.628 1,0.72 C0.982,0.812 0.936,0.854 0.89,0.9 C0.844,0.946 0.794,0.988 0.725,0.995 C0.656,1.002 0.544,0.942 0.475,0.94 C0.406,0.938 0.366,0.982 0.31,0.98 C0.254,0.978 0.182,0.957 0.14,0.93 C0.098,0.903 0.083,0.867 0.06,0.82 C0.037,0.773 0.006,0.702 0,0.65 C-0.006,0.598 0.009,0.557 0.025,0.51 C0.041,0.463 0.067,0.432 0.096,0.37 C0.125,0.308 0.151,0.192 0.2,0.14 Z"/></clipPath></defs></svg>
      </div>
    </section>

    <section className="story" id="historia">
      <div className="story-image"><img src="https://d2ol7oe51mr4n9.cloudfront.net/user_3LmqSmQCW0ChedDbsb7zoEZlAOF/d709cd3e-ac5e-4259-bfa8-d4515a716ee3.webp" alt={t.storyAlt}/><span className="story-image-label">{t.storyLabel[0]}<br/>{t.storyLabel[1]}</span></div>
      <div className="story-copy"><p className="eyebrow">{t.storyEyebrow}</p><h2>{t.storyTitle1}<br/>{t.storyTitle2} <em>{t.storyEm}</em></h2><p>{t.storyText}</p><span className="story-flower">✿</span></div>
    </section>

    <section className="location" id="visitanos" aria-labelledby="location-title">
      <svg className="location-petals" viewBox="0 0 360 420" aria-hidden="true" focusable="false">
        <g strokeLinecap="round" fill="none">
          <line x1="400" y1="-30" x2="40" y2="30" stroke="#f7f1e6" strokeWidth="78" />
          <line x1="400" y1="-30" x2="88" y2="128" stroke="#fdd649" strokeWidth="66" />
          <line x1="400" y1="-30" x2="150" y2="228" stroke="#f9a0a6" strokeWidth="64" />
          <line x1="400" y1="-30" x2="285" y2="345" stroke="#ff9a3c" strokeWidth="58" />
          <line x1="400" y1="-30" x2="172" y2="372" stroke="#6c2036" strokeWidth="62" />
        </g>
      </svg>
      <div className="location-main">
        <p className="location-eyebrow"><span>{t.locEyebrow}</span><i aria-hidden="true" /></p>
        <h2 id="location-title">{t.locTitle1}<br/>{t.locTitle2} <em>{t.locEm}</em></h2>
        <p className="location-lead">{t.locLead1}<br/>{t.locLead2}</p>
      </div>
      <div className="location-info">
        <p className="location-label">{t.locLabel}</p>
        <address>{t.locAddress1}<br/>{t.locAddress2}</address>
        <a className="location-button" href="https://www.google.com/maps/search/?api=1&query=Carrer+de+Verdi+8+08012+Barcelona" target="_blank" rel="noreferrer">{t.locButton}</a>
      </div>
    </section>

    <footer className="site-footer">
      <a className="footer-logo" href="#top"><img src="/images/la-gruta-logo.png" alt={d.common.logoAlt} /></a>
      <nav className="footer-links" aria-label={t.footerNavAria}><Link href={`${base}/tienda`}>{t.footerShop}</Link><a href="#historia">{t.footerAbout}</a><a href="#visitanos">{t.footerContact}</a></nav>
      <a className="footer-social" href="https://www.instagram.com/lagrutabcn/" target="_blank" rel="noreferrer" aria-label={d.common.instagramAria}><svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r=".6" fill="currentColor"/></svg><span>@lagrutabcn</span></a>
      <small className="footer-copy">© LA GRUTA 2026{PRIVACY_READY && <> · <Link href={`${base}/privacidad`}>{privacy[lang].title}</Link></>}</small>
    </footer>
  </main>;
}
