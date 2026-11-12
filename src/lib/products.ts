export type Garment = "tee" | "sweater" | "dress" | "pants" | "tote" | "cap" | "scarf" | "earrings";
export type Pattern = "stripes" | "dots" | "checks" | "waves" | "solid" | "sunburst";

export type Category = {
  id: string;
  name: string;
  active: boolean;
  order: number;
};

export type Product = {
  id: string;
  name: string;
  category: string; // id de la categoría (en la tienda llega ya como nombre)
  price: number; // PVP (tienda minorista)
  wholesalePrice: number | null; // precio mayorista; null = no se vende en la tienda mayorista
  description: string;
  details: string[];
  image: string | null; // URL de la foto subida desde el admin
  active: boolean;
  badge?: string;
  createdAt: number;
  // Solo para los productos de ejemplo sin foto (ilustración de respaldo)
  garment?: Garment;
  pattern?: Pattern;
  colors?: [string, string, string];
};

export const FREE_SHIPPING_FROM = 80;
export const SHIPPING_COST = 4.9;

// Reglas mayoristas (no secretas). Ajustar a las reales.
export const WHOLESALE_MIN_UNITS = 3; // unidades mínimas por referencia
export const WHOLESALE_MIN_ORDER = 300; // pedido mínimo en €

// Número de WhatsApp para pedidos (formato internacional, sin + ni espacios).
export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "34665420983";
export const whatsappLink = (text: string) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

export const formatPrice = (n: number, locale = "es-ES") =>
  new Intl.NumberFormat(locale, { style: "currency", currency: "EUR", minimumFractionDigits: n % 1 ? 2 : 0 }).format(n);
