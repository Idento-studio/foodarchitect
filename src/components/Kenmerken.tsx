import type { CSSProperties } from "react";
import Icoon, { type IcoonNaam } from "./Iconen";

type Kenmerk = { titel: string; tekst: string; icoon: IcoonNaam };

export default function Kenmerken({ items }: { items: Kenmerk[] }) {
  return (
    <ul className="beloftes" style={{ "--kolommen": Math.min(items.length, 4) } as CSSProperties}>
      {items.map((k) => (
        <li key={k.titel}>
          <Icoon naam={k.icoon} />
          <div><b>{k.titel}</b><p>{k.tekst}</p></div>
        </li>
      ))}
    </ul>
  );
}
