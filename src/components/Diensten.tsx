import Link from "next/link";
import { diensten } from "@/lib/content";

export default function Diensten() {
  return (
    <section className="sectie donker" id="diensten">
      <div className="wrap">
        <div className="kop-rij">
          <div><span className="kicker">Onze diensten</span><h2>Drie Pijlers van Smaak</h2></div>
          <p className="lead">Elk evenement verdient een culinair concept op maat.</p>
        </div>

        <div className="diensten">
          {diensten.map((d) => (
            <article className={`dienst met-foto${d.donker ? " vuur" : ""}`} key={d.slug}>
              <span className="beeld" aria-hidden="true"
                style={{ backgroundImage: `url("${d.beeld}")` }} />
              <div className="tekst">
                <span className="kicker">{d.nummer}</span>
                <h3>{d.titel}</h3>
                <p className="tag">{d.tag}</p>
                <p>{d.tekst}</p>
                <ul>
                  {d.links.map((l) => <li key={l.label + l.href}><Link href={l.href}>{l.label}</Link></li>)}
                </ul>
                <Link className="lees" href={d.lees.href}>{d.lees.label}</Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
