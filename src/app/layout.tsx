import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import { site } from "@/lib/content";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"], weight: ["400", "600", "700"], style: ["normal", "italic"],
  display: "swap", variable: "--font-playfair",
});
const montserrat = Montserrat({
  subsets: ["latin"], weight: ["400", "500", "600"], display: "swap", variable: "--font-montserrat",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.domein),
  title: {
    default: "Food Architect — culinaire vormgeving & catering in Vlaanderen",
    template: "%s — Food Architect",
  },
  description:
    "Catering op maat met lokale producten voor huwelijksfeesten, bedrijfsevenementen en Fire & Smoke BBQ. Chef Kim Vandevoorde, Gent & Deinze.",
  openGraph: {
    type: "website", locale: "nl_BE", siteName: site.naam, url: site.domein,
    title: "Food Architect — culinaire vormgeving & catering in Vlaanderen",
    description: "Wij serveren geen maaltijden. Wij creëren herinneringen. Catering op maat in heel Vlaanderen.",
    images: [{ url: "/images/og-home.jpg", width: 1200, height: 630, alt: "Food Architect" }],
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/" },
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/icon-192.png", sizes: "192x192", type: "image/png" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
};

/** Basisafscherming; de sterkere variant met frame-ancestors staat in vercel.json. */
const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: https://www.googletagmanager.com https://www.google-analytics.com",
  "media-src 'self'",
  "font-src 'self' data:",
  "connect-src 'self' https://www.google-analytics.com https://formspree.io",
  "form-action 'self' https://formspree.io",
  "base-uri 'self'",
].join("; ");

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl-BE" className={`${playfair.variable} ${montserrat.variable}`}>
      <head>
        <meta httpEquiv="Content-Security-Policy" content={csp} />
        <meta name="theme-color" content="#06332C" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />

        {/* Consent Mode v2: alles geweigerd tot de bezoeker kiest. */}
        <Script id="consent-default" strategy="beforeInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('consent','default',{
            ad_storage:'denied', ad_user_data:'denied',
            ad_personalization:'denied', analytics_storage:'denied',
            wait_for_update: 500
          });
        `}</Script>
        {site.gaId !== "G-XXXXXXXXXX" && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${site.gaId}`} strategy="afterInteractive" />
            <Script id="ga4" strategy="afterInteractive">{`
              gtag('js', new Date());
              gtag('config', '${site.gaId}', { anonymize_ip: true });
            `}</Script>
          </>
        )}
      </head>
      <body>
        <a className="skip" href="#inhoud">Ga naar de inhoud</a>
        <Header />
        <main id="inhoud">{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
