import type { Metadata } from "next";
import DienstHero from "@/components/DienstHero";
import PlaceholderFoto from "@/components/PlaceholderFoto";
import Formules from "@/components/Formules";
import Testimonial from "@/components/Testimonial";
import SlotCta from "@/components/SlotCta";
import { dienstDetails } from "@/lib/content";

const pagina = dienstDetails["huwelijksfeesten"];

const heroVoor = { src: "/images/private-catering/huwelijksfeesten/hero-voor.jpg", alt: "Bruidspaar proeft samen lachend van een hapje" };
const heroAchter = { src: "/images/private-catering/huwelijksfeesten/hero-achter.jpg", alt: "Gasten aan tafel genieten van een hoofdgerecht" };

export const metadata: Metadata = {
  title: pagina.titel,
  description: "Culinaire catering op maat voor huwelijksfeesten in Gent, Deinze en omstreken: van receptie tot walking dinner of een zittend meergangenmenu.",
  alternates: { canonical: "/private-catering/huwelijksfeesten/" },
  openGraph: {
    title: pagina.titel,
    description: pagina.lead,
    url: "/private-catering/huwelijksfeesten/",
    images: [{ url: "/images/og-home.jpg", width: 1200, height: 630, alt: "Food Architect" }],
  },
};

export default function Huwelijksfeesten() {
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
          <PlaceholderFoto pad={pagina.inleidingFoto} alt={pagina.inleidingFotoAlt} className="beeld" />
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

      <SlotCta
        kicker={pagina.ctaKicker}
        titel={pagina.ctaTitel}
        lead={pagina.ctaTekst}
        ctaPrimair={pagina.ctaKnop}
      />
    </>
  );
}
