import { PlateHelper } from "@/components/PlateHelper";

export const metadata = {
  title: "Nigeria Number Plate Guide",
  description: "Understand Nigerian number-plate categories and verify plates safely through FRSC NVIS."
};

const categories = [
  ["Private", "Standard private vehicle registration through the authorised state/FCT motor licensing route."],
  ["Commercial", "Commercial vehicle registration. Do not assume a private-vehicle operating profile covers commercial use."],
  ["Government", "Official government-number-plate categories are for eligible government institutions, not private clubs or associations."],
  ["Diplomatic", "Special diplomatic registration categories are controlled, status-based allocations."],
  ["Motorcycle / tricycle", "These vehicles are also subject to registration and number-plate requirements under the national road-traffic framework."],
  ["Fancy / reserved", "NVIS supports fancy-number requests within the official allocation workflow; a custom-looking plate still needs to be legitimate."]
];

export default function PlatesPage() {
  return (
    <section className="section pageTop">
      <div className="pageIntro">
        <div className="eyebrow">Plate guide</div>
        <h1>A plate is an identifier, not decoration.</h1>
        <p>
          Learn the main categories, avoid fake allocations and use FRSC NVIS for the part that matters:
          whether the number is actually recognised.
        </p>
      </div>
      <PlateHelper />

      <div className="sectionHeading"><div className="eyebrow">Classes & use</div><h2>What kind of plate are we talking about?</h2></div>
      <div className="plateCategoryGrid">
        {categories.map(([title, body]) => (
          <div className="plateCategory" key={title}><h3>{title}</h3><p>{body}</p></div>
        ))}
      </div>

      <div className="callout amber">
        <strong>We intentionally do not publish an unsourced colour/prefix decoder.</strong>
        <span>
          Plate visuals, special allocations and state/LGA codes are easy to copy wrongly from infographics.
          V1 prefers official verification over confidently misidentifying a plate.
        </span>
      </div>
    </section>
  );
}
