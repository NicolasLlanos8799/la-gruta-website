const looks = [
  { name: "Color sin reglas", note: "Piezas para salir de lo de siempre", image: "https://d2ol7oe51mr4n9.cloudfront.net/user_3LmqSmQCW0ChedDbsb7zoEZlAOF/eaa82b1b-8281-4ef2-98fa-85bcf56a0bbe.webp" },
  { name: "Texturas que hablan", note: "Detalles que hacen la diferencia", image: "https://d2ol7oe51mr4n9.cloudfront.net/user_3LmqSmQCW0ChedDbsb7zoEZlAOF/31a0b136-f1bc-4b2b-8913-015cd818d4fa.webp" },
  { name: "Otra forma de mirar", note: "Moda, arte y personalidad", image: "https://d2ol7oe51mr4n9.cloudfront.net/user_3LmqSmQCW0ChedDbsb7zoEZlAOF/3291fd62-7b21-4762-aa18-bb1c5660248f.webp" },
  { name: "Detalles inesperados", note: "Una selección para expresarte", image: "https://d2ol7oe51mr4n9.cloudfront.net/user_3LmqSmQCW0ChedDbsb7zoEZlAOF/94746fb6-1ae2-44b7-8829-ecd6aa0f3990.webp" },
];

export default function Home() {
  return <main>
    <header className="site-header">
      <a className="brand" href="#top">la gruta<span>✳</span></a>
      <nav><a href="#coleccion">Colección</a><a href="#historia">La Gruta</a><a href="#visitanos">Visítanos</a></nav>
      <a className="social-link" href="https://www.instagram.com/lagrutabcn/" target="_blank" rel="noreferrer">Instagram ↗</a>
    </header>
    <section className="hero" id="top">
      <div className="hero-copy"><p className="eyebrow">BARCELONA · MODA Y ARTE</p><h1>Ropa diferente.<br/><em>Otra manera</em><br/>de mirar.</h1><p className="intro">Una tienda para quienes encuentran belleza en lo inesperado. Moda, color y piezas con personalidad.</p><a className="button dark" href="#coleccion">Descubrir La Gruta ↗</a></div>
      <div className="hero-art"><div className="burst"/><div className="hero-photo"><img src="https://d2ol7oe51mr4n9.cloudfront.net/user_3LmqSmQCW0ChedDbsb7zoEZlAOF/c2d2e046-21aa-4aa1-94e1-ea4ba23b7bc9.webp" alt="Look editorial de La Gruta"/></div><span className="stamp">MODA<br/>& ARTE<br/>BARCELONA</span></div>
    </section>
    <section className="manifesto"><p className="eyebrow">NO ES SOLO ROPA</p><h2>Un poco de <em>arte.</em> Un poco de caos. Y mucho de <span>personalidad.</span></h2><b>✳</b></section>
    <section className="collection section" id="coleccion"><div className="section-head"><div><p className="eyebrow">UNA SELECCIÓN CON CARÁCTER</p><h2>Lo nuevo en<br/><em>La Gruta.</em></h2></div><a href="https://www.instagram.com/lagrutabcn/" target="_blank" rel="noreferrer">Ver novedades en Instagram ↗</a></div><div className="looks">{looks.map((look,i)=><article className="look" key={look.name}><div className="look-image"><img src={look.image} alt={look.name}/><small>0{i+1}</small></div><h3>{look.name}</h3><p>{look.note}</p></article>)}</div></section>
    <section className="story" id="historia"><div className="story-image"><img src="https://d2ol7oe51mr4n9.cloudfront.net/user_3LmqSmQCW0ChedDbsb7zoEZlAOF/d709cd3e-ac5e-4259-bfa8-d4515a716ee3.webp" alt="Interior de la boutique La Gruta"/></div><div className="story-copy"><p className="eyebrow">UN LUGAR DIFERENTE</p><h2>Más que<br/>una <em>tienda.</em></h2><p>La Gruta es un espacio donde la moda se encuentra con el arte. Una selección diferente, hecha para descubrir, combinar y expresar quién eres.</p><a href="https://www.instagram.com/lagrutabcn/" target="_blank" rel="noreferrer">Conócenos en Instagram ↗</a></div></section>
    <section className="visit" id="visitanos"><div><p className="eyebrow">TE ESPERAMOS</p><h2>Ven a<br/><em>visitarnos.</em></h2><p>Hay cosas que se descubren mejor en persona.</p></div><div className="visit-info"><strong>LG.</strong><p>BARCELONA, ESPAÑA</p><p>Dirección y horarios por confirmar</p><a className="button light" href="https://www.instagram.com/lagrutabcn/" target="_blank" rel="noreferrer">Escríbenos por Instagram ↗</a></div></section>
    <footer><a className="brand" href="#top">la gruta<span>✳</span></a><p>MODA Y ARTE · BARCELONA<br/><a href="https://www.instagram.com/lagrutabcn/" target="_blank" rel="noreferrer">@lagrutabcn ↗</a></p><small>© LA GRUTA 2026</small></footer>
  </main>;
}
