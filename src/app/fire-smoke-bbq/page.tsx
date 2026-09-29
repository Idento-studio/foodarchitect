import type { Metadata } from "next";
import DienstHero from "@/components/DienstHero";
import SubDiensten from "@/components/SubDiensten";
import FotoBand from "@/components/FotoBand";
import Traject from "@/components/Traject";
import SmaakCheck from "@/components/SmaakCheck";
import SlotCta from "@/components/SlotCta";
import { diensten, offerteHref, megaVuur } from "@/lib/content";

const dienst = diensten.find((d) => d.slug === "fire-smoke-bbq")!;

export const metadata: Metadata = {
  title: "Traiteur Fire & Smoke BBQ Gent",
  description:
    "Traiteur voor Fire & Smoke BBQ in Gent en de ruime regio: showcooking op open vuur en in de rook, bij een privéfeest of een bedrijfsevent. Chef Kim grilt live voor uw gasten.",
  keywords: ["Fire & Smoke BBQ Gent", "traiteur BBQ Gent", "showcooking catering Gent", "traiteur regio Gent", "BBQ catering op maat Gent"],
  alternates: { canonical: "/fire-smoke-bbq/" },
  openGraph: {
    title: dienst.titel,
    description: "Authentieke showcooking met een twist, live gegrild voor uw gasten.",
    url: "/fire-smoke-bbq/",
    images: [{ url: "/images/og-home.jpg", width: 1200, height: 630, alt: "Food Architect" }],
  },
};

export default function FireSmokeBbq() {
  return (
    <>
      <DienstHero
        kicker="Fire & Smoke"
        titel={dienst.titel}
        tekst={dienst.tekst}
        voor={{ src: dienst.beeld, alt: dienst.alt }}
        knoppen={[
          { label: "Doe de smaak-check", href: "#smaakcheck", stijl: "vol" },
          { label: "Vraag offerte aan", href: offerteHref, stijl: "lijn" },
        ]}
      />
      <SubDiensten
        kicker="Past het bij uw feest?"
        titel="Fire & Smoke, bij elk soort feest"
        lead="Geen apart bedrijf, maar onze eigen manier van koken op open vuur: even geschikt thuis als op een bedrijfsterrein."
        items={megaVuur}
      />
      <FotoBand />
      <Traject />
      <SmaakCheck />
      <SlotCta />
    </>
  );
}
