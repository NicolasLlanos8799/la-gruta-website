import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import LangSwitch from "@/components/LangSwitch";
import { LOCALES, isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { PRIVACY_READY, privacy } from "@/i18n/privacy";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  return {
    title: `${privacy[lang].title} — La Gruta`,
    // Mientras sea un borrador con datos de ejemplo, no se indexa.
    robots: PRIVACY_READY ? undefined : { index: false, follow: false },
    alternates: { languages: Object.fromEntries(LOCALES.map((l) => [l, `/${l}/privacidad`])) },
  };
}

function Inline({ text }: { text: string }) {
  return (
    <>
      {text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
        part.startsWith("**") ? <strong key={i}>{part.slice(2, -2)}</strong> : <span key={i}>{part}</span>,
      )}
    </>
  );
}

function Block({ lines }: { lines: string[] }) {
  const out: React.ReactNode[] = [];
  let list: string[] = [];
  const flush = () => {
    if (list.length) out.push(<ul key={`u${out.length}`}>{list.map((l, i) => <li key={i}><Inline text={l} /></li>)}</ul>);
    list = [];
  };
  for (const l of lines) {
    if (l.startsWith("- ")) list.push(l.slice(2));
    else {
      flush();
      if (l.startsWith("> ")) out.push(<blockquote key={`q${out.length}`}><Inline text={l.slice(2)} /></blockquote>);
      else out.push(<p key={`p${out.length}`}><Inline text={l} /></p>);
    }
  }
  flush();
  return <>{out}</>;
}

export default async function PrivacyPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const d = getDictionary(lang);
  const doc = privacy[lang];
  return (
    <>
      <header className="site-header">
        <Link className="brand gruta-brand" href={`/${lang}`} aria-label={d.shop.brandAria}>
          <img className="gruta-logo" src="/images/la-gruta-logo.png" alt={d.common.logoAlt} />
        </Link>
        <div className="header-tools"><LangSwitch lang={lang} label={d.common.language} /></div>
      </header>
      <main className="legal">
        {!PRIVACY_READY && <p className="legal-draft">{doc.draft}</p>}
        <h1>{doc.title}</h1>
        <p className="legal-updated">{doc.updated}</p>
        <p><Inline text={doc.intro} /></p>
        {doc.sections.map((s) => (
          <section key={s.h}>
            <h2>{s.h}</h2>
            <Block lines={s.p} />
          </section>
        ))}
      </main>
    </>
  );
}
