import Link from "next/link";
import Testimonial from "./Testimonial";
import { partners } from "@/lib/content";

type LokaalProps = { kicker?: string; titel?: string; lead?: string };

export default function Lokaal({
  kicker = "Lokaal verankerd",
  titel = "Geworteld in regio Vlaanderen",
  lead = "Wij werken samen met lokale helden. Vers, eerlijk en onvergetelijk.",
}: LokaalProps) {
  return (
    <section className="sectie salie" id="lokaal">
      <div className="wrap">
        <div className="lokaal">
          <div>
            <span className="kicker">{kicker}</span>
            <h2>{titel}</h2>
            <p className="lead" style={{ marginTop: "1.2rem" }}>
              {lead}
            </p>
            <ul className="partners">
              {partners.map((p) => <li key={p.naam}><b>{p.naam}</b><span>{p.tekst}</span></li>)}
            </ul>
            <Link className="btn btn-lijn" style={{ marginTop: "2rem" }} href="/partners/">Ontmoet onze partners</Link>
          </div>

          <figure className="lokaal-beeld">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/lokaal-zalm.webp" width={1080} height={1350} loading="lazy"
              alt="Chef werkt een bord gemarineerde zalm af met kruidenolie" />
          </figure>
        </div>

        {/* Enige echte, herleidbare review die we hebben. Nieuwe reviews toevoegen in content.ts. */}
        <Testimonial />
      </div>
    </section>
  );
}
