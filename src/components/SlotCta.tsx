import { offerteHref } from "@/lib/content";

type Knop = { label: string; href: string };

export default function SlotCta({
  kicker = "Feeding memories", titel = "Laten we samen uw menu ontwerpen",
  lead = "Vrijblijvend, persoonlijk en op maat van uw feest.",
  ctaPrimair, ctaSecundair,
}: {
  kicker?: string; titel?: string; lead?: string; ctaPrimair?: Knop; ctaSecundair?: Knop;
}) {
  return (
    <section className="sectie slot donker" id="slot">
      {/* Optioneel liggend sfeerbeeld: zet /public/images/cta.webp klaar en haal dit uit commentaar.
          <div className="cta-foto"><img src="/images/cta.webp" alt="" loading="lazy" /></div> */}
      <div className="wrap">
        <span className="kicker streep">{kicker}</span>
        <h2>{titel}</h2>
        <p className="lead">{lead}</p>
        <div className="knoppen">
          <a className="btn btn-vol" href={ctaPrimair?.href ?? offerteHref}>
            {ctaPrimair?.label ?? "Vraag offerte aan"}
          </a>
          <a className="btn btn-lijn" href={ctaSecundair?.href ?? "#smaakcheck"}>
            {ctaSecundair?.label ?? "Doe de smaak-check"}
          </a>
        </div>
      </div>
    </section>
  );
}
