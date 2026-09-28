import { vindAfbeelding } from "@/lib/plekhouder";

/**
 * Toont de echte foto zodra ze op de verwachte plek staat (public/images/<pad>.<ext>),
 * anders een lege plekhouder. `pad` is het pad zonder extensie, bv.
 * "private-catering/huwelijksfeesten/receptie" — zet de foto daar neer onder eender
 * welke van de ondersteunde extensies en herlaad; geen codewijziging nodig.
 *
 * `positie` (CSS object-position, standaard "center") bepaalt welk deel van de foto
 * zichtbaar blijft wanneer object-fit:cover moet bijsnijden. Controleer dit altijd
 * bij een staand beeld in een liggend kader (of omgekeerd) — snijd nooit een gezicht
 * af. Bv. positie="center 20%" of "top" om een gezicht bovenaan in beeld te houden.
 */
export default function PlaceholderFoto({
  pad, alt, className, positie = "center",
}: { pad: string; alt: string; className?: string; positie?: string }) {
  const gevonden = vindAfbeelding(pad);
  if (!gevonden) return <div className={className} aria-hidden="true" />;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`/images/${gevonden}`} alt={alt} className={className} loading="lazy"
      style={{ objectPosition: positie }}
    />
  );
}
