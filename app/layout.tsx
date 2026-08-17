import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: {
    default: "Roadbook NG — Nigerian Driver & Vehicle Guide",
    template: "%s | Roadbook NG"
  },
  description: "A public-interest guide to Nigerian vehicle particulars, road rules, official verification, agencies and road-ready checklists.",
  keywords: [
    "Nigeria vehicle particulars",
    "FRSC",
    "driver's licence Nigeria",
    "number plate verification Nigeria",
    "roadworthiness Nigeria",
    "vehicle documents Nigeria"
  ],
  openGraph: {
    title: "Roadbook NG",
    description: "Know what you need. Know who handles it. Verify it officially.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
