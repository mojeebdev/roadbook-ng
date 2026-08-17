import Link from "next/link";
import { notFound } from "next/navigation";
import { documentGuides, getDocumentGuide } from "@/data/documents";

export function generateStaticParams() {
  return documentGuides.map((doc) => ({ slug: doc.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const doc = getDocumentGuide(slug);
  return doc ? { title: doc.title, description: doc.short } : {};
}

export default async function DocumentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const doc = getDocumentGuide(slug);
  if (!doc) notFound();

  return (
    <section className="section pageTop detailPage">
      <div className="breadcrumb"><Link href="/documents">Vehicle particulars</Link><span>/</span>{doc.title}</div>
      <div className="detailHero">
        <div>
          <span className={`statusPill ${doc.status.toLowerCase().replace("-", "")}`}>{doc.status}</span>
          <h1>{doc.title}</h1>
          <p>{doc.short}</p>
        </div>
        <div className="factCard">
          <small>Handled by</small><strong>{doc.authority}</strong>
          <small>Validity</small><strong>{doc.validity}</strong>
          <small>Last source check</small><strong>{doc.lastChecked}</strong>
        </div>
      </div>

      <div className="detailGrid">
        <article className="detailMain">
          <section>
            <h2>Who needs it?</h2>
            <ul>{doc.appliesTo.map((item) => <li key={item}>{item}</li>)}</ul>
          </section>
          <section>
            <h2>What to have before you start</h2>
            <ul className="checkBullets">{doc.bring.map((item) => <li key={item}>{item}</li>)}</ul>
          </section>
          <section>
            <h2>How to do it</h2>
            <ol className="stepList">{doc.steps.map((item) => <li key={item}>{item}</li>)}</ol>
          </section>
          <section>
            <h2>Cost / payment note</h2>
            <p>{doc.cost}</p>
          </section>
          <section>
            <h2>Legal / regulatory basis</h2>
            <p>{doc.law}</p>
          </section>
        </article>

        <aside className="detailAside">
          <div className="warningCard">
            <h3>Watch out for</h3>
            <ul>{doc.cautions.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
          <div className="sourceCard">
            <h3>Official / authoritative links</h3>
            {doc.sources.map((source) => (
              <a href={source.url} target="_blank" rel="noreferrer" key={source.url}>
                <span>{source.label}</span><b>↗</b>
              </a>
            ))}
            <small>Checked {doc.lastChecked}. Re-check before paying or relying on an enforcement deadline.</small>
          </div>
        </aside>
      </div>
    </section>
  );
}
