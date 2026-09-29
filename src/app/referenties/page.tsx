import type { Metadata } from "next";
import CategorieHero from "@/components/CategorieHero";
import SlotCta from "@/components/SlotCta";
import { externLinks } from "@/lib/content";

export const metadata: Metadata = {
  title: "Referenties",
  description: "Bekijk het portfolio van uw traiteur in Gent: eerdere huwelijksfeesten, bedrijfsevenementen en Fire & Smoke BBQ's.",
  keywords: ["traiteur Gent portfolio", "catering referenties Gent", "traiteur regio Gent voorbeelden", "cateraar Gent eerder werk", "Food Architect referenties"],
  alternates: { canonical: "/referenties/" },
  openGraph: {
    title: "Referenties",
    description: "Een blik op eerder werk van Food Architect.",
    url: "/referenties/",
    images: [{ url: "/images/og-home.jpg", width: 1200, height: 630, alt: "Food Architect" }],
  },
};

export default function ReferentiesPagina() {
  return (
    <>
      <CategorieHero
        kicker="Referenties"
        titel="Eerder werk"
        lead="Benieuwd hoe een feest of event van Food Architect er in de praktijk uitziet? Ons portfolio geeft een goede indruk."
        compact
        toonKnoppen={false}
      />
      <section className="sectie licht">
        <div className="wrap" style={{ maxWidth: "44em" }}>
          <p className="lead">
            Concrete klantcases en beeldmateriaal per project volgen hier zodra aangeleverd. Bekijk intussen
            een ruimere selectie foto&apos;s en sfeerbeelden in onze portfolio.
          </p>
          <div className="knoppen" style={{ marginTop: "1.6rem" }}>
            <a className="btn btn-vol" href={externLinks.impressies}>Bekijk portfolio</a>
          </div>
        </div>
      </section>
      <SlotCta />
    </>
  );
}
