# Openstaand voor Food Architect

Alles wat bewust nog leeg of op een placeholder staat. Vul aan vóór livegang.

## Bevestigen bij de klant
- [x] **Domeinnaam.** Bevestigd: `https://www.foodarchitect.be`.
- [x] **Telefoonnummer.** Bevestigd: `0471 30 31 30`.
- [x] **Postadres.** Bevestigd: Polderbos 30, De Pinte. Postcode `9840` zelf toegevoegd (enige postcode van De Pinte) — niet apart bevestigd door de klant, controleer dit nog.
- [x] **Ondernemingsnummer** bevestigd: `0500.800.706` (btw `BE 0500.800.706`). Toegevoegd aan `site` in `content.ts`, de footer en de JSON-LD (`taxID`/`vatID`) op `/` en `/gent/`. **Juridische naam (rechtsvorm)** nog niet bevestigd — nodig voor het privacybeleid.
- [x] **Socialprofielen bevestigd**: Facebook (`https://www.facebook.com/FoodArchitect/`) en Instagram (`https://www.instagram.com/foodarchitect_by_kim/`). Toegevoegd aan `site` in `content.ts`, de footer en `sameAs` in de JSON-LD op `/` en `/gent/`. Pinterest was enkel een generieke placeholder-link en is verwijderd — geef door als er wél een echt Pinterest-profiel is.
- [x] **Openingsuren/bereikbaarheid**: bewust niet vermeld op de website, Food Architect is altijd bereikbaar.
- [x] Spelling **Vandevoorde** bevestigd correct.
- [x] **Geen tweede oprichter.** Bevestigd: enkel Chef Kim Vandevoorde. De eerder (op uitdrukkelijk verzoek) toegevoegde "Maître Delphine" is weer verwijderd uit de FAQ-vraag "Wie is het gezicht achter Food Architect?" en uit `/over-food-architect/`.
- [ ] **Spelling locatienamen controleren.** Overgenomen van de live site voor `/locaties/`: "L'esceau" (Zottegem) en "De Melkerij, Vinderoute (Lovendegem)" — "Vinderoute" oogt als mogelijke tikfout voor "Vinderhoute", maar staat zo op de huidige site. Zie `src/lib/content.ts` (`locaties`).
- [x] **Domeinnaam Mémoire bevestigd**: `https://www.mémoire.be/` (met accent). Bijgewerkt in `src/lib/content.ts` (`eventPartners`).
- [ ] **Verzorgingsgebied "ruime regio rond Gent" controleren.** Voor de SEO (JSON-LD `areaServed` op de homepage en `/gent/`, plus de "Actief als Traiteur in..."-sectie op `/gent/`) heb ik zelf een lijst gemaakt van Gent en omliggende gemeenten/deelgemeenten (Sint-Amandsberg, Gentbrugge, Ledeberg, Drongen, Zwijnaarde, Destelbergen, Merelbeke, Lochristi, De Pinte, Sint-Martens-Latem, Deinze) op basis van de bestaande basis in De Pinte/Deinze — dit is niet bevestigd door de klant. Controleer en pas aan waar nodig, zie `src/app/page.tsx` en `src/app/gent/page.tsx`.

## Beeldmateriaal nog aan te leveren
- [x] **Hero.** Foto aangeleverd en verwerkt via `scripts/images.mjs` (bron in `assets-bron/hero.jpg`, niet gecommit). Let op: de aangeleverde foto is staand (1080×1350), geen liggend beeld ≥2000px zoals hier oorspronkelijk gevraagd — `object-fit:cover` vult de hero, maar snijdt op brede schermen meer van de zijkanten weg dan bij een liggende foto. Vervang later gerust door een liggend beeld voor een strakkere crop.
- [x] **Foto's bij de kaartjes op `/partners/` en `/locaties/`** — aangeleverd en verwerkt via het `pad`-veld in `LinkKaarten`/`content.ts`.
- [ ] **Slot-CTA**, liggend sfeerbeeld (optioneel) → `src/components/SlotCta.tsx`.
- [ ] **og-image** 1200 × 630 → `/public/images/og-home.jpg`.
- [x] **Favicons/logo**: `logo-foodarchitect.svg` aangeleverd → verwerkt als `src/app/icon.svg` (donkergroen, moderne browsers), `src/app/apple-icon.png` (180×180) en `src/app/favicon.ico` (16/32/48, fallback). `site.webmanifest`/`icon-192`/`icon-512` voor PWA-gebruik nog niet aangemaakt (niet gevraagd, wel eenvoudig toe te voegen).
- [x] **Logo-SVG** ter vervanging van het tekstlogo "fa" in `Header.tsx` — witte variant staat als `public/images/logo-fa-wit.svg`. `Footer.tsx` gebruikt bewust nog het tekstlogo "fa" (niet gevraagd) — kan op dezelfde manier vervangen worden.
- [x] Video: `/public/video/event.mp4` staat klaar (720 px, 4,5 MB, H.264+AAC) en wordt gebruikt op `bedrijfsevenementen/` en `personeelsfeesten/`.
- [ ] **`zalm.mp4` (186,5 MB) is te zwaar.** Gebruikt op `private-catering/verjaardagen-jubilea/` als inleidingsvideo. Vraag om een opnieuw geëxporteerde versie op vergelijkbare specs als `event.mp4` (720p, H.264+AAC, een paar MB) — hier kon ik dat zelf niet comprimeren (geen ffmpeg beschikbaar).
- [ ] **`keuken.mp4` (99 MB) is ook te zwaar**, zelfde probleem als `zalm.mp4`. Gebruikt op `/over-food-architect/` naast "Feeding Memories". Zelfde vraag: opnieuw exporteren op vergelijkbare specs als `event.mp4`.
- [ ] **`team.webp` (voor `/over-food-architect/`) heeft een groot overlay-watermerk** ("fa food architect"-logo midden over de foto, portfolio-proof) en is opzijgezet als `team.watermerk-vervangen.webp` in `public/images/over-food-architect/`. Lever een schone versie aan onder de naam `team.jpg` (of .webp/.png/.avif).

## Design
- [x] **"Bezoek website"-knop op `/partners/` en `/locaties/` iets minder prominent maken** — vervangen door een subtiele tekstlink (`.lees`, zelfde stijl als "Meer over private catering" op de homepage). Zie `src/components/LinkKaarten.tsx`.

## SEO
- [x] **Meta title, meta description en keywords op elke pagina**, gericht op de gevraagde positionering: "traiteur Gent" / traiteur van hoge kwaliteit in de ruime regio rond Gent. Elke pagina heeft nu een eigen `keywords`-array (5 stuks) en een title/description die "traiteur" en "Gent" natuurlijk verwerkt, los van de creatieve H1 op de pagina zelf (die is niet gewijzigd).
- [x] **`/gent/` aangemaakt**: een landingspagina die visueel identiek is aan de homepage (dezelfde componenten: Hero, Filosofie, FotoBand, Diensten, Traject, Lokaal, SmaakCheck, SlotCta), maar met tekst die specifiek is herschreven rond "traiteur Gent" (`Hero`, `Filosofie` en `Lokaal` kregen daarvoor optionele tekst-props). Bevat ook een extra sectie met plaatsen in de ruime regio Gent, en eigen JSON-LD (`FoodEstablishment`) gericht op Gent. Toegevoegd aan `sitemap.ts` en gelinkt vanuit de footer ("Traiteur Gent").
- [ ] **Let op: kannibalisatie-risico tussen `/` en `/gent/`.** Beide pagina's zijn bewust erg gelijkaardig (zelfde opbouw, sterk overlappende tekst) en targeten nagenoeg dezelfde zoekopdracht ("traiteur Gent"). Zoekmachines kunnen dit als bijna-duplicate content beschouwen, wat het risico geeft dat ze onderling gaan concurreren in plaats van elkaar te versterken (in het ergste geval bestempeld als "doorway page" door Google). Ik heb dit risico verkleind door een unieke sectie (plaatsen in de regio) toe te voegen aan `/gent/` en door de title/description van beide pagina's te laten verschillen, maar helemaal weggenomen is het niet. Overweeg op termijn om `/gent/` verder te verrijken met écht unieke inhoud (bv. Gent-specifieke FAQ, testimonials, kaart) zodat de pagina op eigen merites kan ranken.
- [x] **JSON-LD `areaServed` op de homepage** aangepast van "Vlaanderen" naar Gent + omliggende gemeenten (zie hierboven, nog te bevestigen).
- [x] Verouderd `icons`/`manifest`-blok in `src/app/layout.tsx` opgeruimd — verwees naar niet-bestaande bestanden (`icon-192.png`, `apple-touch-icon.png`, `site.webmanifest`) van vóór de favicon-implementatie; de file-based iconen (`icon.svg`, `apple-icon.png`, `favicon.ico`) dekken dit al automatisch.

## Techniek
- [x] **GA4 measurement ID** ingesteld: `G-B622X5H91Y` in `src/lib/content.ts` (`gaId`). Laadt via de bestaande consent-gate in `src/app/layout.tsx` (gtag.js start met `analytics_storage:'denied'` en wordt pas op `'update'` gezet nadat een bezoeker in `CookieConsent.tsx` toestemming geeft) — bewust niet vervangen door het kale script-snippet dat werd aangeleverd, want dat zou de cookiebanner omzeilen.
- [x] **Formspree-endpoint** ingesteld: `https://formspree.io/f/xkjgkvej`, gebruikt door zowel `/contact/` als `/offerte-aanvragen/` (elk met een eigen `_subject`-veld zodat de e-mails te onderscheiden zijn). Native HTML-formulier-POST, passend bij de statische export — geen extra JS-SDK nodig. Nog na te kijken: het productiedomein whitelisten in het Formspree-dashboard, anders wordt de submit daar geblokkeerd.
- [x] **browserslist** ingesteld in `package.json`.
- [x] Subpagina's gebouwd: de 3 overzichtspagina's, de 7 detailpagina's onder private-/event-catering, Over Food Architect, Reviews, Referenties, Locaties, Partners, FAQ en Contact. Inhoud overgenomen/vertaald vanaf de huidige live site (foodarchitect.idento.be). Privacy- en cookiebeleid bewust nog niet gebouwd (zie hieronder). Alle afbeeldingen op de nieuwe pagina's zijn placeholders — zie `public/images/<pagina>/leesmij.txt` per map voor de verwachte bestandsnaam.
- [ ] Privacy- en cookiebeleid schrijven (`/privacy/`, `/cookiebeleid/`), met de echte verwerkingsverantwoordelijke — ondernemingsnummer is nu bekend, maar de juridische naam (rechtsvorm) staat nog open, zie hierboven.

## Inhoudelijk
- [ ] Er is **één** echte review (Sarah & Thomas). Meer reviews → `review` in `content.ts` uitbreiden naar een lijst. Niets verzinnen.
- [ ] De foto bij "Geworteld in regio Vlaanderen" is een bordfoto met watermerk. Een beeld van een producent of markt past inhoudelijk beter.
- [ ] Partnernamen "De wijnhandel om de hoek" en "Boeren uit de streek" (lokale voedselpartners, homepage) zijn omschrijvingen, geen echte namen. Vervangen door de echte partners. Let op: dit is een andere lijst dan `/partners/` (materiaal-/eventpartners), die wél al echte namen heeft — overgenomen van de huidige live site.
- [ ] **Reviews-pagina** (`/reviews/`) toont voorlopig enkel de ene echte review. De oude site vermeldt ook videotestimonials van "Sabrina & Dante" en "Jasmine & Arthur", maar zonder beschikbare videobestanden — die kan ik niet toevoegen zonder het echte materiaal.
- [ ] **Referenties-pagina** (`/referenties/`) heeft nog geen concrete klantcases; de oude site had daar zelf ook geen zichtbare inhoud voor. Linkt voorlopig enkel door naar de portfolio (`externLinks.impressies`).
