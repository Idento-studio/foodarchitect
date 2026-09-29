import type { Metadata } from "next";
import CategorieHero from "@/components/CategorieHero";
import PlaceholderFoto from "@/components/PlaceholderFoto";
import VideoMetGeluid from "@/components/VideoMetGeluid";
import Kenmerken from "@/components/Kenmerken";
import Testimonial from "@/components/Testimonial";
import SmaakCheck from "@/components/SmaakCheck";
import SlotCta from "@/components/SlotCta";

export const metadata: Metadata = {
  title: "Over uw Traiteur in Gent",
  description: "Maak kennis met Food Architect, uw traiteur in Gent: Chef Kim Vandevoorde, culinaire vormgever met een missie, geworteld in de regio.",
  keywords: ["traiteur Gent Chef Kim", "over Food Architect Gent", "traiteur regio Gent team", "cateraar Gent verhaal", "traiteur Gent filosofie"],
  alternates: { canonical: "/over-food-architect/" },
  openGraph: {
    title: "Over Food Architect",
    description: "Culinaire vormgevers met een missie: Feeding Memories.",
    url: "/over-food-architect/",
    images: [{ url: "/images/og-home.jpg", width: 1200, height: 630, alt: "Food Architect" }],
  },
};

const waarden = [
  { titel: "Maatwerk als fundament", tekst: "Geen standaardpakketten: elk menu wordt ontworpen rond uw gasten en uw verhaal.", icoon: "plan" as const },
  { titel: "Structurele kwaliteit", tekst: "Precisie en vakmanschap in elke stap, van het eerste gesprek tot de laatste gang.", icoon: "vink" as const },
  { titel: "Lokale samenwerking", tekst: "Wij bouwen voort op vaste, lokale partners zoals Monsieur Boudin voor ambachtelijke producten.", icoon: "kiem" as const },
];

export default function OverFoodArchitect() {
  return (
    <>
      <CategorieHero
        kicker="Over Food Architect"
        titel="Culinaire Vormgevers met een Missie"
        lead="Feeding Memories: wij geloven dat een maaltijd meer is dan een verzameling ingrediënten. Het is een emotie, een herinnering die je deelt."
      />
      <section className="sectie licht" id="inleiding">
        <div className="wrap inleiding-met-foto">
          <PlaceholderFoto pad="over-food-architect/team" alt="Chef Kim Vandevoorde en haar team" className="beeld" />
          <div>
            <span className="kicker">Over Food Architect</span>
            <h2>Chef Kim Vandevoorde</h2>
            <p style={{ marginTop: "1rem" }}>
              Achter elke memorabele smaak zit een doordacht ontwerp. Food Architect is de creatie van Chef
              Kim Vandevoorde, die als architect van de smaak elk menu ontwerpt en samen met haar team ook
              instaat voor de organisatie en gastvrijheid tijdens uw feest.
            </p>
            <p style={{ marginTop: "1rem" }}>
              Een totaalservice die geen detail vergeet: van het eerste gesprek tot de bediening op de dag
              zelf, zodat u zelf niets anders hoeft te doen dan genieten.
            </p>
          </div>
        </div>
      </section>

      <section className="sectie salie">
        <div className="wrap inleiding-met-foto omgekeerd">
          <VideoMetGeluid className="beeld" src="/video/keuken.mp4" ariaLabel="Sfeerbeeld van de keuken van Food Architect" />
          <div>
            <span className="kicker">Onze filosofie</span>
            <h2>Feeding Memories</h2>
            <p style={{ marginTop: "1rem" }}>
              Wij geloven dat een maaltijd meer is dan een verzameling ingrediënten. Het is een emotie, een
              herinnering die je deelt met de mensen die je dierbaar zijn. Onze slogan &apos;Feeding
              Memories&apos; is geen loze kreet; het is de rode draad in alles wat we doen. Wij bouwen aan
              momenten die blijven nazinderen, lang nadat de laatste gast vertrokken is.
            </p>
          </div>
        </div>
      </section>

      <section className="sectie licht">
        <div className="wrap">
          <div style={{ maxWidth: "44em" }}>
            <h2>Maatwerk als Fundament</h2>
            <p style={{ marginTop: "1rem" }}>
              Waarom de naam Food Architect? Omdat wij geloven in structurele kwaliteit. Net zoals een
              architect vertrekt van een blanco blad en een visie, zo ontwerpen wij elk menu op maat. Geen
              bandwerk, maar puur vakmanschap waarbij we nauw samenwerken met lokale helden zoals Monsieur
              Boudin om de hoogste kwaliteit uit de regio Gent en Deinze te garanderen.
            </p>
          </div>
          <div style={{ marginTop: "clamp(3rem,6vw,4.5rem)" }}>
            <Kenmerken items={waarden} />
          </div>
        </div>
      </section>
      <section className="sectie salie">
        <div className="wrap">
          <Testimonial />
        </div>
      </section>
      <SmaakCheck />
      <SlotCta />
    </>
  );
}
