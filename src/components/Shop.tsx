"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import AutoRefresh from "./AutoRefresh";
import LangSwitch from "./LangSwitch";
import { LOCALE_LABELS, fmt, type Locale } from "@/i18n/config";
import { getDictionary, type Dict } from "@/i18n/dictionaries";
import ProductImage from "./ProductImage";
import {
  FREE_SHIPPING_FROM,
  SHIPPING_COST,
  WHOLESALE_MIN_ORDER,
  WHOLESALE_MIN_UNITS,
  whatsappLink,
  formatPrice as formatPriceIntl,
  type Product,
} from "@/lib/products";

type CartLine = { id: string; qty: number };
type Sort = "destacados" | "precio-asc" | "precio-desc";
const ALL = "__all__"; // valor interno del filtro "Todo" (no se traduce)

const STORAGE_PREFIX = "la-gruta-cart-v2";
const MAX_QTY = 9;

export default function Shop({
  lang,
  mode = "retail",
  products: all,
  categories: categoryOrder,
}: {
  lang: Locale;
  mode?: "retail" | "wholesale";
  products: Product[];
  categories: string[];
}) {
  const wholesale = mode === "wholesale";
  const d = getDictionary(lang);
  const t = d.shop;
  const base = `/${lang}`;
  const intl = LOCALE_LABELS[lang].intl;
  const formatPrice = useCallback((n: number) => formatPriceIntl(n, intl), [intl]);
  // La tienda mayorista solo muestra productos con precio mayorista.
  const PRODUCTS = useMemo(() => (wholesale ? all.filter((p) => p.wholesalePrice !== null) : all), [all, wholesale]);
  const byId = useCallback((id: string) => PRODUCTS.find((p) => p.id === id), [PRODUCTS]);
  const CATEGORIES = useMemo(
    () => [ALL, ...categoryOrder.filter((c) => PRODUCTS.some((p) => p.category === c))],
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
  const [category, setCategory] = useState<string>(ALL);
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
        (category === ALL || p.category === category) &&
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
    setToast(fmt(t.toastAdded, { name: p.name }));
  }, [wholesale, t]);

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
        <Link className="brand gruta-brand" href={base} aria-label={t.brandAria}>
          <img className="gruta-logo" src="/images/la-gruta-logo.png" alt={d.common.logoAlt} />
        </Link>
        <nav>
          <Link href={`${base}#coleccion`}>{t.navCollections}</Link>
          <Link href={`${base}#historia`}>{t.navAbout}</Link>
          <Link href={`${base}/tienda`} aria-current={!wholesale ? "page" : undefined}>{t.navRetail}</Link>
          <Link href={`${base}/mayorista`} aria-current={wholesale ? "page" : undefined}>{t.navWholesale}</Link>
        </nav>
        <div className="header-tools" aria-label={t.tools}>
          <LangSwitch lang={lang} label={d.common.language} />
          <button className="search-icon" aria-label={t.search} onClick={() => document.getElementById("buscar")?.focus()} />
          <button className="bag-icon" onClick={() => setCartOpen(true)} aria-label={fmt(t.openBag, { n: count })}>
            {count > 0 && <span className="bag-count">{count}</span>}
          </button>
        </div>
      </header>

      <section className="shop-hero">
        <p className="eyebrow">{wholesale ? t.heroEyebrowWholesale : t.heroEyebrowRetail}</p>
        <h1>
          {(() => {
            const [a, b, em] = wholesale ? t.heroWholesale : t.heroRetail;
            return (<>{a}<br />{b}<em>{em}</em></>);
          })()}
        </h1>
        <p>
          {wholesale
            ? fmt(t.heroTextWholesale, { units: WHOLESALE_MIN_UNITS, amount: formatPrice(WHOLESALE_MIN_ORDER) })
            : t.heroTextRetail}
        </p>
      </section>

      <div className="store-switch" role="tablist" aria-label={t.switchLabel}>
        <Link href={`${base}/tienda`} role="tab" aria-selected={!wholesale} className={!wholesale ? "on" : ""}>
          <strong>{t.retailTitle}</strong>
          <span>{t.retailSub}</span>
        </Link>
        <Link href={`${base}/mayorista`} role="tab" aria-selected={wholesale} className={wholesale ? "on" : ""}>
          <strong>{t.wholesaleTitle}</strong>
          <span>{fmt(t.wholesaleSub, { units: WHOLESALE_MIN_UNITS })}</span>
        </Link>
      </div>

      <section className="shop-toolbar" aria-label={t.filters}>
        <div className="chips" role="tablist" aria-label={t.categories}>
          {CATEGORIES.map((c) => (
            <button
              key={c}
              role="tab"
              aria-selected={category === c}
              className={category === c ? "chip on" : "chip"}
              onClick={() => setCategory(c)}
            >
              {c === ALL ? t.all : c}
            </button>
          ))}
        </div>
        <div className="tools">
          <input
            type="search"
            id="buscar"
            placeholder={t.searchPlaceholder}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label={t.searchAria}
          />
          <select value={sort} onChange={(e) => setSort(e.target.value as Sort)} aria-label={t.sortAria}>
            <option value="destacados">{t.sortFeatured}</option>
            <option value="precio-asc">{t.sortPriceAsc}</option>
            <option value="precio-desc">{t.sortPriceDesc}</option>
          </select>
        </div>
      </section>

      <main className="catalog" id="catalogo">
        <p className="result-count" aria-live="polite">
          {visible.length} {visible.length === 1 ? t.productOne : t.productMany}
        </p>
        {visible.length === 0 ? (
          <div className="empty">
            <p>{t.empty}</p>
            <button
              className="btn-ghost"
              onClick={() => {
                setQuery("");
                setCategory(ALL);
              }}
            >
              {t.showAll}
            </button>
          </div>
        ) : (
          <ul className="grid">
            {visible.map((p) => (
              <li key={p.id} className="card">
                <button className="card-media" onClick={() => openQuick(p)} aria-label={fmt(t.view, { name: p.name })}>
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
                  {t.addToBag}
                </button>
              </li>
            ))}
          </ul>
        )}
      </main>

      <footer className="shop-footer">
        <p>
          {t.footerHelp}{" "}
          <a href={whatsappLink(t.wa.hello)} target="_blank" rel="noreferrer">
            WhatsApp ↗
          </a>
        </p>
        <small>{t.footerSmall}</small>
      </footer>

      {/* Vista de producto (pop-up) */}
      {quick && (
        <div className="overlay" onClick={() => setQuick(null)}>
          <div className="modal product-modal" role="dialog" aria-modal="true" aria-label={quick.name} onClick={(e) => e.stopPropagation()}>
            <button className="close" onClick={() => setQuick(null)} aria-label={t.close}>
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
                {wholesale && <small>{t.perUnit}</small>}
              </p>
              {quick.description && <p className="desc">{quick.description}</p>}
              {quick.details.length > 0 && (
                <>
                  <p className="details-title">{t.details}</p>
                  <ul className="details">
                    {quick.details.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                </>
              )}
              {wholesale && <p className="fine left">{fmt(t.minUnits, { units: WHOLESALE_MIN_UNITS })}</p>}
              {!wholesale && (
                <p className="fine left">
                  {fmt(t.freeShippingFrom, { amount: formatPrice(FREE_SHIPPING_FROM) })}
                </p>
              )}
              <div className="modal-buy">
                <div className="qty">
                  <button
                    onClick={() => setQuickQty((q) => Math.max(wholesale ? WHOLESALE_MIN_UNITS : 1, q - 1))}
                    aria-label={t.removeOne}
                  >
                    −
                  </button>
                  <span aria-live="polite">{quickQty}</span>
                  <button onClick={() => setQuickQty((q) => Math.min(MAX_QTY, q + 1))} aria-label={t.addOne} disabled={quickQty >= MAX_QTY}>
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
                  {fmt(t.addToBagPrice, { price: formatPrice(priceOf(quick.id) * quickQty) })}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Carrito */}
      <div className={cartOpen ? "overlay side show" : "overlay side"} onClick={() => setCartOpen(false)} aria-hidden={!cartOpen}>
        <aside className="drawer" role="dialog" aria-modal="true" aria-label={t.bagAria} onClick={(e) => e.stopPropagation()}>
          <div className="drawer-head">
            <h2>{t.bagTitle} <span>({count})</span></h2>
            <button className="close static" onClick={() => setCartOpen(false)} aria-label={t.closeBag}>
              ✕
            </button>
          </div>

          {lines.length === 0 ? (
            <div className="drawer-empty">
              <p className="spark">✳</p>
              <p>{t.bagEmpty}</p>
              <button className="btn-ghost" onClick={() => setCartOpen(false)}>
                {t.keepLooking}
              </button>
            </div>
          ) : (
            <>
              {!wholesale && (<div className="ship">
                <p>
                  {remaining > 0 ? (
                    <>
                      {t.shipLeftBefore}<strong>{formatPrice(remaining)}</strong>{t.shipLeftAfter}
                    </>
                  ) : (
                    <strong>{t.shipFree}</strong>
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
                        <p className="line-meta">{wholesale && l.qty < WHOLESALE_MIN_UNITS && <strong className="warn">{fmt(t.minUnitsShort, { units: WHOLESALE_MIN_UNITS })}</strong>}</p>
                        <div className="qty">
                          <button onClick={() => changeQty(l.id, -1)} aria-label={t.removeOne}>−</button>
                          <span aria-live="polite">{l.qty}</span>
                          <button onClick={() => changeQty(l.id, 1)} aria-label={t.addOne} disabled={l.qty >= MAX_QTY}>+</button>
                        </div>
                      </div>
                      <div className="line-end">
                        <p className="price">{formatPrice(priceOf(p.id) * l.qty)}</p>
                        <button className="link" onClick={() => remove(l.id)}>{t.remove}</button>
                      </div>
                    </li>
                  );
                })}
              </ul>

              <div className="totals">
                <p><span>{t.subtotal}</span><span>{formatPrice(subtotal)}</span></p>
                <p><span>{t.shipping}</span><span>{wholesale ? t.toBeAgreed : shipping === 0 ? t.free : formatPrice(shipping)}</span></p>
                <p className="grand"><span>{t.total}</span><span>{formatPrice(total)}</span></p>
                {belowOrder && lines.length > 0 && (
                  <p className="warn-box">{fmt(t.minOrder, { min: formatPrice(WHOLESALE_MIN_ORDER), rest: formatPrice(WHOLESALE_MIN_ORDER - subtotal) })}</p>
                )}
                {belowUnits.length > 0 && <p className="warn-box">{fmt(t.minUnitsEach, { units: WHOLESALE_MIN_UNITS })}</p>}
                <button
                  className="btn-primary"
                  disabled={!canCheckout}
                  onClick={() => {
                    setCartOpen(false);
                    setCheckout(true);
                  }}
                >
                  {t.checkoutBtn}
                </button>
              </div>
            </>
          )}
        </aside>
      </div>

      {checkout && (
        <CheckoutModal
          t={t}
          formatPrice={formatPrice}
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
          <button onClick={() => { setToast(null); setCartOpen(true); }}>{t.viewBag}</button>
        </div>
      )}
    </div>
  );
}

function CheckoutModal({
  t,
  formatPrice,
  lines,
  total,
  shipping,
  wholesale,
  priceOf,
  byId,
  onClose,
  onDone,
}: {
  t: Dict["shop"];
  formatPrice: (n: number) => string;
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
    country: t.defaultCountry,
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
    delivery === "retiro" ? t.shipPickup : wholesale ? t.shipTbd : ship === 0 ? t.shipFreeLower : formatPrice(ship);

  const valid =
    f.nombre.trim() &&
    f.apellido.trim() &&
    f.contacto.trim() &&
    (!wholesale || (f.empresa.trim() && f.nif.trim())) &&
    (delivery === "retiro" || (f.street.trim() && f.cp.trim() && f.city.trim() && f.country.trim()));

  const buildSummary = () =>
    [
      wholesale ? t.wa.helloWholesale : t.wa.helloRetail,
      "",
      ...lines.map((l) => {
        const p = byId(l.id)!;
        return `• ${l.qty} × ${p.name} — ${formatPrice(priceOf(p.id) * l.qty)}`;
      }),
      "",
      `${t.wa.subtotal}: ${formatPrice(subtotal)}`,
      `${t.wa.shipping}: ${shipLabel}`,
      `${t.wa.total}: ${formatPrice(finalTotal)}`,
      "",
      `${t.wa.name}: ${f.nombre.trim()} ${f.apellido.trim()}`,
      ...(wholesale ? [`${t.wa.company}: ${f.empresa.trim()}`, `${t.wa.taxId}: ${f.nif.trim()}`] : []),
      `${t.wa.contact}: ${f.contacto.trim()}`,
      "",
      delivery === "retiro"
        ? t.wa.pickup
        : [
            t.wa.homeDelivery,
            `${t.wa.address}: ${f.street.trim()}${f.extra.trim() ? `, ${f.extra.trim()}` : ""}`,
            `${t.wa.postcode}: ${f.cp.trim()} · ${f.city.trim()}${f.region.trim() ? ` (${f.region.trim()})` : ""}`,
            `${t.wa.country}: ${f.country.trim()}`,
          ].join("\n"),
      ...(f.notes.trim() ? ["", `${t.wa.notes}: ${f.notes.trim()}`] : []),
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
      <div className="modal checkout" role="dialog" aria-modal="true" aria-label={t.checkoutAria} onClick={(e) => e.stopPropagation()}>
        <button className="close" onClick={onClose} aria-label={t.close}>✕</button>
        {link ? (
          <div className="done">
            <p className="spark">✳</p>
            <h2>{t.thanks}</h2>
            <p>
              {t.redirectPre}<strong>{t.redirectStrong}</strong>{t.redirectPost}
            </p>
            <a className="btn-primary" href={link} style={{ textAlign: "center" }}>{t.openWhatsapp}</a>
            <button className="btn-ghost" onClick={onDone}>{t.emptyAndClose}</button>
          </div>
        ) : (
          <form onSubmit={submit} className="checkout-form">
            <p className="eyebrow">{t.lastStep}</p>
            <h2>{t.checkoutTitle}</h2>
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
              <li className="mini-total"><span>{fmt(t.totalShipping, { ship: shipLabel })}</span><span>{formatPrice(finalTotal)}</span></li>
            </ul>

            <div className="row2">
              <label>{t.firstName}<input value={f.nombre} onChange={set("nombre")} required autoComplete="given-name" /></label>
              <label>{t.lastName}<input value={f.apellido} onChange={set("apellido")} required autoComplete="family-name" /></label>
            </div>
            {wholesale && (
              <div className="row2">
                <label>{t.company}<input value={f.empresa} onChange={set("empresa")} required autoComplete="organization" /></label>
                <label>{t.taxId}<input value={f.nif} onChange={set("nif")} required /></label>
              </div>
            )}
            <label>{t.contact}<input value={f.contacto} onChange={set("contacto")} required autoComplete="email" /></label>

            <fieldset className="delivery">
              <legend>{t.deliveryLegend}</legend>
              <label className={delivery === "envio" ? "opt on" : "opt"}>
                <input type="radio" name="delivery" checked={delivery === "envio"} onChange={() => setDelivery("envio")} />
                <span><strong>{t.homeDelivery}</strong></span>
              </label>
              <label className={delivery === "retiro" ? "opt on" : "opt"}>
                <input type="radio" name="delivery" checked={delivery === "retiro"} onChange={() => setDelivery("retiro")} />
                <span><strong>{t.pickup}</strong><small>{t.pickupNote}</small></span>
              </label>
            </fieldset>

            {delivery === "envio" && (
              <>
                <label>{t.street}<input value={f.street} onChange={set("street")} required autoComplete="address-line1" /></label>
                <label>{t.extra}<input value={f.extra} onChange={set("extra")} autoComplete="address-line2" /></label>
                <div className="row2">
                  <label>{t.postcode}<input value={f.cp} onChange={set("cp")} required autoComplete="postal-code" inputMode="text" /></label>
                  <label>{t.city}<input value={f.city} onChange={set("city")} required autoComplete="address-level2" /></label>
                </div>
                <div className="row2">
                  <label>{t.region}<input value={f.region} onChange={set("region")} autoComplete="address-level1" /></label>
                  <label>{t.country}<input value={f.country} onChange={set("country")} required autoComplete="country-name" /></label>
                </div>
              </>
            )}

            <label>{t.notes}<textarea rows={2} value={f.notes} onChange={set("notes")} /></label>

            <button className="btn-primary" type="submit" disabled={!valid}>{t.submit}</button>
            <p className="fine">{t.fine}</p>
          </form>
        )}
      </div>
    </div>
  );
}
