import type { Metadata } from "next";
import CategorieHero from "@/components/CategorieHero";
import OfferteWizard from "@/components/OfferteWizard";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Offerte Traiteur Gent",
  description: "Vraag een offerte op maat aan bij uw traiteur in Gent: beantwoord enkele korte vragen over uw event en ontvang een gerichte prijs.",
  keywords: ["offerte traiteur Gent", "catering offerte Gent", "traiteur Gent prijs", "offerte cateraar regio Gent", "traiteur Gent aanvraag"],
  alternates: { canonical: "/offerte-aanvragen/" },
  openGraph: {
    title: "Offerte aanvragen",
    description: "Beantwoord enkele korte vragen over uw event en ontvang een gerichte prijs op maat.",
    url: "/offerte-aanvragen/",
    images: [{ url: "/images/og-home.jpg", width: 1200, height: 630, alt: "Food Architect" }],
  },
};

export default function OfferteAanvragen() {
  return (
    <>
      <CategorieHero
        kicker="Offerte"
        titel="Offerte aanvragen"
        lead="Beantwoord enkele korte vragen over uw event. Zo hebben wij meteen voldoende informatie om een gerichte prijs op maat te maken, zonder dat u eerst nog tien keer moet bellen."
        compact
        toonKnoppen={false}
      />
      <section className="sectie licht">
        <div className="wrap check">
          <div>
            <span className="kicker">Vragenlijst</span>
            <h2>Vertel ons over uw event</h2>
            <p className="lead" style={{ marginTop: "1.2rem" }}>
              Zes korte vragen, één tot twee minuten van uw tijd. Op basis van uw antwoorden maakt Chef Kim
              meteen een gerichte inschatting, in plaats van dat we die informatie achteraf telefonisch nog
              moeten opvragen.
            </p>
            <p style={{ marginTop: "1.4rem", fontSize: ".95rem" }}>
              Liever meteen praten? Mail naar <a href={`mailto:${site.mail}`}>{site.mail}</a> of bel{" "}
              <a href={site.telefoonHref}>{site.telefoon}</a>.
            </p>
          </div>

          <div className="paneel offerte-paneel">
            <form className="contactform" action="https://formspree.io/f/xkjgkvej" method="POST">
              <input type="hidden" name="_subject" value="Nieuwe offerteaanvraag via Food Architect" />
              <OfferteWizard />
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
