"use client";

import { useState } from "react";
import {
  offerteEventTypes, offerteLocatieOpties, offerteCulinairOpties, offerteExtraOpties,
} from "@/lib/content";

const LAATSTE_VRAAG = 6;

export default function OfferteWizard() {
  const [stap, setStap] = useState(0);
  const [type, setType] = useState("");
  const [datum, setDatum] = useState("");
  const [gasten, setGasten] = useState(80);
  const [locatie, setLocatie] = useState("");
  const [culinair, setCulinair] = useState("");
  const [extra, setExtra] = useState<string[]>([]);

  const toggleExtra = (v: string) => {
    setExtra((prev) => (prev.includes(v) ? prev.filter((x) => x !== v) : [...prev, v]));
  };

  const geldig =
    stap === 1 ? Boolean(type)
      : stap === 2 ? Boolean(datum)
        : stap === 4 ? Boolean(locatie)
          : stap === 5 ? Boolean(culinair)
            : stap === 6 ? extra.length > 0
              : true;

  return (
    <>
      {stap > 0 && stap <= LAATSTE_VRAAG && (
        <div className="voortgang" aria-hidden="true">
          {Array.from({ length: LAATSTE_VRAAG }, (_, i) => i + 1).map((i) => (
            <i key={i} className={i <= stap ? "aan" : ""} />
          ))}
        </div>
      )}
      {stap > 0 && stap <= LAATSTE_VRAAG && (
        <p className="sr" aria-live="polite">Vraag {stap} van {LAATSTE_VRAAG}</p>
      )}

      <div className="stap" hidden={stap !== 0}>
        <h3 style={{ fontSize: "1.7rem", color: "var(--groen)", marginBottom: "1rem" }}>6 korte vragen, 1-2 minuten</h3>
        <p>
          Beantwoord enkele korte vragen en geef ons een eerste beeld van wat jullie zoeken, zodat wij meteen
          een gerichte prijs kunnen opmaken zonder dat u eerst nog tien keer moet bellen.
        </p>
        <div className="knoppen" style={{ marginTop: "1.6rem" }}>
          <button type="button" className="btn btn-vol" onClick={() => setStap(1)}>Start je aanvraag</button>
        </div>
      </div>

      <fieldset className="stap" hidden={stap !== 1}>
        <legend>Wat voor event organiseren jullie?</legend>
        <div className="opties">
          {offerteEventTypes.map((o) => (
            <label className="optie" key={o.v}>
              <input type="radio" name="type_event" value={o.l} required
                checked={type === o.v} onChange={() => setType(o.v)} />
              <span>{o.l}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset className="stap" hidden={stap !== 2}>
        <legend>Wanneer vindt jullie event plaats?</legend>
        <div className="anders">
          <label htmlFor="event_datum">Datum</label>
          <input id="event_datum" name="event_datum" type="date" required
            value={datum} onChange={(e) => setDatum(e.target.value)} />
        </div>
      </fieldset>

      <fieldset className="stap" hidden={stap !== 3}>
        <legend>Hoeveel gasten verwachten jullie?</legend>
        <div className="gasten-getal">{gasten >= 300 ? "300+" : gasten}<small>gasten</small></div>
        <label className="sr" htmlFor="aantal_gasten">Aantal gasten</label>
        <input id="aantal_gasten" name="aantal_gasten" type="range" min={10} max={300} step={10}
          value={gasten} onChange={(e) => setGasten(Number(e.target.value))} />
        <div className="schaal"><span>10</span><span>150</span><span>300+</span></div>
      </fieldset>

      <fieldset className="stap" hidden={stap !== 4}>
        <legend>Hebben jullie al een locatie?</legend>
        <div className="opties">
          {offerteLocatieOpties.map((o) => (
            <label className="optie" key={o.v}>
              <input type="radio" name="locatie" value={o.l} required
                checked={locatie === o.v} onChange={() => setLocatie(o.v)} />
              <span>{o.l}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset className="stap" hidden={stap !== 5}>
        <legend>Welke culinaire invulling zoeken jullie?</legend>
        <div className="opties">
          {offerteCulinairOpties.map((o) => (
            <label className="optie" key={o.v}>
              <input type="radio" name="culinaire_invulling" value={o.l} required
                checked={culinair === o.v} onChange={() => setCulinair(o.v)} />
              <span>{o.l}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset className="stap" hidden={stap !== 6}>
        <legend>Waar kunnen we jullie nog bij helpen?</legend>
        <div className="opties">
          {offerteExtraOpties.map((o) => (
            <label className="optie" key={o.v}>
              <input type="checkbox" name="extra_diensten" value={o.l}
                checked={extra.includes(o.v)} onChange={() => toggleExtra(o.v)} />
              <span>{o.l}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div hidden={stap !== 7}>
        <p className="kicker">Jullie perfecte match!</p>
        <h3 style={{ fontSize: "1.7rem", color: "var(--groen)", marginBottom: "1rem" }}>Laat uw gegevens achter</h3>
        <p style={{ marginBottom: "1.4rem" }}>
          Dankjewel voor deze informatie! Wij kunnen hiermee aan de slag. Laat uw gegevens achter en we
          bezorgen u een offerte op maat.
        </p>
        <div className="veld-rij">
          <div className="veld">
            <label htmlFor="voornaam">Voornaam</label>
            <input id="voornaam" name="voornaam" type="text" autoComplete="given-name" required />
          </div>
          <div className="veld">
            <label htmlFor="achternaam">Achternaam</label>
            <input id="achternaam" name="achternaam" type="text" autoComplete="family-name" required />
          </div>
        </div>
        <div className="veld-rij" style={{ marginTop: "1.2rem" }}>
          <div className="veld">
            <label htmlFor="email">E-mail</label>
            <input id="email" name="email" type="email" autoComplete="email" required />
          </div>
          <div className="veld">
            <label htmlFor="telefoon">Telefoonnummer</label>
            <input id="telefoon" name="telefoon" type="tel" autoComplete="tel" />
          </div>
        </div>
        <div className="veld" style={{ marginTop: "1.2rem" }}>
          <label htmlFor="opmerkingen">Opmerkingen</label>
          <textarea id="opmerkingen" name="opmerkingen" />
        </div>
        <div className="knoppen" style={{ marginTop: "1.4rem" }}>
          <button type="submit" className="btn btn-vol">Versturen</button>
        </div>
      </div>

      {stap > 0 && stap <= LAATSTE_VRAAG && (
        <div className="stap-nav">
          <button type="button" className="terug" onClick={() => setStap(stap - 1)}>Vorige</button>
          <span />
          <button type="button" className="btn btn-vol" disabled={!geldig} onClick={() => setStap(stap + 1)}>
            {stap === LAATSTE_VRAAG ? "Toon mijn match" : "Volgende"}
          </button>
        </div>
      )}
    </>
  );
}
