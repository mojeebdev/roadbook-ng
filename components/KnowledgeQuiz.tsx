"use client";

import { useState } from "react";

const questions = [
  {
    q: "Where should you verify a Nigerian number plate?",
    options: ["A social-media seller", "FRSC NVIS", "Any insurance agent", "A mechanic"],
    answer: 1,
    note: "FRSC NVIS provides the official number-plate verification route."
  },
  {
    q: "What is the minimum motor-insurance cover road users are required to have?",
    options: ["Comprehensive only", "Motor third-party insurance", "Travel insurance", "No insurance is required"],
    answer: 1,
    note: "Third-party motor insurance is the compulsory minimum; comprehensive cover is broader."
  },
  {
    q: "A fresh driver's-licence applicant should first have...",
    options: ["A vehicle loan", "An accredited driving-school certificate", "A Police CMR certificate", "A custom plate"],
    answer: 1,
    note: "FRSC requires a fresh applicant to complete accredited driving-school training."
  },
  {
    q: "Who should you pay a roadside cash fine to?",
    options: ["Any officer who asks", "A tout", "Nobody — use the official payment route", "Another driver"],
    answer: 2,
    note: "Use the formal offence/payment process and keep evidence. Avoid informal cash payments."
  },
  {
    q: "When buying a used car, which detail should be matched across records?",
    options: ["Only paint colour", "Chassis/VIN, engine, plate and ownership details", "Seller's nickname", "Radio serial number"],
    answer: 1,
    note: "Vehicle identifiers and ownership records should align before money changes hands."
  },
  {
    q: "Is roadworthiness administration identical in all 36 states + FCT?",
    options: ["Yes", "No", "Only on weekends", "Only for SUVs"],
    answer: 1,
    note: "Vehicle inspection and roadworthiness administration can be state- and vehicle-class specific."
  },
  {
    q: "What does Police e-CMR primarily support?",
    options: ["Fuel pricing", "Vehicle ownership/security records", "Driver training", "Tyre sales"],
    answer: 1,
    note: "NPF CMRIS is a vehicle information registry used for ownership/security and theft investigation/recovery."
  },
  {
    q: "What should you do with an insurance certificate you just bought?",
    options: ["Assume paper means valid", "Verify it in NAICOM/NIID", "Laminate it and never check", "Post it online"],
    answer: 1,
    note: "Public verification helps detect fake or mismatched policies."
  },
  {
    q: "FRSC lists which of these as road-safety offences?",
    options: ["No spare tyre / fire-extinguisher violation", "Owning a white car", "Driving a Toyota", "Using air conditioning"],
    answer: 0,
    note: "FRSC's offence table includes spare-tyre and fire-extinguisher violations."
  },
  {
    q: "Tinted-glass enforcement information should be treated how?",
    options: ["Use any old screenshot", "Check the latest NPF/court position", "Ignore all law", "Ask a random group chat"],
    answer: 1,
    note: "Enforcement has changed over time and has been affected by litigation; check current primary sources."
  }
];

export function KnowledgeQuiz() {
  const [index, setIndex] = useState(0);
  const [choice, setChoice] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const current = questions[index];

  function choose(i: number) {
    if (choice !== null) return;
    setChoice(i);
    if (i === current.answer) setScore((value) => value + 1);
  }

  function next() {
    if (index === questions.length - 1) {
      setFinished(true);
      return;
    }
    setIndex((value) => value + 1);
    setChoice(null);
  }

  function restart() {
    setIndex(0);
    setChoice(null);
    setScore(0);
    setFinished(false);
  }

  if (finished) {
    return (
      <div className="quizCard resultCard">
        <div className="eyebrow">Your score</div>
        <div className="bigScore">{score}/{questions.length}</div>
        <h2>{score >= 8 ? "Roadbook-ready." : score >= 5 ? "Good base. Tighten the gaps." : "Worth a quick Roadbook refresh."}</h2>
        <p>This quiz is educational, not a driving test or legal certification.</p>
        <button className="button primary" onClick={restart}>Try again</button>
      </div>
    );
  }

  return (
    <div className="quizCard">
      <div className="quizProgress">
        <span>Question {index + 1} of {questions.length}</span>
        <span>Score {score}</span>
      </div>
      <div className="progressTrack"><span style={{ width: `${((index + 1) / questions.length) * 100}%` }} /></div>
      <h2>{current.q}</h2>
      <div className="quizOptions">
        {current.options.map((option, i) => {
          const state = choice === null ? "" : i === current.answer ? "correct" : i === choice ? "wrong" : "muted";
          return (
            <button key={option} className={`quizOption ${state}`} onClick={() => choose(i)}>
              <span>{String.fromCharCode(65 + i)}</span>{option}
            </button>
          );
        })}
      </div>
      {choice !== null && (
        <div className="answerPanel">
          <strong>{choice === current.answer ? "Correct." : "Not quite."}</strong>
          <p>{current.note}</p>
          <button className="button primary" onClick={next}>
            {index === questions.length - 1 ? "See score" : "Next question"}
          </button>
        </div>
      )}
    </div>
  );
}
