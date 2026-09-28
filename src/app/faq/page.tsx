import type { Metadata } from "next";
import CategorieHero from "@/components/CategorieHero";
import Faq from "@/components/Faq";
import SmaakCheck from "@/components/SmaakCheck";
import SlotCta from "@/components/SlotCta";

export const metadata: Metadata = {
  title: "Veelgestelde vragen",
  description: "Antwoorden op de meest gestelde vragen over catering bij Food Architect: van maatwerk en allergieën tot offertes en Fire & Smoke BBQ.",
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
      />
      <section className="sectie licht">
        <div className="wrap">
          <Faq />
        </div>
      </section>
      <SmaakCheck />
      <SlotCta />
    </>
  );
}
