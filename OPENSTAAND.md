# Openstaand voor Food Architect

Alles wat bewust nog leeg of op een placeholder staat. Vul aan vóór livegang.

## Bevestigen bij de klant
- [x] **Domeinnaam.** Bevestigd: `https://www.foodarchitect.be`.
- [x] **Telefoonnummer.** Bevestigd: `0471 30 31 30`.
- [x] **Postadres.** Bevestigd: Polderbos 30, De Pinte. Postcode `9840` zelf toegevoegd (enige postcode van De Pinte) — niet apart bevestigd door de klant, controleer dit nog.
- [ ] **Ondernemingsnummer en juridische naam** voor de footer en het privacybeleid.
- [ ] **Socialprofielen** (Instagram, Pinterest, Facebook) → `sameAs` in het JSON-LD en de footerlinks.
- [ ] **Openingsuren of bereikbaarheid**, indien van toepassing.
- [ ] Klopt de spelling **Vandevoorde**? De oude site schreef op één plek "Vande voorde".
- [ ] **Is er een tweede oprichter/teamlid naast Chef Kim?** De vorige site (foodarchitect.idento.be) vermeldt overal een "Maître Delphine" voor zaal en gastvrijheid. Die naam komt nergens voor in de content die voor deze nieuwe site is aangeleverd, dus ik heb ze bewust weggelaten uit `over-food-architect/` en de FAQ. Navragen en zo nodig toevoegen aan `content.ts` en die pagina's.
- [ ] **Spelling locatienamen controleren.** Overgenomen van de live site voor `/locaties/`: "L'esceau" (Zottegem) en "De Melkerij, Vinderoute (Lovendegem)" — "Vinderoute" oogt als mogelijke tikfout voor "Vinderhoute", maar staat zo op de huidige site. Zie `src/lib/content.ts` (`locaties`).
- [ ] **Domeinnaam Mémoire controleren.** Op `/partners/` gelinkt als `memoire.be` (genormaliseerd vanaf een geaccentueerde `mémoire.be`-vermelding op de oude site) — controleer of dat de juiste, werkende domeinnaam is.

## Beeldmateriaal nog aan te leveren
- [x] **Hero.** Foto aangeleverd en verwerkt via `scripts/images.mjs` (bron in `assets-bron/hero.jpg`, niet gecommit). Let op: de aangeleverde foto is staand (1080×1350), geen liggend beeld ≥2000px zoals hier oorspronkelijk gevraagd — `object-fit:cover` vult de hero, maar snijdt op brede schermen meer van de zijkanten weg dan bij een liggende foto. Vervang later gerust door een liggend beeld voor een strakkere crop.
- [ ] **Slot-CTA**, liggend sfeerbeeld (optioneel) → `src/components/SlotCta.tsx`.
- [ ] **og-image** 1200 × 630 → `/public/images/og-home.jpg`.
- [ ] **Favicons**: `favicon.ico`, `apple-touch-icon.png` (180), `icon-192.png`, `icon-512.png`, `site.webmanifest`.
- [ ] **Logo-SVG** (`LOGO_Wit.svg`) ter vervanging van het tekstlogo "fa" in `Header.tsx` en `Footer.tsx`.
- [ ] Video: `/public/video/event.mp4` staat klaar (720 px, 4,5 MB, H.264+AAC). Overweeg een WebM-variant erbij.

## Techniek
- [ ] **GA4 measurement ID** vervangen in `src/lib/content.ts` (`gaId`). Zolang de placeholder staat, laadt gtag.js bewust niet.
- [ ] **Formspree-endpoint** voor de contact- en offertepagina, plus het productiedomein whitelisten in het Formspree-dashboard. Het contactformulier op `/contact/` staat al klaar (`src/app/contact/page.tsx`) maar wijst nog naar een placeholder-`action`; verstuurt dus nog niets.
- [x] **browserslist** ingesteld in `package.json`.
- [x] Subpagina's gebouwd: de 3 overzichtspagina's, de 7 detailpagina's onder private-/event-catering, Over Food Architect, Reviews, Referenties, Locaties, Partners, FAQ en Contact. Inhoud overgenomen/vertaald vanaf de huidige live site (foodarchitect.idento.be). Privacy- en cookiebeleid bewust nog niet gebouwd (zie hieronder). Alle afbeeldingen op de nieuwe pagina's zijn placeholders — zie `public/images/<pagina>/leesmij.txt` per map voor de verwachte bestandsnaam.
- [ ] Privacy- en cookiebeleid schrijven (`/privacy/`, `/cookiebeleid/`), met de echte verwerkingsverantwoordelijke — kan pas met het ondernemingsnummer/juridische naam hierboven.

## Inhoudelijk
- [ ] Er is **één** echte review (Sarah & Thomas). Meer reviews → `review` in `content.ts` uitbreiden naar een lijst. Niets verzinnen.
- [ ] De foto bij "Geworteld in regio Vlaanderen" is een bordfoto met watermerk. Een beeld van een producent of markt past inhoudelijk beter.
- [ ] Partnernamen "De wijnhandel om de hoek" en "Boeren uit de streek" (lokale voedselpartners, homepage) zijn omschrijvingen, geen echte namen. Vervangen door de echte partners. Let op: dit is een andere lijst dan `/partners/` (materiaal-/eventpartners), die wél al echte namen heeft — overgenomen van de huidige live site.
- [ ] **Reviews-pagina** (`/reviews/`) toont voorlopig enkel de ene echte review. De oude site vermeldt ook videotestimonials van "Sabrina & Dante" en "Jasmine & Arthur", maar zonder beschikbare videobestanden — die kan ik niet toevoegen zonder het echte materiaal.
- [ ] **Referenties-pagina** (`/referenties/`) heeft nog geen concrete klantcases; de oude site had daar zelf ook geen zichtbare inhoud voor. Linkt voorlopig enkel door naar de portfolio (`externLinks.impressies`).
