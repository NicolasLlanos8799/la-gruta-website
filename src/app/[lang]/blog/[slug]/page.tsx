import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import LangSwitch from "@/components/LangSwitch";
import { LOCALES, isLocale } from "@/i18n/config";
import { BLOG_SLUGS, blogUi, getPosts } from "@/i18n/blog";
import { getDictionary } from "@/i18n/dictionaries";

export const dynamicParams = false;
export const generateStaticParams = () => LOCALES.flatMap((lang) => BLOG_SLUGS.map((slug) => ({ lang, slug })));

export async function generateMetadata({ params }: { params: Promise<{ lang: string; slug: string }> }): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!isLocale(lang)) return {};
  const post = getPosts(lang).find((p) => p.slug === slug);
  if (!post) return {};
  const description = post.intro ?? post.items?.[0]?.p ?? blogUi[lang].description;
  return {
    title: `${post.h2} | La Gruta`,
    description,
    alternates: { canonical: `/${lang}/blog/${slug}`, languages: Object.fromEntries(LOCALES.map((l) => [l, `/${l}/blog/${slug}`])) },
  };
}

export default async function BlogPost({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang, slug } = await params;
  if (!isLocale(lang)) notFound();
  const post = getPosts(lang).find((p) => p.slug === slug);
  if (!post) notFound();
  const d = getDictionary(lang);
  return (
    <>
      <header className="site-header">
        <Link className="brand gruta-brand" href={`/${lang}`} aria-label={d.shop.brandAria}>
          <img className="gruta-logo" src="/images/la-gruta-logo.png" alt={d.common.logoAlt} />
        </Link>
        <div className="header-tools"><LangSwitch lang={lang} label={d.common.language} /></div>
      </header>
      <main className="legal">
        <p><Link href={`/${lang}/blog`}>{blogUi[lang].back}</Link></p>
        <h1>{post.h2}</h1>
        {post.intro && <p>{post.intro}</p>}
        {post.items?.map((i) => (
          <section key={i.h3}>
            <h2>{i.h3}</h2>
            <p>{i.p}</p>
          </section>
        ))}
        <p><Link href={`/${lang}/tienda`}>{d.home.viewShop} →</Link></p>
      </main>
    </>
  );
}
