import Link from "next/link";
import HeroScroll from "@/components/HeroScroll";

export default function Home() {
  return <main>
    <header className="site-header">
      <a className="brand gruta-brand" href="#top"><img className="gruta-logo" src="/images/la-gruta-logo.png" alt="La Gruta — Moda &amp; Arte" /></a>
      <nav><Link href="/tienda">Tienda minorista</Link><Link href="/mayorista">Tienda mayorista</Link><a href="#coleccion">Colecciones</a><a href="#historia">Sobre La Gruta</a></nav>
      <div className="header-tools" aria-label="Accesos"><Link href="/tienda" aria-label="Buscar" className="search-icon"></Link><Link href="/tienda" aria-label="Bolsa" className="bag-icon"></Link></div>
    </header>

    <section className="hero hero-reference" id="top">
      <HeroScroll />
      <div className="hero-sunburst" aria-hidden="true" />
      <picture>
        <source media="(max-width: 650px)" srcSet="/images/la-gruta-hero-mobile-model.png" />
        <img className="hero-model" src="/hero-model.png" alt="Modelo sentada con ropa estampada" />
      </picture>
      <div className="hero-copy">
        <p className="eyebrow hero-kicker">MODA &amp; ARTE</p>
        <h1>Ropa con<br/><span>identidad</span></h1>
        <p className="intro">Prendas únicas, arte textil y piezas especiales que celebran el color, la creatividad y la expresión personal.</p>
        <Link className="button hero-button" href="/tienda">Ver tienda</Link><Link className="hero-wholesale" href="/mayorista">Tienda mayorista →</Link>
      </div>
    </section>

    <section className="collection-editorial" id="coleccion" aria-labelledby="collection-title">
      <div className="collection-editorial-copy">
        <p className="eyebrow">DESCUBRE LA COLECCIÓN</p>
        <h2 id="collection-title">Explora<br/>nuestra tienda<br/><em>online.</em></h2>
        <p className="collection-editorial-description">Ropa, accesorios y piezas únicas con la esencia de La Gruta.</p>
        <Link className="collection-editorial-button" href="/tienda">Ver tienda <span aria-hidden="true">→</span></Link>
      </div>
      <div className="collection-editorial-art">
        <img src="/images/la-gruta-collection-editorial.png" alt="Jerséis coloridos de La Gruta en perchas de madera" />
        <svg width="0" height="0" aria-hidden="true" focusable="false" style={{position:"absolute"}}><defs><clipPath id="collection-blob" clipPathUnits="objectBoundingBox"><path d="M0.2,0.14 C0.249,0.088 0.317,0.083 0.39,0.06 C0.463,0.037 0.563,0.005 0.64,0 C0.717,-0.005 0.795,0.010 0.85,0.03 C0.905,0.050 0.945,0.067 0.97,0.12 C0.995,0.173 0.995,0.250 1,0.35 C1.005,0.450 1.018,0.628 1,0.72 C0.982,0.812 0.936,0.854 0.89,0.9 C0.844,0.946 0.794,0.988 0.725,0.995 C0.656,1.002 0.544,0.942 0.475,0.94 C0.406,0.938 0.366,0.982 0.31,0.98 C0.254,0.978 0.182,0.957 0.14,0.93 C0.098,0.903 0.083,0.867 0.06,0.82 C0.037,0.773 0.006,0.702 0,0.65 C-0.006,0.598 0.009,0.557 0.025,0.51 C0.041,0.463 0.067,0.432 0.096,0.37 C0.125,0.308 0.151,0.192 0.2,0.14 Z"/></clipPath></defs></svg>
      </div>
    </section>

    <section className="story" id="historia">
      <div className="story-image"><img src="https://d2ol7oe51mr4n9.cloudfront.net/user_3LmqSmQCW0ChedDbsb7zoEZlAOF/d709cd3e-ac5e-4259-bfa8-d4515a716ee3.webp" alt="Interior de la boutique La Gruta"/><span className="story-image-label">ENTRA, MIRA,<br/>DESCUBRE.</span></div>
      <div className="story-copy"><p className="eyebrow">UN LUGAR DIFERENTE</p><h2>Más que<br/>una <em>tienda.</em></h2><p>La Gruta es un espacio donde la moda se encuentra con el arte. Una selección diferente, hecha para descubrir, combinar y expresar quién eres.</p><a href="https://www.instagram.com/lagrutabcn/" target="_blank" rel="noreferrer">Conócenos en Instagram ↗</a><span className="story-flower">✿</span></div>
    </section>

    <section className="visit" id="visitanos">
      <div className="visit-shape">HOLA<br/>BARCELONA!</div>
      <div className="visit-main"><p className="eyebrow">LAS COSAS BONITAS PASAN EN PERSONA</p><h2>Ven a<br/><em>perderte.</em></h2><p>Hay cosas que se descubren mejor sin prisa, tocando, probando y mirando de cerca.</p></div>
      <div className="visit-info"><strong>LG<span>✳</span></strong><p>BARCELONA, ESPAÑA</p><p>Dirección y horarios por confirmar</p><a className="button light" href="https://www.instagram.com/lagrutabcn/" target="_blank" rel="noreferrer">Ven a saludarnos ↗</a></div>
    </section>

    <footer><div><a className="brand" href="#top">la gruta<span>✳</span></a><p>MODA Y ARTE · BARCELONA</p></div><a className="footer-social" href="https://www.instagram.com/lagrutabcn/" target="_blank" rel="noreferrer">@lagrutabcn ↗</a><small>© LA GRUTA 2026</small></footer>
  </main>;
}
