"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Icoon from "./Iconen";
import { megaEvent, megaPrivate, megaVuur, offerteHref } from "@/lib/content";

const topLinks = [
  ["Reviews", "/reviews/"], ["Referenties", "/referenties/"], ["Locaties", "/locaties/"],
  ["Partners", "/partners/"], ["FAQ", "/faq/"],
];

type MegaItem = { label: string; href: string; tekst: string; icoon: string };

function MegaPaneel({
  id, kop, items, overzicht, overzichtLabel, ctaKop, ctaTekst, intro,
}: {
  id: string; kop: string; items: MegaItem[]; overzicht: string; overzichtLabel: string;
  ctaKop: string; ctaTekst: string; intro?: string;
}) {
  return (
    <div className="mega" id={id}>
      <div className="mega-kaart">
        <div className="mega-links">
          <p className="mega-kop">{kop}</p>
          {intro && <p className="mega-intro">{intro}</p>}
          {items.map((it) => (
            <Link className="item" href={it.href} key={it.label + it.tekst}>
              <Icoon naam={it.icoon as never} className="item-icoon" />
              <span className="item-tekst">
                <b>{it.label}</b>
                <span>{it.tekst}</span>
              </span>
            </Link>
          ))}
          <Link className="mega-alles" href={overzicht}>{overzichtLabel}</Link>
        </div>
        <div className="mega-cta">
          <p className="mega-cta-kop">{ctaKop}</p>
          <p>{ctaTekst}</p>
          <a className="btn btn-vol" href="#smaakcheck">Doe de smaak-check</a>
        </div>
      </div>
    </div>
  );
}

export default function Header() {
  const [open, setOpen] = useState<string | null>(null);
  const [vast, setVast] = useState(false);
  const [lade, setLade] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setVast(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", lade);
    document.body.style.overflow = lade ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") { setLade(false); setOpen(null); } };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lade]);

  const knop = (id: string, label: string) => (
    <button aria-expanded={open === id} aria-controls={`sub-${id}`} onClick={() => setOpen(open === id ? null : id)}>
      {label}
      <svg className="pijl" viewBox="0 0 10 10" fill="none" stroke="currentColor"><path d="M1 3l4 4 4-4" /></svg>
    </button>
  );

  return (
    <>
      <header className={`kop donker${vast ? " vast" : ""}`}>
        <div className="topbalk"><div className="wrap"><ul>
          {topLinks.map(([l, h]) => <li key={h}><Link href={h}>{l}</Link></li>)}
        </ul></div></div>

        <div className="wrap nav">
          <Link className="merk" href="/" aria-label="Food Architect, naar home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="logo" src="/images/logo-fa-wit.svg" alt="" aria-hidden="true" />
          </Link>

          <nav aria-label="Hoofdmenu" ref={navRef} onMouseLeave={() => setOpen(null)}>
            <ul className="menu">
              <li className={`heeft-sub${open === "1" ? " open" : ""}`} onMouseEnter={() => setOpen("1")}>
                {knop("1", "Private catering")}
                <MegaPaneel id="sub-1" kop="Feesten in familiekring" items={megaPrivate}
                  overzicht="/private-catering/" overzichtLabel="Alle private catering"
                  ctaKop="Nog geen idee van de formule?"
                  ctaTekst="Vertel ons wat u viert, met hoeveel u bent en hoe u wil serveren. U krijgt meteen een eerste schets." />
              </li>
              <li className={`heeft-sub${open === "2" ? " open" : ""}`} onMouseEnter={() => setOpen("2")}>
                {knop("2", "Event catering")}
                <MegaPaneel id="sub-2" kop="Catering voor bedrijven" items={megaEvent}
                  overzicht="/event-catering/" overzichtLabel="Alle event catering"
                  ctaKop="Snel een richting bepalen?"
                  ctaTekst="Walking dinner, aan tafel of van het vuur. Drie vragen en u weet welke formule bij uw event past." />
              </li>
              <li className={`heeft-sub${open === "3" ? " open" : ""}`} onMouseEnter={() => setOpen("3")}>
                {knop("3", "Fire & Smoke BBQ")}
                <MegaPaneel id="sub-3" kop="Onze specialiteit" items={megaVuur}
                  intro="Fire & Smoke is geen apart bedrijf, maar onze eigen manier van koken op open vuur en in de rook. Chef Kim staat bij uw gasten aan de grill. Het werkt even goed op een feest thuis als op een bedrijfsterrein."
                  overzicht="/fire-smoke-bbq/" overzichtLabel="Alles over Fire & Smoke BBQ"
                  ctaKop="Past het bij uw feest?"
                  ctaTekst="Drie vragen en u weet of het vuur past bij uw gezelschap en uw locatie." />
              </li>
              <li><Link href="/over-food-architect/">Over</Link></li>
              <li><Link href="/contact/">Contact</Link></li>
            </ul>
          </nav>

          <a className="btn btn-vol" href={offerteHref}>Offerte aanvragen</a>
          <button className="burger" aria-expanded={lade} aria-controls="lade"
            aria-label={lade ? "Menu sluiten" : "Menu openen"} onClick={() => setLade(!lade)}>
            <span />
          </button>
        </div>
      </header>

      <div className="lade" id="lade" aria-label="Mobiel menu">
        <details><summary>Private catering</summary><div>
          {megaPrivate.map((i) => <Link href={i.href} key={i.label} onClick={() => setLade(false)}>{i.label}</Link>)}
        </div></details>
        <details><summary>Event catering</summary><div>
          {megaEvent.map((i) => <Link href={i.href} key={i.label} onClick={() => setLade(false)}>{i.label}</Link>)}
        </div></details>
        <details><summary>Fire & Smoke BBQ</summary><div>
          {megaVuur.map((i) => <Link href={i.href} key={i.label} onClick={() => setLade(false)}>{i.label}</Link>)}
          <Link href="/fire-smoke-bbq/" onClick={() => setLade(false)}>Alles over Fire & Smoke</Link>
        </div></details>
        <Link href="/over-food-architect/" onClick={() => setLade(false)}>Over</Link>
        <Link href="/contact/" onClick={() => setLade(false)}>Contact</Link>
        <div className="klein">
          {topLinks.map(([l, h]) => <Link href={h} key={h} onClick={() => setLade(false)}>{l}</Link>)}
        </div>
        <a className="btn btn-vol" href={offerteHref}>Offerte aanvragen</a>
      </div>
    </>
  );
}
