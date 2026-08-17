"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./SiteHeader.module.css";

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
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className={`siteHeader ${styles.siteHeader}`}>
      <div className="flagStrip" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      <div className={styles.headerInner}>
        <Link href="/" className="brand" aria-label="Roadbook NG home">
          <span className="brandMark">R</span>
          <span>
            <strong>Roadbook</strong>
            <small>NG</small>
          </span>
        </Link>

        <button
          className={`${styles.menuButton} ${open ? styles.menuButtonOpen : ""}`}
          type="button"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          id="main-navigation"
          className={`${styles.nav} ${open ? styles.navOpen : ""}`}
          aria-label="Main navigation"
        >
          {nav.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className={pathname === href ? styles.activeLink : undefined}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
