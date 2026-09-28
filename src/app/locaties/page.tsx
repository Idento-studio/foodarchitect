import type { Metadata } from "next";
import CategorieHero from "@/components/CategorieHero";
import SmaakCheck from "@/components/SmaakCheck";
import SlotCta from "@/components/SlotCta";
import { locaties } from "@/lib/content";

export const metadata: Metadata = {
  title: "Unieke locaties",
  description: "Ontdek de unieke feestlocaties in en rond Gent en Deinze waar Food Architect al catering verzorgde.",
  alternates: { canonical: "/locaties/" },
  openGraph: {
    title: "Unieke locaties",
    description: "Feestlocaties in en rond Gent en Deinze waar we al catering verzorgden.",
    url: "/locaties/",
    images: [{ url: "/images/og-home.jpg", width: 1200, height: 630, alt: "Food Architect" }],
  },
};

export default function LocatiesPagina() {
  return (
    <>
      <CategorieHero
        kicker="Locaties"
        titel="Unieke vestigingen"
        lead="Van kasteeldomein tot industriële loods: wij verzorgen catering op de locatie van uw keuze, en kennen deze unieke plekken in en rond Gent en Deinze goed."
      />
      <section className="sectie licht">
        <div className="wrap">
          <ul className="partners">
            {locaties.map((l) => (
              <li key={l.naam}>
                <b>{l.naam}</b>
                <span>{l.plaats}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <SmaakCheck />
      <SlotCta />
    </>
  );
}
