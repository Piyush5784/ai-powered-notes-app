import React from "react";

const FaqSection = () => {
  return (
    <section className=" py-8   text-center">
      <h2 className="text-3xl font-semibold mb-10">FAQ</h2>
      <div className="grid  gap-6 md:grid-cols-2 md:px-20  text-start">
        {[
          ["Is it free to use?", "Yes, 100% free — no hidden costs."],
          [
            "Where are my notes stored?",
            "On your device. Your data = your control.",
          ],
          ["Which model is used for the AI summarize?", "Nivida"],
        ].map(([q, a], i) => (
          <div key={i} className="border w-full  p-4 rounded-lg">
            <h3 className="font-medium text-lg mb-1">{q}</h3>
            <p>Ans:- {a}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
