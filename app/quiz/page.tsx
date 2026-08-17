import { KnowledgeQuiz } from "@/components/KnowledgeQuiz";

export const metadata = {
  title: "Road Knowledge Quiz",
  description: "Test practical knowledge of Nigerian vehicle documents, verification and road-safety rules."
};

export default function QuizPage() {
  return (
    <section className="section pageTop quizPage">
      <div className="pageIntro">
        <div className="eyebrow">Test your road knowledge</div>
        <h1>Would you know what to verify?</h1>
        <p>Ten practical questions. No account, no certificate, no pretending this replaces a real driving test.</p>
      </div>
      <KnowledgeQuiz />
    </section>
  );
}
