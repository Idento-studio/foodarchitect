/**
 * Genereert meerdere breedtes in WebP uit /assets-bron/ naar /public/images/.
 * Gebruik:  npm i -D sharp  &&  node scripts/images.mjs
 * Bronbestanden blijven buiten de build; enkel de uitvoer wordt gecommit.
 */
import { mkdir, readdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const BRON = "assets-bron";
const DOEL = "public/images";
const BREEDTES = [480, 900, 1400];

await mkdir(DOEL, { recursive: true });
const bestanden = (await readdir(BRON)).filter((f) => /\.(jpe?g|png|webp)$/i.test(f));

for (const bestand of bestanden) {
  const naam = path.parse(bestand).name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  for (const breedte of BREEDTES) {
    const uit = path.join(DOEL, `${naam}-${breedte}.webp`);
    await sharp(path.join(BRON, bestand))
      .resize({ width: breedte, withoutEnlargement: true })
      .webp({ quality: 78 })
      .toFile(uit);
    console.log("→", uit);
  }
}
console.log(`\n${bestanden.length} bronbeelden × ${BREEDTES.length} breedtes klaar.`);
