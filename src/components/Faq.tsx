import { faq as globaleFaq } from "@/lib/content";

type FaqItem = { v: string; a: string };

export default function Faq({ items = globaleFaq }: { items?: FaqItem[] }) {
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
