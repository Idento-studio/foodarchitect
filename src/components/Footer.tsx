"use client";

import Link from "next/link";
import { site } from "@/lib/content";

const watWeDoen = [
  ["Huwelijksfeesten", "/private-catering/huwelijksfeesten/"],
  ["Communie- & lentefeesten", "/private-catering/communie-lentefeesten/"],
  ["Verjaardagen & jubilea", "/private-catering/verjaardagen-jubilea/"],
  ["Bedrijfsevenementen", "/event-catering/bedrijfsevenementen/"],
  ["Personeelsfeesten", "/event-catering/personeelsfeesten/"],
  ["Productlanceringen", "/event-catering/productlanceringen/"],
  ["Seminaries", "/event-catering/seminaries/"],
  ["Fire & Smoke BBQ", "/fire-smoke-bbq/"],
];

const navigatie = [
  ["Traiteur Gent", "/gent/"], ["Over Food Architect", "/over-food-architect/"], ["Reviews", "/reviews/"],
  ["Referenties", "/referenties/"], ["Locaties", "/locaties/"], ["Partners", "/partners/"],
  ["FAQ", "/faq/"], ["Contact", "/contact/"],
];

export default function Footer() {
  return (
    <footer className="voet donker">
      <div className="wrap">
        <div className="voet-grid">
          <div>
            <span className="logo" aria-label="Food Architect">fa</span>
            <p>Culinaire architectuur voor jullie mooiste dag.<br />Gevestigd in {site.plaats}.</p>
          </div>
          <div><h4>Wat we doen</h4><ul>
            {watWeDoen.map(([l, h]) => <li key={h + l}><Link href={h}>{l}</Link></li>)}
          </ul></div>
          <div><h4>Navigatie</h4><ul>
            {navigatie.map(([l, h]) => <li key={h}><Link href={h}>{l}</Link></li>)}
          </ul></div>
          <div><h4>Contact</h4><ul>
            <li><a href={`mailto:${site.mail}`}>{site.mail}</a></li>
            <li><a href={site.telefoonHref}>{site.telefoon}</a></li>
            <li>{site.adres.straat}</li>
            <li>{site.adres.postcode} {site.adres.gemeente}</li>
            <li style={{ marginTop: ".6rem" }}><a href={site.facebook} rel="noopener" target="_blank">Facebook</a></li>
            <li><a href={site.instagram} rel="noopener" target="_blank">Instagram</a></li>
          </ul></div>
        </div>
        <div className="voet-onder">
          <span>© {new Date().getFullYear()} {site.naam}. Alle rechten voorbehouden. Ondernemingsnummer {site.ondernemingsnummer}.</span>
          <ul>
            <li><Link href="/privacy/">Privacybeleid</Link></li>
            <li><Link href="/cookiebeleid/">Cookiebeleid</Link></li>
            <li><button type="button" onClick={() => window.dispatchEvent(new Event("cookie-instellingen"))}>Cookie-instellingen</button></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
