import type { CSSProperties } from "react";
import Link from "next/link";
import Icoon, { type IcoonNaam } from "./Iconen";

type Item = { label: string; href: string; tekst: string; icoon: IcoonNaam };

export default function SubDiensten({
  kicker, titel, lead, items,
}: {
  kicker: string; titel: string; lead: string; items: Item[];
}) {
  return (
    <section className="sectie licht">
      <div className="wrap">
        <div className="kop-rij">
          <div><span className="kicker">{kicker}</span><h2>{titel}</h2></div>
          <p className="lead">{lead}</p>
        </div>
        <ul className="beloftes" style={{ "--kolommen": Math.min(items.length, 4) } as CSSProperties}>
          {items.map((it) => (
            <li key={it.href + it.label}>
              <Icoon naam={it.icoon} />
              <div>
                <b><Link href={it.href}>{it.label}</Link></b>
                <p>{it.tekst}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
