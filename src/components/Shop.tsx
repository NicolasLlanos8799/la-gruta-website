"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import AutoRefresh from "./AutoRefresh";
import ProductImage from "./ProductImage";
import {
  FREE_SHIPPING_FROM,
  SHIPPING_COST,
  WHOLESALE_MIN_ORDER,
  WHOLESALE_MIN_UNITS,
  whatsappLink,
  formatPrice,
  type Product,
} from "@/lib/products";

type CartLine = { id: string; qty: number };
type Sort = "destacados" | "precio-asc" | "precio-desc";

const STORAGE_PREFIX = "la-gruta-cart-v2";
const MAX_QTY = 9;

export default function Shop({
  mode = "retail",
  products: all,
  categories: categoryOrder,
}: {
  mode?: "retail" | "wholesale";
  products: Product[];
  categories: string[];
}) {
  const wholesale = mode === "wholesale";
  // La tienda mayorista solo muestra productos con precio mayorista.
  const PRODUCTS = useMemo(() => (wholesale ? all.filter((p) => p.wholesalePrice !== null) : all), [all, wholesale]);
  const byId = useCallback((id: string) => PRODUCTS.find((p) => p.id === id), [PRODUCTS]);
  const CATEGORIES = useMemo(
    () => ["Todo", ...categoryOrder.filter((c) => PRODUCTS.some((p) => p.category === c))],
    [PRODUCTS, categoryOrder],
  );
  const STORAGE_KEY = `${STORAGE_PREFIX}-${mode}`;
  const priceOf = useCallback(
    (id: string) => {
      const p = byId(id);
      return p ? (wholesale ? (p.wholesalePrice ?? 0) : p.price) : 0;
    },
    [wholesale, byId],
  );
  const [category, setCategory] = useState<string>("Todo");
  const [sort, setSort] = useState<Sort>("destacados");
  const [query, setQuery] = useState("");
  const [cart, setCart] = useState<CartLine[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [quick, setQuick] = useState<Product | null>(null);
  const [quickQty, setQuickQty] = useState(1);
  const [cartOpen, setCartOpen] = useState(false);
  const [checkout, setCheckout] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  // Cargar / guardar carrito
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as CartLine[];
        setCart(parsed.filter((l) => byId(l.id) && l.qty > 0));
      }
    } catch {}
    setLoaded(true);
  }, []);
  useEffect(() => {
    if (!loaded) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
    } catch {}
  }, [cart, loaded]);

  // Bloquear scroll con paneles abiertos + cerrar con Escape
  const anyOpen = cartOpen || checkout || !!quick;
  useEffect(() => {
    document.body.style.overflow = anyOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [anyOpen]);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (checkout) setCheckout(false);
      else if (quick) setQuick(null);
      else if (cartOpen) setCartOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [checkout, quick, cartOpen]);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 2400);
    return () => clearTimeout(t);
  }, [toast]);

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    let list = PRODUCTS.filter(
      (p) =>
        (category === "Todo" || p.category === category) &&
        (!q || p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)),
    );
    if (sort === "precio-asc") list = [...list].sort((a, b) => priceOf(a.id) - priceOf(b.id));
    if (sort === "precio-desc") list = [...list].sort((a, b) => priceOf(b.id) - priceOf(a.id));
    return list;
  }, [PRODUCTS, category, sort, query, priceOf]);

  // Líneas de la bolsa cuyo producto sigue disponible (puede haberse desactivado o eliminado desde el admin).
  const lines = useMemo(() => cart.filter((l) => byId(l.id)), [cart, byId]);
  useEffect(() => {
    if (loaded && lines.length !== cart.length) setCart(lines);
  }, [loaded, lines, cart.length]);

  const count = lines.reduce((n, l) => n + l.qty, 0);
  const subtotal = lines.reduce((s, l) => s + priceOf(l.id) * l.qty, 0);
  const shipping = wholesale || subtotal === 0 || subtotal >= FREE_SHIPPING_FROM ? 0 : SHIPPING_COST;
  const total = subtotal + shipping;
  const remaining = Math.max(0, FREE_SHIPPING_FROM - subtotal);
  const belowUnits = wholesale ? lines.filter((l) => l.qty < WHOLESALE_MIN_UNITS) : [];
  const belowOrder = wholesale && subtotal < WHOLESALE_MIN_ORDER;
  const canCheckout = lines.length > 0 && belowUnits.length === 0 && !belowOrder;

  const add = useCallback((p: Product, qty?: number) => {
    const n = qty ?? (wholesale ? WHOLESALE_MIN_UNITS : 1);
    setCart((prev) => {
      const i = prev.findIndex((l) => l.id === p.id);
      if (i === -1) return [...prev, { id: p.id, qty: Math.min(MAX_QTY, n) }];
      const next = [...prev];
      next[i] = { ...next[i], qty: Math.min(MAX_QTY, next[i].qty + (qty ?? 1)) };
      return next;
    });
    setToast(`${p.name} añadido a la bolsa`);
  }, [wholesale]);

  const changeQty = (id: string, delta: number) =>
    setCart((prev) =>
      prev
        .map((l) => (l.id === id ? { ...l, qty: Math.min(MAX_QTY, l.qty + delta) } : l))
        .filter((l) => l.qty > 0),
    );
  const remove = (id: string) => setCart((prev) => prev.filter((l) => l.id !== id));

  const openQuick = (p: Product) => {
    setQuickQty(wholesale ? WHOLESALE_MIN_UNITS : 1);
    setQuick(p);
  };


  return (
    <div className="shop">
      <AutoRefresh />
      <header className="site-header">
        <Link className="brand gruta-brand" href="/" aria-label="La Gruta — inicio">
          <img className="gruta-logo" src="/images/la-gruta-logo.png" alt="La Gruta — Moda &amp; Arte" />
        </Link>
        <nav>
          <Link href="/#coleccion">Colecciones</Link>
          <Link href="/#historia">Sobre La Gruta</Link>
          <Link href="/tienda" aria-current={!wholesale ? "page" : undefined}>Minorista</Link>
          <Link href="/mayorista" aria-current={wholesale ? "page" : undefined}>Mayorista</Link>
        </nav>
        <div className="header-tools" aria-label="Accesos">
          <button className="search-icon" aria-label="Buscar" onClick={() => document.getElementById("buscar")?.focus()} />
          <button className="bag-icon" onClick={() => setCartOpen(true)} aria-label={`Abrir bolsa, ${count} artículos`}>
            {count > 0 && <span className="bag-count">{count}</span>}
          </button>
        </div>
      </header>

      <section className="shop-hero">
        <p className="eyebrow">{wholesale ? "SOLO PARA TIENDAS · PRECIOS MAYORISTAS" : "DESCUBRE LA COLECCIÓN"}</p>
        <h1>
          {wholesale ? (<>Tienda<br />mayorista<em>.</em></>) : (<>Nuestra<br />tienda <em>online.</em></>)}
        </h1>
        <p>
          {wholesale
            ? `Mínimo ${WHOLESALE_MIN_UNITS} unidades por referencia y ${formatPrice(WHOLESALE_MIN_ORDER)} por pedido. Cerramos el pedido por WhatsApp.`
            : "Ropa, accesorios y piezas únicas con la esencia de La Gruta."}
        </p>
      </section>

      <div className="store-switch" role="tablist" aria-label="Tipo de tienda">
        <Link href="/tienda" role="tab" aria-selected={!wholesale} className={!wholesale ? "on" : ""}>
          <strong>Tienda minorista</strong>
          <span>Para ti · compra desde 1 prenda</span>
        </Link>
        <Link href="/mayorista" role="tab" aria-selected={wholesale} className={wholesale ? "on" : ""}>
          <strong>Tienda mayorista</strong>
          <span>Para tiendas · desde {WHOLESALE_MIN_UNITS} uds por referencia</span>
        </Link>
      </div>

      <section className="shop-toolbar" aria-label="Filtros">
        <div className="chips" role="tablist" aria-label="Categorías">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              role="tab"
              aria-selected={category === c}
              className={category === c ? "chip on" : "chip"}
              onClick={() => setCategory(c)}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="tools">
          <input
            type="search"
            id="buscar"
            placeholder="Buscar…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Buscar productos"
          />
          <select value={sort} onChange={(e) => setSort(e.target.value as Sort)} aria-label="Ordenar">
            <option value="destacados">Destacados</option>
            <option value="precio-asc">Precio: menor a mayor</option>
            <option value="precio-desc">Precio: mayor a menor</option>
          </select>
        </div>
      </section>

      <main className="catalog" id="catalogo">
        <p className="result-count" aria-live="polite">
          {visible.length} {visible.length === 1 ? "producto" : "productos"}
        </p>
        {visible.length === 0 ? (
          <div className="empty">
            <p>No encontramos nada con esa búsqueda.</p>
            <button
              className="btn-ghost"
              onClick={() => {
                setQuery("");
                setCategory("Todo");
              }}
            >
              Ver todo
            </button>
          </div>
        ) : (
          <ul className="grid">
            {visible.map((p) => (
              <li key={p.id} className="card">
                <button className="card-media" onClick={() => openQuick(p)} aria-label={`Ver ${p.name}`}>
                  <ProductImage product={p} />
                  {p.badge && <span className="badge">{p.badge}</span>}
                </button>
                <div className="card-info">
                  <button className="card-title" onClick={() => openQuick(p)}>
                    <h3>{p.name}</h3>
                    <p className="cat">{p.category}</p>
                  </button>
                  <p className="price">{formatPrice(priceOf(p.id))}</p>
                </div>
                <button className="btn-add" onClick={() => add(p)}>
                  Añadir a la bolsa
                </button>
              </li>
            ))}
          </ul>
        )}
      </main>

      <footer className="shop-footer">
        <p>
          ¿Dudas o quieres una pieza especial? Escríbenos por{" "}
          <a href={whatsappLink("Hola La Gruta!")} target="_blank" rel="noreferrer">
            WhatsApp ↗
          </a>
        </p>
        <small>© LA GRUTA 2026 · Moda y arte · Barcelona</small>
      </footer>

      {/* Vista de producto (pop-up) */}
      {quick && (
        <div className="overlay" onClick={() => setQuick(null)}>
          <div className="modal product-modal" role="dialog" aria-modal="true" aria-label={quick.name} onClick={(e) => e.stopPropagation()}>
            <button className="close" onClick={() => setQuick(null)} aria-label="Cerrar">
              ✕
            </button>
            <div className="modal-media">
              <ProductImage product={quick} />
              {quick.badge && <span className="badge">{quick.badge}</span>}
            </div>
            <div className="modal-body">
              <p className="eyebrow">{quick.category.toUpperCase()}</p>
              <h2>{quick.name}</h2>
              <p className="price big">
                {formatPrice(priceOf(quick.id))}
                {wholesale && <small> / ud · mayorista</small>}
              </p>
              {quick.description && <p className="desc">{quick.description}</p>}
              {quick.details.length > 0 && (
                <>
                  <p className="details-title">Detalles</p>
                  <ul className="details">
                    {quick.details.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                </>
              )}
              {wholesale && <p className="fine left">Mínimo {WHOLESALE_MIN_UNITS} unidades por referencia.</p>}
              {!wholesale && (
                <p className="fine left">
                  Envío gratis desde {formatPrice(FREE_SHIPPING_FROM)} · Cerramos el pedido por WhatsApp.
                </p>
              )}
              <div className="modal-buy">
                <div className="qty">
                  <button
                    onClick={() => setQuickQty((q) => Math.max(wholesale ? WHOLESALE_MIN_UNITS : 1, q - 1))}
                    aria-label="Quitar una unidad"
                  >
                    −
                  </button>
                  <span aria-live="polite">{quickQty}</span>
                  <button onClick={() => setQuickQty((q) => Math.min(MAX_QTY, q + 1))} aria-label="Añadir una unidad" disabled={quickQty >= MAX_QTY}>
                    +
                  </button>
                </div>
                <button
                  className="btn-primary"
                  onClick={() => {
                    add(quick, quickQty);
                    setQuick(null);
                  }}
                >
                  Añadir a la bolsa · {formatPrice(priceOf(quick.id) * quickQty)}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Carrito */}
      <div className={cartOpen ? "overlay side show" : "overlay side"} onClick={() => setCartOpen(false)} aria-hidden={!cartOpen}>
        <aside className="drawer" role="dialog" aria-modal="true" aria-label="Bolsa de compra" onClick={(e) => e.stopPropagation()}>
          <div className="drawer-head">
            <h2>Tu bolsa <span>({count})</span></h2>
            <button className="close static" onClick={() => setCartOpen(false)} aria-label="Cerrar bolsa">
              ✕
            </button>
          </div>

          {lines.length === 0 ? (
            <div className="drawer-empty">
              <p className="spark">✳</p>
              <p>Tu bolsa está vacía.</p>
              <button className="btn-ghost" onClick={() => setCartOpen(false)}>
                Seguir mirando
              </button>
            </div>
          ) : (
            <>
              {!wholesale && (<div className="ship">
                <p>
                  {remaining > 0 ? (
                    <>
                      Te faltan <strong>{formatPrice(remaining)}</strong> para el envío gratis
                    </>
                  ) : (
                    <strong>¡Tienes envío gratis! ✳</strong>
                  )}
                </p>
                <div className="bar">
                  <i style={{ width: `${Math.min(100, (subtotal / FREE_SHIPPING_FROM) * 100)}%` }} />
                </div>
              </div>)}

              <ul className="lines">
                {lines.map((l) => {
                  const p = byId(l.id)!;
                  return (
                    <li key={l.id} className="line">
                      <div className="thumb">
                        <ProductImage product={p} />
                      </div>
                      <div className="line-info">
                        <p className="line-name">{p.name}</p>
                        <p className="line-meta">{wholesale && l.qty < WHOLESALE_MIN_UNITS && <strong className="warn">Mínimo {WHOLESALE_MIN_UNITS} uds</strong>}</p>
                        <div className="qty">
                          <button onClick={() => changeQty(l.id, -1)} aria-label="Quitar una unidad">−</button>
                          <span aria-live="polite">{l.qty}</span>
                          <button onClick={() => changeQty(l.id, 1)} aria-label="Añadir una unidad" disabled={l.qty >= MAX_QTY}>+</button>
                        </div>
                      </div>
                      <div className="line-end">
                        <p className="price">{formatPrice(priceOf(p.id) * l.qty)}</p>
                        <button className="link" onClick={() => remove(l.id)}>Eliminar</button>
                      </div>
                    </li>
                  );
                })}
              </ul>

              <div className="totals">
                <p><span>Subtotal</span><span>{formatPrice(subtotal)}</span></p>
                <p><span>Envío</span><span>{wholesale ? "A convenir" : shipping === 0 ? "Gratis" : formatPrice(shipping)}</span></p>
                <p className="grand"><span>Total</span><span>{formatPrice(total)}</span></p>
                {belowOrder && lines.length > 0 && (
                  <p className="warn-box">Pedido mínimo {formatPrice(WHOLESALE_MIN_ORDER)}: te faltan {formatPrice(WHOLESALE_MIN_ORDER - subtotal)}.</p>
                )}
                {belowUnits.length > 0 && <p className="warn-box">Cada referencia necesita al menos {WHOLESALE_MIN_UNITS} unidades.</p>}
                <button
                  className="btn-primary"
                  disabled={!canCheckout}
                  onClick={() => {
                    setCartOpen(false);
                    setCheckout(true);
                  }}
                >
                  Finalizar pedido →
                </button>
              </div>
            </>
          )}
        </aside>
      </div>

      {checkout && (
        <CheckoutModal
          lines={lines}
          total={total}
          shipping={shipping}
          wholesale={wholesale}
          priceOf={priceOf}
          byId={byId}
          onClose={() => setCheckout(false)}
          onDone={() => {
            setCart([]);
            setCheckout(false);
          }}
        />
      )}

      {toast && !cartOpen && (
        <div className="toast" role="status">
          ✳ {toast}
          <button onClick={() => { setToast(null); setCartOpen(true); }}>Ver bolsa</button>
        </div>
      )}
    </div>
  );
}

function CheckoutModal({
  lines,
  total,
  shipping,
  wholesale,
  priceOf,
  byId,
  onClose,
  onDone,
}: {
  lines: CartLine[];
  total: number;
  shipping: number;
  wholesale: boolean;
  priceOf: (id: string) => number;
  byId: (id: string) => Product | undefined;
  onClose: () => void;
  onDone: () => void;
}) {
  const [f, setF] = useState({
    nombre: "",
    apellido: "",
    contacto: "",
    empresa: "",
    nif: "",
    street: "",
    extra: "",
    cp: "",
    city: "",
    region: "",
    country: "España",
    notes: "",
  });
  const [delivery, setDelivery] = useState<"envio" | "retiro">("envio");
  const [link, setLink] = useState<string | null>(null);
  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setF((prev) => ({ ...prev, [k]: e.target.value }));

  const subtotal = total - shipping;
  const ship = delivery === "envio" ? shipping : 0;
  const finalTotal = subtotal + ship;
  const shipLabel =
    delivery === "retiro" ? "retiro en tienda" : wholesale ? "a convenir" : ship === 0 ? "gratis" : formatPrice(ship);

  const valid =
    f.nombre.trim() &&
    f.apellido.trim() &&
    f.contacto.trim() &&
    (!wholesale || (f.empresa.trim() && f.nif.trim())) &&
    (delivery === "retiro" || (f.street.trim() && f.cp.trim() && f.city.trim() && f.country.trim()));

  const buildSummary = () =>
    [
      wholesale ? "Hola La Gruta! Quiero hacer este PEDIDO MAYORISTA:" : "Hola La Gruta! Quiero hacer este pedido:",
      "",
      ...lines.map((l) => {
        const p = byId(l.id)!;
        return `• ${l.qty} × ${p.name} — ${formatPrice(priceOf(p.id) * l.qty)}`;
      }),
      "",
      `Subtotal: ${formatPrice(subtotal)}`,
      `Envío: ${shipLabel}`,
      `Total: ${formatPrice(finalTotal)}`,
      "",
      `Nombre y apellido: ${f.nombre.trim()} ${f.apellido.trim()}`,
      ...(wholesale ? [`Empresa/tienda: ${f.empresa.trim()}`, `NIF/CIF: ${f.nif.trim()}`] : []),
      `Contacto: ${f.contacto.trim()}`,
      "",
      delivery === "retiro"
        ? "Entrega: RETIRO EN TIENDA"
        : [
            "Entrega: ENVÍO A DOMICILIO",
            `Dirección: ${f.street.trim()}${f.extra.trim() ? `, ${f.extra.trim()}` : ""}`,
            `CP: ${f.cp.trim()} · ${f.city.trim()}${f.region.trim() ? ` (${f.region.trim()})` : ""}`,
            `País: ${f.country.trim()}`,
          ].join("\n"),
      ...(f.notes.trim() ? ["", `Notas: ${f.notes.trim()}`] : []),
    ].join("\n");

  // Tras enviar el formulario se avisa y se redirige a WhatsApp.
  useEffect(() => {
    if (!link) return;
    const t = setTimeout(() => window.location.assign(link), 2500);
    return () => clearTimeout(t);
  }, [link]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!valid) return;
    setLink(whatsappLink(buildSummary()));
  };

  return (
    <div className="overlay" onClick={onClose}>
      <div className="modal checkout" role="dialog" aria-modal="true" aria-label="Finalizar pedido" onClick={(e) => e.stopPropagation()}>
        <button className="close" onClick={onClose} aria-label="Cerrar">✕</button>
        {link ? (
          <div className="done">
            <p className="spark">✳</p>
            <h2>¡Gracias por tu pedido!</h2>
            <p>
              Te estamos <strong>redirigiendo a WhatsApp</strong> para cerrar el pedido con nosotras. El mensaje ya va
              escrito: solo tienes que enviarlo.
            </p>
            <a className="btn-primary" href={link} style={{ textAlign: "center" }}>Abrir WhatsApp ahora</a>
            <button className="btn-ghost" onClick={onDone}>Vaciar bolsa y cerrar</button>
          </div>
        ) : (
          <form onSubmit={submit} className="checkout-form">
            <p className="eyebrow">ÚLTIMO PASO</p>
            <h2>Finalizar pedido</h2>
            <ul className="mini">
              {lines.map((l) => {
                const p = byId(l.id)!;
                return (
                  <li key={l.id}>
                    <span>{l.qty} × {p.name}</span>
                    <span>{formatPrice(priceOf(p.id) * l.qty)}</span>
                  </li>
                );
              })}
              <li className="mini-total"><span>Total (envío: {shipLabel})</span><span>{formatPrice(finalTotal)}</span></li>
            </ul>

            <div className="row2">
              <label>Nombre<input value={f.nombre} onChange={set("nombre")} required autoComplete="given-name" /></label>
              <label>Apellido<input value={f.apellido} onChange={set("apellido")} required autoComplete="family-name" /></label>
            </div>
            {wholesale && (
              <div className="row2">
                <label>Empresa / tienda<input value={f.empresa} onChange={set("empresa")} required autoComplete="organization" /></label>
                <label>NIF / CIF<input value={f.nif} onChange={set("nif")} required /></label>
              </div>
            )}
            <label>Email o teléfono<input value={f.contacto} onChange={set("contacto")} required autoComplete="email" /></label>

            <fieldset className="delivery">
              <legend>¿Cómo lo quieres recibir?</legend>
              <label className={delivery === "envio" ? "opt on" : "opt"}>
                <input type="radio" name="delivery" checked={delivery === "envio"} onChange={() => setDelivery("envio")} />
                <span><strong>Envío a domicilio</strong></span>
              </label>
              <label className={delivery === "retiro" ? "opt on" : "opt"}>
                <input type="radio" name="delivery" checked={delivery === "retiro"} onChange={() => setDelivery("retiro")} />
                <span><strong>Retiro en tienda</strong><small>Te confirmamos dirección y horario por WhatsApp</small></span>
              </label>
            </fieldset>

            {delivery === "envio" && (
              <>
                <label>Calle y número<input value={f.street} onChange={set("street")} required autoComplete="address-line1" /></label>
                <label>Piso, puerta, escalera (opcional)<input value={f.extra} onChange={set("extra")} autoComplete="address-line2" /></label>
                <div className="row2">
                  <label>Código postal<input value={f.cp} onChange={set("cp")} required autoComplete="postal-code" inputMode="text" /></label>
                  <label>Ciudad<input value={f.city} onChange={set("city")} required autoComplete="address-level2" /></label>
                </div>
                <div className="row2">
                  <label>Provincia / estado<input value={f.region} onChange={set("region")} autoComplete="address-level1" /></label>
                  <label>País<input value={f.country} onChange={set("country")} required autoComplete="country-name" /></label>
                </div>
              </>
            )}

            <label>Notas (opcional)<textarea rows={2} value={f.notes} onChange={set("notes")} /></label>

            <button className="btn-primary" type="submit" disabled={!valid}>Hacer pedido y continuar por WhatsApp</button>
            <p className="fine">Al enviar te redirigimos a WhatsApp para cerrar el pedido. No se cobra nada ahora.</p>
          </form>
        )}
      </div>
    </div>
  );
}
