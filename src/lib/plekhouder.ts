import { existsSync } from "node:fs";
import path from "node:path";

const EXTENSIES = ["jpg", "jpeg", "png", "webp", "avif"];

/**
 * Zoekt public/images/<pad>.<ext> voor elke ondersteunde extensie en geeft het
 * gevonden pad (met extensie, zonder leidende "/") terug, of null als er niets
 * op die plek staat. Gedeeld door PlaceholderFoto.tsx.
 */
export function vindAfbeelding(pad: string): string | null {
  const gevonden = EXTENSIES.find((ext) =>
    existsSync(path.join(process.cwd(), "public", "images", `${pad}.${ext}`))
  );
  return gevonden ? `${pad}.${gevonden}` : null;
}
