import React from "react";

const FaqSection = () => {
  return (
    <section className="px-6 py-8   text-center">
      <h2 className="text-3xl font-semibold mb-10">FAQ</h2>
      <div className="grid gap-6 md:grid-cols-2 px-20 text-start">
        {[
          ["Is it free to use?", "Yes, 100% free — no hidden costs."],
          // ["Do I need to sign up?", "Nope. Just open it and start writing."],
          [
            "Where are my notes stored?",
            "On your device. Your data = your control.",
          ],
          ["Which model is used for the AI summarize?", "Nivida"],
        ].map(([q, a], i) => (
          <div key={i} className="border  p-4 rounded-lg">
            <h3 className="font-medium text-lg mb-1">{q}</h3>
            <p>{a}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
