import { documentGuides } from "@/data/documents";
import { laws, officialServices } from "@/data/content";

export const metadata = {
  title: "Sources & Verification Policy",
  description: "See the primary and authoritative sources Roadbook NG uses."
};

export default function SourcesPage() {
  const docSources = Array.from(
    new Map(documentGuides.flatMap((doc) => doc.sources).map((source) => [source.url, source])).values()
  );

  return (
    <section className="section pageTop">
      <div className="pageIntro">
        <div className="eyebrow">Sources</div>
        <h1>Show the source, show the date.</h1>
        <p>
          Roadbook is designed around a simple rule: if a requirement can cost you money,
          affect your legal position or change how you use a vehicle, the source matters.
        </p>
      </div>

      <div className="sourcePolicy">
        <div><strong>1</strong><h3>Primary first</h3><p>FRSC, NPF, NAICOM, state authority or the official service itself whenever available.</p></div>
        <div><strong>2</strong><h3>Contested = labelled</h3><p>Court disputes and changing enforcement positions are described as changing, not frozen into false certainty.</p></div>
        <div><strong>3</strong><h3>State ≠ national</h3><p>Local procedures stay labelled state-specific until there is a reliable nationwide basis.</p></div>
        <div><strong>4</strong><h3>Date every check</h3><p>Core V1 content was checked on 17 Aug 2026. Important actions should still be re-checked at source.</p></div>
      </div>

      <h2 className="sourceGroupTitle">Document sources</h2>
      <div className="sourceDirectory">
        {docSources.map((source) => (
          <a href={source.url} target="_blank" rel="noreferrer" key={source.url}><span>{source.label}</span><b>↗</b></a>
        ))}
      </div>

      <h2 className="sourceGroupTitle">Verification services</h2>
      <div className="sourceDirectory">
        {officialServices.map((source) => (
          <a href={source.url} target="_blank" rel="noreferrer" key={source.url}><span>{source.agency} — {source.title}</span><b>↗</b></a>
        ))}
      </div>

      <h2 className="sourceGroupTitle">Legal-framework references</h2>
      <div className="sourceDirectory">
        {laws.map((source) => (
          <a href={source.url} target="_blank" rel="noreferrer" key={source.title}><span>{source.title}</span><b>↗</b></a>
        ))}
      </div>
    </section>
  );
}
