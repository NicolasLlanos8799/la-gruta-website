import "../globals.css";

// El panel de administración es interno: se mantiene en castellano.
export default function AdminLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
