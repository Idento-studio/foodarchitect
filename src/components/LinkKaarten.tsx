import type { CSSProperties } from "react";
import PlaceholderFoto from "./PlaceholderFoto";

type Item = { naam: string; tekst: string; url: string; pad?: string };

/** Kaartjes met naam, ondertekst en een "Bezoek website"-knop — voor /partners/ en /locaties/. */
export default function LinkKaarten({ items }: { items: Item[] }) {
  return (
    <div className="link-kaarten" style={{ "--kolommen": Math.min(items.length, 3) } as CSSProperties}>
      {items.map((it) => (
        <article className="link-kaart" key={it.naam}>
          {it.pad && <PlaceholderFoto pad={it.pad} alt={it.naam} className="beeld" />}
          <div className="inhoud">
            <b>{it.naam}</b>
            <span>{it.tekst}</span>
            <a className="lees" href={it.url} target="_blank" rel="noopener">Bezoek website</a>
          </div>
        </article>
      ))}
    </div>
  );
}
