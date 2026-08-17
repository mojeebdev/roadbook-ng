import { RoadReadyChecklist } from "@/components/RoadReadyChecklist";

export const metadata = {
  title: "My Road-Ready Checklist",
  description: "Generate a practical Nigerian driver and vehicle checklist by profile and state."
};

export default function ChecklistPage() {
  return (
    <section className="section pageTop">
      <div className="pageIntro">
        <div className="eyebrow">My Roadbook</div>
        <h1>What do I actually need?</h1>
        <p>
          Pick how you use the vehicle and your state. We&apos;ll show the federal baseline,
          then flag the things you should confirm locally.
        </p>
      </div>
      <RoadReadyChecklist />
    </section>
  );
}
