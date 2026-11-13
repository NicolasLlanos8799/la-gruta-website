import type { Locale } from "./config";

export type Dict = {
  meta: {
    homeTitle: string;
    homeDescription: string;
    shopTitle: string;
    shopDescription: string;
    wholesaleTitle: string;
    wholesaleDescription: string;
  };
  common: { logoAlt: string; language: string; instagramAria: string };
  home: {
    navRetail: string;
    navWholesale: string;
    navCollections: string;
    navAbout: string;
    tools: string;
    search: string;
    bag: string;
    heroKicker: string;
    heroLine1: string;
    heroLine2: string;
    heroAlt: string;
    intro: string;
    viewShop: string;
    wholesaleLink: string;
    collectionEyebrow: string;
    collectionLine1: string;
    collectionLine2: string;
    collectionEm: string;
    collectionDescription: string;
    collectionAlt: string;
    storyAlt: string;
    storyLabel: [string, string];
    storyEyebrow: string;
    storyTitle1: string;
    storyTitle2: string;
    storyEm: string;
    storyText: string;
    seo: { h1Extra: string; blocks: { h2: string; intro?: string; items?: { h3: string; p: string }[] }[] };
    storyLink: string;
    trade: { eyebrow: string; title1: string; titleEm: string; retailTitle: string; retailText: string; wholesaleTitle: string; wholesaleText: string; button: string };
    visitShape: [string, string];
    visitEyebrow: string;
    visitTitle1: string;
    visitEm: string;
    visitText: string;
    visitCity: string;
    visitAddress: string;
    visitButton: string;
    footerTagline: string;
    locEyebrow: string;
    locTitle1: string;
    locTitle2: string;
    locEm: string;
    locLead1: string;
    locLead2: string;
    locLabel: string;
    locAddress1: string;
    locAddress2: string;
    locButton: string;
    footerNavAria: string;
    footerShop: string;
    footerAbout: string;
    footerContact: string;
  };
  shop: {
    brandAria: string;
    navCollections: string;
    navAbout: string;
    navRetail: string;
    navWholesale: string;
    tools: string;
    search: string;
    openBag: string; // {n}
    heroEyebrowRetail: string;
    heroEyebrowWholesale: string;
    heroRetail: [string, string, string];
    heroWholesale: [string, string, string];
    heroTextRetail: string;
    heroTextWholesale: string; // {units} {amount}
    switchLabel: string;
    retailTitle: string;
    retailSub: string;
    wholesaleTitle: string;
    wholesaleSub: string; // {units}
    filters: string;
    categories: string;
    all: string;
    searchPlaceholder: string;
    searchAria: string;
    sortAria: string;
    sortFeatured: string;
    sortPriceAsc: string;
    sortPriceDesc: string;
    productOne: string;
    productMany: string;
    empty: string;
    showAll: string;
    view: string; // {name}
    addToBag: string;
    footerHelp: string;
    footerSmall: string;
    close: string;
    details: string;
    perUnit: string;
    minUnits: string; // {units}
    freeShippingFrom: string; // {amount}
    removeOne: string;
    addOne: string;
    addToBagPrice: string; // {price}
    bagAria: string;
    bagTitle: string;
    closeBag: string;
    bagEmpty: string;
    keepLooking: string;
    shipLeftBefore: string;
    shipLeftAfter: string;
    shipFree: string;
    minUnitsShort: string; // {units}
    subtotal: string;
    shipping: string;
    toBeAgreed: string;
    wholesaleBandTitle: string;
    wholesaleBandText: string; // {n}
    wholesaleAddMore: string; // {n}
    wholesaleOn: string;
    free: string;
    total: string;
    minOrder: string; // {min} {rest}
    minUnitsEach: string; // {units}
    checkoutBtn: string;
    remove: string;
    toastAdded: string; // {name}
    viewBag: string;
    checkoutAria: string;
    thanks: string;
    redirectPre: string;
    redirectStrong: string;
    redirectPost: string;
    openWhatsapp: string;
    emptyAndClose: string;
    lastStep: string;
    checkoutTitle: string;
    totalShipping: string; // {ship}
    firstName: string;
    lastName: string;
    company: string;
    taxId: string;
    contact: string;
    deliveryLegend: string;
    homeDelivery: string;
    pickup: string;
    pickupNote: string;
    street: string;
    extra: string;
    postcode: string;
    city: string;
    region: string;
    country: string;
    defaultCountry: string;
    notes: string;
    submit: string;
    fine: string;
    shipPickup: string;
    shipTbd: string;
    shipFreeLower: string;
    wa: {
      hello: string;
      helloRetail: string; // order intro (retail)
      helloWholesale: string;
      subtotal: string;
      shipping: string;
      total: string;
      name: string;
      company: string;
      taxId: string;
      contact: string;
      pickup: string;
      homeDelivery: string;
      address: string;
      postcode: string;
      country: string;
      notes: string;
    };
  };
};

const es: Dict = {
  meta: {
    homeTitle: "La Gruta | Moda alternativa y arte en Gràcia, Barcelona",
    homeDescription: "Tienda independiente en Gràcia: ropa boho artesanal, kimonos, chaquetas kantha, máscaras y vajilla pintada a mano. Slow fashion en Carrer de Verdi 8.",
    shopTitle: "Tienda — La Gruta",
    shopDescription: "Catálogo online de La Gruta: ropa, accesorios y piezas únicas con color. Moda y arte desde Barcelona.",
    wholesaleTitle: "Tienda mayorista — La Gruta",
    wholesaleDescription: "Tienda mayorista de La Gruta para tiendas: catálogo, mínimos de compra y pedidos por WhatsApp.",
  },
  common: { logoAlt: "La Gruta — Moda & Arte", language: "Idioma", instagramAria: "Instagram de La Gruta" },
  home: {
    navRetail: "Tienda minorista",
    navWholesale: "Tienda mayorista",
    navCollections: "Colecciones",
    navAbout: "Nosotros",
    tools: "Accesos",
    search: "Buscar",
    bag: "Cesta",
    heroKicker: "MODA & ARTE",
    heroLine1: "Ropa con",
    heroLine2: "identidad",
    heroAlt: "Modelo sentada con ropa estampada",
    intro: "Prendas únicas, arte textil y piezas especiales que celebran el color, la creatividad y la expresión personal.",
    viewShop: "Ver tienda",
    wholesaleLink: "Tienda mayorista →",
    collectionEyebrow: "DESCUBRE LA COLECCIÓN",
    collectionLine1: "Explora",
    collectionLine2: "nuestra tienda",
    collectionEm: "online.",
    collectionDescription: "Ropa, accesorios y piezas únicas con la esencia de La Gruta.",
    collectionAlt: "Jerséis coloridos de La Gruta en perchas de madera",
    storyAlt: "Escaparate de la tienda La Gruta en Carrer de Verdi, Gràcia, con chaqueta kantha y ropa de colores",
    storyLabel: ["ENTRA, MIRA,", "DESCUBRE."],
    storyEyebrow: "UN LUGAR DIFERENTE",
    storyTitle1: "Más que",
    storyTitle2: "una",
    storyEm: "tienda.",
    storyText: "La Gruta es un espacio donde la moda se encuentra con el arte. Una selección diferente, hecha para descubrir, combinar y expresar quién eres.",
    seo: {
      h1Extra: " — moda alternativa y arte en Gràcia, Barcelona",
      blocks: [
        { h2: "Moda con alma, lejos del fast fashion", intro: "Trabajamos lo que llamamos confección diversa: diseño propio que se encuentra con técnicas textiles artesanales y la inspiración de muchas culturas. Priorizamos los materiales naturales porque la ropa bonita también tiene que ser cómoda.", items: [
          { h3: "Diseño propio y técnicas artesanales", p: "Del acolchado kantha a los tejidos ikat, cada prenda mezcla tradición y un punto muy nuestro." },
          { h3: "Materiales naturales: seda, algodón y viscosa", p: "Faldas, blusas y vestidos pensados para moverse libre y para durar." },
        ] },
        { h2: "Lo que encontrarás en la tienda", items: [
          { h3: "Vestidos y faldas sueltos", p: "Modelos como Sitges, Búzios o Provençe, y faldas de seda, algodón y viscosa." },
          { h3: "Kimonos, chalecos y blusas", p: "Camisas, kimonos, chalecos y pantalones estampados que transforman cualquier look, para quien no quiere pasar desapercibido." },
          { h3: "Chaquetas kantha, ikat y reversibles", p: "Reversibles, de terciopelo ikat o con la técnica kantha: dos looks en una sola pieza, y ninguna igual que la de al lado." },
          { h3: "Máscaras, decoración y vajilla pintada a mano", p: "La Gruta no es solo ropa: también arte artesanal para llevar a casa." },
        ] },
        { h2: "Un espacio para todes", intro: "Nuestra ropa es para mujeres, hombres y quien se sienta cómodo con ella. La Gruta es un espacio inclusivo y seguro para el colectivo LGBTQ+, donde puedes probarte lo que quieras sin etiquetas, con atención personalizada y consejo sincero." },
        { h2: "Compra como prefieras", items: [
          { h3: "Cómo pagar y recoger tu pedido", p: "Puedes pagar con tarjeta o Bizum y recoger tu pieza en la tienda de Carrer de Verdi, 8." },
          { h3: "Envíos a todo el mundo", p: "Escríbenos por Instagram (@lagrutabcn) o por WhatsApp al +34 665 42 09 83 y te lo enviamos donde estés." },
        ] },
      ],
    },
    storyLink: "Conócenos en Instagram",
    trade: { eyebrow: "VENTA POR MAYOR Y MENOR", title1: "Para ti, o para", titleEm: "tu tienda.", retailTitle: "Venta al por menor", retailText: "Ven a la tienda en Barcelona o compra online. Piezas únicas, atención cercana y envíos a todo el mundo.", wholesaleTitle: "Venta al por mayor", wholesaleText: "¿Tienes una tienda o un proyecto? Escríbenos y te preparamos precios y condiciones para pedidos al por mayor.", button: "Escríbenos por WhatsApp ↗" },
    visitShape: ["HOLA", "BARCELONA!"],
    visitEyebrow: "LAS COSAS BONITAS PASAN EN PERSONA",
    visitTitle1: "Ven a",
    visitEm: "perderte.",
    visitText: "Hay cosas que se descubren mejor sin prisa, tocando, probando y mirando de cerca.",
    visitCity: "BARCELONA, ESPAÑA",
    visitAddress: "Dirección y horarios por confirmar",
    visitButton: "Ven a saludarnos ↗",
    footerTagline: "MODA Y ARTE · BARCELONA",
    locEyebrow: "NUESTRO LOCAL EN BARCELONA",
    locTitle1: "Ven a conocernos",
    locTitle2: "a",
    locEm: "La Gruta.",
    locLead1: "Ropa, arte y piezas con historia.",
    locLead2: "Te esperamos en nuestro local en el corazón de Barcelona.",
    locLabel: "Dirección",
    locAddress1: "Carrer de Verdi, 8",
    locAddress2: "08012 Gràcia, Barcelona",
    locButton: "Cómo llegar",
    footerNavAria: "Pie de página",
    footerShop: "Tienda",
    footerAbout: "Nosotros",
    footerContact: "Contacto",
  },
  shop: {
    brandAria: "La Gruta — inicio",
    navCollections: "Colecciones",
    navAbout: "Nosotros",
    navRetail: "Tienda",
    navWholesale: "Mayorista",
    tools: "Accesos",
    search: "Buscar",
    openBag: "Abrir cesta, {n} artículos",
    heroEyebrowRetail: "DESCUBRE LA COLECCIÓN",
    heroEyebrowWholesale: "SOLO PARA TIENDAS · PRECIOS MAYORISTAS",
    heroRetail: ["Nuestra", "tienda ", "online."],
    heroWholesale: ["Tienda", "mayorista", "."],
    heroTextRetail: "Ropa, accesorios y piezas únicas con la esencia de La Gruta.",
    heroTextWholesale: "Mínimo {units} unidades por referencia y {amount} por pedido. Cerramos el pedido por WhatsApp.",
    switchLabel: "Tipo de tienda",
    retailTitle: "Tienda minorista",
    retailSub: "Para ti · compra desde 1 prenda",
    wholesaleTitle: "Tienda mayorista",
    wholesaleSub: "Para tiendas · desde {units} uds por referencia",
    filters: "Filtros",
    categories: "Categorías",
    all: "Todo",
    searchPlaceholder: "Buscar…",
    searchAria: "Buscar productos",
    sortAria: "Ordenar",
    sortFeatured: "Destacados",
    sortPriceAsc: "Precio: menor a mayor",
    sortPriceDesc: "Precio: mayor a menor",
    productOne: "producto",
    productMany: "productos",
    empty: "No encontramos nada con esa búsqueda.",
    showAll: "Ver todo",
    view: "Ver {name}",
    addToBag: "Añadir a la cesta",
    footerHelp: "¿Dudas o quieres una pieza especial? Escríbenos por",
    footerSmall: "© LA GRUTA 2026 · Moda y arte · Barcelona",
    close: "Cerrar",
    details: "Detalles",
    perUnit: " / ud · mayorista",
    minUnits: "Mínimo {units} unidades por referencia.",
    freeShippingFrom: "Envío gratis desde {amount} · Cerramos el pedido por WhatsApp.",
    removeOne: "Quitar una unidad",
    addOne: "Añadir una unidad",
    addToBagPrice: "Añadir a la cesta · {price}",
    bagAria: "Cesta de la compra",
    bagTitle: "Tu cesta",
    closeBag: "Cerrar cesta",
    bagEmpty: "Tu cesta está vacía.",
    keepLooking: "Seguir mirando",
    shipLeftBefore: "Te faltan ",
    shipLeftAfter: " para el envío gratis",
    shipFree: "¡Tienes envío gratis! ✳",
    minUnitsShort: "Mínimo {units} uds",
    subtotal: "Subtotal",
    shipping: "Envío",
    toBeAgreed: "A convenir",
    wholesaleBandTitle: "Venta mayorista",
    wholesaleBandText: "Precio especial comprando {n} o más prendas. Añádelas a tu bolsa y acordamos el precio por WhatsApp.",
    wholesaleAddMore: "Añade {n} más para activar el precio mayorista",
    wholesaleOn: "¡Venta mayorista activada! El precio se acuerda por WhatsApp.",
    free: "Gratis",
    total: "Total",
    minOrder: "Pedido mínimo {min}: te faltan {rest}.",
    minUnitsEach: "Cada referencia necesita al menos {units} unidades.",
    checkoutBtn: "Finalizar pedido →",
    remove: "Eliminar",
    toastAdded: "{name} añadido a la cesta",
    viewBag: "Ver cesta",
    checkoutAria: "Finalizar pedido",
    thanks: "¡Gracias por tu pedido!",
    redirectPre: "Te estamos ",
    redirectStrong: "redirigiendo a WhatsApp",
    redirectPost: " para cerrar el pedido con nosotras. El mensaje ya va escrito: solo tienes que enviarlo.",
    openWhatsapp: "Abrir WhatsApp ahora",
    emptyAndClose: "Vaciar cesta y cerrar",
    lastStep: "ÚLTIMO PASO",
    checkoutTitle: "Finalizar pedido",
    totalShipping: "Total (envío: {ship})",
    firstName: "Nombre",
    lastName: "Apellidos",
    company: "Empresa / tienda",
    taxId: "NIF / CIF",
    contact: "Email o teléfono",
    deliveryLegend: "¿Cómo lo quieres recibir?",
    homeDelivery: "Envío a domicilio",
    pickup: "Recogida en tienda",
    pickupNote: "Te confirmamos dirección y horario por WhatsApp",
    street: "Calle y número",
    extra: "Piso, puerta, escalera (opcional)",
    postcode: "Código postal",
    city: "Ciudad",
    region: "Provincia",
    country: "País",
    defaultCountry: "España",
    notes: "Notas (opcional)",
    submit: "Hacer pedido y continuar por WhatsApp",
    fine: "Al enviar te redirigimos a WhatsApp para cerrar el pedido. No se cobra nada ahora.",
    shipPickup: "recogida en tienda",
    shipTbd: "a convenir",
    shipFreeLower: "gratis",
    wa: {
      hello: "¡Hola La Gruta!",
      helloRetail: "¡Hola La Gruta! Quiero hacer este pedido:",
      helloWholesale: "¡Hola La Gruta! Quiero hacer este PEDIDO MAYORISTA:",
      subtotal: "Subtotal",
      shipping: "Envío",
      total: "Total",
      name: "Nombre y apellidos",
      company: "Empresa/tienda",
      taxId: "NIF/CIF",
      contact: "Contacto",
      pickup: "Entrega: RECOGIDA EN TIENDA",
      homeDelivery: "Entrega: ENVÍO A DOMICILIO",
      address: "Dirección",
      postcode: "CP",
      country: "País",
      notes: "Notas",
    },
  },
};

const ca: Dict = {
  meta: {
    homeTitle: "La Gruta | Moda alternativa i art a Gràcia, Barcelona",
    homeDescription: "Botiga independent a Gràcia: roba boho artesanal, quimonos, jaquetes kantha, màscares i vaixella pintada a mà. Slow fashion al Carrer de Verdi 8.",
    shopTitle: "Botiga — La Gruta",
    shopDescription: "Catàleg en línia de La Gruta: roba, accessoris i peces úniques amb color. Moda i art des de Barcelona.",
    wholesaleTitle: "Botiga majorista — La Gruta",
    wholesaleDescription: "Botiga majorista de La Gruta per a botigues: catàleg, mínims de compra i comandes per WhatsApp.",
  },
  common: { logoAlt: "La Gruta — Moda i Art", language: "Idioma", instagramAria: "Instagram de La Gruta" },
  home: {
    navRetail: "Botiga al detall",
    navWholesale: "Botiga majorista",
    navCollections: "Col·leccions",
    navAbout: "Nosotros",
    tools: "Accessos",
    search: "Cerca",
    bag: "Cistella",
    heroKicker: "MODA I ART",
    heroLine1: "Roba amb",
    heroLine2: "identitat",
    heroAlt: "Model asseguda amb roba estampada",
    intro: "Peces úniques, art tèxtil i articles especials que celebren el color, la creativitat i l'expressió personal.",
    viewShop: "Veure la botiga",
    wholesaleLink: "Botiga majorista →",
    collectionEyebrow: "DESCOBREIX LA COL·LECCIÓ",
    collectionLine1: "Explora",
    collectionLine2: "la nostra botiga",
    collectionEm: "en línia.",
    collectionDescription: "Roba, accessoris i peces úniques amb l'essència de La Gruta.",
    collectionAlt: "Jerseis de colors de La Gruta en penjadors de fusta",
    storyAlt: "Aparador de la botiga La Gruta al Carrer de Verdi, Gràcia, amb jaqueta kantha i roba de colors",
    storyLabel: ["ENTRA, MIRA,", "DESCOBREIX."],
    storyEyebrow: "UN LLOC DIFERENT",
    storyTitle1: "Més que",
    storyTitle2: "una",
    storyEm: "botiga.",
    storyText: "La Gruta és un espai on la moda es troba amb l'art. Una selecció diferent, feta per descobrir, combinar i expressar qui ets.",
    seo: {
      h1Extra: " — moda alternativa i art a Gràcia, Barcelona",
      blocks: [
        { h2: "Moda amb ànima, lluny del fast fashion", intro: "Treballem el que anomenem confecció diversa: disseny propi que es troba amb tècniques tèxtils artesanals i la inspiració de moltes cultures. Prioritzem els materials naturals perquè la roba bonica també ha de ser còmoda.", items: [
          { h3: "Disseny propi i tècniques artesanals", p: "De l'encoixinat kantha als teixits ikat, cada peça barreja tradició i un punt molt nostre." },
          { h3: "Materials naturals: seda, cotó i viscosa", p: "Faldilles, brusques i vestits pensats per moure's lliure i per durar." },
        ] },
        { h2: "Què trobaràs a la botiga", items: [
          { h3: "Vestits i faldilles amples", p: "Models com Sitges, Búzios o Provençe, i faldilles de seda, cotó i viscosa." },
          { h3: "Quimonos, armilles i brusques", p: "Camises, quimonos, armilles i pantalons estampats que transformen qualsevol look, per a qui no vol passar desapercebut." },
          { h3: "Jaquetes kantha, ikat i reversibles", p: "Reversibles, de vellut ikat o amb la tècnica kantha: dos looks en una sola peça, i cap igual que la del costat." },
          { h3: "Màscares, decoració i vaixella pintada a mà", p: "La Gruta no és només roba: també art artesanal per emportar-te a casa." },
        ] },
        { h2: "Un espai per a tothom", intro: "La nostra roba és per a dones, homes i qui s'hi senti còmode. La Gruta és un espai inclusiu i segur per al col·lectiu LGBTQ+, on pots provar-te el que vulguis sense etiquetes, amb atenció personalitzada i consell sincer." },
        { h2: "Compra com prefereixis", items: [
          { h3: "Com pagar i recollir la teva comanda", p: "Pots pagar amb targeta o Bizum i recollir la peça a la botiga del Carrer de Verdi, 8." },
          { h3: "Enviaments a tot el món", p: "Escriu-nos per Instagram (@lagrutabcn) o per WhatsApp al +34 665 42 09 83 i t'ho enviem allà on siguis." },
        ] },
      ],
    },
    storyLink: "Coneix-nos a Instagram",
    trade: { eyebrow: "VENDA AL MAJOR I AL DETALL", title1: "Per a tu, o per a", titleEm: "la teva botiga.", retailTitle: "Venda al detall", retailText: "Vine a la botiga de Barcelona o compra en línia. Peces úniques, tracte proper i enviaments a tot el món.", wholesaleTitle: "Venda al major", wholesaleText: "Tens una botiga o un projecte? Escriu-nos i et preparem preus i condicions per a comandes al major.", button: "Escriu-nos per WhatsApp ↗" },
    visitShape: ["HOLA", "BARCELONA!"],
    visitEyebrow: "LES COSES BONIQUES PASSEN EN PERSONA",
    visitTitle1: "Vine a",
    visitEm: "perdre't.",
    visitText: "Hi ha coses que es descobreixen millor sense pressa, tocant, provant i mirant-les de prop.",
    visitCity: "BARCELONA, ESPANYA",
    visitAddress: "Adreça i horaris per confirmar",
    visitButton: "Vine a saludar-nos ↗",
    footerTagline: "MODA I ART · BARCELONA",
    locEyebrow: "EL NOSTRE LOCAL A BARCELONA",
    locTitle1: "Vine a conèixer-nos",
    locTitle2: "a",
    locEm: "La Gruta.",
    locLead1: "Roba, art i peces amb història.",
    locLead2: "T'esperem al nostre local al cor de Barcelona.",
    locLabel: "Adreça",
    locAddress1: "Carrer de Verdi, 8",
    locAddress2: "08012 Gràcia, Barcelona",
    locButton: "Com arribar-hi",
    footerNavAria: "Peu de pàgina",
    footerShop: "Botiga",
    footerAbout: "Nosotros",
    footerContact: "Contacte",
  },
  shop: {
    brandAria: "La Gruta — inici",
    navCollections: "Col·leccions",
    navAbout: "Nosotros",
    navRetail: "Botiga",
    navWholesale: "Majorista",
    tools: "Accessos",
    search: "Cerca",
    openBag: "Obrir la cistella, {n} articles",
    heroEyebrowRetail: "DESCOBREIX LA COL·LECCIÓ",
    heroEyebrowWholesale: "NOMÉS PER A BOTIGUES · PREUS MAJORISTES",
    heroRetail: ["La nostra", "botiga ", "en línia."],
    heroWholesale: ["Botiga", "majorista", "."],
    heroTextRetail: "Roba, accessoris i peces úniques amb l'essència de La Gruta.",
    heroTextWholesale: "Mínim {units} unitats per referència i {amount} per comanda. Tanquem la comanda per WhatsApp.",
    switchLabel: "Tipus de botiga",
    retailTitle: "Botiga al detall",
    retailSub: "Per a tu · compra des d'1 peça",
    wholesaleTitle: "Botiga majorista",
    wholesaleSub: "Per a botigues · des de {units} u. per referència",
    filters: "Filtres",
    categories: "Categories",
    all: "Tot",
    searchPlaceholder: "Cerca…",
    searchAria: "Cerca productes",
    sortAria: "Ordena",
    sortFeatured: "Destacats",
    sortPriceAsc: "Preu: de menor a major",
    sortPriceDesc: "Preu: de major a menor",
    productOne: "producte",
    productMany: "productes",
    empty: "No hem trobat res amb aquesta cerca.",
    showAll: "Veure-ho tot",
    view: "Veure {name}",
    addToBag: "Afegeix a la cistella",
    footerHelp: "Dubtes o vols una peça especial? Escriu-nos per",
    footerSmall: "© LA GRUTA 2026 · Moda i art · Barcelona",
    close: "Tanca",
    details: "Detalls",
    perUnit: " / u. · majorista",
    minUnits: "Mínim {units} unitats per referència.",
    freeShippingFrom: "Enviament gratuït a partir de {amount} · Tanquem la comanda per WhatsApp.",
    removeOne: "Treu una unitat",
    addOne: "Afegeix una unitat",
    addToBagPrice: "Afegeix a la cistella · {price}",
    bagAria: "Cistella de la compra",
    bagTitle: "La teva cistella",
    closeBag: "Tanca la cistella",
    bagEmpty: "La teva cistella és buida.",
    keepLooking: "Continuar mirant",
    shipLeftBefore: "Et falten ",
    shipLeftAfter: " per a l'enviament gratuït",
    shipFree: "Tens l'enviament gratuït! ✳",
    minUnitsShort: "Mínim {units} u.",
    subtotal: "Subtotal",
    shipping: "Enviament",
    toBeAgreed: "A convenir",
    wholesaleBandTitle: "Venda majorista",
    wholesaleBandText: "Preu especial comprant {n} o més peces. Afegeix-les a la teva bossa i acordem el preu per WhatsApp.",
    wholesaleAddMore: "Afegeix-ne {n} més per activar el preu majorista",
    wholesaleOn: "Venda majorista activada! El preu s'acorda per WhatsApp.",
    free: "Gratuït",
    total: "Total",
    minOrder: "Comanda mínima {min}: et falten {rest}.",
    minUnitsEach: "Cada referència necessita almenys {units} unitats.",
    checkoutBtn: "Finalitza la comanda →",
    remove: "Elimina",
    toastAdded: "{name} afegit a la cistella",
    viewBag: "Veure cistella",
    checkoutAria: "Finalitza la comanda",
    thanks: "Gràcies per la teva comanda!",
    redirectPre: "T'estem ",
    redirectStrong: "redirigint a WhatsApp",
    redirectPost: " per tancar la comanda amb nosaltres. El missatge ja està escrit: només cal que l'enviïs.",
    openWhatsapp: "Obre WhatsApp ara",
    emptyAndClose: "Buida la cistella i tanca",
    lastStep: "ÚLTIM PAS",
    checkoutTitle: "Finalitza la comanda",
    totalShipping: "Total (enviament: {ship})",
    firstName: "Nom",
    lastName: "Cognoms",
    company: "Empresa / botiga",
    taxId: "NIF / CIF",
    contact: "Correu electrònic o telèfon",
    deliveryLegend: "Com ho vols rebre?",
    homeDelivery: "Enviament a domicili",
    pickup: "Recollida a la botiga",
    pickupNote: "Et confirmem l'adreça i l'horari per WhatsApp",
    street: "Carrer i número",
    extra: "Pis, porta, escala (opcional)",
    postcode: "Codi postal",
    city: "Ciutat",
    region: "Província",
    country: "País",
    defaultCountry: "Espanya",
    notes: "Notes (opcional)",
    submit: "Fes la comanda i continua per WhatsApp",
    fine: "En enviar-ho et redirigim a WhatsApp per tancar la comanda. Ara no es cobra res.",
    shipPickup: "recollida a la botiga",
    shipTbd: "a convenir",
    shipFreeLower: "gratuït",
    wa: {
      hello: "Hola La Gruta!",
      helloRetail: "Hola La Gruta! Vull fer aquesta comanda:",
      helloWholesale: "Hola La Gruta! Vull fer aquesta COMANDA MAJORISTA:",
      subtotal: "Subtotal",
      shipping: "Enviament",
      total: "Total",
      name: "Nom i cognoms",
      company: "Empresa/botiga",
      taxId: "NIF/CIF",
      contact: "Contacte",
      pickup: "Lliurament: RECOLLIDA A LA BOTIGA",
      homeDelivery: "Lliurament: ENVIAMENT A DOMICILI",
      address: "Adreça",
      postcode: "CP",
      country: "País",
      notes: "Notes",
    },
  },
};

const en: Dict = {
  meta: {
    homeTitle: "La Gruta | Alternative fashion & art in Gràcia, Barcelona",
    homeDescription: "Independent shop in Gràcia: handcrafted boho clothing, kimonos, kantha jackets, masks and hand-painted tableware. Slow fashion at Carrer de Verdi 8.",
    shopTitle: "Shop — La Gruta",
    shopDescription: "La Gruta's online catalogue: clothing, accessories and unique, colourful pieces. Fashion and art from Barcelona.",
    wholesaleTitle: "Wholesale shop — La Gruta",
    wholesaleDescription: "La Gruta's wholesale shop for retailers: catalogue, minimum order values and orders via WhatsApp.",
  },
  common: { logoAlt: "La Gruta — Fashion & Art", language: "Language", instagramAria: "La Gruta on Instagram" },
  home: {
    navRetail: "Retail shop",
    navWholesale: "Wholesale shop",
    navCollections: "Collections",
    navAbout: "About us",
    tools: "Quick links",
    search: "Search",
    bag: "Basket",
    heroKicker: "FASHION & ART",
    heroLine1: "Clothing with",
    heroLine2: "identity",
    heroAlt: "Seated model wearing printed clothes",
    intro: "Unique garments, textile art and special pieces that celebrate colour, creativity and personal expression.",
    viewShop: "Shop now",
    wholesaleLink: "Wholesale shop →",
    collectionEyebrow: "DISCOVER THE COLLECTION",
    collectionLine1: "Explore",
    collectionLine2: "our online",
    collectionEm: "shop.",
    collectionDescription: "Clothing, accessories and unique pieces with the essence of La Gruta.",
    collectionAlt: "Colourful La Gruta jumpers on wooden hangers",
    storyAlt: "La Gruta shop window on Carrer de Verdi, Gràcia, with a kantha jacket and colourful clothing",
    storyLabel: ["STEP IN, LOOK,", "DISCOVER."],
    storyEyebrow: "A DIFFERENT PLACE",
    storyTitle1: "More than",
    storyTitle2: "a",
    storyEm: "shop.",
    storyText: "La Gruta is a space where fashion meets art. A different selection, made for discovering, mixing and expressing who you are.",
    seo: {
      h1Extra: " — alternative fashion and art in Gràcia, Barcelona",
      blocks: [
        { h2: "Fashion with soul, far from fast fashion", intro: "We work in what we call diverse tailoring: our own designs meeting artisan textile techniques and inspiration from many cultures. We favour natural materials, because beautiful clothes should be comfortable too.", items: [
          { h3: "Our own designs and artisan techniques", p: "From kantha quilting to ikat weaves, every piece blends tradition with a touch that is all ours." },
          { h3: "Natural materials: silk, cotton and viscose", p: "Skirts, blouses and dresses made to move freely and to last." },
        ] },
        { h2: "What you'll find in the shop", items: [
          { h3: "Loose dresses and skirts", p: "Styles like Sitges, Búzios or Provençe, plus silk, cotton and viscose skirts." },
          { h3: "Kimonos, waistcoats and blouses", p: "Shirts, kimonos, waistcoats and printed trousers that transform any look, for anyone who doesn't want to blend in." },
          { h3: "Kantha, ikat and reversible jackets", p: "Reversible, ikat velvet or kantha-quilted: two looks in one piece, and no two alike." },
          { h3: "Masks, decor and hand-painted tableware", p: "La Gruta isn't just clothes: it's also handmade art to take home." },
        ] },
        { h2: "A space for everyone", intro: "Our clothes are for women, men and anyone who feels good in them. La Gruta is an inclusive, safe space for the LGBTQ+ community, where you can try on whatever you like, free of labels, with personal attention and honest advice." },
        { h2: "Shop the way you prefer", items: [
          { h3: "How to pay and collect your order", p: "Pay by card or Bizum and collect your piece at the shop on Carrer de Verdi, 8." },
          { h3: "Worldwide shipping", p: "Message us on Instagram (@lagrutabcn) or WhatsApp at +34 665 42 09 83 and we'll ship wherever you are." },
        ] },
      ],
    },
    storyLink: "Find us on Instagram",
    trade: { eyebrow: "WHOLESALE & RETAIL", title1: "For you, or for", titleEm: "your store.", retailTitle: "Retail", retailText: "Visit the shop in Barcelona or buy online. One-of-a-kind pieces, friendly service and worldwide shipping.", wholesaleTitle: "Wholesale", wholesaleText: "Own a store or a project? Message us and we will send you prices and terms for wholesale orders.", button: "Message us on WhatsApp ↗" },
    visitShape: ["HELLO", "BARCELONA!"],
    visitEyebrow: "BEAUTIFUL THINGS HAPPEN IN PERSON",
    visitTitle1: "Come and",
    visitEm: "get lost.",
    visitText: "Some things are best discovered without rushing: touching, trying on and looking up close.",
    visitCity: "BARCELONA, SPAIN",
    visitAddress: "Address and opening hours to be confirmed",
    visitButton: "Come and say hello ↗",
    footerTagline: "FASHION & ART · BARCELONA",
    locEyebrow: "OUR SHOP IN BARCELONA",
    locTitle1: "Come and meet us",
    locTitle2: "at",
    locEm: "La Gruta.",
    locLead1: "Clothes, art and pieces with a story.",
    locLead2: "We're waiting for you at our shop in the heart of Barcelona.",
    locLabel: "Address",
    locAddress1: "Carrer de Verdi, 8",
    locAddress2: "08012 Gràcia, Barcelona",
    locButton: "Get directions",
    footerNavAria: "Footer",
    footerShop: "Shop",
    footerAbout: "About us",
    footerContact: "Contact",
  },
  shop: {
    brandAria: "La Gruta — home",
    navCollections: "Collections",
    navAbout: "About us",
    navRetail: "Shop",
    navWholesale: "Wholesale",
    tools: "Quick links",
    search: "Search",
    openBag: "Open basket, {n} items",
    heroEyebrowRetail: "DISCOVER THE COLLECTION",
    heroEyebrowWholesale: "FOR SHOPS ONLY · WHOLESALE PRICES",
    heroRetail: ["Our", "online ", "shop."],
    heroWholesale: ["Wholesale", "shop", "."],
    heroTextRetail: "Clothing, accessories and unique pieces with the essence of La Gruta.",
    heroTextWholesale: "Minimum {units} units per item and {amount} per order. We complete your order via WhatsApp.",
    switchLabel: "Shop type",
    retailTitle: "Retail shop",
    retailSub: "For you · buy from 1 piece",
    wholesaleTitle: "Wholesale shop",
    wholesaleSub: "For shops · from {units} units per item",
    filters: "Filters",
    categories: "Categories",
    all: "All",
    searchPlaceholder: "Search…",
    searchAria: "Search products",
    sortAria: "Sort by",
    sortFeatured: "Featured",
    sortPriceAsc: "Price: low to high",
    sortPriceDesc: "Price: high to low",
    productOne: "product",
    productMany: "products",
    empty: "We couldn't find anything for that search.",
    showAll: "Show all",
    view: "View {name}",
    addToBag: "Add to basket",
    footerHelp: "Questions, or looking for something special? Message us on",
    footerSmall: "© LA GRUTA 2026 · Fashion and art · Barcelona",
    close: "Close",
    details: "Details",
    perUnit: " / unit · wholesale",
    minUnits: "Minimum {units} units per item.",
    freeShippingFrom: "Free shipping over {amount} · We complete your order via WhatsApp.",
    removeOne: "Remove one unit",
    addOne: "Add one unit",
    addToBagPrice: "Add to basket · {price}",
    bagAria: "Shopping basket",
    bagTitle: "Your basket",
    closeBag: "Close basket",
    bagEmpty: "Your basket is empty.",
    keepLooking: "Keep browsing",
    shipLeftBefore: "You're ",
    shipLeftAfter: " away from free shipping",
    shipFree: "You've got free shipping! ✳",
    minUnitsShort: "Min. {units} units",
    subtotal: "Subtotal",
    shipping: "Shipping",
    toBeAgreed: "To be agreed",
    wholesaleBandTitle: "Wholesale",
    wholesaleBandText: "Special price when you buy {n} or more items. Add them to your bag and we'll agree the price on WhatsApp.",
    wholesaleAddMore: "Add {n} more to unlock wholesale pricing",
    wholesaleOn: "Wholesale activated! The price is agreed on WhatsApp.",
    free: "Free",
    total: "Total",
    minOrder: "Minimum order {min}: you need {rest} more.",
    minUnitsEach: "Each item needs at least {units} units.",
    checkoutBtn: "Checkout →",
    remove: "Remove",
    toastAdded: "{name} added to your basket",
    viewBag: "View basket",
    checkoutAria: "Checkout",
    thanks: "Thank you for your order!",
    redirectPre: "We're ",
    redirectStrong: "redirecting you to WhatsApp",
    redirectPost: " to complete your order with us. The message is already written: you just have to send it.",
    openWhatsapp: "Open WhatsApp now",
    emptyAndClose: "Empty basket and close",
    lastStep: "LAST STEP",
    checkoutTitle: "Checkout",
    totalShipping: "Total (shipping: {ship})",
    firstName: "First name",
    lastName: "Last name",
    company: "Company / shop",
    taxId: "VAT / Tax ID",
    contact: "Email or phone",
    deliveryLegend: "How would you like to receive it?",
    homeDelivery: "Home delivery",
    pickup: "Collect in shop",
    pickupNote: "We'll confirm the address and opening hours on WhatsApp",
    street: "Street and number",
    extra: "Flat, door, staircase (optional)",
    postcode: "Postcode",
    city: "City",
    region: "Province / state",
    country: "Country",
    defaultCountry: "Spain",
    notes: "Notes (optional)",
    submit: "Place order and continue on WhatsApp",
    fine: "When you submit, we'll redirect you to WhatsApp to complete the order. You won't be charged now.",
    shipPickup: "collect in shop",
    shipTbd: "to be agreed",
    shipFreeLower: "free",
    wa: {
      hello: "Hello La Gruta!",
      helloRetail: "Hello La Gruta! I'd like to place this order:",
      helloWholesale: "Hello La Gruta! I'd like to place this WHOLESALE ORDER:",
      subtotal: "Subtotal",
      shipping: "Shipping",
      total: "Total",
      name: "Full name",
      company: "Company/shop",
      taxId: "VAT / Tax ID",
      contact: "Contact",
      pickup: "Delivery: COLLECT IN SHOP",
      homeDelivery: "Delivery: HOME DELIVERY",
      address: "Address",
      postcode: "Postcode",
      country: "Country",
      notes: "Notes",
    },
  },
};

export const dictionaries: Record<Locale, Dict> = { es, ca, en };
export const getDictionary = (lang: Locale): Dict => dictionaries[lang];
