import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Shop from "@/components/Shop";
import { LOCALES, isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { getSettings, getStorefront } from "@/server/store";
import { hasPreviewAccess, isAdmin } from "@/server/admin-auth";
import ComingSoon from "@/components/ComingSoon";
import "./tienda.css";

async function canSeeShop() {
  return (await getSettings()).shopOpen || (await isAdmin()) || (await hasPreviewAccess());
}

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const t = getDictionary(lang).meta;
  if (!(await canSeeShop())) return { title: "La Gruta", robots: { index: false, follow: false } };
  return {
    title: t.shopTitle,
    description: t.shopDescription,
    alternates: { languages: Object.fromEntries(LOCALES.map((l) => [l, `/${l}/tienda`])) },
  };
}

export default async function TiendaPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  if (!(await canSeeShop())) return <ComingSoon lang={lang} />;
  const { products, categories } = await getStorefront();
  return <Shop lang={lang} products={products} categories={categories} />;
}
