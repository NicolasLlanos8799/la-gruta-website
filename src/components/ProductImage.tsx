import type { Product } from "@/lib/products";
import ProductArt from "./ProductArt";

type P = Pick<Product, "id" | "name" | "image" | "garment" | "pattern" | "colors">;

/** Foto subida desde el admin; si no hay, la ilustración de ejemplo; si tampoco, un marcador. */
export default function ProductImage({ product, className }: { product: P; className?: string }) {
  if (product.image) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={product.image} alt={product.name} className={`prod-img ${className ?? ""}`} loading="lazy" />;
  }
  if (product.garment && product.pattern && product.colors) {
    return <ProductArt product={product as Parameters<typeof ProductArt>[0]["product"]} className={className} />;
  }
  return (
    <div className={`prod-ph ${className ?? ""}`} role="img" aria-label={product.name}>
      ✳
    </div>
  );
}
