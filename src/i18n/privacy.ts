import type { Locale } from "./config";

/**
 * Política de privacidad (borrador). Los datos entre [CORCHETES] son de ejemplo y deben
 * sustituirse por los reales antes de activar PRIVACY_READY.
 * Formato de cada línea de `p`: "- " = elemento de lista, "> " = nota destacada, resto = párrafo. **negrita** admitida.
 */
export const PRIVACY_READY = false;

export type PrivacyDoc = { title: string; updated: string; draft: string; intro: string; sections: { h: string; p: string[] }[] };

const es: PrivacyDoc = {
  title: "Política de Privacidad",
  updated: "Última actualización: [DD/MM/AAAA]",
  draft: "Borrador con datos de ejemplo: sustituye todo lo que aparece entre [corchetes] antes de publicar.",
  intro:
    "En **[LA GRUTA]** nos tomamos en serio tu privacidad. Esta política te explica qué datos personales tratamos cuando visitas **[https://URL-DE-LA-WEB]**, compras en nuestra tienda o te pones en contacto con nosotros, para qué los usamos y qué derechos tienes. Cumple con el Reglamento (UE) 2016/679 (RGPD), la Ley Orgánica 3/2018 (LOPDGDD) y la Ley 34/2002 (LSSI-CE).",
  sections: [
    { h: "1. Identidad del Responsable del Tratamiento", p: [
      "- **Responsable:** [Nombre y apellidos / Razón social]",
      "- **NIF / CIF:** [NIF/CIF]",
      "- **Domicilio:** [Calle y número, CP], Barcelona, España",
      "- **Correo de privacidad y ejercicio de derechos:** [correo@dominio.com]",
      "- **Teléfono:** [teléfono]",
      "- **Marca / sitio web:** [La Gruta] · [https://URL-DE-LA-WEB]",
      "No hemos designado un Delegado de Protección de Datos por no estar obligados a ello. Puedes escribirnos al correo indicado para cualquier cuestión sobre tus datos.",
    ] },
    { h: "2. Finalidades del tratamiento", p: [
      "Tratamos tus datos solo para los fines siguientes. Cada finalidad es independiente.",
      "**a) Gestión de pedidos, envíos y devoluciones.** Tramitar tu compra, confirmar y preparar el pedido, coordinar la entrega o la recogida en tienda, emitir la factura y gestionar cambios, devoluciones y reclamaciones. Datos: nombre y apellidos, email y/o teléfono, dirección de entrega y facturación, NIF/CIF (pedidos mayoristas), contenido e historial de pedidos y, si nos lo indicas, talla o preferencias.",
      "> Al finalizar el pedido en la web rellenas un formulario y te redirigimos a **WhatsApp**, donde nos envías un mensaje ya redactado con los datos del pedido para cerrarlo contigo. El pago se acuerda [por ese canal / mediante pasarela de pago: INDICAR].",
      "**b) Atención al cliente.** Responder a las consultas que nos envías por el formulario de contacto, email, WhatsApp o redes sociales. Datos: nombre, medio de contacto y contenido del mensaje.",
      "**c) Newsletter y promociones (si aplica).** Enviarte novedades, colecciones y promociones solo si te has suscrito o has dado tu consentimiento. Datos: nombre y correo electrónico.",
      "**d) Cuenta de cliente (si aplica).** Crear y mantener tu cuenta, guardar direcciones y consultar tu historial de pedidos.",
      "**e) Análisis de navegación y publicidad (si aplica).** Conocer cómo se usa la web para mejorarla y, si lo aceptas, medir y personalizar campañas publicitarias mediante cookies y tecnologías similares. Datos: dirección IP, identificadores online, dispositivo, páginas visitadas y origen de la visita.",
      "**f) Obligaciones legales.** Conservar facturas y documentación contable y fiscal, y atender requerimientos de las autoridades.",
      "**Almacenamiento en tu navegador.** Para recordar el contenido de tu cesta y tu idioma preferido, la web guarda información técnica en tu propio dispositivo (almacenamiento local y una cookie de idioma). Es estrictamente necesaria para el servicio que solicitas y no se usa con fines publicitarios.",
    ] },
    { h: "3. Legitimación (base legal)", p: [
      "- **Pedidos, envíos, cobros y devoluciones:** ejecución de un contrato de compraventa o medidas precontractuales a petición tuya (art. 6.1.b RGPD).",
      "- **Atención al cliente:** tu consentimiento al contactarnos y, en su caso, la ejecución del contrato (art. 6.1.a y 6.1.b).",
      "- **Newsletter y promociones:** consentimiento expreso, que puedes retirar en cualquier momento (art. 6.1.a RGPD; art. 21 LSSI-CE).",
      "- **Comunicaciones sobre productos similares a clientes:** interés legítimo (art. 6.1.f RGPD y art. 21.2 LSSI-CE), con posibilidad de oponerte en cada mensaje (si se usa).",
      "- **Cuenta de cliente:** ejecución de contrato (art. 6.1.b).",
      "- **Analítica y publicidad con cookies no necesarias:** consentimiento mediante el banner de cookies (art. 6.1.a RGPD; art. 22.2 LSSI-CE).",
      "- **Seguridad y prevención del fraude:** interés legítimo (art. 6.1.f).",
      "- **Obligaciones fiscales, contables y mercantiles:** obligación legal (art. 6.1.c).",
      "Si no facilitas los datos necesarios para el pedido, no podremos tramitarlo. Retirar un consentimiento no afecta a la licitud del tratamiento anterior.",
    ] },
    { h: "4. Plazo de conservación", p: [
      "- **Pedidos y facturación:** mientras dure la relación comercial y después, bloqueados, durante los plazos legales: 6 años (art. 30 del Código de Comercio) y 4 años a efectos tributarios (Ley General Tributaria y normativa del IVA). Transcurridos, se suprimen.",
      "- **Consultas:** el tiempo necesario para resolverlas y, después, hasta [1 año] por si surgen reclamaciones.",
      "- **Newsletter:** hasta que retires tu consentimiento o te des de baja; conservaremos solo lo mínimo para respetar tu baja.",
      "- **Cuenta de cliente:** mientras la mantengas activa; si no la usas durante [24 meses], te avisaremos y la daremos de baja.",
      "- **Cookies y analítica:** según los plazos de la Política de Cookies.",
      "- **Posibles responsabilidades:** los datos podrán conservarse bloqueados durante los plazos de prescripción de las acciones legales aplicables.",
    ] },
    { h: "5. Destinatarios y transferencias internacionales", p: [
      "No vendemos tus datos. Solo los comunicamos cuando es necesario o la ley lo exige:",
      "- **Transporte y mensajería** [Correos / SEUR / GLS / DHL: INDICAR]: reciben nombre, dirección y teléfono para entregar tu pedido (cesión necesaria para cumplir el contrato).",
      "- **Pasarela de pago** (si aplica) [Stripe / PayPal / Redsys / Bizum: INDICAR]: procesa el pago; nosotros no almacenamos los datos completos de tu tarjeta.",
      "- **Alojamiento y plataforma web** [Vercel Inc. u otro: CONFIRMAR]: encargado del tratamiento.",
      "- **WhatsApp (Meta Platforms Ireland Ltd.):** el pedido se cierra por este servicio; al enviar el mensaje aceptas también sus condiciones y política de privacidad.",
      "- **Email marketing** (si aplica) [Brevo / Mailchimp / Klaviyo: INDICAR].",
      "- **Analítica y publicidad** (si aplica) [Google Analytics 4 / Meta Pixel: INDICAR], solo si aceptas las cookies correspondientes.",
      "- **Asesoría fiscal y contable** [INDICAR] y **Administraciones públicas, jueces y tribunales** cuando exista obligación legal.",
      "Con todos los encargados del tratamiento tenemos firmados los contratos exigidos por el art. 28 RGPD.",
      "**Transferencias internacionales.** Algunos proveedores (por ejemplo Google, Meta o Vercel) pueden tratar datos fuera del Espacio Económico Europeo, principalmente en Estados Unidos. Se amparan en la decisión de adecuación de la Comisión Europea (Marco de Privacidad de Datos UE-EE. UU.) si el proveedor está certificado o, en su defecto, en Cláusulas Contractuales Tipo. Puedes pedirnos copia de estas garantías en el correo de privacidad.",
    ] },
    { h: "6. Tus derechos", p: [
      "- **Acceso:** saber qué datos tuyos tratamos.",
      "- **Rectificación:** corregir datos inexactos o incompletos.",
      "- **Supresión:** pedir que los eliminemos cuando ya no sean necesarios, retires el consentimiento, etc.",
      "- **Oposición:** oponerte al tratamiento basado en interés legítimo o a recibir publicidad.",
      "- **Limitación:** solicitar que congelemos el tratamiento en determinados casos.",
      "- **Portabilidad:** recibir tus datos en formato estructurado y de uso común, o que los transmitamos a otro responsable.",
      "- **Retirada del consentimiento**, sin efecto retroactivo.",
      "No tomamos decisiones basadas únicamente en tratamientos automatizados que te produzcan efectos jurídicos.",
      "**Cómo ejercerlos:** escribe a **[correo@dominio.com]** o a **[domicilio]**, indicando el derecho que ejerces y adjuntando copia de un documento que acredite tu identidad. Responderemos en un mes como máximo (ampliable dos meses más en casos complejos). Para darte de baja de la newsletter basta con pulsar el enlace de cada correo.",
      "**Reclamaciones:** si consideras que no hemos tratado tus datos correctamente, puedes reclamar ante la **Agencia Española de Protección de Datos (AEPD)**, C/ Jorge Juan, 6, 28001 Madrid, www.aepd.es. Te agradeceremos que nos contactes antes para intentar resolverlo.",
    ] },
    { h: "7. Seguridad de los datos y de las transacciones", p: [
      "Aplicamos medidas técnicas y organizativas adecuadas al riesgo: conexión cifrada HTTPS/TLS, acceso al panel de administración protegido con contraseña, acceso limitado a quien lo necesita, copias de seguridad y proveedores con garantías suficientes. Los pagos (si aplica) se procesan en el entorno seguro de la pasarela, que cumple el estándar PCI-DSS.",
      "Si se produjera una violación de seguridad que suponga un riesgo para tus derechos, la notificaremos a la AEPD y, cuando proceda, a ti (arts. 33 y 34 RGPD).",
    ] },
    { h: "8. Menores de edad", p: [
      "Este sitio no está dirigido a menores de **14 años**. Para tratar datos basados en el consentimiento de menores de 14 años se requiere la autorización de sus padres o tutores (art. 7 LOPDGDD). Si descubrimos que hemos recogido datos de un menor sin esa autorización, los eliminaremos. Si crees que ha ocurrido, escríbenos a [correo@dominio.com].",
    ] },
    { h: "9. Modificaciones de esta política", p: [
      "Podemos actualizar esta política para adaptarla a cambios legales, de nuestros servicios o de criterios de la AEPD. La versión vigente estará siempre publicada en esta página con su fecha de actualización. Si el cambio es sustancial, te lo comunicaremos por un medio visible o por correo electrónico.",
    ] },
  ],
};

const ca: PrivacyDoc = {
  title: "Política de Privacitat",
  updated: "Última actualització: [DD/MM/AAAA]",
  draft: "Esborrany amb dades d'exemple: substitueix tot el que apareix entre [claudàtors] abans de publicar.",
  intro:
    "A **[LA GRUTA]** ens prenem seriosament la teva privacitat. Aquesta política t'explica quines dades personals tractem quan visites **[https://URL-DE-LA-WEB]**, compres a la nostra botiga o et poses en contacte amb nosaltres, per a què les fem servir i quins drets tens. Compleix el Reglament (UE) 2016/679 (RGPD), la Llei orgànica 3/2018 (LOPDGDD) i la Llei 34/2002 (LSSI-CE).",
  sections: [
    { h: "1. Identitat del Responsable del Tractament", p: [
      "- **Responsable:** [Nom i cognoms / Raó social]",
      "- **NIF / CIF:** [NIF/CIF]",
      "- **Domicili:** [Carrer i número, CP], Barcelona, Espanya",
      "- **Correu de privacitat i exercici de drets:** [correu@domini.com]",
      "- **Telèfon:** [telèfon]",
      "- **Marca / lloc web:** [La Gruta] · [https://URL-DE-LA-WEB]",
      "No hem designat un Delegat de Protecció de Dades perquè no hi estem obligats. Pots escriure'ns al correu indicat per a qualsevol qüestió sobre les teves dades.",
    ] },
    { h: "2. Finalitats del tractament", p: [
      "Tractem les teves dades només per a les finalitats següents. Cada finalitat és independent.",
      "**a) Gestió de comandes, enviaments i devolucions.** Tramitar la teva compra, confirmar i preparar la comanda, coordinar el lliurament o la recollida a la botiga, emetre la factura i gestionar canvis, devolucions i reclamacions. Dades: nom i cognoms, correu electrònic i/o telèfon, adreça de lliurament i facturació, NIF/CIF (comandes majoristes), contingut i historial de comandes i, si ens ho indiques, talla o preferències.",
      "> En finalitzar la comanda al web omples un formulari i et redirigim a **WhatsApp**, on ens envies un missatge ja redactat amb les dades de la comanda per tancar-la amb tu. El pagament s'acorda [per aquest canal / mitjançant passarel·la de pagament: INDICAR].",
      "**b) Atenció al client.** Respondre les consultes que ens envies pel formulari de contacte, correu electrònic, WhatsApp o xarxes socials. Dades: nom, mitjà de contacte i contingut del missatge.",
      "**c) Newsletter i promocions (si escau).** Enviar-te novetats, col·leccions i promocions només si t'hi has subscrit o has donat el teu consentiment. Dades: nom i correu electrònic.",
      "**d) Compte de client (si escau).** Crear i mantenir el teu compte, desar adreces i consultar l'historial de comandes.",
      "**e) Anàlisi de navegació i publicitat (si escau).** Saber com s'utilitza el web per millorar-lo i, si ho acceptes, mesurar i personalitzar campanyes publicitàries mitjançant galetes i tecnologies similars. Dades: adreça IP, identificadors en línia, dispositiu, pàgines visitades i origen de la visita.",
      "**f) Obligacions legals.** Conservar factures i documentació comptable i fiscal, i atendre requeriments de les autoritats.",
      "**Emmagatzematge al teu navegador.** Per recordar el contingut de la teva cistella i l'idioma preferit, el web desa informació tècnica al teu propi dispositiu (emmagatzematge local i una galeta d'idioma). És estrictament necessària per al servei que sol·licites i no s'utilitza amb finalitats publicitàries.",
    ] },
    { h: "3. Legitimació (base legal)", p: [
      "- **Comandes, enviaments, cobraments i devolucions:** execució d'un contracte de compravenda o mesures precontractuals a petició teva (art. 6.1.b RGPD).",
      "- **Atenció al client:** el teu consentiment en contactar-nos i, si escau, l'execució del contracte (art. 6.1.a i 6.1.b).",
      "- **Newsletter i promocions:** consentiment exprés, que pots retirar en qualsevol moment (art. 6.1.a RGPD; art. 21 LSSI-CE).",
      "- **Comunicacions sobre productes similars a clients:** interès legítim (art. 6.1.f RGPD i art. 21.2 LSSI-CE), amb possibilitat d'oposar-t'hi en cada missatge (si s'utilitza).",
      "- **Compte de client:** execució de contracte (art. 6.1.b).",
      "- **Analítica i publicitat amb galetes no necessàries:** consentiment mitjançant el bàner de galetes (art. 6.1.a RGPD; art. 22.2 LSSI-CE).",
      "- **Seguretat i prevenció del frau:** interès legítim (art. 6.1.f).",
      "- **Obligacions fiscals, comptables i mercantils:** obligació legal (art. 6.1.c).",
      "Si no facilites les dades necessàries per a la comanda, no podrem tramitar-la. Retirar un consentiment no afecta la licitud del tractament anterior.",
    ] },
    { h: "4. Termini de conservació", p: [
      "- **Comandes i facturació:** mentre duri la relació comercial i, després, bloquejades durant els terminis legals: 6 anys (art. 30 del Codi de Comerç) i 4 anys a efectes tributaris (Llei general tributària i normativa de l'IVA). Passats aquests terminis, se suprimeixen.",
      "- **Consultes:** el temps necessari per resoldre-les i, després, fins a [1 any] per si sorgeixen reclamacions.",
      "- **Newsletter:** fins que retiris el consentiment o et donis de baixa; conservarem només el mínim per respectar la teva baixa.",
      "- **Compte de client:** mentre el mantinguis actiu; si no l'uses durant [24 mesos], t'avisarem i el donarem de baixa.",
      "- **Galetes i analítica:** segons els terminis de la Política de Galetes.",
      "- **Possibles responsabilitats:** les dades es podran conservar bloquejades durant els terminis de prescripció de les accions legals aplicables.",
    ] },
    { h: "5. Destinataris i transferències internacionals", p: [
      "No venem les teves dades. Només les comuniquem quan és necessari o la llei ho exigeix:",
      "- **Transport i missatgeria** [Correos / SEUR / GLS / DHL: INDICAR]: reben nom, adreça i telèfon per lliurar la comanda (cessió necessària per complir el contracte).",
      "- **Passarel·la de pagament** (si escau) [Stripe / PayPal / Redsys / Bizum: INDICAR]: processa el pagament; nosaltres no emmagatzemem les dades completes de la teva targeta.",
      "- **Allotjament i plataforma web** [Vercel Inc. o un altre: CONFIRMAR]: encarregat del tractament.",
      "- **WhatsApp (Meta Platforms Ireland Ltd.):** la comanda es tanca per aquest servei; en enviar el missatge acceptes també les seves condicions i política de privacitat.",
      "- **Màrqueting per correu electrònic** (si escau) [Brevo / Mailchimp / Klaviyo: INDICAR].",
      "- **Analítica i publicitat** (si escau) [Google Analytics 4 / Meta Pixel: INDICAR], només si acceptes les galetes corresponents.",
      "- **Assessoria fiscal i comptable** [INDICAR] i **Administracions públiques, jutges i tribunals** quan hi hagi obligació legal.",
      "Amb tots els encarregats del tractament tenim signats els contractes que exigeix l'art. 28 RGPD.",
      "**Transferències internacionals.** Alguns proveïdors (per exemple Google, Meta o Vercel) poden tractar dades fora de l'Espai Econòmic Europeu, principalment als Estats Units. S'emparen en la decisió d'adequació de la Comissió Europea (Marc de Privacitat de Dades UE-EUA) si el proveïdor està certificat o, altrament, en Clàusules Contractuals Tipus. Pots demanar-nos còpia d'aquestes garanties al correu de privacitat.",
    ] },
    { h: "6. Els teus drets", p: [
      "- **Accés:** saber quines dades teves tractem.",
      "- **Rectificació:** corregir dades inexactes o incompletes.",
      "- **Supressió:** demanar que les eliminem quan ja no siguin necessàries, retiris el consentiment, etc.",
      "- **Oposició:** oposar-te al tractament basat en interès legítim o a rebre publicitat.",
      "- **Limitació:** sol·licitar que congelem el tractament en determinats casos.",
      "- **Portabilitat:** rebre les teves dades en format estructurat i d'ús comú, o que les transmetem a un altre responsable.",
      "- **Retirada del consentiment**, sense efecte retroactiu.",
      "No prenem decisions basades únicament en tractaments automatitzats que et produeixin efectes jurídics.",
      "**Com exercir-los:** escriu a **[correu@domini.com]** o a **[domicili]**, indicant el dret que exerceixes i adjuntant còpia d'un document que acrediti la teva identitat. Respondrem com a màxim en un mes (ampliable dos mesos més en casos complexos). Per donar-te de baixa de la newsletter n'hi ha prou de prémer l'enllaç de cada correu.",
      "**Reclamacions:** si consideres que no hem tractat correctament les teves dades, pots reclamar davant l'**Agència Espanyola de Protecció de Dades (AEPD)**, C/ Jorge Juan, 6, 28001 Madrid, www.aepd.es. T'agrairem que et posis en contacte amb nosaltres abans per intentar resoldre-ho.",
    ] },
    { h: "7. Seguretat de les dades i de les transaccions", p: [
      "Apliquem mesures tècniques i organitzatives adequades al risc: connexió xifrada HTTPS/TLS, accés al panell d'administració protegit amb contrasenya, accés limitat a qui el necessita, còpies de seguretat i proveïdors amb garanties suficients. Els pagaments (si escau) es processen a l'entorn segur de la passarel·la, que compleix l'estàndard PCI-DSS.",
      "Si es produís una violació de seguretat que suposi un risc per als teus drets, la notificarem a l'AEPD i, quan escaigui, a tu (arts. 33 i 34 RGPD).",
    ] },
    { h: "8. Menors d'edat", p: [
      "Aquest lloc no s'adreça a menors de **14 anys**. Per tractar dades basades en el consentiment de menors de 14 anys cal l'autorització dels seus pares o tutors (art. 7 LOPDGDD). Si descobrim que hem recollit dades d'un menor sense aquesta autorització, les eliminarem. Si creus que ha passat, escriu-nos a [correu@domini.com].",
    ] },
    { h: "9. Modificacions d'aquesta política", p: [
      "Podem actualitzar aquesta política per adaptar-la a canvis legals, dels nostres serveis o de criteris de l'AEPD. La versió vigent estarà sempre publicada en aquesta pàgina amb la data d'actualització. Si el canvi és substancial, te'l comunicarem per un mitjà visible o per correu electrònic.",
    ] },
  ],
};

const en: PrivacyDoc = {
  title: "Privacy Policy",
  updated: "Last updated: [DD/MM/YYYY]",
  draft: "Draft with sample data: replace everything shown in [square brackets] before publishing.",
  intro:
    "At **[LA GRUTA]** we take your privacy seriously. This policy explains which personal data we process when you visit **[https://WEBSITE-URL]**, shop in our store or contact us, what we use it for and what rights you have. It complies with Regulation (EU) 2016/679 (GDPR), Spanish Organic Law 3/2018 (LOPDGDD) and Law 34/2002 (LSSI-CE).",
  sections: [
    { h: "1. Identity of the Data Controller", p: [
      "- **Controller:** [Full name / Company name]",
      "- **Tax ID (NIF / CIF):** [NIF/CIF]",
      "- **Address:** [Street and number, postcode], Barcelona, Spain",
      "- **Privacy and rights email:** [email@domain.com]",
      "- **Phone:** [phone]",
      "- **Brand / website:** [La Gruta] · [https://WEBSITE-URL]",
      "We have not appointed a Data Protection Officer as we are not required to. You can write to the email above with any question about your data.",
    ] },
    { h: "2. Purposes of processing", p: [
      "We process your data only for the purposes below. Each purpose is independent.",
      "**a) Managing orders, shipping and returns.** Processing your purchase, confirming and preparing the order, arranging delivery or in-shop collection, issuing the invoice and handling exchanges, returns and complaints. Data: first and last name, email and/or phone, delivery and billing address, tax ID (wholesale orders), order contents and history and, if you tell us, size or preferences.",
      "> When you complete your order on the website you fill in a form and we redirect you to **WhatsApp**, where you send us a pre-written message with the order details so we can complete it with you. Payment is agreed [through that channel / via a payment gateway: SPECIFY].",
      "**b) Customer service.** Answering the enquiries you send through the contact form, email, WhatsApp or social media. Data: name, contact details and the content of your message.",
      "**c) Newsletter and promotions (if applicable).** Sending you news, collections and offers only if you have subscribed or given your consent. Data: name and email address.",
      "**d) Customer account (if applicable).** Creating and maintaining your account, saving addresses and viewing your order history.",
      "**e) Browsing analytics and advertising (if applicable).** Understanding how the website is used in order to improve it and, if you accept, measuring and personalising advertising campaigns through cookies and similar technologies. Data: IP address, online identifiers, device, pages visited and referral source.",
      "**f) Legal obligations.** Keeping invoices and accounting and tax records, and responding to requests from authorities.",
      "**Storage in your browser.** To remember your basket and preferred language, the website stores technical information on your own device (local storage and a language cookie). It is strictly necessary for the service you request and is not used for advertising.",
    ] },
    { h: "3. Legal basis", p: [
      "- **Orders, shipping, payments and returns:** performance of a sales contract or pre-contractual steps at your request (Art. 6.1.b GDPR).",
      "- **Customer service:** your consent when you contact us and, where relevant, performance of the contract (Art. 6.1.a and 6.1.b).",
      "- **Newsletter and promotions:** your express consent, which you can withdraw at any time (Art. 6.1.a GDPR; Art. 21 LSSI-CE).",
      "- **Messages about similar products to existing customers:** legitimate interest (Art. 6.1.f GDPR and Art. 21.2 LSSI-CE), with the option to object in every message (if used).",
      "- **Customer account:** performance of a contract (Art. 6.1.b).",
      "- **Analytics and advertising with non-essential cookies:** consent through the cookie banner (Art. 6.1.a GDPR; Art. 22.2 LSSI-CE).",
      "- **Security and fraud prevention:** legitimate interest (Art. 6.1.f).",
      "- **Tax, accounting and commercial obligations:** legal obligation (Art. 6.1.c).",
      "If you do not provide the data needed for your order, we will not be able to process it. Withdrawing consent does not affect the lawfulness of earlier processing.",
    ] },
    { h: "4. Retention period", p: [
      "- **Orders and invoicing:** for the duration of the commercial relationship and, afterwards, blocked for the legal periods: 6 years (Art. 30 of the Spanish Commercial Code) and 4 years for tax purposes (General Tax Law and VAT rules). After that, they are deleted.",
      "- **Enquiries:** as long as needed to resolve them and then up to [1 year] in case of claims.",
      "- **Newsletter:** until you withdraw consent or unsubscribe; we keep only the minimum needed to respect your opt-out.",
      "- **Customer account:** while it remains active; if you do not use it for [24 months], we will notify you and close it.",
      "- **Cookies and analytics:** according to the periods stated in the Cookie Policy.",
      "- **Possible liabilities:** data may be kept blocked for the limitation periods of any applicable legal claims.",
    ] },
    { h: "5. Recipients and international transfers", p: [
      "We do not sell your data. We only share it when necessary or when the law requires:",
      "- **Carriers and couriers** [Correos / SEUR / GLS / DHL: SPECIFY]: receive your name, address and phone number to deliver your order (a transfer necessary to perform the contract).",
      "- **Payment gateway** (if applicable) [Stripe / PayPal / Redsys / Bizum: SPECIFY]: processes the payment; we do not store your full card details.",
      "- **Hosting and web platform** [Vercel Inc. or other: CONFIRM]: data processor.",
      "- **WhatsApp (Meta Platforms Ireland Ltd.):** orders are completed through this service; by sending the message you also accept its terms and privacy policy.",
      "- **Email marketing** (if applicable) [Brevo / Mailchimp / Klaviyo: SPECIFY].",
      "- **Analytics and advertising** (if applicable) [Google Analytics 4 / Meta Pixel: SPECIFY], only if you accept the relevant cookies.",
      "- **Tax and accounting advisers** [SPECIFY] and **public authorities, judges and courts** where there is a legal obligation.",
      "We have signed the data processing agreements required by Art. 28 GDPR with all our processors.",
      "**International transfers.** Some providers (for example Google, Meta or Vercel) may process data outside the European Economic Area, mainly in the United States. Transfers rely on the European Commission's adequacy decision (EU-US Data Privacy Framework) where the provider is certified or, otherwise, on Standard Contractual Clauses. You can ask us for a copy of these safeguards at the privacy email address.",
    ] },
    { h: "6. Your rights", p: [
      "- **Access:** find out which of your data we process.",
      "- **Rectification:** correct inaccurate or incomplete data.",
      "- **Erasure:** ask us to delete your data when it is no longer needed, you withdraw consent, etc.",
      "- **Objection:** object to processing based on legitimate interest or to receiving marketing.",
      "- **Restriction:** ask us to freeze processing in certain cases.",
      "- **Portability:** receive your data in a structured, commonly used format, or have us transmit it to another controller.",
      "- **Withdrawal of consent**, without retroactive effect.",
      "We do not make decisions based solely on automated processing that produce legal effects on you.",
      "**How to exercise them:** write to **[email@domain.com]** or to **[address]**, stating the right you wish to exercise and attaching a copy of an ID document. We will reply within one month at most (extendable by two further months in complex cases). To unsubscribe from the newsletter, just click the link in any email.",
      "**Complaints:** if you believe we have not handled your data properly, you can lodge a complaint with the **Spanish Data Protection Agency (AEPD)**, C/ Jorge Juan, 6, 28001 Madrid, www.aepd.es. We would appreciate it if you contacted us first so we can try to resolve it.",
    ] },
    { h: "7. Data and transaction security", p: [
      "We apply technical and organisational measures appropriate to the risk: encrypted HTTPS/TLS connections, password-protected access to the administration panel, access limited to those who need it, backups and providers offering sufficient guarantees. Payments (if applicable) are processed in the gateway's secure environment, which complies with the PCI-DSS standard.",
      "If a security breach occurs that poses a risk to your rights, we will notify the AEPD and, where appropriate, you (Arts. 33 and 34 GDPR).",
    ] },
    { h: "8. Minors", p: [
      "This website is not aimed at children under **14**. Processing based on the consent of children under 14 requires authorisation from their parents or guardians (Art. 7 LOPDGDD). If we discover that we have collected a minor's data without that authorisation, we will delete it. If you think this has happened, write to [email@domain.com].",
    ] },
    { h: "9. Changes to this policy", p: [
      "We may update this policy to reflect legal changes, changes to our services or AEPD guidance. The current version will always be published on this page with its update date. If a change is significant, we will let you know in a visible way or by email.",
    ] },
  ],
};

export const privacy: Record<Locale, PrivacyDoc> = { es, ca, en };
