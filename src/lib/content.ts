/**
 * Alle homepage-inhoud op één plek. Teksten komen uit de goedgekeurde
 * Artifact-homepage; enkele feiten staan nog open — zie OPENSTAAND.md in de root.
 */
export const site = {
  naam: "Food Architect",
  slogan: "Feeding memories",
  domein: "https://www.foodarchitect.be",
  mail: "info@foodarchitect.be",
  telefoon: "0471 30 31 30",
  telefoonHref: "tel:+32471303130",
  plaats: "Gent & Deinze, België",
  adres: {
    straat: "Polderbos 30",
    // Postcode 9840 is de enige postcode van De Pinte — niet apart bevestigd, controleer dit.
    postcode: "9840",
    gemeente: "De Pinte",
  },
  gaId: "G-XXXXXXXXXX",
};

export const externLinks = {
  offerte: "https://foodarchitect.idento.be/offerte-aanvragen/",
  impressies: "https://foodarchitect.idento.be/impressies/",
};

type SubLink = { label: string; href: string; tekst: string; icoon: IcoonNaam };
export type IcoonNaam =
  | "ringen" | "taart" | "kiem" | "vuur" | "gebouw" | "glazen" | "koffie" | "raket" | "huis";

export const megaPrivate: SubLink[] = [
  { label: "Huwelijksfeesten", href: "/private-catering/huwelijksfeesten/", tekst: "Van receptie tot dessertbuffet, één chef voor de hele dag", icoon: "ringen" },
  { label: "Verjaardagen & jubilea", href: "/private-catering/verjaardagen-jubilea/", tekst: "Een menu rond de gast van eer, thuis of op locatie", icoon: "taart" },
  { label: "Communie- & lentefeesten", href: "/private-catering/communie-lentefeesten/", tekst: "Eén tafel voor groot en klein, zonder aparte kinderkaart", icoon: "kiem" },
  { label: "Fire & Smoke BBQ", href: "/fire-smoke-bbq/", tekst: "Showcooking op het vuur, ook bij een privéfeest", icoon: "vuur" },
];

export const megaEvent: SubLink[] = [
  { label: "Bedrijfsevenementen", href: "/event-catering/bedrijfsevenementen/", tekst: "Van klantenreceptie tot jubileum van de zaak", icoon: "gebouw" },
  { label: "Personeelsfeesten", href: "/event-catering/personeelsfeesten/", tekst: "Eten waar uw team over blijft praten", icoon: "glazen" },
  { label: "Seminaries", href: "/event-catering/seminaries/", tekst: "Ontbijt, lunch en pauzes die het programma niet vertragen", icoon: "koffie" },
  { label: "Productlanceringen", href: "/event-catering/productlanceringen/", tekst: "Hapjes die het verhaal van uw merk meevertellen", icoon: "raket" },
];

export const megaVuur: SubLink[] = [
  { label: "Bij een privéfeest", href: "/fire-smoke-bbq/", tekst: "Trouw, verjaardag of tuinfeest, met de grill als middelpunt van de avond", icoon: "huis" },
  { label: "Bij een bedrijfsevent", href: "/fire-smoke-bbq/", tekst: "Personeelsfeest of klantendag, showcooking waar uw gasten bij staan", icoon: "gebouw" },
];

export const diensten = [
  {
    slug: "private-catering",
    nummer: "01 · Private",
    titel: "Private Catering & Trouwfeesten",
    tag: "Jullie droomdag, culinair vertaald.",
    tekst: "Van een intiem diner aan huis tot een trouwfeest voor honderden gasten. We ontwerpen samen het menu dat bij jullie past.",
    beeld: "/images/dienst-private.webp",
    alt: "Gast snijdt een stuk varkenshaas met jus en gekarameliseerde wortel",
    links: megaPrivate.slice(0, 3),
    lees: { label: "Meer over private catering", href: "/private-catering/" },
    donker: false,
  },
  {
    slug: "event-catering",
    nummer: "02 · Event",
    titel: "Event Catering voor Bedrijven",
    tag: "Hospitality die uw merk versterkt.",
    tekst: "Walking dinners, seminaries en lanceringen waar het eten mee het verhaal van uw bedrijf vertelt.",
    beeld: "/images/dienst-event.webp",
    alt: "Tonijnhapjes op een plank, geserveerd tussen de gasten",
    links: megaEvent,
    lees: { label: "Meer over event catering", href: "/event-catering/" },
    donker: false,
  },
  {
    slug: "fire-smoke-bbq",
    nummer: "03 · Fire & Smoke",
    titel: "Fire & Smoke BBQ",
    tag: "Authentieke showcooking met een twist.",
    tekst: "Vlammen, rook en een chef die voor uw gasten grilt. Een eerlijke, stoere beleving, zowel op een privéfeest als op een bedrijfsevent.",
    beeld: "/images/dienst-bbq.webp",
    alt: "Gegrilde babymaïs met kaas op een bananenblad",
    links: megaVuur,
    lees: { label: "Ontdek Fire & Smoke", href: "/fire-smoke-bbq/" },
    donker: true,
  },
];

export const band = [
  { src: "/images/band-01.webp", alt: "Dessert met rode gelei, crumble en een quenelle room" },
  { src: "/images/band-02.webp", alt: "Kroketjes met toef op een schaal maïskorrels, doorgegeven op een receptie" },
  { src: "/images/band-03.webp", alt: "Chef schept jus over gevogelte in een diep bord" },
  { src: "/images/band-04.webp", alt: "Hapjes van gebrande tonijn met zeewier, afgewerkt met een spuitzak" },
  { src: "/images/band-05.webp", alt: "Tonijnhapjes op een houten plank, geserveerd tussen de gasten" },
  { src: "/images/band-06.webp", alt: "Hapjes met mousse, radijs en tomaat op een krokant plaatje" },
  { src: "/images/band-07.webp", alt: "Gegrilde babymaïs met kaas en bieslook op een bananenblad" },
  { src: "/images/band-08.webp", alt: "Blokjes paté op krokant, geserveerd van een houten plank" },
  { src: "/images/band-09.webp", alt: "Gasten nemen kroketjes met munt uit een kom" },
  { src: "/images/band-10.webp", alt: "Bloemkool met wortel, krieltje en erwtenscheuten in een diep bord" },
  { src: "/images/band-11.webp", alt: "Chef giet kruidenolie over gemarineerde zalm met microgroenten" },
  { src: "/images/band-12.webp", alt: "Gast snijdt een stuk varkenshaas met jus en gekarameliseerde wortel" },
];

export const beloftes = [
  { titel: "Menu op maat, geen standaardformule", tekst: "Elk voorstel vertrekt van uw gasten, uw locatie en het verhaal dat u wil vertellen.", icoon: "plan" as const },
  { titel: "Lokale fundamenten", tekst: "We koken met producten van ambachtelijke makers uit de regio.", icoon: "kiem" as const },
  { titel: "Een totaalservice die geen detail vergeet", tekst: "Bediening, materiaal en timing: u hoeft enkel te genieten.", icoon: "vink" as const },
];

export const traject = [
  { titel: "Kennismaking", tekst: "We luisteren naar uw plannen: gasten, locatie, sfeer en wensen." },
  { titel: "Het ontwerp", tekst: "Chef Kim tekent een menu op maat, met lokale producten van het seizoen." },
  { titel: "De afwerking", tekst: "We stemmen timing, bediening en materiaal tot in detail met u af." },
  { titel: "De dag zelf", tekst: "Wij koken en serveren, u geniet samen met uw gasten." },
];

export const partners = [
  { naam: "Monsieur Boudin", tekst: "Ambachtelijke witte pensen" },
  { naam: "De wijnhandel om de hoek", tekst: "De beste wijnen bij elk gerecht" },
  { naam: "Boeren uit de streek", tekst: "Groenten en vlees van het seizoen" },
];

/**
 * Materiaal- en eventpartners voor de /partners/-pagina — overgenomen van de
 * huidige live site (foodarchitect.idento.be/partners/). Andere categorie dan
 * `partners` hierboven, dat over lokale voedselpartners gaat.
 * Mémoire's URL bevatte een accent (mémoire.be); hier genormaliseerd naar
 * memoire.be — controleer of dat de echte domeinnaam is.
 */
export const eventPartners = [
  { naam: "ABC-Rent", tekst: "Tafels, stoelen & servies", url: "https://www.abcrent.be/" },
  { naam: "Organic Concept", tekst: "Exclusieve sailcloth & stretchtenten", url: "https://www.organic-concept.com/" },
  { naam: "Mémoire", tekst: "Event styling & creatieve concepten", url: "https://www.memoire.be/" },
  { naam: "RL Events", tekst: "Licht- & geluidstechniek", url: "https://www.rl-events.be/" },
  { naam: "Tentz", tekst: "Kwaliteitstenten & overspanningen", url: "https://www.tentz.be/" },
  { naam: "Levi Party Rental", tekst: "Feestmateriaal & meubilair", url: "https://www.levipartyrental.be/nl" },
  { naam: "Locquet Power & Light", tekst: "Mobiele energie & generatoren", url: "https://locquet.com/nl/" },
];

/**
 * Locaties waar Food Architect al catering verzorgde — overgenomen van de
 * huidige live site. "Vinderoute" en "L'esceau" zo overgenomen (tweemaal
 * consistent opgehaald); controleer of dit de correcte schrijfwijze is.
 */
export const locaties = [
  { naam: "L'esceau", tekst: "Zottegem", url: "https://lesceau.be/" },
  { naam: "De Melkerij", tekst: "Vinderoute (Lovendegem)", url: "https://demelkerij.events/" },
  { naam: "Domein Siliginis", tekst: "Sint-Martens-Latem", url: "https://www.siliginis.be/" },
  { naam: "Prullenbos", tekst: "Wetteren", url: "https://prullenbos.be/" },
  { naam: "Publiek Authentiek", tekst: "Deinze / Zulte", url: "https://www.publiekauthentiek.be/" },
  { naam: "Alix - Table & Jardin d'Amis", tekst: "Gent", url: "https://alix.gent/" },
];

/**
 * Veelgestelde vragen — inhoudelijk overgenomen en vertaald van de huidige
 * live site. De vraag over "het gezicht achter Food Architect" noemde op de
 * oude site ook een "Maître Delphine" naast Chef Kim; die naam komt nergens
 * voor in de nieuwe, aangeleverde content (enkel Chef Kim Vandevoorde), dus
 * hier weggelaten tot bevestigd of dat nog klopt — zie OPENSTAAND.md.
 */
export const faq = [
  { v: "Waarom noemen jullie jezelf 'Food Architect'?", a: "Wij geloven dat een menu moet worden ontworpen zoals een gebouw: met een visie, een stevig fundament en oog voor detail." },
  { v: "Wat is de betekenis van jullie slogan 'Feeding Memories'?", a: "Wij serveren geen maaltijden, wij bouwen herinneringen. Ons doel is dat de smaak en beleving van uw feest nog jarenlang blijft nazinderen." },
  { v: "Hoe ziet het traject van een aanvraag eruit?", a: "Ons traject bestaat uit vier duidelijke stappen: de kennismaking, het proeven van de smaken, het finetunen van de details en de uitvoering op de grote dag." },
  { v: "Werken jullie met lokale producten?", a: "Absoluut. Wij zijn geworteld in de regio Gent en Deinze en werken nauw samen met lokale partners zoals Monsieur Boudin voor ambachtelijke witte pensen." },
  { v: "Kan ik een menu volledig zelf samenstellen?", a: "Jazeker. Wij luisteren naar uw favoriete smaken en herinneringen en vertalen die naar een uniek menu op maat." },
  { v: "Hoe gaan jullie om met allergieën en vegetariërs?", a: "Maatwerk is ons DNA. We ontwerpen volwaardige alternatieve gerechten voor gasten met allergieën of specifieke dieetwensen, zodat zij een gelijkwaardige culinaire ervaring beleven." },
  { v: "Wat houdt het 'Fire & Smoke' concept precies in?", a: "Dit is onze specialiteit gericht op gastronomische BBQ en showcooking, waarbij de kracht van vuur en rook centraal staat voor een unieke beleving." },
  { v: "Voorzien jullie ook personeel?", a: "Ja, wij bieden een totaalservice inclusief professioneel zaalpersoneel onder leiding van onze eigen maître." },
  { v: "Moet ik zelf borden, bestek of glazen huren?", a: "In onze totaalservice nemen wij de volledige logistiek uit handen. Wij kunnen al het nodige materiaal voorzien, van verfijnd servies tot professionele glazen." },
  { v: "Komen jullie ook catering verzorgen op een eigen locatie?", a: "Wij zijn experts in catering op locatie, of dat nu in uw eigen tuin is, op een bedrijventerrein of in een feestzaal." },
  { v: "Hoeveel ruimte hebben jullie nodig in mijn keuken?", a: "Onze chefs zijn getraind om op locatie te werken. We kunnen indien nodig zelfs een volledige pop-up keuken opbouwen met eigen apparatuur." },
  { v: "Wat kost catering bij Food Architect gemiddeld?", a: "Omdat elk feest een uniek ontwerp is, werken we niet met vaste pakketprijzen. We maken altijd een offerte op maat op basis van uw visie en budget." },
  { v: "Hoe kan ik een offerte aanvragen?", a: "U kunt contact opnemen via onze website of direct starten met onze interactieve smaak-check om uw wensen in kaart te brengen." },
  { v: "Is er een minimale groepsgrootte voor boekingen?", a: "We ontwerpen feesten van diverse groottes, van intieme privédiners tot grootschalige bedrijfsevenementen." },
  { v: "Kunnen jullie ook helpen bij het vinden van een locatie?", a: "Door onze jarenlange ervaring in de regio Gent en Deinze kennen we veel unieke locaties en adviseren we u hier graag bij." },
  { v: "Wat gebeurt er als de weersomstandigheden tegenvallen?", a: "Wij denken proactief mee over back-upscenario's, zoals tenten of logistieke aanpassingen, zodat de kwaliteit nooit in het gedrang komt." },
  { v: "Bieden jullie ook drankenarrangementen aan?", a: "Ja, wij verzorgen een volledig drankenpakket op maat, inclusief geselecteerde wijnen, bieren en non-alcoholische alternatieven." },
  { v: "Kunnen we vooraf proeven wat er geserveerd wordt?", a: "Zeker. Bij grote projecten en huwelijken is een proefsessie een cruciaal onderdeel van ons traject om de smaken perfect af te stemmen." },
];

/** Enige review die we van de klant hebben. Geen review aangeleverd = sectie weg. */
export const review = {
  tekst: "Alles liep beter dan we in gedachten hadden. Een absolute meerwaarde voor ons feest.",
  bron: "Sarah & Thomas, huwelijksfeest in Gent",
};

export const gelegenheden = [
  { v: "huwelijk", l: "Huwelijksfeest", f: "tafel" },
  { v: "verjaardag", l: "Verjaardag of jubileum", f: "tafel" },
  { v: "communie", l: "Communie- of lentefeest", f: "walking" },
  { v: "bedrijf", l: "Bedrijfsevenement", f: "walking" },
  { v: "personeel", l: "Personeelsfeest", f: "vuur" },
  { v: "seminarie", l: "Seminarie of lancering", f: "walking" },
  { v: "ander", l: "Iets anders", s: "Vertel het ons in één regel", f: "walking" },
] as const;

export const stijlen = [
  { v: "tafel", l: "Aan tafel geserveerd", s: "Meerdere gangen, rustig tempo" },
  { v: "walking", l: "Walking dinner", s: "Kleine gerechten, veel beweging" },
  { v: "vuur", l: "Fire & Smoke BBQ", s: "Showcooking op het vuur" },
  { v: "twijfel", l: "Ik twijfel nog", s: "We denken graag mee" },
] as const;

export const formuleNamen: Record<string, string> = {
  tafel: "Aan tafel",
  walking: "Walking dinner",
  vuur: "Fire & Smoke",
};

type Knop = { label: string; href: string };
type FormuleKaart = { nr: string; titel: string; tekst: string; foto: string; alt: string; positie?: string };
export type DienstDetail = {
  kicker: string; titel: string; lead: string;
  heroCtaPrimair: Knop; heroCtaSecundair: Knop;
  inleidingTitel: string; inleiding: string[]; inleidingFoto: string; inleidingFotoAlt: string;
  formulesKicker: string; formulesTitel: string; formulesIntro: string; formules: FormuleKaart[];
  faq?: { v: string; a: string }[];
  ctaKicker: string; ctaTitel: string; ctaTekst: string; ctaKnop: Knop;
};

const generiekeHeroLead = "Wij creëren culinaire ervaringen die net zo uniek zijn als jullie verhaal. Van intiem diner tot groots feest — elk detail architecturaal doordacht.";
const generiekeHeroCtas = {
  heroCtaPrimair: { label: "Ontdek onze visie", href: "#inleiding" },
  heroCtaSecundair: { label: "Bekijk portfolio", href: externLinks.impressies },
};
const generiekeCta = {
  ctaKicker: "Klaar om te beginnen?",
  ctaTitel: "Laten We Jullie Avond Samen Ontwerpen",
  ctaTekst: "Neem vrijblijvend contact op voor een eerste kennismaking en proefmenu.",
  ctaKnop: { label: "Vraag een offerte aan", href: externLinks.offerte },
};

/**
 * Zakelijke FAQ, woordelijk identiek op de 4 event-catering-pagina's van de
 * live site (bedrijfsevenementen, personeelsfeesten, seminaries, productlanceringen).
 */
const zakelijkeFaq = [
  { v: "Kan de catering op onze eigen bedrijfslocatie plaatsvinden?", a: "Absoluut, wij zijn experts in het bouwen van een pop-up keuken op locatie, inclusief alle benodigde apparatuur." },
  { v: "Werken jullie met facturatie en heldere offertes?", a: "Ja, als zakelijke partner voorzien wij professionele, gedetailleerde offertes en facturen." },
  { v: "Kunnen jullie rekening houden met een strak tijdschema (bijv. bij seminaries)?", a: "Dat is onze specialiteit. Wij plannen de 'architectuur' van de service exact rondom uw programma." },
  { v: "Bieden jullie ook drankenpakketten aan?", a: "Ja, van lokale Gentse bieren tot geselecteerde wijnen en non-alcoholische alternatieven." },
  { v: "Is er personeel inbegrepen?", a: "Onze service is altijd inclusief professionele bediening onder leiding van een ervaren maître." },
  { v: "Kunnen jullie de catering aanpassen aan onze huisstijlkleuren?", a: "Ja, we kunnen kleuren en thema's subtiel verwerken in de presentatie." },
  { v: "Hoe gaan jullie om met allergieën van medewerkers/klanten?", a: "We integreren vegetarische of allergievriendelijke opties naadloos, zonder in te boeten op kwaliteit." },
  { v: "Verzorgen jullie ook tafels en meubilair?", a: "Indien gewenst regelen wij de volledige verhuur en opbouw van de event-infrastructuur." },
  { v: "Wat is de minimale groepsgrootte voor B2B?", a: "We werken voor zowel kleine directievergaderingen als grote personeelsfeesten voor honderden gasten." },
  { v: "Hoe persoonlijk is het menu?", a: "100%. We starten vanaf een blanco blad om de catering perfect op uw bedrijf af te stemmen." },
];

/**
 * Rijkere structuur voor de dienst-detailpagina's, opgebouwd om zo dicht
 * mogelijk bij de structuur van de bestaande live pagina's te blijven
 * (foodarchitect.idento.be/private-catering/...). Inhoud overgenomen en
 * vertaald. `foto` is het pad (zonder extensie) naar een plekhoudersfoto
 * onder public/images/ — zie PlaceholderFoto.tsx en de leesmij.txt in de
 * bijhorende map.
 */
export const dienstDetails: Record<string, DienstDetail> = {
  huwelijksfeesten: {
    kicker: "Huwelijksfeesten",
    titel: "Jullie Liefde, Onze Architectuur",
    lead: "Wij creëren culinaire ervaringen die net zo uniek zijn als jullie verhaal. Van intiem diner tot groots feest — elk detail architecturaal doordacht.",
    heroCtaPrimair: { label: "Ontdek onze visie", href: "#inleiding" },
    heroCtaSecundair: { label: "Bekijk portfolio", href: externLinks.impressies },
    inleidingTitel: "Een Culinaire Beleving voor Jullie Mooiste Dag",
    inleiding: [
      "Jullie huwelijk vertelt een uniek verhaal. De gerechten, de sfeer en de service mogen dat verhaal versterken. Food Architect creëert huwelijksfeesten op maat, van een intieme receptie tot een uitgebreid diner en een bruisend avondfeest.",
      "Met oog voor smaak, presentatie en timing brengen we alle culinaire elementen samen tot één harmonieus geheel. Zo kunnen jullie volop genieten van elkaar, jullie gasten en ieder bijzonder moment.",
    ],
    inleidingFoto: "private-catering/huwelijksfeesten/inleiding",
    inleidingFotoAlt: "Chef Kim werkt een bord af voor een huwelijksfeest",
    formulesKicker: "Formules",
    formulesTitel: "Drie Culinaire Ervaringen",
    formulesIntro: "Elke formule is volledig op maat samen te stellen. De prijzen variëren op basis van jullie wensen en het seizoen.",
    formules: [
      { nr: "01", titel: "Receptie", tekst: "Een stijlvolle ontvangst met fingerfood, amuses en bubbels. De perfecte opening van jullie avond — licht, verfijnd en sociaal.", foto: "private-catering/huwelijksfeesten/receptie", alt: "Fingerfood en een glas bubbels op een receptietafel" },
      { nr: "02", titel: "Walking Dinner", tekst: "Een dynamisch diner waarbij gasten vrij bewegen tussen culinaire stations. Elke stand een verrassend gerecht — informeel maar verfijnd.", foto: "private-catering/huwelijksfeesten/walking-dinner", alt: "Gast met een glas en een bord tijdens een walking dinner", positie: "top" },
      { nr: "03", titel: "Zittend Diner", tekst: "Het ultieme gastronomische moment. Meerdere gangen geserveerd aan tafel, met aandacht voor presentatie, smaak en timing.", foto: "private-catering/huwelijksfeesten/zittend-diner", alt: "Tafel gedekt voor een meergangen zittend diner" },
    ],
    ctaKicker: "Klaar om te beginnen?",
    ctaTitel: "Laten We Jullie Avond Samen Ontwerpen",
    ctaTekst: "Neem vrijblijvend contact op voor een eerste kennismaking en proefmenu.",
    ctaKnop: { label: "Vraag een offerte aan", href: externLinks.offerte },
  },

  "verjaardagen-jubilea": {
    kicker: "Verjaardagen & jubilea",
    titel: "De Architectuur van een Mijlpaal",
    lead: generiekeHeroLead,
    ...generiekeHeroCtas,
    inleidingTitel: "Stilstaan bij de mooiste momenten van het leven",
    inleiding: [
      "Het vieren van een verjaardag of een huwelijksjubileum is stilstaan bij de mooiste momenten van het leven. Bij Food Architect geloven we dat dergelijke mijlpalen een culinaire omlijsting verdienen die net zo uniek is als de eregast zelf. Wij serveren geen standaardmenu's; wij bouwen een beleving die uw persoonlijke verhaal vertelt.",
      "Van een intiem diner voor uw 50ste verjaardag tot een grootschalig gouden jubileum: wij architectureren uw feest van de eerste uitnodiging tot de laatste digestief.",
    ],
    inleidingFoto: "private-catering/verjaardagen-jubilea/inleiding",
    inleidingFotoAlt: "Tafel gedekt voor een verjaardagsfeest",
    formulesKicker: "Maatwerk",
    formulesTitel: "Uw Visie, Onze Culinaire Uitvoering",
    formulesIntro: "Bij Food Architect staat maatwerk centraal in onze naam en onze werkwijze. Wij vertalen uw favoriete smaken, herinneringen en wensen naar het bord.",
    formules: [
      { nr: "01", titel: "Themafeesten", tekst: "Wilt u een menu dat doet denken aan die ene onvergetelijke reis? Wij ontwerpen het voor u.", foto: "private-catering/verjaardagen-jubilea/themafeesten", alt: "Themagericht gedekte tafel voor een verjaardagsfeest" },
      { nr: "02", titel: "Flexibele Formules", tekst: "Kiest u voor een elegant zittend diner, een dynamische walking dinner of een interactieve Fire & Smoke BBQ?", foto: "private-catering/verjaardagen-jubilea/flexibele-formules", alt: "Walking dinner tijdens een verjaardagsfeest" },
      { nr: "03", titel: "Totaalbeleving", tekst: "Wij nemen de volledige organisatie uit handen — van servies en personeel tot de sfeervolle inkleding — zodat u zich enkel hoeft te focussen op uw gasten.", foto: "private-catering/verjaardagen-jubilea/totaalbeleving", alt: "Gedekte tafel met sfeervolle aankleding" },
    ],
    faq: [
      { v: "Vanaf hoeveel personen verzorgen jullie een verjaardagsfeest?", a: "Wij verzorgen zowel intieme privédiners vanaf kleine groepen als grote tuinfeesten voor honderden gasten." },
      { v: "Kunnen jullie catering verzorgen in mijn eigen woning?", a: "Absoluut, wij zijn gespecialiseerd in private catering aan huis en passen ons aan uw keuken en ruimte aan." },
      { v: "Moet ik zelf voor borden en bestek zorgen?", a: "Nee, in onze totaalservice is al het nodige materiaal inbegrepen, zodat u geen afwas heeft." },
      { v: "Voorzien jullie ook een verjaardagstaart?", a: "Ja, wij kunnen een gepersonaliseerd dessert of een spectaculaire taart ontwerpen die past bij het thema van uw feest." },
      { v: "Kunnen jullie rekening houden met specifieke dieetwensen of allergieën?", a: "Maatwerk zit in ons DNA; we integreren allergievriendelijke of vegetarische opties naadloos in uw menu." },
      { v: "Hoe lang duurt de opbouw en afbraak van een feest aan huis?", a: "Dit hangt af van de formule, maar wij zorgen altijd voor een efficiënte planning zodat uw woning snel weer de oude is." },
      { v: "Zorgen jullie ook voor de dranken?", a: "Ja, wij kunnen een volledig drankenarrangement voorzien, inclusief bediening door ons ervaren team." },
      { v: "Wat is de meest populaire formule voor een jubileum?", a: "Vaak wordt gekozen voor een walking dinner vanwege de informele sfeer, maar voor gouden jubilea is een klassiek zittend diner nog steeds een favoriet." },
      { v: "Komen jullie vooraf kijken naar de feestlocatie?", a: "Indien nodig komen we ter plaatse om de logistiek van de ruimte te bespreken." },
      { v: "Hoe kan ik een offerte op maat aanvragen?", a: "U kunt contact opnemen via ons formulier of direct starten met onze smaak-check op de website." },
    ],
    ...generiekeCta,
  },

  "communie-lentefeesten": {
    kicker: "Communie- & lentefeesten",
    titel: "Een Culinaire Mijlpaal voor Groot en Klein",
    lead: generiekeHeroLead,
    ...generiekeHeroCtas,
    inleidingTitel: "Een dag waarop uw kind centraal staat",
    inleiding: [
      "Het communie- of lentefeest is een dag waarop uw kind centraal staat. Bij Food Architect begrijpen we dat dit vraagt om een specifieke aanpak: een feestelijke sfeer die toegankelijk is voor kinderen, maar waar de volwassenen gastronomisch worden verwend.",
      "Wij ontwerpen een namiddag of avond die perfect aansluit bij de energie van de dag — van een uitgebreid koud en warm buffet tot een hippe walking dinner of een interactieve BBQ.",
    ],
    inleidingFoto: "private-catering/communie-lentefeesten/inleiding",
    inleidingFotoAlt: "Buffet klaargezet voor een communiefeest",
    formulesKicker: "Zorgeloos genieten",
    formulesTitel: "In Eigen Tuin of op Locatie",
    formulesIntro: "Terwijl uw kind speelt, zorgen wij dat alles vlekkeloos verloopt.",
    formules: [
      { nr: "01", titel: "Kindvriendelijk Maatwerk", tekst: "Wij ontwerpen gerechten die kinderen herkennen en lekker vinden, maar dan met de kwalitatieve twist van Food Architect.", foto: "private-catering/communie-lentefeesten/kindvriendelijk-maatwerk", alt: "Kindvriendelijk gerecht mooi opgemaakt" },
      { nr: "02", titel: "Totaalconcept", tekst: "Wij voorzien indien gewenst niet alleen het eten, maar ook de nodige infrastructuur zoals buffettafels, borden en bediening.", foto: "private-catering/communie-lentefeesten/totaalconcept", alt: "Opgestelde buffettafel voor een communiefeest" },
      { nr: "03", titel: "Ontzorging", tekst: "Chef Kim en ons team waken over de kwaliteit en de timing, zodat u elk moment met uw gasten kunt delen.", foto: "private-catering/communie-lentefeesten/ontzorging", alt: "Chef Kim aan het werk tijdens een communiefeest" },
    ],
    faq: [
      { v: "Vanaf hoeveel personen verzorgen jullie een communiefeest?", a: "Wij passen onze formules aan op basis van uw gezelschap, van intieme familiekringen tot grote groepen." },
      { v: "Kunnen jullie ook een springkasteel of animatie regelen?", a: "Via onze partners kunnen we adviseren in de totale beleving van het feest." },
      { v: "Voorzien jullie aparte menu's voor kinderen?", a: "Ja, we ontwerpen specifieke kindergerechten die visueel aantrekkelijk en smaakvol zijn." },
      { v: "Wat als het weer tegenvalt bij een tuinfeest?", a: "Wij denken proactief mee over tenten en logistieke oplossingen voor elk weertype." },
      { v: "Bieden jullie ook dessertenbuffetten aan?", a: "Absoluut, een spectaculair dessertenbuffet is vaak het hoogtepunt van de namiddag." },
      { v: "Hoe lang van tevoren moeten we boeken?", a: "De communieperiode is zeer druk; we raden aan om zodra de datum vaststaat contact op te nemen." },
      { v: "Kunnen we ook enkel voor een receptie kiezen?", a: "Ja, wij verzorgen recepties met verfijnde hapjes die de toon zetten voor de rest van de dag." },
      { v: "Zijn dranken inbegrepen?", a: "Wij kunnen een drankenforfait op maat voorzien, inclusief alcoholvrije alternatieven voor de kinderen." },
      { v: "Werken jullie met vaste prijzen per persoon?", a: "Elke offerte is maatwerk, gebaseerd op uw specifieke wensen en menukeuze." },
      { v: "Komen jullie ook op zondag?", a: "Ja, wij staan klaar op de dagen die voor uw familie het belangrijkst zijn." },
    ],
    ...generiekeCta,
  },

  bedrijfsevenementen: {
    kicker: "Bedrijfsevenementen",
    titel: "Waar Strategie en Gastronomie Versmelten",
    lead: generiekeHeroLead,
    ...generiekeHeroCtas,
    inleidingTitel: "Een visitekaartje voor uw onderneming",
    inleiding: [
      "Een geslaagd bedrijfsevenement is een visitekaartje voor uw onderneming. Bij Food Architect begrijpen we dat de catering naadloos moet aansluiten bij uw merkwaarden.",
      "Wij architectureren hospitality die niet alleen voedt, maar ook uw professionele boodschap versterkt. Van een strakke netwerkreceptie tot een uitgebreid galadiner: wij bouwen de culinaire setting die uw succes ondersteunt.",
    ],
    inleidingFoto: "event-catering/bedrijfsevenementen/inleiding",
    inleidingFotoAlt: "Hapjes geserveerd tijdens een bedrijfsevenement",
    formulesKicker: "Onze aanpak",
    formulesTitel: "Culinaire Ontzorging op Hoog Niveau",
    formulesIntro: "Vier pijlers die elk bedrijfsevenement dragen.",
    formules: [
      { nr: "01", titel: "Maatwerk menu's", tekst: "Die passen bij de tone-of-voice van uw event.", foto: "event-catering/bedrijfsevenementen/maatwerk-menus", alt: "Maatwerkmenu geserveerd tijdens een bedrijfsevenement" },
      { nr: "02", titel: "Vlekkeloze logistiek", tekst: "Coördinatie van A tot Z door ons ervaren team.", foto: "event-catering/bedrijfsevenementen/logistiek", alt: "Bediening tijdens een bedrijfsevenement" },
      { nr: "03", titel: "Lokale kwaliteit", tekst: "Wij serveren het beste uit de regio Gent en Deinze.", foto: "event-catering/bedrijfsevenementen/lokale-kwaliteit", alt: "Lokale ingrediënten verwerkt in een gerecht" },
    ],
    faq: zakelijkeFaq,
    ...generiekeCta,
  },

  personeelsfeesten: {
    kicker: "Personeelsfeesten",
    titel: "Een Culinaire Dankjewel voor uw Team",
    lead: generiekeHeroLead,
    ...generiekeHeroCtas,
    inleidingTitel: "Niets versterkt de groepsgeest zoals samen genieten",
    inleiding: [
      "Food Architect ontwerpt personeelsfeesten waarbij de informele sfeer centraal staat, zonder in te boeten op kwaliteit.",
      "Wij creëren de Feeding Memories die uw medewerkers nog lang na het feest zullen bespreken bij de koffieautomaat.",
    ],
    inleidingFoto: "event-catering/personeelsfeesten/inleiding",
    inleidingFotoAlt: "Collega's genieten samen tijdens een personeelsfeest",
    formulesKicker: "Formules",
    formulesTitel: "Van Formeel Diner tot 'Fire & Smoke' Spektakel",
    formulesIntro: "Kiest u voor een chique avond of een rauwe, interactieve beleving? Een combinatie is ook mogelijk.",
    formules: [
      { nr: "01", titel: "Walking Dinners", tekst: "Ideaal voor maximale interactie tussen collega's.", foto: "event-catering/personeelsfeesten/walking-dinners", alt: "Collega's tijdens een walking dinner" },
      { nr: "02", titel: "Fire & Smoke BBQ", tekst: "De ultieme informele setting met showcooking.", foto: "event-catering/personeelsfeesten/fire-smoke-bbq", alt: "Showcooking op de grill tijdens een personeelsfeest" },
      { nr: "03", titel: "Themafeesten", tekst: "Wij passen onze architectuur aan uw specifieke wensen aan.", foto: "event-catering/personeelsfeesten/themafeesten", alt: "Themagericht ingericht personeelsfeest" },
    ],
    faq: zakelijkeFaq,
    ...generiekeCta,
  },

  seminaries: {
    kicker: "Seminaries & congressen",
    titel: "Brandstof voor Focus",
    lead: generiekeHeroLead,
    ...generiekeHeroCtas,
    inleidingTitel: "Een moment om op te laden",
    inleiding: [
      "Tijdens een intensief seminarie is de lunch meer dan een pauze; het is een moment om op te laden. Food Architect ontwerpt 'Light & Energizing' menu's die de beruchte middagdip voorkomen.",
      "Wij architectureren een culinaire flow die de productiviteit van uw bijeenkomst ondersteunt.",
    ],
    inleidingFoto: "event-catering/seminaries/inleiding",
    inleidingFotoAlt: "Lichte lunch klaargezet tijdens een seminarie",
    formulesKicker: "Formules",
    formulesTitel: "Efficiënte Hospitality die Verbindt",
    formulesIntro: "Drie pijlers die uw programma nooit vertragen.",
    formules: [
      { nr: "01", titel: "Gezonde Breaks", tekst: "Verse sappen, lokale ingrediënten en lichte bites.", foto: "event-catering/seminaries/gezonde-breaks", alt: "Verse sappen en lichte hapjes tijdens een pauze" },
      { nr: "02", titel: "Vlotte Service", tekst: "Zodat uw strakke tijdschema nooit in het gedrang komt.", foto: "event-catering/seminaries/vlotte-service", alt: "Snelle, efficiënte bediening tijdens een seminarie" },
      { nr: "03", titel: "Maatwerk", tekst: "Van een snelle broodjeslunch met een twist tot een volwaardig buffet.", foto: "event-catering/seminaries/maatwerk", alt: "Lunchbuffet klaargezet tijdens een seminarie" },
    ],
    faq: zakelijkeFaq,
    ...generiekeCta,
  },

  productlanceringen: {
    kicker: "Productlanceringen",
    titel: "De Architectuur van uw Merk",
    lead: generiekeHeroLead,
    ...generiekeHeroCtas,
    inleidingTitel: "Een nieuw product vraagt om een krachtig verhaal",
    inleiding: [
      "Food Architect vertaalt uw visie naar het bord. Wij ontwerpen gerechten die de essentie van uw lancering weerspiegelen, of dat nu gaat om kleur, textuur of filosofie.",
      "Wij zorgen voor de culinaire uplift die uw product de aandacht geeft die het verdient.",
    ],
    inleidingFoto: "event-catering/productlanceringen/inleiding",
    inleidingFotoAlt: "Culinaire presentatie tijdens een productlancering",
    formulesKicker: "Onze aanpak",
    formulesTitel: "Innovatie op het Bord",
    formulesIntro: "Vier pijlers die uw lancering culinair vertalen.",
    formules: [
      { nr: "01", titel: "Creatieve Concepten", tekst: "Hapjes die passen bij de identiteit van uw merk.", foto: "event-catering/productlanceringen/creatieve-concepten", alt: "Hapje ontworpen rond een merkidentiteit" },
      { nr: "02", titel: "Visueel Spektakel", tekst: "Architecturale presentaties die gasten direct willen delen.", foto: "event-catering/productlanceringen/visueel-spektakel", alt: "Architecturaal opgemaakt gerecht tijdens een productlancering" },
      { nr: "03", titel: "Maatwerk", tekst: "Wij denken mee over hoe we uw merknaam culinair kunnen verankeren.", foto: "event-catering/productlanceringen/maatwerk", alt: "Op maat ontworpen gerecht voor een merklancering" },
    ],
    faq: zakelijkeFaq,
    ...generiekeCta,
  },
};
