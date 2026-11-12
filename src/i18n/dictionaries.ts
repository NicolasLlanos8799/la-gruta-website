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
    storyLink: string;
    visitShape: [string, string];
    visitEyebrow: string;
    visitTitle1: string;
    visitEm: string;
    visitText: string;
    visitCity: string;
    visitAddress: string;
    visitButton: string;
    footerTagline: string;
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
    homeTitle: "La Gruta — Moda y arte en Barcelona",
    homeDescription: "Una tienda de ropa diferente. Moda y arte desde Barcelona.",
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
    navAbout: "Sobre La Gruta",
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
    storyAlt: "Interior de la boutique La Gruta",
    storyLabel: ["ENTRA, MIRA,", "DESCUBRE."],
    storyEyebrow: "UN LUGAR DIFERENTE",
    storyTitle1: "Más que",
    storyTitle2: "una",
    storyEm: "tienda.",
    storyText: "La Gruta es un espacio donde la moda se encuentra con el arte. Una selección diferente, hecha para descubrir, combinar y expresar quién eres.",
    storyLink: "Conócenos en Instagram ↗",
    visitShape: ["HOLA", "BARCELONA!"],
    visitEyebrow: "LAS COSAS BONITAS PASAN EN PERSONA",
    visitTitle1: "Ven a",
    visitEm: "perderte.",
    visitText: "Hay cosas que se descubren mejor sin prisa, tocando, probando y mirando de cerca.",
    visitCity: "BARCELONA, ESPAÑA",
    visitAddress: "Dirección y horarios por confirmar",
    visitButton: "Ven a saludarnos ↗",
    footerTagline: "MODA Y ARTE · BARCELONA",
  },
  shop: {
    brandAria: "La Gruta — inicio",
    navCollections: "Colecciones",
    navAbout: "Sobre La Gruta",
    navRetail: "Minorista",
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
    homeTitle: "La Gruta — Moda i art a Barcelona",
    homeDescription: "Una botiga de roba diferent. Moda i art des de Barcelona.",
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
    navAbout: "Sobre La Gruta",
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
    storyAlt: "Interior de la botiga La Gruta",
    storyLabel: ["ENTRA, MIRA,", "DESCOBREIX."],
    storyEyebrow: "UN LLOC DIFERENT",
    storyTitle1: "Més que",
    storyTitle2: "una",
    storyEm: "botiga.",
    storyText: "La Gruta és un espai on la moda es troba amb l'art. Una selecció diferent, feta per descobrir, combinar i expressar qui ets.",
    storyLink: "Coneix-nos a Instagram ↗",
    visitShape: ["HOLA", "BARCELONA!"],
    visitEyebrow: "LES COSES BONIQUES PASSEN EN PERSONA",
    visitTitle1: "Vine a",
    visitEm: "perdre't.",
    visitText: "Hi ha coses que es descobreixen millor sense pressa, tocant, provant i mirant-les de prop.",
    visitCity: "BARCELONA, ESPANYA",
    visitAddress: "Adreça i horaris per confirmar",
    visitButton: "Vine a saludar-nos ↗",
    footerTagline: "MODA I ART · BARCELONA",
  },
  shop: {
    brandAria: "La Gruta — inici",
    navCollections: "Col·leccions",
    navAbout: "Sobre La Gruta",
    navRetail: "Al detall",
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
    homeTitle: "La Gruta — Fashion and art in Barcelona",
    homeDescription: "A different kind of clothing shop. Fashion and art from Barcelona.",
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
    navAbout: "About La Gruta",
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
    storyAlt: "Inside the La Gruta boutique",
    storyLabel: ["STEP IN, LOOK,", "DISCOVER."],
    storyEyebrow: "A DIFFERENT PLACE",
    storyTitle1: "More than",
    storyTitle2: "a",
    storyEm: "shop.",
    storyText: "La Gruta is a space where fashion meets art. A different selection, made for discovering, mixing and expressing who you are.",
    storyLink: "Find us on Instagram ↗",
    visitShape: ["HELLO", "BARCELONA!"],
    visitEyebrow: "BEAUTIFUL THINGS HAPPEN IN PERSON",
    visitTitle1: "Come and",
    visitEm: "get lost.",
    visitText: "Some things are best discovered without rushing: touching, trying on and looking up close.",
    visitCity: "BARCELONA, SPAIN",
    visitAddress: "Address and opening hours to be confirmed",
    visitButton: "Come and say hello ↗",
    footerTagline: "FASHION & ART · BARCELONA",
  },
  shop: {
    brandAria: "La Gruta — home",
    navCollections: "Collections",
    navAbout: "About La Gruta",
    navRetail: "Retail",
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
