import Link from "next/link";

export const metadata = {
  title: "Roadside & Traffic Stop Guide",
  description: "A calm, practical guide for Nigerian drivers during traffic stops, document checks and FRSC offence processing."
};

const doItems = [
  "Slow down safely, indicate and stop where directed without creating a new traffic hazard.",
  "Stay calm and identify which agency/officer is dealing with you.",
  "Ask what document, offence or safety issue is being checked.",
  "Present the relevant valid documents through a safe, reasonable process.",
  "If a formal offence is alleged, ask for the official notice/ticket and the recognised payment or court process.",
  "Keep records: ticket/reference number, receipt and other lawful evidence of the interaction.",
  "If you believe conduct is improper, prioritise your safety and use the agency's recognised complaint/escalation route."
];

const dontItems = [
  "Do not offer a bribe or informal cash payment to make an issue disappear.",
  "Do not obstruct or become violent.",
  "Do not hand over sensitive identity credentials to an unknown website or WhatsApp number.",
  "Do not argue from an old screenshot when a current law, court order or agency notice can be checked.",
  "Do not sign or pay something you do not understand without asking what it is for."
];

export default function RoadsidePage() {
  return (
    <section className="section pageTop">
      <div className="pageIntro">
        <div className="eyebrow">Roadside guide</div>
        <h1>Calm, documented, official.</h1>
        <p>
          This is not a “beat the checkpoint” guide. It is a practical way to protect safety,
          understand the request and keep the interaction on an official process.
        </p>
      </div>

      <div className="doDontGrid">
        <div className="doCard">
          <span>DO</span><h2>Keep the process clear.</h2>
          <ol>{doItems.map((item) => <li key={item}>{item}</li>)}</ol>
        </div>
        <div className="dontCard">
          <span>DON&apos;T</span><h2>Create a second problem.</h2>
          <ol>{dontItems.map((item) => <li key={item}>{item}</li>)}</ol>
        </div>
      </div>

      <div className="sectionHeading split">
        <div><div className="eyebrow">If FRSC books an offence</div><h2>Use the formal route.</h2></div>
        <a className="textLink" href="https://frsc.gov.ng/offences-and-penalties/" target="_blank" rel="noreferrer">Open FRSC offence table ↗</a>
      </div>
      <div className="callout">
        <strong>FRSC's public offence sheet expressly presents a court-trial choice and official payment route.</strong>
        <span>
          That is why Roadbook's default advice is to ask for the formal notice/reference and pay only through the recognised process,
          not as roadside cash.
        </span>
      </div>

      <div className="emergencyBand">
        <div><small>FRSC emergency toll-free line</small><strong>122</strong></div>
        <p>For road crashes/emergencies, prioritise scene safety and emergency response over document arguments.</p>
        <Link className="button white" href="/documents">Review my documents</Link>
      </div>
    </section>
  );
}
