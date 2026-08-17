import { coreSafetyItems, laws } from "@/data/content";

export const metadata = {
  title: "Laws & Road Rules",
  description: "Plain-English orientation to key Nigerian motoring laws, regulations and FRSC offence information."
};

const practicalRules = [
  ["Licence", "Drive only with a valid licence covering the vehicle class you are operating."],
  ["Phone", "FRSC lists use of a phone while driving as an offence."],
  ["Alcohol / drugs", "FRSC lists driving under alcohol or drug influence as an offence."],
  ["Tyres", "Worn tyres and driving without a serviceable spare tyre appear on the FRSC offence schedule."],
  ["Restraints", "Seat-belt / child-restraint rules are safety requirements, not optional styling."],
  ["Number plate", "The vehicle should display authorised, unobscured identification plates and be properly registered."],
  ["Crash", "FRSC lists failure to report a road crash among its offences; prioritise safety and emergency response."],
  ["Speed", "Observe the applicable road/vehicle speed limits and speed-limiter rules where they apply."]
];

export default function LawsPage() {
  return (
    <section className="section pageTop">
      <div className="pageIntro">
        <div className="eyebrow">Laws & road rules</div>
        <h1>What the rule is — and where it comes from.</h1>
        <p>
          This is orientation, not legal representation. For enforcement disputes or court matters,
          use the source and seek qualified legal advice where needed.
        </p>
      </div>

      <div className="lawGrid">
        {laws.map((law) => (
          <a className="lawCard" href={law.url} target="_blank" rel="noreferrer" key={law.title}>
            <span>Legal framework</span>
            <h2>{law.title}</h2>
            <p>{law.plain}</p>
            <b>Open source ↗</b>
          </a>
        ))}
      </div>

      <div className="sectionHeading"><div className="eyebrow">Road rules in practice</div><h2>Common things that can become an offence.</h2></div>
      <div className="ruleTable">
        {practicalRules.map(([title, body]) => (
          <div className="ruleRow" key={title}><strong>{title}</strong><p>{body}</p></div>
        ))}
      </div>

      <div className="safetyBox">
        <div>
          <div className="eyebrow light">In-car safety baseline</div>
          <h2>Keep safety equipment serviceable.</h2>
        </div>
        <ul>{coreSafetyItems.map((item) => <li key={item}>{item}</li>)}</ul>
      </div>
    </section>
  );
}
