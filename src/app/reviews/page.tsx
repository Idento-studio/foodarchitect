import type { Metadata } from "next";
import CategorieHero from "@/components/CategorieHero";
import Testimonial from "@/components/Testimonial";
import SlotCta from "@/components/SlotCta";

export const metadata: Metadata = {
  title: "Reviews",
  description: "Wat klanten zeggen over catering bij Food Architect.",
  alternates: { canonical: "/reviews/" },
  openGraph: {
    title: "Reviews",
    description: "Wat klanten zeggen over catering bij Food Architect.",
    url: "/reviews/",
    images: [{ url: "/images/og-home.jpg", width: 1200, height: 630, alt: "Food Architect" }],
  },
};

export default function ReviewsPagina() {
  return (
    <>
      <CategorieHero
        kicker="Reviews"
        titel="Wat klanten zeggen"
        lead="Een greep uit de reacties van gasten en klanten na hun feest."
      />
      <section className="sectie salie">
        <div className="wrap">
          <Testimonial />
          {/* Meer reviews toevoegen zodra aangeleverd: uitbreiden naar een lijst in content.ts.
              Niets verzinnen — zie OPENSTAAND.md. */}
        </div>
      </section>
      <SlotCta />
    </>
  );
}
