import React from "react";
import {
  Sparkles,
  Search,
  FileText,
  Zap,
  ClipboardList,
  TextSelect,
  Clapperboard,
} from "lucide-react";

const features = [
  {
    title: "Fast AI Summaries",
    description:
      "Generate summaries instantly using the note's title and content — no waiting, just insights.",
    icon: <Sparkles className="h-6 w-6 text-gray-600" />,
  },
  {
    title: "Context-Aware Output",
    description:
      "Our summarizer understands the context behind your notes, delivering more meaningful and relevant results.",
    icon: <FileText className="h-6 w-6 text-gray-600" />,
  },
  {
    title: "Action-Ready Insights",
    description:
      "Turn long notes into short, actionable summaries that help you take the next step faster.",
    icon: <Zap className="h-6 w-6 text-gray-600" />,
  },
  {
    title: "Effortless Note Compression",
    description:
      "Condense large blocks of text into bite-sized content using just a title and a few sentences.",
    icon: <ClipboardList className="h-6 w-6 text-gray-600" />,
  },
  {
    title: "Boost Productivity",
    description:
      "Save hours rewriting notes — our AI gives you ready-to-use summaries that are action-ready.",
    icon: <Sparkles className="h-6 w-6 text-gray-600" />,
  },
  {
    title: "Clarity-Focused Summaries",
    description:
      "We optimize for clarity — no fluff, just the core idea of your notes presented clearly.",
    icon: <Clapperboard className="h-6 w-6 text-gray-600" />,
  },
];

const FeatureSection = () => {
  return (
    <section id="features" className="py-5">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg px-3 py-1 text-sm text-gray-700">
              Features
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Smart Features for Smarter Notes
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our AI-powered tools help you capture, organize, and extract value
              from your notes.
            </p>
          </div>
        </div>
        <div className="h-28 w-28 blur-[150px] bg-white absolute right-96"></div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-2 rounded-xl border p-6 shadow-sm"
            >
              <div className="rounded-full bg-gray-100 p-3">{feature.icon}</div>
              <h3 className="text-lg font-bold text-center">{feature.title}</h3>
              <p className="text-center text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
