import { officialServices } from "@/data/content";

export const metadata = {
  title: "Official Verification Hub",
  description: "Jump directly to official Nigerian vehicle, licence and insurance verification services."
};

export default function VerifyPage() {
  return (
    <section className="section pageTop">
      <div className="pageIntro">
        <div className="eyebrow">Official verification hub</div>
        <h1>Paper is not the database.</h1>
        <p>
          Use the official service behind the record. Roadbook does not proxy identity checks,
          store vehicle numbers or ask you to paste sensitive IDs into our site.
        </p>
      </div>
      <div className="verifyGrid">
        {officialServices.map((service, index) => (
          <a className="verifyCard" href={service.url} target="_blank" rel="noreferrer" key={service.title}>
            <span className="verifyNum">{String(index + 1).padStart(2, "0")}</span>
            <small>{service.agency}</small>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            <b>Open official service ↗</b>
          </a>
        ))}
      </div>
      <div className="callout amber">
        <strong>Anti-scam rule</strong>
        <span>
          Check the domain before entering NIN, licence, insurance or vehicle information.
          A search result, sponsored post or WhatsApp link is not proof that a site is official.
        </span>
      </div>
    </section>
  );
}
