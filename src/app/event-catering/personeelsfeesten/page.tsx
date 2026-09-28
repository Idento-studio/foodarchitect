import type { Metadata } from "next";
import DienstHero from "@/components/DienstHero";
import PlaceholderFoto from "@/components/PlaceholderFoto";
import Formules from "@/components/Formules";
import Testimonial from "@/components/Testimonial";
import Faq from "@/components/Faq";
import SlotCta from "@/components/SlotCta";
import { dienstDetails } from "@/lib/content";

// Gedeelde plekhouderfoto (zie public/img/dienst/leesmij.txt) tot deze pagina een eigen
// staand fotopaar krijgt — zet dan `voor`/`achter` hieronder op de eigen foto's + alt-tekst.
const DUMMY = { src: "/img/dienst/dummy.webp", alt: "Chef werkt een bord af met saus in de keuken" };

const pagina = dienstDetails["personeelsfeesten"];

export const metadata: Metadata = {
  title: pagina.titel,
  description: "Catering voor personeelsfeesten in Vlaanderen: walking dinners, Fire & Smoke BBQ en themafeesten op maat van uw team.",
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
        voor={DUMMY}
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
