"use client";

import { useEffect, useState } from "react";

type Keuze = { analytics: boolean; marketing: boolean; datum: string };
const SLEUTEL = "fa-cookieconsent";

declare global {
  interface Window { dataLayer: unknown[]; gtag: (...args: unknown[]) => void }
}

function update(keuze: Keuze) {
  window.gtag?.("consent", "update", {
    ad_storage: keuze.marketing ? "granted" : "denied",
    ad_user_data: keuze.marketing ? "granted" : "denied",
    ad_personalization: keuze.marketing ? "granted" : "denied",
    analytics_storage: keuze.analytics ? "granted" : "denied",
  });
}

function leesOpgeslagenKeuze(): Keuze | null {
  if (typeof window === "undefined") return null;
  try {
    const rauw = localStorage.getItem(SLEUTEL);
    return rauw ? (JSON.parse(rauw) as Keuze) : null;
  } catch {
    return null;
  }
}

export default function CookieConsent() {
  const [opgeslagen] = useState(leesOpgeslagenKeuze);
  const [open, setOpen] = useState(false);
  const [analytics, setAnalytics] = useState(() => opgeslagen?.analytics ?? false);
  const [marketing, setMarketing] = useState(() => opgeslagen?.marketing ?? false);

  useEffect(() => {
    if (opgeslagen) {
      update(opgeslagen);                           // terugkerende bezoeker
    } else {
      // Pas na mount openen: zo blijft de server-render (dialoog dicht) gelijk
      // aan de eerste client-render en ontstaat er geen hydration-mismatch.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setOpen(true);
    }

    const heropen = () => setOpen(true);
    window.addEventListener("cookie-instellingen", heropen);
    return () => window.removeEventListener("cookie-instellingen", heropen);
  }, [opgeslagen]);

  const bewaar = (a: boolean, m: boolean) => {
    const keuze: Keuze = { analytics: a, marketing: m, datum: new Date().toISOString() };
    try { localStorage.setItem(SLEUTEL, JSON.stringify(keuze)); } catch { /* private mode */ }
    update(keuze);
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="cookie" role="dialog" aria-label="Cookievoorkeuren" aria-modal="false">
      <div className="cookie-kaart">
        <div>
          <b>Cookies</b>
          <p>
            We gebruiken enkel essentiële cookies om de site te laten werken. Met uw toestemming meten we
            ook anoniem hoe de site gebruikt wordt. U kan dit altijd wijzigen via de link onderaan.
          </p>
          <div className="cookie-keuzes">
            <label><input type="checkbox" checked disabled /> Essentieel (altijd aan)</label>
            <label><input type="checkbox" checked={analytics} onChange={(e) => setAnalytics(e.target.checked)} /> Statistieken</label>
            <label><input type="checkbox" checked={marketing} onChange={(e) => setMarketing(e.target.checked)} /> Marketing</label>
          </div>
        </div>
        <div className="cookie-knoppen">
          <button type="button" className="btn btn-lijn" onClick={() => bewaar(false, false)}>Weigeren</button>
          <button type="button" className="btn btn-lijn" onClick={() => bewaar(analytics, marketing)}>Mijn keuze bewaren</button>
          <button type="button" className="btn btn-vol" onClick={() => bewaar(true, true)}>Alles aanvaarden</button>
        </div>
      </div>
    </div>
  );
}
