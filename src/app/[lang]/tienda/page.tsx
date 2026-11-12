import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Shop from "@/components/Shop";
import { LOCALES, isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { getStorefront } from "@/server/store";
import "./tienda.css";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const t = getDictionary(lang).meta;
  return {
    title: t.shopTitle,
    description: t.shopDescription,
    alternates: { languages: Object.fromEntries(LOCALES.map((l) => [l, `/${l}/tienda`])) },
  };
}

export default async function TiendaPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const { products, categories } = await getStorefront();
  return <Shop lang={lang} mode="retail" products={products} categories={categories} />;
}
