import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import LangSwitch from "@/components/LangSwitch";
import { LOCALES, isLocale } from "@/i18n/config";
import { blogUi, getPosts } from "@/i18n/blog";
import { getDictionary } from "@/i18n/dictionaries";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  return {
    title: `${blogUi[lang].title} | La Gruta`,
    description: blogUi[lang].description,
    alternates: { canonical: `/${lang}/blog`, languages: Object.fromEntries(LOCALES.map((l) => [l, `/${l}/blog`])) },
  };
}

export default async function BlogIndex({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const d = getDictionary(lang);
  const ui = blogUi[lang];
  return (
    <>
      <header className="site-header">
        <Link className="brand gruta-brand" href={`/${lang}`} aria-label={d.shop.brandAria}>
          <img className="gruta-logo" src="/images/la-gruta-logo.png" alt={d.common.logoAlt} />
        </Link>
        <div className="header-tools"><LangSwitch lang={lang} label={d.common.language} /></div>
      </header>
      <main className="legal">
        <h1>{ui.title}</h1>
        <p className="legal-updated">{ui.description}</p>
        {getPosts(lang).map((p) => (
          <article key={p.slug}>
            <h2><Link href={`/${lang}/blog/${p.slug}`}>{p.h2}</Link></h2>
            <p>{p.intro ?? p.items?.[0]?.p}</p>
            <p><Link href={`/${lang}/blog/${p.slug}`}>{ui.read}</Link></p>
          </article>
        ))}
      </main>
    </>
  );
}
