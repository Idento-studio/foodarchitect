"use client";

import { useEffect, useRef, useState } from "react";

/** Achtergrondvideo (autoplay, gedempt) met een knop om het geluid alsnog aan te zetten. */
export default function VideoMetGeluid({
  src, ariaLabel, className,
}: { src: string; ariaLabel: string; className?: string }) {
  const video = useRef<HTMLVideoElement>(null);
  const [gedempt, setGedempt] = useState(true);
  const [toonSpeel, setToonSpeel] = useState(false);

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
    <div className={`video-geluid${className ? ` ${className}` : ""}`}>
      <video ref={video} autoPlay muted loop playsInline preload="auto" aria-label={ariaLabel}>
        <source src={src} type="video/mp4" />
      </video>
      {toonSpeel && (
        <button type="button" className="speel" aria-label="Video afspelen" onClick={speel}>
          <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor" aria-hidden="true"><path d="M8 5.5v13l11-6.5z" /></svg>
        </button>
      )}
      <button type="button" className="geluid" aria-pressed={!gedempt} onClick={wisselGeluid}>
        <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
          <path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z" />
          {gedempt
            ? <path d="M16 9.5l4.5 5M20.5 9.5l-4.5 5" />
            : <path d="M15.8 9.2a4 4 0 0 1 0 5.6M18.4 7a7.5 7.5 0 0 1 0 10" />}
        </svg>
        <span>{gedempt ? "Geluid aan" : "Geluid uit"}</span>
      </button>
    </div>
  );
}
