import type { Metadata } from "next";
import DienstHero from "@/components/DienstHero";
import PlaceholderFoto from "@/components/PlaceholderFoto";
import Formules from "@/components/Formules";
import Testimonial from "@/components/Testimonial";
import Faq from "@/components/Faq";
import SlotCta from "@/components/SlotCta";
import { dienstDetails } from "@/lib/content";

const pagina = dienstDetails["communie-lentefeesten"];

const heroVoor = { src: "/images/private-catering/communie-lentefeesten/hero-voor.jpg", alt: "Feestelijk dessertbord met meringue, bes en room op een bloemetjesbord" };
const heroAchter = { src: "/images/private-catering/communie-lentefeesten/hero-achter.webp", alt: "Jongen in gilet serveert hapjes van een plank tijdens een receptie" };

export const metadata: Metadata = {
  title: "Traiteur Communie & Lentefeest Gent",
  description: "Traiteur voor communie- en lentefeesten in Gent, Deinze en de ruime regio: catering op maat, met een menu voor groot en klein.",
  keywords: ["traiteur communiefeest Gent", "catering communie Gent", "lentefeest traiteur regio Gent", "traiteur Gent kinderfeest", "cateraar communie Gent"],
  alternates: { canonical: "/private-catering/communie-lentefeesten/" },
  openGraph: {
    title: pagina.titel,
    description: pagina.lead,
    url: "/private-catering/communie-lentefeesten/",
    images: [{ url: "/images/og-home.jpg", width: 1200, height: 630, alt: "Food Architect" }],
  },
};

export default function CommunieLentefeesten() {
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
