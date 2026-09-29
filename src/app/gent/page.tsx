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
  title: "Traiteur Gent",
  description: "Op zoek naar een traiteur in Gent? Food Architect is dé traiteur van hoge kwaliteit voor huwelijksfeesten, bedrijfsevents en privéfeesten in Gent en de ruime regio.",
  keywords: ["traiteur Gent", "traiteur regio Gent", "catering Gent", "cateraar Gent", "traiteur hoge kwaliteit Gent"],
  alternates: { canonical: "/gent/" },
  openGraph: {
    title: "Traiteur Gent | Food Architect",
    description: "Dé traiteur van hoge kwaliteit in Gent en de ruime regio.",
    url: "/gent/",
    images: [{ url: "/images/og-home.jpg", width: 1200, height: 630, alt: "Food Architect" }],
  },
};

/** Zelfde FoodEstablishment-opzet als de homepage, maar toegespitst op Gent voor lokale SEO. */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FoodEstablishment",
  additionalType: "https://schema.org/CateringService",
  name: site.naam,
  description: "Traiteur in Gent: catering van hoge kwaliteit op maat met lokale producten.",
  url: `${site.domein}/gent/`,
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

/**
 * Ruime regio rond Gent — aanname op basis van de bestaande basis in De Pinte/Deinze,
 * niet apart bevestigd door de klant. Controleer en pas aan waar nodig, zie OPENSTAAND.md.
 */
const plaatsen = [
  "Gent-centrum", "Sint-Amandsberg", "Gentbrugge", "Ledeberg", "Drongen", "Zwijnaarde",
  "Destelbergen", "Merelbeke", "De Pinte", "Sint-Martens-Latem", "Deinze", "Lochristi",
];

export default function TraiteurGent() {
  return (
    <>
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero
        kicker="Traiteur in Gent"
        titel="Traiteur Gent: Catering van Topkwaliteit voor Elk Feest"
        leadRegel1="Op zoek naar een traiteur in Gent die uw feest tot in de puntjes verzorgt?"
        leadRegel2="Food Architect brengt culinaire architectuur naar Gent en de ruime regio."
        feitTitel="Traiteur in Gent"
        feitTekst="Catering in de ruime regio rond Gent"
      />
      <Filosofie
        kicker="Uw traiteur in Gent"
        titel="Feeding Memories, uw Traiteur in Gent"
        onder="Elke traiteuropdracht in Gent is een unieke constructie."
        paragraaf1="Chef Kim Vandevoorde bouwt als traiteur in Gent elk menu zoals een architect een gebouw ontwerpt: met precisie, maatwerk en de beste lokale fundamenten. Wij ontzorgen u volledig, van de eerste amuse tot de laatste digestief."
        paragraaf2="Catering op maat met lokale producten, als vaste traiteur in Gent en de ruime regio eromheen."
      />
      <FotoBand />
      <Diensten />
      <Traject />
      <Lokaal
        kicker="Lokaal verankerd"
        titel="Geworteld in de Regio Gent"
        lead="Als traiteur in Gent werken wij samen met lokale helden uit de streek. Vers, eerlijk en onvergetelijk."
      />

      <section className="sectie donker">
        <div className="wrap">
          <div className="kop-rij">
            <div><span className="kicker">Traiteur in de buurt</span><h2>Actief als Traiteur in Heel Gent en Omstreken</h2></div>
            <p className="lead">Van Gent-centrum tot de deelgemeenten en de ruimere regio: wij verzorgen catering waar uw feest ook plaatsvindt.</p>
          </div>
          <ul className="plaatsen">
            {plaatsen.map((naam) => <li key={naam}>{naam}</li>)}
          </ul>
        </div>
      </section>

      <SmaakCheck />
      <SlotCta />
    </>
  );
}
