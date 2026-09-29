import type { Metadata } from "next";
import DienstHero from "@/components/DienstHero";
import VideoMetGeluid from "@/components/VideoMetGeluid";
import Formules from "@/components/Formules";
import Testimonial from "@/components/Testimonial";
import Faq from "@/components/Faq";
import SlotCta from "@/components/SlotCta";
import { dienstDetails } from "@/lib/content";

const pagina = dienstDetails["bedrijfsevenementen"];

const heroVoor = { src: "/images/event-catering/bedrijfsevenementen/hero-voor.jpg", alt: "Gast neemt een hapje van een plank tijdens een bedrijfsevenement" };
const heroAchter = { src: "/images/event-catering/bedrijfsevenementen/hero-achter.jpg", alt: "Twee medewerkers met apron van Food Architect serveren hapjes" };

export const metadata: Metadata = {
  title: "Traiteur Bedrijfsevenement Gent",
  description: "Traiteur voor bedrijfsevenementen in Gent en de ruime regio: van netwerkreceptie tot formele gala-avond, met maatwerk menu's en vlekkeloze logistiek.",
  keywords: ["traiteur bedrijfsevenement Gent", "catering bedrijfsevent Gent", "cateraar bedrijfsfeest Gent", "traiteur Gent", "zakelijke catering regio Gent"],
  alternates: { canonical: "/event-catering/bedrijfsevenementen/" },
  openGraph: {
    title: pagina.titel,
    description: pagina.lead,
    url: "/event-catering/bedrijfsevenementen/",
    images: [{ url: "/images/og-home.jpg", width: 1200, height: 630, alt: "Food Architect" }],
  },
};

export default function Bedrijfsevenementen() {
  return (
    <>
      <DienstHero
        kicker={pagina.kicker}
        titel={pagina.titel}
        tekst={pagina.lead}
        voor={heroVoor}
        achter={heroAchter}
        knoppen={[
          { ...pagina.heroCtaPrimair, stijl: "vol" },
          { ...pagina.heroCtaSecundair, stijl: "lijn" },
        ]}
      />

      <section className="sectie licht" id="inleiding">
        <div className="wrap inleiding-met-foto">
          <VideoMetGeluid className="beeld" src="/video/event.mp4" ariaLabel="Sfeerbeeld van een event van Food Architect" />
          <div>
            <h2>{pagina.inleidingTitel}</h2>
            {pagina.inleiding.map((p) => <p key={p} style={{ marginTop: "1rem" }}>{p}</p>)}
          </div>
        </div>
      </section>

      <section className="sectie salie">
        <div className="wrap">
          <div className="kop-rij">
            <div><span className="kicker">{pagina.formulesKicker}</span><h2>{pagina.formulesTitel}</h2></div>
            <p className="lead">{pagina.formulesIntro}</p>
          </div>
          <Formules items={pagina.formules} />
          <div className="knoppen" style={{ marginTop: "clamp(2rem,4vw,2.8rem)", justifyContent: "center" }}>
            <a className="btn btn-vol" href={pagina.ctaKnop.href}>Offerte aanvragen</a>
          </div>
        </div>
      </section>

      <section className="sectie licht">
        <div className="wrap">
          <Testimonial />
        </div>
      </section>

      <section className="sectie salie">
        <div className="wrap">
          <div className="kop-rij"><div><h2>Veelgestelde vragen</h2></div></div>
          <Faq items={pagina.faq} />
        </div>
      </section>

      <SlotCta
        kicker={pagina.ctaKicker}
        titel={pagina.ctaTitel}
        lead={pagina.ctaTekst}
        ctaPrimair={pagina.ctaKnop}
      />
    </>
  );
}
