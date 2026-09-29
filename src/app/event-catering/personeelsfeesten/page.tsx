import type { Metadata } from "next";
import DienstHero from "@/components/DienstHero";
import VideoMetGeluid from "@/components/VideoMetGeluid";
import Formules from "@/components/Formules";
import Testimonial from "@/components/Testimonial";
import Faq from "@/components/Faq";
import SlotCta from "@/components/SlotCta";
import { dienstDetails } from "@/lib/content";

const heroVoor = { src: "/images/event-catering/personeelsfeesten/hero-voor.jpg", alt: "Gast neemt een hapje van een plank tijdens een personeelsfeest" };
const heroAchter = { src: "/images/event-catering/personeelsfeesten/hero-achter.jpg", alt: "Medewerkster met bretellen en vlinderdas serveert hapjes" };

const pagina = dienstDetails["personeelsfeesten"];

export const metadata: Metadata = {
  title: "Traiteur Personeelsfeest Gent",
  description: "Traiteur voor personeelsfeesten in Gent en de ruime regio: walking dinners, Fire & Smoke BBQ en themafeesten op maat van uw team.",
  keywords: ["traiteur personeelsfeest Gent", "catering personeelsfeest Gent", "cateraar bedrijfsfeest regio Gent", "traiteur Gent", "teambuilding catering Gent"],
  alternates: { canonical: "/event-catering/personeelsfeesten/" },
  openGraph: {
    title: pagina.titel,
    description: pagina.lead,
    url: "/event-catering/personeelsfeesten/",
    images: [{ url: "/images/og-home.jpg", width: 1200, height: 630, alt: "Food Architect" }],
  },
};

export default function Personeelsfeesten() {
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
