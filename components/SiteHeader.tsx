import Link from "next/link";

const nav = [
  ["Checklist", "/checklist"],
  ["Particulars", "/documents"],
  ["Verify", "/verify"],
  ["Laws", "/laws"],
  ["Plates", "/plates"],
  ["Buy a car", "/buying-a-car"],
  ["Roadside", "/roadside"],
  ["Quiz", "/quiz"]
] as const;

export function SiteHeader() {
  return (
    <header className="siteHeader">
      <div className="flagStrip" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div className="headerInner">
        <Link href="/" className="brand" aria-label="Roadbook NG home">
          <span className="brandMark">R</span>
          <span>
            <strong>Roadbook</strong>
            <small>NG</small>
          </span>
        </Link>
        <nav className="navScroller" aria-label="Main navigation">
          {nav.map(([label, href]) => (
            <Link key={href} href={href}>
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
