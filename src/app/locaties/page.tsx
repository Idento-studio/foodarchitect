import type { Metadata } from "next";
import CategorieHero from "@/components/CategorieHero";
import LinkKaarten from "@/components/LinkKaarten";
import SmaakCheck from "@/components/SmaakCheck";
import SlotCta from "@/components/SlotCta";
import { locaties } from "@/lib/content";

export const metadata: Metadata = {
  title: "Feestlocaties Gent",
  description: "Ontdek de unieke feestlocaties in en rond Gent en Deinze waar uw traiteur Food Architect al catering verzorgde.",
  keywords: ["feestlocaties regio Gent", "traiteur locaties Gent", "trouwlocatie Gent traiteur", "catering locatie Gent", "traiteur regio Gent"],
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
        compact
        toonKnoppen={false}
      />
      <section className="sectie licht">
        <div className="wrap">
          <LinkKaarten items={locaties} />
        </div>
      </section>
      <SmaakCheck />
      <SlotCta />
    </>
  );
}
