import Link from "next/link";
import { review } from "@/lib/content";

export default function Testimonial() {
  return (
    <figure className="review">
      <div className="aanh" aria-hidden="true">&ldquo;</div>
      <div>
        <blockquote>{review.tekst}</blockquote>
        <footer>
          <span>{review.bron}</span>
          <Link href="/reviews/">Bekijk alle klantervaringen</Link>
        </footer>
      </div>
    </figure>
  );
}
