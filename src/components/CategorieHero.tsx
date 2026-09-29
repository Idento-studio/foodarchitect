import { offerteHref } from "@/lib/content";

type Knop = { label: string; href: string };

export default function CategorieHero({
  kicker, titel, lead, beeld, beeldAlt, ctaPrimair, ctaSecundair, compact, toonKnoppen = true,
}: {
  kicker: string; titel: string; lead: string; beeld?: string; beeldAlt?: string;
  ctaPrimair?: Knop; ctaSecundair?: Knop; compact?: boolean; toonKnoppen?: boolean;
}) {
  return (
    <section className={`hero donker${beeld ? " met-foto" : ""}${compact ? " compact" : ""}`}>
      {beeld && (
        <div className="hero-foto">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={beeld} alt={beeldAlt ?? ""} fetchPriority="high" width={900} height={1125} />
        </div>
      )}
      <div className="raster" aria-hidden="true" />
      <div className="wrap">
        <div className="hero-grid">
          <span className="kicker streep">{kicker}</span>
          <h1>{titel}</h1>
          <p className="lead">{lead}</p>
          {toonKnoppen && (
            <div className="knoppen">
              <a className="btn btn-vol" href={ctaPrimair?.href ?? "#smaakcheck"}>
                {ctaPrimair?.label ?? "Doe de smaak-check"}
              </a>
              <a className="btn btn-lijn" href={ctaSecundair?.href ?? offerteHref}>
                {ctaSecundair?.label ?? "Vraag offerte aan"}
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
