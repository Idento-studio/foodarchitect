import type { MetadataRoute } from "next";
import { site } from "@/lib/content";

const paden = [
  "", "private-catering", "private-catering/huwelijksfeesten",
  "private-catering/verjaardagen-jubilea", "private-catering/communie-lentefeesten",
  "event-catering", "event-catering/bedrijfsevenementen", "event-catering/personeelsfeesten",
  "event-catering/seminaries", "event-catering/productlanceringen",
  "fire-smoke-bbq", "over-food-architect", "reviews", "referenties", "locaties",
  "partners", "faq", "contact", "privacy", "cookiebeleid",
];

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const nu = new Date();
  return paden.map((p) => ({
    url: `${site.domein}/${p ? p + "/" : ""}`,
    lastModified: nu,
    changeFrequency: p === "" ? "monthly" : "yearly",
    priority: p === "" ? 1 : p.includes("/") ? 0.6 : 0.8,
  }));
}
