import { faq as globaleFaq } from "@/lib/content";

type FaqItem = { v: string; a: string };
type FaqCategorie = { naam: string; vragen: FaqItem[] };

function FaqLijst({ items }: { items: FaqItem[] }) {
  return (
    <div className="faqlijst">
      {items.map((item) => (
        <details key={item.v}>
          <summary>{item.v}</summary>
          <p>{item.a}</p>
        </details>
      ))}
    </div>
  );
}

export default function Faq({
  items = globaleFaq, categorieen,
}: { items?: FaqItem[]; categorieen?: FaqCategorie[] }) {
  if (categorieen) {
    return (
      <div className="faqcategorieen">
        {categorieen.map((cat) => (
          <div className="faqcategorie" key={cat.naam}>
            <h3>{cat.naam}</h3>
            <FaqLijst items={cat.vragen} />
          </div>
        ))}
      </div>
    );
  }
  return <FaqLijst items={items} />;
}
