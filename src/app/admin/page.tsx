import type { Metadata } from "next";
import { adminConfigured, isAdmin } from "@/server/admin-auth";
import { getAllProducts, getCategories, getSettings } from "@/server/store";
import AdminPanel from "./AdminPanel";
import LoginForm from "./LoginForm";
import "./admin.css";

export const metadata: Metadata = { title: "Admin — La Gruta", robots: { index: false, follow: false } };
export const dynamic = "force-dynamic";

export default async function AdminPage() {
  if (!adminConfigured()) {
    return (
      <main className="a-center">
        <h1>Admin no configurado</h1>
        <p>Define la variable de entorno <code>ADMIN_PASSWORD</code> y vuelve a cargar esta página.</p>
      </main>
    );
  }
  if (!(await isAdmin())) {
    return (
      <main className="a-center">
        <p className="a-eyebrow">LA GRUTA</p>
        <h1>Panel de administración</h1>
        <LoginForm />
      </main>
    );
  }
  const categories = (await getCategories()).sort((a, b) => a.order - b.order);
  const products = await getAllProducts();
  const { shopOpen } = await getSettings();
  const usingBlob = !!process.env.BLOB_READ_WRITE_TOKEN;
  const prod = process.env.NODE_ENV === "production";
  return <AdminPanel products={products} categories={categories} storageWarning={prod && !usingBlob} shopOpen={shopOpen} previewPath="/secret-tienda" />;
}
