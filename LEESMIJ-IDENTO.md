# Food Architect — Next.js-opzet (Idento)

Deze map bevat alles wat bovenop een verse `create-next-app` gaat. De volgorde:

## 1. Scaffold

```bash
cd C:\Users\jensd\Documents\Projects\foodarchitect
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
```

Antwoord **nee** op de Turbopack-vraag (zie kickoff-document sectie 1).

## 2. Deze bestanden erover kopiëren

```
next.config.ts                 output: export, unoptimized images, trailingSlash
vercel.json                    security headers + caching
src/app/globals.css            design tokens (@theme) + de volledige sitestijl
src/app/layout.tsx             fonts via next/font, CSP, Consent Mode v2, header/footer
src/app/page.tsx               homepage + JSON-LD
src/app/not-found.tsx          gestileerde 404
src/app/sitemap.ts             sitemap volgens de Next-conventie
src/app/robots.ts              robots.txt
src/components/*.tsx           alle secties, header, footer, cookiebanner
src/lib/content.ts             alle teksten, links en data op één plek
scripts/images.mjs             sharp-script voor meerdere breedtes
public/images/*, public/video/ beeldmateriaal uit de Artifact
reference/artifact-homepage.html   de goedgekeurde vormgeving, ongewijzigd bewaren
OPENSTAAND.md                  wat nog bevestigd of aangeleverd moet worden
```

Verwijder de door create-next-app gegenereerde `src/app/page.tsx` en `globals.css`
voor je deze erover zet.

## 3. Draaien

```bash
npm run dev      # http://localhost:3000
npm run build    # statische export naar ./out
```

Zet `reference/artifact-homepage.html` ernaast in een tweede tabblad en vergelijk.
Die HTML is de visuele waarheid; wijk er niet van af zonder de klant.

## Keuzes die uitleg verdienen

**Waarom de stijl in globals.css en niet volledig in Tailwind-utilities?**
De tokens staan in het `@theme`-blok, dus `bg-groen`, `text-goud` en `font-titel`
werken gewoon in JSX. De sectiestijlen zelf komen letterlijk uit de goedgekeurde
Artifact, inclusief het stapelen van de diensten, de fotoband en de overgangen.
Die één op één overnemen geeft exact dezelfde vormgeving en houdt de diff met
`reference/artifact-homepage.html` leesbaar. Omzetten naar utility-classes zou
honderden klassen opleveren met exact dezelfde uitkomst en een groter risico op
afwijkingen. Nieuwe pagina's bouw je gerust met utilities bovenop deze tokens.

**Waarom `<img>` en geen `next/image`?** Bij `output: "export"` staat de
Image-optimalisatie-API uit. De beelden zijn daarom vooraf verkleind naar WebP.
`src/components/Foto.tsx` doet srcSet/sizes voor nieuwe foto's, samen met
`scripts/images.mjs`.

**Waarom geen animatiebibliotheek?** Alles gebeurt met CSS: `position: sticky`
voor het stapelen van de diensten, een keyframe-animatie voor de fotoband en
`prefers-reduced-motion` overal gerespecteerd. Dat scheelt JavaScript en houdt
de INP-score laag.
