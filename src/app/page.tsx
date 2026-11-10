const looks = [
  { name: "Color sin reglas", note: "Piezas para salir de lo de siempre", image: "https://d2ol7oe51mr4n9.cloudfront.net/user_3LmqSmQCW0ChedDbsb7zoEZlAOF/eaa82b1b-8281-4ef2-98fa-85bcf56a0bbe.webp", tone: "look-pink" },
  { name: "Texturas que hablan", note: "Detalles que hacen la diferencia", image: "https://d2ol7oe51mr4n9.cloudfront.net/user_3LmqSmQCW0ChedDbsb7zoEZlAOF/31a0b136-f1bc-4b2b-8913-015cd818d4fa.webp", tone: "look-yellow" },
  { name: "Otra forma de mirar", note: "Moda, arte y personalidad", image: "https://d2ol7oe51mr4n9.cloudfront.net/user_3LmqSmQCW0ChedDbsb7zoEZlAOF/3291fd62-7b21-4762-aa18-bb1c5660248f.webp", tone: "look-blue" },
  { name: "Detalles inesperados", note: "Una selección para expresarte", image: "https://d2ol7oe51mr4n9.cloudfront.net/user_3LmqSmQCW0ChedDbsb7zoEZlAOF/94746fb6-1ae2-44b7-8829-ecd6aa0f3990.webp", tone: "look-orange" },
];

export default function Home() {
  return <main>
    <header className="site-header">
      <a className="brand gruta-brand" href="#top"><span>la</span><strong>Gruta</strong><small>MODA &amp; ARTE</small></a>
      <nav><a href="#coleccion">Tienda</a><a href="#coleccion">Colecciones</a><a href="#historia">Arte</a><a href="#historia">Sobre La Gruta</a></nav>
      <div className="header-tools" aria-label="Accesos"><a href="#coleccion" aria-label="Buscar" className="search-icon"></a><a href="#coleccion" aria-label="Bolsa" className="bag-icon"></a></div>
    </header>

    <section className="hero hero-reference" id="top">
      <div className="hero-sunburst" aria-hidden="true" />
      <div className="hero-copy">
        <p className="eyebrow hero-kicker">MODA &amp; ARTE</p>
        <h1>Ropa con<br/><span>identidad</span></h1>
        <p className="intro">Prendas únicas, arte textil y piezas especiales que celebran el color, la creatividad y la expresión personal.</p>
        <a className="button hero-button" href="#coleccion">Ver tienda <span>→</span></a>
      </div>
      <div className="hero-art">
        <div className="hero-photo"><img src="https://d2ol7oe51mr4n9.cloudfront.net/user_3LmqSmQCW0ChedDbsb7zoEZlAOF/c2d2e046-21aa-4aa1-94e1-ea4ba23b7bc9.webp" alt="Look de moda colorido de La Gruta"/></div>
      </div>
    </section>

    <section className="manifesto">
      <p className="eyebrow">NO ES SOLO ROPA</p>
      <h2>Un poco de <em>arte.</em><br/>Un poco de caos.<br/><span>Mucho de personalidad.</span></h2>
      <div className="manifesto-doodle">✳</div><span className="manifesto-note">BE YOUR<br/>OWN MUSE</span>
    </section>

    <section className="collection section" id="coleccion">
      <div className="section-head"><div><p className="eyebrow">UNA SELECCIÓN CON CARÁCTER</p><h2>Lo nuevo en<br/><em>La Gruta.</em></h2></div><a href="https://www.instagram.com/lagrutabcn/" target="_blank" rel="noreferrer">Ver novedades en Instagram ↗</a></div>
      <div className="looks">{looks.map((look,i)=><article className={`look ${look.tone}`} key={look.name}><div className="look-image"><img src={look.image} alt={look.name}/><small>0{i+1}</small><span className="look-spark">✳</span></div><h3>{look.name}</h3><p>{look.note}</p></article>)}</div>
      <div className="collection-ribbon"><span>COLOR · ARTE · MODA · ACTITUD ·</span><span>COLOR · ARTE · MODA · ACTITUD ·</span></div>
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
