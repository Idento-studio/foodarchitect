/**
 * Hero voor een dienstenpagina: rustige groene achtergrond met het
 * vierkantjespatroon, en rechts twee staande fotokaartjes over elkaar.
 * Geen foto-overlay meer over de volledige breedte.
 *
 * Plaats dit bestand in src/components/ en voeg het CSS-blok uit
 * dienst-hero.css toe onderaan src/app/globals.css.
 *
 * Gebruik in bv. src/app/private-catering/huwelijksfeesten/page.tsx:
 *
 *   <DienstHero
 *     kicker="Huwelijksfeesten"
 *     titel="Jullie Liefde, Onze Architectuur"
 *     tekst="Wij creëren culinaire ervaringen die net zo uniek zijn als jullie verhaal. Van intiem diner tot groots feest, elk detail architecturaal doordacht."
 *     voor={{ src: "/images/huwelijk-diner.webp", alt: "Gast snijdt een stuk varkenshaas met jus" }}
 *     achter={{ src: "/images/huwelijk-hapjes.webp", alt: "Hapjes met mousse en radijs in de tuin" }}
 *     knoppen={[
 *       { label: "Ontdek onze visie", href: "#visie", stijl: "vol" },
 *       { label: "Bekijk portfolio", href: "/impressies/", stijl: "lijn" },
 *     ]}
 *   />
 */

type Beeld = { src: string; alt: string; positie?: string };
type Knop = { label: string; href: string; stijl?: "vol" | "lijn" };

export default function DienstHero({
  kicker, titel, tekst, voor, achter, knoppen = [],
}: {
  kicker: string;
  titel: string;
  tekst: string;
  voor?: Beeld;
  achter?: Beeld;
  knoppen?: Knop[];
}) {
  const heeftBeeld = Boolean(voor || achter);
  return (
    <section className="dienst-hero">
      <div className="raster" aria-hidden="true" />
      <div className={`wrap grid${heeftBeeld ? "" : " grid-1"}`}>
        <div>
          <span className="kicker streep">{kicker}</span>
          <h1>{titel}</h1>
          <p className="lead">{tekst}</p>
          {knoppen.length > 0 && (
            <div className="knoppen">
              {knoppen.map((k) => (
                <a key={k.href + k.label}
                   className={`btn ${k.stijl === "lijn" ? "btn-lijn" : "btn-vol"}`}
                   href={k.href}>
                  {k.label}
                </a>
              ))}
            </div>
          )}
        </div>

        {heeftBeeld && (
          <div className="stapel">
            {/* Static export: geen next/image-optimalisatie, dus vooraf verkleinde WebP's. */}
            {/* eslint-disable @next/next/no-img-element */}
            {achter && (
              <figure className="achter">
                <img src={achter.src} alt={achter.alt} loading="eager" width={900} height={1125}
                     style={{ objectPosition: achter.positie ?? "center" }} />
              </figure>
            )}
            {voor && (
              <figure className="voor">
                <img src={voor.src} alt={voor.alt} fetchPriority="high" width={900} height={1125}
                     style={{ objectPosition: voor.positie ?? "center" }} />
              </figure>
            )}
            {/* eslint-enable @next/next/no-img-element */}
          </div>
        )}
      </div>
    </section>
  );
}
