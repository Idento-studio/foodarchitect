import type { CSSProperties } from "react";

type Item = { naam: string; tekst: string; url: string };

/** Kaartjes met naam, ondertekst en een "Bezoek website"-knop — voor /partners/ en /locaties/. */
export default function LinkKaarten({ items }: { items: Item[] }) {
  return (
    <div className="link-kaarten" style={{ "--kolommen": Math.min(items.length, 3) } as CSSProperties}>
      {items.map((it) => (
        <article className="link-kaart" key={it.naam}>
          <b>{it.naam}</b>
          <span>{it.tekst}</span>
          <a className="btn btn-lijn" href={it.url} target="_blank" rel="noopener">Bezoek website</a>
        </article>
      ))}
    </div>
  );
}
