import Foto from "@/components/Foto";
import { externLinks } from "@/lib/content";

export default function Hero() {
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
          <span className="kicker streep">Culinaire architectuur</span>
          <h1>Food Architect: Culinaire Vormgeving &amp; Catering in Vlaanderen</h1>
          <p className="lead">
            Wij serveren geen maaltijden. Wij creëren herinneringen.
            <br />Feeding Memories door vakmanschap en passie.
          </p>
          <div className="knoppen">
            <a className="btn btn-vol" href="#keuken">Ontdek Onze Smaakwereld</a>
            <a className="btn btn-lijn" href={externLinks.impressies}>Portfolio</a>
          </div>
          <div className="hero-feiten">
            <div><strong>Chef Kim Vandevoorde</strong>Oprichter en ontwerper van elk menu</div>
            <div><strong>Gent &amp; Deinze</strong>Catering in heel Vlaanderen</div>
            <div><strong>Totaalservice</strong>Van amuse tot digestief</div>
          </div>
        </div>
      </div>
    </section>
  );
}
