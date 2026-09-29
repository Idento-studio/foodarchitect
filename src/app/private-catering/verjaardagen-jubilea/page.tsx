import type { Metadata } from "next";
import DienstHero from "@/components/DienstHero";
import VideoMetGeluid from "@/components/VideoMetGeluid";
import Formules from "@/components/Formules";
import Testimonial from "@/components/Testimonial";
import Faq from "@/components/Faq";
import SlotCta from "@/components/SlotCta";
import { dienstDetails } from "@/lib/content";

const pagina = dienstDetails["verjaardagen-jubilea"];

const heroVoor = { src: "/images/private-catering/verjaardagen-jubilea/hero-voor.jpg", alt: "Hapjes met gehaktballetjes op prikkers, geserveerd op krantenpapier" };
const heroAchter = { src: "/images/private-catering/verjaardagen-jubilea/hero-achter.jpg", alt: "Gast geniet glimlachend van een hapje tijdens een verjaardagsfeest" };

export const metadata: Metadata = {
  title: "Traiteur Verjaardag & Jubileum Gent",
  description: "Traiteur voor verjaardagen en jubilea in Gent, Deinze en de ruime regio: themafeesten, flexibele formules en een totaalbeleving op maat.",
  keywords: ["traiteur verjaardag Gent", "catering jubileum Gent", "traiteur regio Gent feest", "cateraar verjaardagsfeest Gent", "traiteur Gent jubileum"],
  alternates: { canonical: "/private-catering/verjaardagen-jubilea/" },
  openGraph: {
    title: pagina.titel,
    description: pagina.lead,
    url: "/private-catering/verjaardagen-jubilea/",
    images: [{ url: "/images/og-home.jpg", width: 1200, height: 630, alt: "Food Architect" }],
  },
};

export default function VerjaardagenJubilea() {
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
          <VideoMetGeluid className="beeld" src="/video/zalm.mp4" ariaLabel="Zalm wordt klaargemaakt in de keuken" />
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
