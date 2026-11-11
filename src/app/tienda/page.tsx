import type { Metadata } from "next";
import Shop from "@/components/Shop";
import { getStorefront } from "@/server/store";
import "./tienda.css";

export const metadata: Metadata = {
  title: "Tienda — La Gruta",
  description: "Catálogo online de La Gruta: ropa, accesorios y piezas únicas con color. Moda y arte desde Barcelona.",
};
export const dynamic = "force-dynamic";

export default async function TiendaPage() {
  const { products, categories } = await getStorefront();
  return <Shop mode="retail" products={products} categories={categories} />;
}
