import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section pageTop">
      <div className="emptyState">
        <div className="eyebrow">404</div>
        <h1>That page is off-road.</h1>
        <p>The guide may have moved or the URL may be wrong.</p>
        <Link className="button primary" href="/">Back to Roadbook</Link>
      </div>
    </section>
  );
}
