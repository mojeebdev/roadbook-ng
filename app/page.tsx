import Link from "next/link";
import { documentGuides } from "@/data/documents";
import { officialServices } from "@/data/content";

const journeys = [
  { title: "I own a car", text: "Get the baseline documents, renewal and verification checklist.", href: "/checklist", mark: "01" },
  { title: "I drive commercially", text: "See the extra licence, inspection and operating checks.", href: "/checklist", mark: "02" },
  { title: "I'm buying a used car", text: "Verify the vehicle before money changes hands.", href: "/buying-a-car", mark: "03" },
  { title: "I've been stopped", text: "A calm, practical guide to documents and official process.", href: "/roadside", mark: "04" }
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="heroGrid" aria-hidden="true" />
        <div className="heroContent">
          <div className="eyebrow light">Nigeria&apos;s road-ready guide</div>
          <h1>Know what you need.<br /><span>Know who handles it.</span></h1>
          <p>
            Vehicle particulars, road rules, official verification and practical guidance —
            without the roadside confusion or WhatsApp-law guesswork.
          </p>
          <div className="heroActions">
            <Link className="button white" href="/checklist">Build my checklist</Link>
            <Link className="button ghostLight" href="/verify">Verify a document</Link>
          </div>
          <div className="trustLine">
            <span>Independent</span>
            <span>Official-source links</span>
            <span>No signup</span>
            <span>No personal data stored</span>
          </div>
        </div>
        <div className="heroCard" aria-label="Roadbook quick example">
          <div className="cardChrome">
            <span /><span /><span />
            <small>ROAD-READY / PRIVATE CAR</small>
          </div>
          <div className="roadCardBody">
            <div className="roadCardItem done"><b>✓</b><span><strong>Driver&apos;s licence</strong><small>FRSC + state process</small></span></div>
            <div className="roadCardItem done"><b>✓</b><span><strong>Vehicle particulars</strong><small>Current + verifiable</small></span></div>
            <div className="roadCardItem done"><b>✓</b><span><strong>Motor insurance</strong><small>Verify, don&apos;t trust paper alone</small></span></div>
            <div className="roadCardItem warn"><b>!</b><span><strong>Roadworthiness</strong><small>Check your state + vehicle class</small></span></div>
            <div className="roadCardItem info"><b>i</b><span><strong>Tinted glass</strong><small>Check current NPF/court position</small></span></div>
          </div>
          <div className="lastChecked">Federal baseline • updated 17 Aug 2026</div>
        </div>
      </section>

      <section className="section">
        <div className="sectionHeading split">
          <div>
            <div className="eyebrow">Start with your situation</div>
            <h2>Not a document dump. A decision tool.</h2>
          </div>
          <p>Choose what you&apos;re trying to do and Roadbook takes you to the useful part first.</p>
        </div>
        <div className="journeyGrid">
          {journeys.map((item) => (
            <Link href={item.href} className="journeyCard" key={item.title}>
              <span className="journeyMark">{item.mark}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <b>Open guide →</b>
            </Link>
          ))}
        </div>
      </section>

      <section className="section altSection">
        <div className="sectionHeading split">
          <div>
            <div className="eyebrow">Vehicle particulars</div>
            <h2>The folder, explained.</h2>
          </div>
          <Link className="textLink" href="/documents">See every guide →</Link>
        </div>
        <div className="docGrid">
          {documentGuides.slice(0, 8).map((doc) => (
            <Link href={`/documents/${doc.slug}`} className="docCard" key={doc.slug}>
              <div className="docCardTop">
                <span className={`statusPill ${doc.status.toLowerCase().replace("-", "")}`}>{doc.status}</span>
                <span>↗</span>
              </div>
              <h3>{doc.title}</h3>
              <p>{doc.short}</p>
              <small>{doc.authority}</small>
            </Link>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="sourceBanner">
          <div>
            <div className="eyebrow light">Official verification hub</div>
            <h2>Don&apos;t just carry paper. Verify it.</h2>
            <p>Jump from Roadbook to the official service that actually holds or validates the record.</p>
          </div>
          <div className="sourceStack">
            {officialServices.slice(0, 4).map((service) => (
              <a href={service.url} target="_blank" rel="noreferrer" key={service.title}>
                <span><small>{service.agency}</small><strong>{service.title}</strong></span><b>↗</b>
              </a>
            ))}
            <Link href="/verify">Open all verification links →</Link>
          </div>
        </div>
      </section>

      <section className="section compactSection">
        <div className="principles">
          <div><b>01</b><h3>Federal ≠ state</h3><p>Roadbook labels state-specific processes instead of pretending Nigeria has one local procedure.</p></div>
          <div><b>02</b><h3>Law ≠ roadside folklore</h3><p>Important claims point back to FRSC, NPF, NAICOM, NIID or another authoritative source.</p></div>
          <div><b>03</b><h3>Guidance ≠ government service</h3><p>We explain and route. We do not issue official documents or collect your identity data.</p></div>
        </div>
      </section>
    </>
  );
}
