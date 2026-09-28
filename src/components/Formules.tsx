import type { CSSProperties } from "react";
import PlaceholderFoto from "./PlaceholderFoto";

type Formule = { nr: string; titel: string; tekst: string; foto: string; alt: string; positie?: string };

export default function Formules({ items }: { items: Formule[] }) {
  return (
    <div className="formules" style={{ "--kolommen": items.length } as CSSProperties}>
      {items.map((f) => (
        <article className="formule-kaart" key={f.nr}>
          <PlaceholderFoto pad={f.foto} alt={f.alt} className="beeld" positie={f.positie} />
          <div className="inhoud">
            <span className="nr">{f.nr}</span>
            <h3>{f.titel}</h3>
            <p>{f.tekst}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
