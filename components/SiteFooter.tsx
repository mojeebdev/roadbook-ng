import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="siteFooter">
      <div>
        <div className="footerBrand">Roadbook NG</div>
        <p>
          Independent public-interest guidance for Nigerian drivers and vehicle owners.
          We do not issue licences, permits, insurance, plates or government documents.
        </p>
      </div>
      <div className="footerLinks">
        <Link href="/sources">Sources</Link>
        <Link href="/agencies">Agencies</Link>
        <a href="https://github.com/mojeebdev/roadbook-ng" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href="https://blindspotlab.xyz" target="_blank" rel="noreferrer">
          BlindspotLab
        </a>
      </div>
    </footer>
  );
}
