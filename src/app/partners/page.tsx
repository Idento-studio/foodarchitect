import type { Metadata } from "next";
import CategorieHero from "@/components/CategorieHero";
import SlotCta from "@/components/SlotCta";
import { eventPartners } from "@/lib/content";

export const metadata: Metadata = {
  title: "Partners",
  description: "De materiaal- en eventpartners waarmee Food Architect samenwerkt: van tenten en meubilair tot licht- en geluidstechniek.",
  alternates: { canonical: "/partners/" },
  openGraph: {
    title: "Partners",
    description: "Met wie we samenwerken om uw feest of event vorm te geven.",
    url: "/partners/",
    images: [{ url: "/images/og-home.jpg", width: 1200, height: 630, alt: "Food Architect" }],
  },
};

export default function PartnersPagina() {
  return (
    <>
      <CategorieHero
        kicker="Partners"
        titel="Met wie we samenwerken"
        lead="Naast onze eigen keuken werken we samen met vaste partners voor materiaal, styling en techniek, zodat elk feest tot in de puntjes verzorgd is."
      />
      <section className="sectie licht">
        <div className="wrap">
          <ul className="partners">
            {eventPartners.map((p) => (
              <li key={p.naam}>
                <b><a href={p.url} target="_blank" rel="noopener">{p.naam}</a></b>
                <span>{p.tekst}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <SlotCta />
    </>
  );
}
