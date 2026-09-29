import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Filosofie from "@/components/Filosofie";
import FotoBand from "@/components/FotoBand";
import Diensten from "@/components/Diensten";
import Traject from "@/components/Traject";
import Lokaal from "@/components/Lokaal";
import SmaakCheck from "@/components/SmaakCheck";
import SlotCta from "@/components/SlotCta";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Traiteur Gent & Culinaire Catering | Food Architect",
  description:
    "Food Architect is uw traiteur in Gent en de ruime regio: catering van hoge kwaliteit op maat, met lokale producten, voor huwelijksfeesten, bedrijfsevenementen en Fire & Smoke BBQ.",
  keywords: ["traiteur Gent", "traiteur regio Gent", "catering Gent", "cateraar Gent", "traiteur hoge kwaliteit"],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Food Architect: Traiteur Gent & Culinaire Catering",
    description: "Wij serveren geen maaltijden. Wij creëren herinneringen. Traiteur van hoge kwaliteit in Gent en de ruime regio.",
    url: "/",
    images: [{ url: "/images/og-home.jpg", width: 1200, height: 630, alt: "Food Architect" }],
  },
};

/** @type FoodEstablishment → CateringService is het specifieke type voor een cateraar. */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FoodEstablishment",
  additionalType: "https://schema.org/CateringService",
  name: site.naam,
  description:
    "Traiteur in Gent en de ruime regio: catering van hoge kwaliteit op maat met lokale producten, voor huwelijksfeesten, bedrijfsevenementen en Fire & Smoke BBQ.",
  url: site.domein,
  email: site.mail,
  telephone: site.telefoon,
  servesCuisine: ["Belgisch", "Frans", "Fire & Smoke BBQ"],
  areaServed: [
    { "@type": "City", name: "Gent" },
    { "@type": "City", name: "Deinze" },
    { "@type": "City", name: "De Pinte" },
    { "@type": "City", name: "Sint-Martens-Latem" },
    { "@type": "City", name: "Destelbergen" },
    { "@type": "City", name: "Merelbeke" },
    { "@type": "City", name: "Lochristi" },
    { "@type": "AdministrativeArea", name: "Oost-Vlaanderen" },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: site.adres.straat,
    postalCode: site.adres.postcode,
    addressLocality: site.adres.gemeente,
    addressRegion: "Oost-Vlaanderen",
    addressCountry: "BE",
  },
  founder: { "@type": "Person", name: "Kim Vandevoorde", jobTitle: "Chef en oprichter" },
  taxID: site.ondernemingsnummer,
  vatID: site.btw,
  sameAs: [site.facebook, site.instagram],
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero />
      <Filosofie />
      <FotoBand />
      <Diensten />
      <Traject />
      <Lokaal />
      <SmaakCheck />
      <SlotCta />
    </>
  );
}
