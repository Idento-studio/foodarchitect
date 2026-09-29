"use client";

import { useState } from "react";
import { offerteHref, formuleNamen, gelegenheden, site, stijlen } from "@/lib/content";

export default function SmaakCheck() {
  const [stap, setStap] = useState(1);
  const [gelegenheid, setGelegenheid] = useState("");
  const [eigen, setEigen] = useState("");
  const [gasten, setGasten] = useState(80);
  const [stijl, setStijl] = useState("");

  const isAnder = gelegenheid === "ander";
  const geldig =
    stap === 1 ? Boolean(gelegenheid) && (!isAnder || eigen.trim().length > 1)
      : stap === 3 ? Boolean(stijl) : true;

  const kiesGelegenheid = (v: string) => {
    setGelegenheid(v);
    if (v !== "ander") setTimeout(() => setStap(2), 220);
  };
  const kiesStijl = (v: string) => { setStijl(v); setTimeout(() => setStap(4), 220); };

  const g = gelegenheden.find((x) => x.v === gelegenheid);
  const s = stijlen.find((x) => x.v === stijl);
  const formuleId = s?.v === "twijfel" ? (g?.f ?? "walking") : (s?.v ?? "walking");
  const formule = formuleNamen[formuleId];
  const naam = isAnder && eigen.trim() ? eigen.trim() : g?.l ?? "";
  const schaal =
    gasten <= 30 ? "een intiem gezelschap, ideaal voor een verfijnd menu met veel aandacht voor elk bord"
      : gasten <= 120 ? "een mooi gezelschap waarbij we tempo en bediening nauwkeurig op elkaar afstemmen"
        : "een groot evenement waarbij we logistiek en timing mee uittekenen";

  return (
    <section className="sectie licht" id="smaakcheck">
      <div className="wrap check">
        <div>
          <span className="kicker">De volgende stap</span>
          <h2>Klaar om uw gasten te verrassen?</h2>
          <p className="lead" style={{ marginTop: "1.2rem" }}>
            Doe de smaak-check in drie vragen. U krijgt meteen een eerste schets van uw formule en kan die
            rechtstreeks meesturen met uw offerteaanvraag.
          </p>
          <p style={{ marginTop: "1.4rem", fontSize: ".95rem" }}>
            Liever meteen praten? Mail naar <a href={`mailto:${site.mail}`}>{site.mail}</a>.
          </p>
        </div>

        <div className="paneel">
          <div className="voortgang" aria-hidden="true">
            {[1, 2, 3, 4].map((i) => <i key={i} className={i <= stap ? "aan" : ""} />)}
          </div>
          <p className="sr" aria-live="polite">{stap < 4 ? `Vraag ${stap} van 3` : "Uw schets is klaar"}</p>

          {stap === 1 && (
            <fieldset className="stap">
              <legend>Wat vieren we?</legend>
              <div className="opties">
                {gelegenheden.map((o) => (
                  <label className="optie" key={o.v}>
                    <input type="radio" name="gelegenheid" value={o.v}
                      checked={gelegenheid === o.v} onChange={() => kiesGelegenheid(o.v)} />
                    <span>{o.l}{"s" in o && o.s ? <small>{o.s}</small> : null}</span>
                  </label>
                ))}
              </div>
              {isAnder && (
                <div className="anders">
                  <label htmlFor="anderTekst">Wat vieren jullie?</label>
                  <input id="anderTekst" type="text" maxLength={80} autoComplete="off"
                    value={eigen} onChange={(e) => setEigen(e.target.value)}
                    onKeyDown={(e) => { if (e.key === "Enter" && geldig) { e.preventDefault(); setStap(2); } }}
                    placeholder="Bijvoorbeeld: doopfeest, opendeurdag, pensioenviering" />
                </div>
              )}
            </fieldset>
          )}

          {stap === 2 && (
            <fieldset className="stap">
              <legend>Hoeveel gasten verwacht u?</legend>
              <div className="gasten-getal">{gasten >= 400 ? "400+" : gasten}<small>gasten</small></div>
              <label className="sr" htmlFor="gasten">Aantal gasten</label>
              <input id="gasten" type="range" min={10} max={400} step={10}
                value={gasten} onChange={(e) => setGasten(Number(e.target.value))} />
              <div className="schaal"><span>10</span><span>200</span><span>400+</span></div>
            </fieldset>
          )}

          {stap === 3 && (
            <fieldset className="stap">
              <legend>Hoe wil u serveren?</legend>
              <div className="opties">
                {stijlen.map((o) => (
                  <label className="optie" key={o.v}>
                    <input type="radio" name="stijl" value={o.v}
                      checked={stijl === o.v} onChange={() => kiesStijl(o.v)} />
                    <span>{o.l}<small>{o.s}</small></span>
                  </label>
                ))}
              </div>
            </fieldset>
          )}

          {stap === 4 && (
            <div className="stap resultaat">
              <p className="kicker">Uw eerste schets</p>
              <h3 style={{ fontSize: "2rem" }}>{naam} met {formule.toLowerCase()}</h3>
              <dl>
                <dt>Gelegenheid</dt><dd>{naam}</dd>
                <dt>Gasten</dt><dd>{gasten >= 400 ? "400+" : gasten}</dd>
                <dt>Formule</dt><dd>{s?.v === "twijfel" ? `${formule} (ons voorstel)` : s?.l}</dd>
              </dl>
              <p className="advies">
                Met {gasten >= 400 ? "400+" : gasten} gasten is dit {schaal}. Chef Kim werkt het menu verder
                op maat uit.
              </p>
              <div className="knoppen">
                <a className="btn btn-vol" href={offerteHref}>
                  Vraag offerte aan met deze schets
                </a>
                <button type="button" className="btn btn-lijn"
                  onClick={() => { setStap(1); setGelegenheid(""); setEigen(""); setStijl(""); setGasten(80); }}>
                  Opnieuw
                </button>
              </div>
            </div>
          )}

          {stap < 4 && (
            <div className="stap-nav">
              {stap > 1
                ? <button type="button" className="terug" onClick={() => setStap(stap - 1)}>Vorige vraag</button>
                : <span />}
              <span />
              <button type="button" className="btn btn-vol" disabled={!geldig} onClick={() => setStap(stap + 1)}>
                {stap === 3 ? "Toon mijn schets" : "Volgende"}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
