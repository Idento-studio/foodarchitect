"use client";

import { useState } from "react";
import { band } from "@/lib/content";

export default function FotoBand() {
  const [pauze, setPauze] = useState(false);
  const reeks = [...band, ...band];

  return (
    <section className="sectie keuken donker" id="keuken">
      <div className="wrap">
        <span className="kicker streep">Uit de keuken</span>
        <h2>Zo ziet het eruit op het bord</h2>
      </div>

      <div className={`band${pauze ? " pauze" : ""}`} aria-label="Foto's van gerechten en hapjes">
        <div className="spoor">
          {reeks.map((f, i) => (
            <figure className="foto" key={i} aria-hidden={i >= band.length ? true : undefined}>
              {/* Static export: geen next/image-optimalisatie, dus vooraf verkleinde WebP's. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={f.src} alt={i >= band.length ? "" : f.alt}
                loading={i < 4 ? "eager" : "lazy"} width={900} height={1125} />
            </figure>
          ))}
        </div>
        <button type="button" className="band-pauze" aria-pressed={pauze} onClick={() => setPauze(!pauze)}>
          {pauze ? "Speel af" : "Pauzeer"}
        </button>
      </div>
    </section>
  );
}
