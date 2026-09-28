/**
 * Statische <img> met srcSet over de breedtes die scripts/images.mjs genereert.
 * Gebruik: <Foto naam="hero" alt="..." sizes="100vw" prioriteit />
 * Verwacht /public/images/<naam>-480.webp, -900.webp en -1400.webp.
 */
export default function Foto({
  naam, alt, sizes = "100vw", prioriteit = false, className, width = 1400, height,
}: {
  naam: string; alt: string; sizes?: string; prioriteit?: boolean;
  className?: string; width?: number; height?: number;
}) {
  const src = `/images/${naam}-900.webp`;
  const srcSet = [480, 900, 1400].map((b) => `/images/${naam}-${b}.webp ${b}w`).join(", ");
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src} srcSet={srcSet} sizes={sizes} alt={alt} className={className}
      width={width} height={height}
      loading={prioriteit ? "eager" : "lazy"}
      fetchPriority={prioriteit ? "high" : "auto"}
      decoding="async"
    />
  );
}
