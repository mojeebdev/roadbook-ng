import { PlateVerifier } from "@/components/PlateVerifier";
import { officialServices } from "@/data/content";

export const metadata = {
  title: "Official Verification Hub",
  description: "Verify a Nigerian number plate inside Roadbook and use the correct official route for other vehicle records."
};

export default function VerifyPage() {
  const otherServices = officialServices.filter((service) => service.title !== "Verify a number plate");

  return (
    <section className="section pageTop">
      <div className="pageIntro">
        <div className="eyebrow">Official verification hub</div>
        <h1>Check first. Then trust the paper.</h1>
        <p>
          Number-plate verification now works inside Roadbook using the public FRSC/NVIS checker.
          For identity-heavy or authenticated services, Roadbook keeps the handoff explicit instead of pretending to be the issuing agency.
        </p>
      </div>

      <PlateVerifier />

      <div className="sectionHeading split" style={{ marginTop: 72 }}>
        <div>
          <div className="eyebrow">Other official checks</div>
          <h2>Use the authority behind the record.</h2>
        </div>
        <p>
          Some checks require a CAPTCHA, login, date of birth, policy ID or other sensitive information.
          Those continue on the official service rather than being copied into Roadbook.
        </p>
      </div>

      <div className="verifyGrid">
        {otherServices.map((service, index) => (
          <a className="verifyCard" href={service.url} target="_blank" rel="noreferrer" key={service.title}>
            <span className="verifyNum">{String(index + 1).padStart(2, "0")}</span>
            <small>{service.agency}</small>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            <b>Continue on official service ↗</b>
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
