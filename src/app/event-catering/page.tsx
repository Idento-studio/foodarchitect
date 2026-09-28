import type { Metadata } from "next";
import DienstHero from "@/components/DienstHero";
import SubDiensten from "@/components/SubDiensten";
import FotoBand from "@/components/FotoBand";
import Traject from "@/components/Traject";
import SmaakCheck from "@/components/SmaakCheck";
import SlotCta from "@/components/SlotCta";
import { diensten, externLinks, megaEvent } from "@/lib/content";

const dienst = diensten.find((d) => d.slug === "event-catering")!;

export const metadata: Metadata = {
  title: dienst.titel,
  description:
    "Cateringpartner voor bedrijfsevenementen, personeelsfeesten, seminaries en productlanceringen in Vlaanderen. Hospitality die uw merk versterkt.",
  alternates: { canonical: "/event-catering/" },
  openGraph: {
    title: dienst.titel,
    description: "Hospitality die uw merk versterkt, van klantenreceptie tot productlancering.",
    url: "/event-catering/",
    images: [{ url: "/images/og-home.jpg", width: 1200, height: 630, alt: "Food Architect" }],
  },
};

export default function EventCatering() {
  return (
    <>
      <DienstHero
        kicker="Event catering"
        titel={dienst.titel}
        tekst={dienst.tekst}
        voor={{ src: dienst.beeld, alt: dienst.alt }}
        knoppen={[
          { label: "Doe de smaak-check", href: "#smaakcheck", stijl: "vol" },
          { label: "Vraag offerte aan", href: externLinks.offerte, stijl: "lijn" },
        ]}
      />
      <SubDiensten
        kicker="Voor elk bedrijfsmoment"
        titel="Hospitality op maat van uw event"
        lead="Van klantenreceptie tot personeelsfeest: wij stemmen tempo, bediening en menu af op uw programma."
        items={megaEvent}
      />
      <FotoBand />
      <Traject />
      <SmaakCheck />
      <SlotCta />
    </>
  );
}
