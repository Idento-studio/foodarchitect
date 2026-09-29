import type { Metadata } from "next";
import DienstHero from "@/components/DienstHero";
import SubDiensten from "@/components/SubDiensten";
import FotoBand from "@/components/FotoBand";
import Traject from "@/components/Traject";
import SmaakCheck from "@/components/SmaakCheck";
import SlotCta from "@/components/SlotCta";
import { diensten, offerteHref, megaPrivate } from "@/lib/content";

const dienst = diensten.find((d) => d.slug === "private-catering")!;

export const metadata: Metadata = {
  title: "Traiteur Privéfeesten Gent",
  description:
    "Traiteur voor privéfeesten in Gent, Deinze en de ruime regio: huwelijksfeesten, verjaardagen en communiefeesten. Chef Kim Vandevoorde ontwerpt het menu dat bij uw feest past.",
  keywords: ["traiteur privéfeest Gent", "catering privéfeest Gent", "traiteur regio Gent particulier", "cateraar feest Gent", "traiteur Gent huwelijk verjaardag"],
  alternates: { canonical: "/private-catering/" },
  openGraph: {
    title: dienst.titel,
    description: "Jullie droomdag, culinair vertaald. Menu's op maat voor elk privéfeest.",
    url: "/private-catering/",
    images: [{ url: "/images/og-home.jpg", width: 1200, height: 630, alt: "Food Architect" }],
  },
};

export default function PrivateCatering() {
  return (
    <>
      <DienstHero
        kicker="Private catering"
        titel={dienst.titel}
        tekst={dienst.tekst}
        voor={{ src: dienst.beeld, alt: dienst.alt }}
        knoppen={[
          { label: "Doe de smaak-check", href: "#smaakcheck", stijl: "vol" },
          { label: "Vraag offerte aan", href: offerteHref, stijl: "lijn" },
        ]}
      />
      <SubDiensten
        kicker="Kies uw gelegenheid"
        titel="Voor elk privéfeest een menu op maat"
        lead="Van intiem tot uitbundig: elk voorstel vertrekt van uw gasten en het verhaal dat u wil vertellen."
        items={megaPrivate}
      />
      <FotoBand />
      <Traject />
      <SmaakCheck />
      <SlotCta />
    </>
  );
}
