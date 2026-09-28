import type { Metadata } from "next";
import CategorieHero from "@/components/CategorieHero";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Neem contact op met Food Architect voor catering in Gent, Deinze en omstreken.",
  alternates: { canonical: "/contact/" },
  openGraph: {
    title: "Contact",
    description: "Vertel ons over uw plannen, we denken graag mee.",
    url: "/contact/",
    images: [{ url: "/images/og-home.jpg", width: 1200, height: 630, alt: "Food Architect" }],
  },
};

export default function ContactPagina() {
  return (
    <>
      <CategorieHero
        kicker="Contact"
        titel="Contacteer ons"
        lead="Een intiem diner, een onvergetelijk huwelijksfeest of een stijlvol bedrijfsevenement? Vertel ons over uw plannen. We luisteren, denken mee en vertalen uw ideeën naar een culinaire beleving op maat."
      />
      <section className="sectie licht">
        <div className="wrap check">
          <div>
            <span className="kicker">Stel uw vraag</span>
            <h2>Neem vrijblijvend contact op</h2>
            <p className="lead" style={{ marginTop: "1.2rem" }}>
              We maken graag tijd voor een persoonlijke kennismaking.
            </p>
            <ul className="partners" style={{ marginTop: "2rem" }}>
              <li><b>E-mail</b><span><a href={`mailto:${site.mail}`}>{site.mail}</a></span></li>
              <li><b>Telefoon</b><span><a href={site.telefoonHref}>{site.telefoon}</a></span></li>
              <li><b>Adres</b><span>{site.adres.straat}, {site.adres.postcode} {site.adres.gemeente}</span></li>
            </ul>
          </div>

          <div className="paneel">
            {/*
              Formspree-endpoint nog niet bevestigd (zie OPENSTAAND.md) — actie hieronder is een
              placeholder en verstuurt nog niets. Vervang zodra het endpoint bekend is:
              action="https://formspree.io/f/<form-id>"
            */}
            <form className="contactform" action="https://formspree.io/f/TODO" method="POST">
              <div className="veld-rij">
                <div className="veld">
                  <label htmlFor="voornaam">Voornaam</label>
                  <input id="voornaam" name="voornaam" type="text" autoComplete="given-name" required />
                </div>
                <div className="veld">
                  <label htmlFor="achternaam">Achternaam</label>
                  <input id="achternaam" name="achternaam" type="text" autoComplete="family-name" required />
                </div>
              </div>
              <div className="veld-rij">
                <div className="veld">
                  <label htmlFor="email">E-mail</label>
                  <input id="email" name="email" type="email" autoComplete="email" required />
                </div>
                <div className="veld">
                  <label htmlFor="telefoon">Telefoonnummer</label>
                  <input id="telefoon" name="telefoon" type="tel" autoComplete="tel" />
                </div>
              </div>
              <div className="veld">
                <label htmlFor="bericht">Bericht</label>
                <textarea id="bericht" name="bericht" required />
              </div>
              <div className="knoppen">
                <button type="submit" className="btn btn-vol">Verstuur</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
