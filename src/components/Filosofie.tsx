"use client";

import { useEffect, useRef, useState } from "react";
import Icoon from "./Iconen";
import { beloftes } from "@/lib/content";

type FilosofieProps = {
  kicker?: string;
  titel?: string;
  onder?: string;
  paragraaf1?: string;
  paragraaf2?: string;
};

export default function Filosofie({
  kicker = "Onze filosofie",
  titel = "Feeding Memories: De Architectuur van Smaak",
  onder = "Elk evenement is een unieke constructie.",
  paragraaf1 = "Chef Kim Vandevoorde bouwt menu's zoals een architect een gebouw ontwerpt: met precisie, maatwerk en de beste lokale fundamenten. Wij ontzorgen u volledig, van de eerste amuse tot de laatste digestief.",
  paragraaf2 = "Catering op maat met lokale producten en een totaalservice die geen detail vergeet.",
}: FilosofieProps) {
  const video = useRef<HTMLVideoElement>(null);
  const [gedempt, setGedempt] = useState(true);
  const [toonSpeel, setToonSpeel] = useState(false);
  const [fout, setFout] = useState(false);

  const speel = () => {
    const v = video.current;
    if (!v) return;
    v.play().then(() => setToonSpeel(false)).catch(() => setToonSpeel(true));
  };

  useEffect(() => {
    speel();
    const t = setTimeout(() => { if (video.current?.paused && !video.current.error) setToonSpeel(true); }, 2000);
    const onVis = () => { if (!document.hidden) speel(); };
    document.addEventListener("visibilitychange", onVis);
    return () => { clearTimeout(t); document.removeEventListener("visibilitychange", onVis); };
  }, []);

  const wisselGeluid = () => {
    const v = video.current;
    if (!v) return;
    v.muted = !v.muted;
    if (!v.muted) v.volume = 0.7;
    setGedempt(v.muted);
    speel();
  };

  return (
    <section className="sectie licht" id="filosofie">
      <div className="wrap">
        <div className="filo">
          <div>
            <span className="kicker">{kicker}</span>
            <h2>{titel}</h2>
            <p className="onder">{onder}</p>
            <p>{paragraaf1}</p>
            <p>{paragraaf2}</p>
            <div className="chef">
              <div className="chef-foto" aria-hidden="true">KV</div>
              <div><b>Chef Kim Vandevoorde</b><span>Oprichter</span></div>
            </div>
          </div>

          <figure className={`filo-media${fout ? " geen-video" : ""}`}>
            <video ref={video} autoPlay muted loop playsInline preload="auto"
              poster="/images/poster-filosofie.jpg"
              aria-label="Sfeerbeeld van een event van Food Architect"
              onError={() => setFout(true)}>
              <source src="/video/event.mp4" type="video/mp4" />
            </video>
            {toonSpeel && !fout && (
              <button type="button" className="speel" aria-label="Video afspelen" onClick={speel}>
                <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor" aria-hidden="true"><path d="M8 5.5v13l11-6.5z" /></svg>
              </button>
            )}
            {!fout && (
              <button type="button" className="geluid" aria-pressed={!gedempt} onClick={wisselGeluid}>
                <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                  <path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z" />
                  {gedempt
                    ? <path d="M16 9.5l4.5 5M20.5 9.5l-4.5 5" />
                    : <path d="M15.8 9.2a4 4 0 0 1 0 5.6M18.4 7a7.5 7.5 0 0 1 0 10" />}
                </svg>
                <span>{gedempt ? "Geluid aan" : "Geluid uit"}</span>
              </button>
            )}
          </figure>
        </div>

        <ul className="beloftes">
          {beloftes.map((b) => (
            <li key={b.titel}>
              <Icoon naam={b.icoon} />
              <div><b>{b.titel}</b><p>{b.tekst}</p></div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
