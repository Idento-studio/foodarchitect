import Foto from "@/components/Foto";
import { externLinks } from "@/lib/content";

type HeroProps = {
  kicker?: string;
  titel?: string;
  leadRegel1?: string;
  leadRegel2?: string;
  feitTitel?: string;
  feitTekst?: string;
};

export default function Hero({
  kicker = "Culinaire architectuur",
  titel = "Food Architect: Culinaire Vormgeving & Catering in Vlaanderen",
  leadRegel1 = "Wij serveren geen maaltijden. Wij creëren herinneringen.",
  leadRegel2 = "Feeding Memories door vakmanschap en passie.",
  feitTitel = "Gent & Deinze",
  feitTekst = "Catering in heel Vlaanderen",
}: HeroProps) {
  return (
    <section className="hero donker met-foto" id="hero">
      {/* Bronfoto is staand (1080×1350), geen liggend beeld zoals oorspronkelijk gevraagd in
          OPENSTAAND.md — object-fit:cover vult de hero prima, maar snijdt op brede schermen
          meer van de zijkanten weg dan bij een liggende foto het geval zou zijn. */}
      <div className="hero-foto">
        <Foto naam="hero" alt="" sizes="100vw" prioriteit width={1080} height={1350} />
      </div>
      <div className="raster" aria-hidden="true" />
      <div className="wrap">
        <div className="hero-grid">
          <span className="kicker streep">{kicker}</span>
          <h1>{titel}</h1>
          <p className="lead">
            {leadRegel1}
            <br />{leadRegel2}
          </p>
          <div className="knoppen">
            <a className="btn btn-vol" href="#keuken">Ontdek Onze Smaakwereld</a>
            <a className="btn btn-lijn" href={externLinks.impressies}>Portfolio</a>
          </div>
          <div className="hero-feiten">
            <div><strong>Chef Kim Vandevoorde</strong>Oprichter en ontwerper van elk menu</div>
            <div><strong>{feitTitel}</strong>{feitTekst}</div>
            <div><strong>Totaalservice</strong>Van amuse tot digestief</div>
          </div>
        </div>
      </div>
    </section>
  );
}
