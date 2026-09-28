import type { Metadata } from "next";
import CategorieHero from "@/components/CategorieHero";
import Kenmerken from "@/components/Kenmerken";
import Testimonial from "@/components/Testimonial";
import SmaakCheck from "@/components/SmaakCheck";
import SlotCta from "@/components/SlotCta";

export const metadata: Metadata = {
  title: "Over Food Architect",
  description: "Maak kennis met Food Architect en chef Kim Vandevoorde: culinaire vormgevers met een missie, geworteld in de regio Gent en Deinze.",
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
      <section className="sectie licht">
        <div className="wrap">
          <div style={{ maxWidth: "44em" }}>
            <span className="kicker">Chef Kim Vandevoorde</span>
            <h2>De architect van de smaak</h2>
            <p className="onder">Een menu ontwerpen zoals een architect een gebouw ontwerpt.</p>
            <p>
              Chef Kim Vandevoorde bouwt elk menu met precisie, maatwerk en de beste lokale fundamenten.
              Geen standaardformules, maar een culinair ontwerp op maat van elk feest en elk gezelschap.
            </p>
            <p style={{ marginTop: "1rem" }}>
              {/* Op de vorige site werd naast Chef Kim ook een "Maître Delphine" vermeld als
                  medeoprichter voor zaal en gastvrijheid. Die naam komt nergens voor in de
                  aangeleverde content voor deze nieuwe site — vraag na of dit nog klopt en of
                  er een tweede naam moet worden vermeld, zie OPENSTAAND.md. */}
              Een totaalservice die geen detail vergeet: van het eerste gesprek tot de bediening op de dag
              zelf, zodat u zelf niets anders hoeft te doen dan genieten.
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
