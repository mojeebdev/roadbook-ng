import { agencies } from "@/data/content";

export const metadata = {
  title: "Who Handles What?",
  description: "A directory of the Nigerian agencies and institutions behind common driver and vehicle requirements."
};

export default function AgenciesPage() {
  return (
    <section className="section pageTop">
      <div className="pageIntro">
        <div className="eyebrow">Agency map</div>
        <h1>Who handles what?</h1>
        <p>
          A big source of confusion is asking the right question at the wrong office.
          This is the institutional map Roadbook uses.
        </p>
      </div>
      <div className="agencyList">
        {agencies.map((agency, index) => (
          <a href={agency.url} target="_blank" rel="noreferrer" className="agencyRow" key={agency.name}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <div><h2>{agency.name}</h2><p>{agency.does}</p><small>{agency.doesNot}</small></div>
            <b>↗</b>
          </a>
        ))}
      </div>
    </section>
  );
}
