import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Roadbook NG — Nigerian Driver & Vehicle Guide",
    short_name: "Roadbook NG",
    description: "A public-interest guide to Nigerian vehicle particulars, road rules, official verification, agencies and road-ready checklists.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#f7f9f6",
    theme_color: "#0d6b3d",
    orientation: "portrait-primary",
    categories: ["education", "utilities"],
    icons: [
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any"
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any"
      },
      {
        src: "/icons/icon-maskable-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable"
      }
    ]
  };
}
