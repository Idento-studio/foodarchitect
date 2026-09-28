import Hero from "@/components/Hero";
import Filosofie from "@/components/Filosofie";
import FotoBand from "@/components/FotoBand";
import Diensten from "@/components/Diensten";
import Traject from "@/components/Traject";
import Lokaal from "@/components/Lokaal";
import SmaakCheck from "@/components/SmaakCheck";
import SlotCta from "@/components/SlotCta";
import { site } from "@/lib/content";

/** @type FoodEstablishment → CateringService is het specifieke type voor een cateraar. */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FoodEstablishment",
  additionalType: "https://schema.org/CateringService",
  name: site.naam,
  description:
    "Catering op maat met lokale producten voor huwelijksfeesten, bedrijfsevenementen en Fire & Smoke BBQ.",
  url: site.domein,
  email: site.mail,
  telephone: site.telefoon,
  servesCuisine: ["Belgisch", "Frans", "Fire & Smoke BBQ"],
  areaServed: [{ "@type": "AdministrativeArea", name: "Vlaanderen" }],
  address: {
    "@type": "PostalAddress",
    streetAddress: site.adres.straat,
    postalCode: site.adres.postcode,
    addressLocality: site.adres.gemeente,
    addressRegion: "Oost-Vlaanderen",
    addressCountry: "BE",
  },
  founder: { "@type": "Person", name: "Kim Vandevoorde", jobTitle: "Chef en oprichter" },
  sameAs: [] as string[], // socialprofielen toevoegen zodra bevestigd
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
