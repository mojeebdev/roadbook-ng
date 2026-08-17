import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "Roadbook NG",
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
  authors: [{ name: "Roadbook NG" }],
  creator: "Roadbook NG",
  publisher: "Roadbook NG",
  alternates: {
    canonical: "/"
  },
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512.png", sizes: "512x512", type: "image/png" }
    ],
    shortcut: "/icon.svg",
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#0d6b3d"
      }
    ]
  },
  appleWebApp: {
    capable: true,
    title: "Roadbook NG",
    statusBarStyle: "default"
  },
  formatDetection: {
    telephone: false
  },
  openGraph: {
    title: "Roadbook NG — Nigerian Driver & Vehicle Guide",
    description: "Know what you need. Know who handles it. Verify it officially.",
    type: "website",
    siteName: "Roadbook NG",
    locale: "en_NG"
  },
  twitter: {
    card: "summary_large_image",
    title: "Roadbook NG — Nigerian Driver & Vehicle Guide",
    description: "Know what you need. Know who handles it. Verify it officially."
  },
  robots: {
    index: true,
    follow: true
  },
  other: {
    "msapplication-TileColor": "#0d6b3d"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0d6b3d",
  colorScheme: "light"
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
