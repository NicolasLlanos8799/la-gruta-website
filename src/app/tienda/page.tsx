import type { Metadata } from "next";
import Shop from "@/components/Shop";
import { getStorefront } from "@/server/store";
import { isWholesale, wholesaleConfigured } from "@/server/wholesale-auth";
import "./tienda.css";

export const metadata: Metadata = {
  title: "Tienda — La Gruta",
  description: "Catálogo online de La Gruta: ropa, accesorios y piezas únicas con color. Moda y arte desde Barcelona.",
};
export const dynamic = "force-dynamic";

export default async function TiendaPage() {
  const wholesale = await isWholesale();
  // Los precios mayoristas solo salen del servidor si el visitante ya entró con su código.
  const { products, categories } = await getStorefront(wholesale);
  return (
    <Shop
      mode={wholesale ? "wholesale" : "retail"}
      products={products}
      categories={categories}
      canUnlock={wholesaleConfigured()}
    />
  );
}
