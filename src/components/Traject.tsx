import { traject } from "@/lib/content";

export default function Traject() {
  return (
    <section className="sectie licht">
      <div className="wrap">
        <div className="kop-rij"><div><span className="kicker">Zo werken we</span><h2>Van schets tot servies</h2></div></div>
        <ol className="traject">
          {traject.map((t, i) => (
            <li key={t.titel}>
              <span className="nr">{i + 1}</span>
              <h3>{t.titel}</h3>
              <p>{t.tekst}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
