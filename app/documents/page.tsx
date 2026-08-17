import Link from "next/link";
import { documentGuides } from "@/data/documents";

export const metadata = {
  title: "Vehicle Particulars",
  description: "Understand the core documents Nigerian drivers and vehicle owners encounter."
};

export default function DocumentsPage() {
  return (
    <section className="section pageTop">
      <div className="pageIntro">
        <div className="eyebrow">Vehicle particulars</div>
        <h1>The folder, with context.</h1>
        <p>
          What each document is, who needs it, what to bring, where to get it,
          how to verify it and the scams or assumptions to avoid.
        </p>
      </div>
      <div className="docGrid large">
        {documentGuides.map((doc) => (
          <Link href={`/documents/${doc.slug}`} className="docCard" key={doc.slug}>
            <div className="docCardTop">
              <span className={`statusPill ${doc.status.toLowerCase().replace("-", "")}`}>{doc.status}</span>
              <span>↗</span>
            </div>
            <h2>{doc.title}</h2>
            <p>{doc.short}</p>
            <small>{doc.authority}</small>
          </Link>
        ))}
      </div>
      <div className="callout">
        <strong>Why some entries say “State-specific”</strong>
        <span>
          Nigeria has a national road-traffic framework, but vehicle licensing, inspection and some operating procedures
          are administered through state institutions. Roadbook flags that boundary instead of guessing.
        </span>
      </div>
    </section>
  );
}
