import Link from "next/link";

export const metadata = {
  title: "Buying a Used Car in Nigeria",
  description: "A due-diligence checklist for verifying a used Nigerian vehicle before payment."
};

const stages = [
  {
    n: "01",
    title: "Before you meet the seller",
    items: [
      "Ask for the plate number, chassis/VIN, vehicle particulars and ownership name before committing money.",
      "Verify the plate on FRSC NVIS.",
      "Ask for proof of ownership and independently verify it through the FRSC ownership platform.",
      "Ask for motor-insurance details and verify the policy rather than accepting a paper copy."
    ]
  },
  {
    n: "02",
    title: "At the vehicle",
    items: [
      "Physically match the chassis/VIN and engine identifiers to the documents.",
      "Check that the seller's identity/authority to sell matches the ownership story.",
      "Inspect tyres, lights, glass, mirrors, seat belts and other safety-critical parts.",
      "Use a competent mechanic/inspection professional for mechanical and structural checks."
    ]
  },
  {
    n: "03",
    title: "Security & ownership checks",
    items: [
      "Review Police e-CMR ownership/change-of-ownership requirements.",
      "If the vehicle has an existing CMR, use the correct change-of-ownership route instead of creating a conflicting record.",
      "Treat mismatched names, duplicated documents, altered VIN plates or pressure to skip verification as red flags."
    ]
  },
  {
    n: "04",
    title: "Before full payment",
    items: [
      "Agree in writing what is being sold, the amount, vehicle identifiers and parties.",
      "Complete the legitimate ownership-transfer/registration process.",
      "Keep payment and transfer evidence.",
      "Do not let 'we will fix the documents later' become the final state of a multi-million-naira purchase."
    ]
  }
];

export default function BuyingPage() {
  return (
    <section className="section pageTop">
      <div className="pageIntro">
        <div className="eyebrow">Used-car due diligence</div>
        <h1>Verify the car before you fall in love with the car.</h1>
        <p>
          Clean paint, a convincing seller and a folder of photocopies do not prove legal ownership.
          Match the physical vehicle to independent records before money changes hands.
        </p>
      </div>

      <div className="buyingFlow">
        {stages.map((stage) => (
          <div className="buyingStage" key={stage.n}>
            <div className="stageNum">{stage.n}</div>
            <div><h2>{stage.title}</h2><ul>{stage.items.map((item) => <li key={item}>{item}</li>)}</ul></div>
          </div>
        ))}
      </div>

      <div className="actionBand">
        <div><h2>Open the checks before you pay.</h2><p>Plate, ownership, insurance and CMR routes are grouped in one place.</p></div>
        <Link className="button white" href="/verify">Open verification hub</Link>
      </div>

      <div className="callout">
        <strong>Imported / customs status</strong>
        <span>
          Imported-vehicle customs verification is important, but Roadbook V1 does not yet publish a customs checker
          until we can route users to a reliable current official process. Do not treat that omission as a green light.
        </span>
      </div>
    </section>
  );
}
