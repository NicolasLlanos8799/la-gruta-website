"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMemo, useRef, useState, useTransition } from "react";
import { formatPrice, type Category, type Product } from "@/lib/products";
import { deleteCategory, deleteProduct, logout, saveCategory, saveProduct, setShopOpen, toggleActive, toggleCategory } from "./actions";

const BADGES = ["", "Nuevo", "Pieza única", "Últimas unidades"];

// Reduce la foto antes de subirla (más rápido y evita superar el límite de tamaño).
async function shrink(file: File, max = 1600): Promise<File> {
  if (!file.type.startsWith("image/")) return file;
  try {
    const bmp = await createImageBitmap(file);
    const scale = Math.min(1, max / Math.max(bmp.width, bmp.height));
    const canvas = document.createElement("canvas");
    canvas.width = Math.round(bmp.width * scale);
    canvas.height = Math.round(bmp.height * scale);
    canvas.getContext("2d")!.drawImage(bmp, 0, 0, canvas.width, canvas.height);
    const blob = await new Promise<Blob | null>((r) => canvas.toBlob(r, "image/webp", 0.86));
    if (!blob) return file;
    return new File([blob], file.name.replace(/\.[^.]+$/, "") + ".webp", { type: "image/webp" });
  } catch {
    return file;
  }
}

export default function AdminPanel({
  products,
  categories,
  storageWarning,
  shopOpen,
  previewPath,
}: {
  products: Product[];
  categories: Category[];
  storageWarning: boolean;
  shopOpen: boolean;
  previewPath: string;
}) {
  const router = useRouter();
  const [, startTransition] = useTransition();
  const [editing, setEditing] = useState<Product | "new" | null>(null);
  const [tab, setTab] = useState<"productos" | "categorias">("productos");
  const [editingCat, setEditingCat] = useState<Category | "new" | null>(null);
  const [filter, setFilter] = useState("");
  const catName = (id: string) => categories.find((c) => c.id === id)?.name ?? "—";
  const [msg, setMsg] = useState<string | null>(null);

  const list = useMemo(() => {
    const q = filter.trim().toLowerCase();
    return [...products]
      .sort((a, b) => b.createdAt - a.createdAt)
      .filter((p) => !q || p.name.toLowerCase().includes(q) || catName(p.category).toLowerCase().includes(q));
  }, [products, filter, categories]);

  const flash = (m: string) => {
    setMsg(m);
    setTimeout(() => setMsg(null), 3000);
  };

  const run = (fn: () => Promise<{ ok: boolean; error?: string }>, ok?: string) =>
    startTransition(async () => {
      const r = await fn();
      setMsg(r.ok ? (ok ?? "Guardado") : (r.error ?? "Error"));
      router.refresh();
      setTimeout(() => setMsg(null), 3000);
    });

  return (
    <div className="a-wrap">
      <header className="a-head">
        <div>
          <p className="a-eyebrow">LA GRUTA · ADMIN</p>
          <h1>
            {tab === "productos" ? "Productos" : "Categorías"}{" "}
            <span>({tab === "productos" ? products.length : categories.length})</span>
          </h1>
        </div>
        <div className="a-head-actions">
          <Link href="/tienda" target="_blank" className="a-btn">Ver tienda ↗</Link>
          {tab === "productos" ? (
            <button className="a-btn primary" onClick={() => setEditing("new")}>+ Nuevo producto</button>
          ) : (
            <button className="a-btn primary" onClick={() => setEditingCat("new")}>+ Nueva categoría</button>
          )}
          <form action={logout}><button className="a-btn" type="submit">Salir</button></form>
        </div>
      </header>

      <section className={`a-shop ${shopOpen ? "open" : "closed"}`} aria-label="Estado de la tienda">
        <div>
          <strong>{shopOpen ? "Tienda abierta" : "Tienda cerrada · “Próximamente”"}</strong>
          <p>
            {shopOpen
              ? "Todo el mundo puede ver y comprar en la tienda."
              : "El público ve “Próximamente”. Tú puedes entrar con este enlace secreto:"}
          </p>
          {!shopOpen && (
            <button
              type="button"
              className="a-link"
              onClick={() => {
                const url = `${window.location.origin}${previewPath}`;
                navigator.clipboard?.writeText(url).then(() => flash("Enlace copiado"), () => flash(url));
              }}
            >
              {previewPath} · copiar enlace
            </button>
          )}
        </div>
        <button
          className={`a-btn ${shopOpen ? "" : "primary"}`}
          onClick={() => {
            if (shopOpen && !confirm("¿Cerrar la tienda? El público volverá a ver “Próximamente”.")) return;
            run(() => setShopOpen(!shopOpen), shopOpen ? "Tienda cerrada" : "Tienda abierta");
          }}
        >
          {shopOpen ? "Cerrar tienda" : "Abrir tienda"}
        </button>
      </section>

      {storageWarning && (
        <p className="a-warn">
          Falta conectar <strong>Vercel Blob</strong> (variable <code>BLOB_READ_WRITE_TOKEN</code>): sin él los cambios no se guardan en producción.
        </p>
      )}

      <div className="a-tabs" role="tablist">
        <button role="tab" aria-selected={tab === "productos"} className={tab === "productos" ? "on" : ""} onClick={() => setTab("productos")}>Productos</button>
        <button role="tab" aria-selected={tab === "categorias"} className={tab === "categorias" ? "on" : ""} onClick={() => setTab("categorias")}>Categorías</button>
        {msg && <span className="a-msg" role="status">{msg}</span>}
      </div>

      {tab === "productos" && (<>
      <div className="a-bar">
        <input placeholder="Buscar producto o categoría…" value={filter} onChange={(e) => setFilter(e.target.value)} aria-label="Buscar" />
      </div>

      <div className="a-table" role="table">
        <div className="a-row a-th" role="row">
          <span>Producto</span><span>Categoría</span><span>Minorista</span><span>Mayorista</span><span>Estado</span><span />
        </div>
        {list.map((p) => (
          <div key={p.id} className={p.active ? "a-row" : "a-row off"} role="row">
            <span className="a-prod">
              <i className="a-thumb">{p.image ? <img src={p.image} alt="" /> : <b>✳</b>}</i>
              <strong>{p.name}</strong>
            </span>
            <span>{catName(p.category)}</span>
            <span>{formatPrice(p.price)}</span>
            <span>{p.wholesalePrice === null ? "—" : formatPrice(p.wholesalePrice)}</span>
            <span>
              <button className={p.active ? "a-pill on" : "a-pill"} onClick={() => run(() => toggleActive(p.id), p.active ? "Producto desactivado" : "Producto activado")}>
                {p.active ? "Activo" : "Desactivado"}
              </button>
            </span>
            <span className="a-actions">
              <button className="a-link" onClick={() => setEditing(p)}>Editar</button>
              <button
                className="a-link danger"
                onClick={() => {
                  if (confirm(`¿Eliminar "${p.name}"? No se puede deshacer.`)) run(() => deleteProduct(p.id), "Producto eliminado");
                }}
              >
                Eliminar
              </button>
            </span>
          </div>
        ))}
        {list.length === 0 && <p className="a-empty">No hay productos.</p>}
      </div>
      </>)}

      {tab === "categorias" && (
        <div className="a-table" role="table">
          <div className="a-row a-th a-cat" role="row">
            <span>Categoría</span><span>Productos</span><span>Estado</span><span />
          </div>
          {categories.map((c) => {
            const n = products.filter((p) => p.category === c.id).length;
            return (
              <div key={c.id} className={c.active ? "a-row a-cat" : "a-row a-cat off"} role="row">
                <span className="a-prod"><strong>{c.name}</strong></span>
                <span>{n}</span>
                <span>
                  <button className={c.active ? "a-pill on" : "a-pill"} onClick={() => run(() => toggleCategory(c.id), c.active ? "Categoría desactivada" : "Categoría activada")}>
                    {c.active ? "Activa" : "Desactivada"}
                  </button>
                </span>
                <span className="a-actions">
                  <button className="a-link" onClick={() => setEditingCat(c)}>Editar</button>
                  <button
                    className="a-link danger"
                    onClick={() => {
                      if (confirm(`¿Eliminar la categoría "${c.name}"?`)) run(() => deleteCategory(c.id), "Categoría eliminada");
                    }}
                  >
                    Eliminar
                  </button>
                </span>
              </div>
            );
          })}
          {categories.length === 0 && <p className="a-empty">Aún no hay categorías.</p>}
          <p className="a-note">Desactivar una categoría la oculta de la tienda junto con sus productos. Para eliminarla debe estar vacía.</p>
        </div>
      )}

      {editingCat && (
        <CategoryForm
          key={editingCat === "new" ? "new" : editingCat.id}
          category={editingCat === "new" ? null : editingCat}
          onClose={() => setEditingCat(null)}
          onSaved={() => {
            setEditingCat(null);
            setMsg("Guardado");
            router.refresh();
            setTimeout(() => setMsg(null), 3000);
          }}
        />
      )}

      {editing && (
        <ProductForm
          key={editing === "new" ? "new" : editing.id}
          product={editing === "new" ? null : editing}
          categories={categories}
          onClose={() => setEditing(null)}
          onSaved={() => {
            setEditing(null);
            setMsg("Guardado");
            router.refresh();
            setTimeout(() => setMsg(null), 3000);
          }}
        />
      )}
    </div>
  );
}

function ProductForm({
  product,
  categories,
  onClose,
  onSaved,
}: {
  product: Product | null;
  categories: Category[];
  onClose: () => void;
  onSaved: () => void;
}) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | null>(product?.image ?? null);
  const [removeImage, setRemoveImage] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const onFile = (f: File | undefined) => {
    if (!f) return;
    setRemoveImage(false);
    setPreview(URL.createObjectURL(f));
  };

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setBusy(true);
    setError(null);
    const fd = new FormData(e.currentTarget);
    if (product) fd.set("id", product.id);
    fd.set("removeImage", removeImage ? "1" : "0");
    const file = fileRef.current?.files?.[0];
    if (file) fd.set("image", await shrink(file));
    else fd.delete("image");
    const r = await saveProduct(fd);
    setBusy(false);
    if (r.ok) onSaved();
    else setError(r.error);
  };

  return (
    <div className="a-overlay" onClick={onClose}>
      <form className="a-modal" onClick={(e) => e.stopPropagation()} onSubmit={submit}>
        <div className="a-modal-head">
          <h2>{product ? "Editar producto" : "Nuevo producto"}</h2>
          <button type="button" className="a-x" onClick={onClose} aria-label="Cerrar">✕</button>
        </div>

        <div className="a-grid">
          <div className="a-img">
            <div className="a-preview">
              {preview ? <img src={preview} alt="Vista previa" /> : <span>Sin imagen</span>}
            </div>
            <input ref={fileRef} type="file" accept="image/jpeg,image/png,image/webp" hidden onChange={(e) => onFile(e.target.files?.[0])} />
            <button type="button" className="a-btn" onClick={() => fileRef.current?.click()}>
              {preview ? "Cambiar imagen" : "Subir imagen"}
            </button>
            {preview && (
              <button
                type="button"
                className="a-link danger"
                onClick={() => {
                  setPreview(null);
                  setRemoveImage(true);
                  if (fileRef.current) fileRef.current.value = "";
                }}
              >
                Quitar imagen
              </button>
            )}
            <small>JPG, PNG o WebP. Se optimiza automáticamente.</small>
          </div>

          <div className="a-fields">
            <label>Nombre<input name="name" defaultValue={product?.name} required /></label>
            <div className="a-two">
              <label>
                Categoría
                <select name="category" defaultValue={product?.category ?? categories[0]?.id ?? ""} required>
                  {categories.length === 0 && <option value="">Crea una categoría primero</option>}
                  {categories.map((c) => <option key={c.id} value={c.id}>{c.name}{c.active ? "" : " (desactivada)"}</option>)}
                </select>
              </label>
              <label>
                Etiqueta
                <select name="badge" defaultValue={product?.badge ?? ""}>
                  {BADGES.map((b) => <option key={b} value={b}>{b || "Ninguna"}</option>)}
                </select>
              </label>
            </div>
            <div className="a-two">
              <label>Precio minorista (€)<input name="price" inputMode="decimal" defaultValue={product?.price} required /></label>
              <label>Precio mayorista (€)<input name="wholesalePrice" inputMode="decimal" defaultValue={product?.wholesalePrice ?? ""} placeholder="Vacío = no va a mayorista" /></label>
            </div>
            <label>Descripción<textarea name="description" rows={3} defaultValue={product?.description} /></label>
            <label>Detalles (uno por línea)<textarea name="details" rows={3} defaultValue={product?.details.join("\n")} placeholder={"100% algodón\nCorte oversize"} /></label>
            <label className="a-check">
              <input type="checkbox" name="active" defaultChecked={product ? product.active : true} />
              Producto activo (visible en la tienda)
            </label>
          </div>
        </div>

        {error && <p className="a-err" role="alert">{error}</p>}
        <div className="a-modal-foot">
          <button type="button" className="a-btn" onClick={onClose}>Cancelar</button>
          <button type="submit" className="a-btn primary" disabled={busy}>{busy ? "Guardando…" : "Guardar"}</button>
        </div>
      </form>
    </div>
  );
}

function CategoryForm({
  category,
  onClose,
  onSaved,
}: {
  category: Category | null;
  onClose: () => void;
  onSaved: () => void;
}) {
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setBusy(true);
    setError(null);
    const fd = new FormData(e.currentTarget);
    if (category) fd.set("id", category.id);
    const r = await saveCategory(fd);
    setBusy(false);
    if (r.ok) onSaved();
    else setError(r.error);
  };

  return (
    <div className="a-overlay" onClick={onClose}>
      <form className="a-modal a-small" onClick={(e) => e.stopPropagation()} onSubmit={submit}>
        <div className="a-modal-head">
          <h2>{category ? "Editar categoría" : "Nueva categoría"}</h2>
          <button type="button" className="a-x" onClick={onClose} aria-label="Cerrar">✕</button>
        </div>
        <div className="a-fields">
          <label>Nombre<input name="name" defaultValue={category?.name} required autoFocus placeholder="Ej: Faldas" /></label>
          <label className="a-check">
            <input type="checkbox" name="active" defaultChecked={category ? category.active : true} />
            Categoría activa (visible en la tienda)
          </label>
        </div>
        {error && <p className="a-err" role="alert">{error}</p>}
        <div className="a-modal-foot">
          <button type="button" className="a-btn" onClick={onClose}>Cancelar</button>
          <button type="submit" className="a-btn primary" disabled={busy}>{busy ? "Guardando…" : "Guardar"}</button>
        </div>
      </form>
    </div>
  );
}
