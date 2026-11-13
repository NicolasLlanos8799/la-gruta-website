import { notFound, redirect } from "next/navigation";
import { isLocale } from "@/i18n/config";

// No hay tienda mayorista aparte: la venta mayorista (15+ prendas) se activa en la bolsa de /tienda.
export default async function MayoristaPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  redirect(`/${lang}/tienda#mayorista`);
}
