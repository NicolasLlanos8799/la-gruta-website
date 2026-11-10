import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "La Gruta — Moda y arte en Barcelona",
  description: "Una tienda de ropa diferente. Moda y arte desde Barcelona.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>;
}
