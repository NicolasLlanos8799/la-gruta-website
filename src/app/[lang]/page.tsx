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
        <Link className="button hero-button" href={`${base}/tienda`}>{t.viewShop}</Link><Link className="hero-wholesale" href={`${base}/mayorista`}>{t.wholesaleLink}</Link>
      </div>
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
      <div className="story-copy"><p className="eyebrow">{t.storyEyebrow}</p><h2>{t.storyTitle1}<br/>{t.storyTitle2} <em>{t.storyEm}</em></h2><p>{t.storyText}</p><a href="https://www.instagram.com/lagrutabcn/" target="_blank" rel="noreferrer">{t.storyLink}</a><span className="story-flower">✿</span></div>
    </section>

    <section className="visit" id="visitanos">
      <div className="visit-shape">{t.visitShape[0]}<br/>{t.visitShape[1]}</div>
      <div className="visit-main"><p className="eyebrow">{t.visitEyebrow}</p><h2>{t.visitTitle1}<br/><em>{t.visitEm}</em></h2><p>{t.visitText}</p></div>
      <div className="visit-info"><strong>LG<span>✳</span></strong><p>{t.visitCity}</p><p>{t.visitAddress}</p><a className="button light" href="https://www.instagram.com/lagrutabcn/" target="_blank" rel="noreferrer">{t.visitButton}</a></div>
    </section>

    <footer><div><a className="brand" href="#top">la gruta<span>✳</span></a><p>{t.footerTagline}</p></div><a className="footer-social" href="https://www.instagram.com/lagrutabcn/" target="_blank" rel="noreferrer">@lagrutabcn ↗</a><small>© LA GRUTA 2026{PRIVACY_READY && <> · <Link href={`${base}/privacidad`}>{privacy[lang].title}</Link></>}</small></footer>
  </main>;
}
