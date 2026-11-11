import type { Metadata } from "next";
import Shop from "@/components/Shop";
import { getStorefront } from "@/server/store";
import "../tienda/tienda.css";

export const metadata: Metadata = {
  title: "Tienda mayorista — La Gruta",
  description: "Tienda mayorista de La Gruta para tiendas: catálogo, mínimos de compra y pedidos por WhatsApp.",
};
export const dynamic = "force-dynamic";

export default async function MayoristaPage() {
  const { products, categories } = await getStorefront();
  return <Shop mode="wholesale" products={products} categories={categories} />;
}
