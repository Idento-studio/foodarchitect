import Link from "next/link";

export const metadata = { title: "Pagina niet gevonden" };

export default function NietGevonden() {
  return (
    <section className="sectie slot donker" style={{ minHeight: "70svh", display: "grid", placeItems: "center" }}>
      <div className="wrap">
        <span className="kicker streep">404</span>
        <h2>Deze pagina staat niet op de kaart</h2>
        <p className="lead">De link klopt niet meer of de pagina is verhuisd. Onderstaande wegen brengen u wel ergens.</p>
        <div className="knoppen">
          <Link className="btn btn-vol" href="/">Naar de homepage</Link>
          <Link className="btn btn-lijn" href="/contact/">Contact</Link>
        </div>
      </div>
    </section>
  );
}
