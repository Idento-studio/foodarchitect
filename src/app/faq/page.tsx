import type { Metadata } from "next";
import CategorieHero from "@/components/CategorieHero";
import Faq from "@/components/Faq";
import SmaakCheck from "@/components/SmaakCheck";
import SlotCta from "@/components/SlotCta";
import { faqCategorieen } from "@/lib/content";

export const metadata: Metadata = {
  title: "Veelgestelde vragen",
  description: "Antwoorden op de meest gestelde vragen over uw traiteur in Gent: van maatwerk en allergieën tot offertes en Fire & Smoke BBQ.",
  keywords: ["traiteur Gent vragen", "catering FAQ Gent", "traiteur regio Gent", "cateraar Gent informatie", "Food Architect veelgestelde vragen"],
  alternates: { canonical: "/faq/" },
  openGraph: {
    title: "Veelgestelde vragen",
    description: "Alles wat u moet weten over de architectuur van uw feest.",
    url: "/faq/",
    images: [{ url: "/images/og-home.jpg", width: 1200, height: 630, alt: "Food Architect" }],
  },
};

export default function FaqPagina() {
  return (
    <>
      <CategorieHero
        kicker="Veelgestelde vragen"
        titel="Alles wat u moet weten"
        lead="Wij geloven dat transparantie en een goede voorbereiding de basis zijn van elke Feeding Memory. Hieronder de meest gestelde vragen."
        compact
        toonKnoppen={false}
      />
      <section className="sectie licht">
        <div className="wrap">
          <Faq categorieen={faqCategorieen} />
        </div>
      </section>
      <SmaakCheck />
      <SlotCta />
    </>
  );
}
