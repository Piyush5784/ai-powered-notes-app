import { FileText, BrainCircuit, Sparkles } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div>
      {" "}
      <section className="flex flex-col items-center justify-center text-center py-20 px-6 space-y-6">
        <div className="space-y-4 max-w-2xl">
          <div className="h-28 w-28 blur-[150px] bg-white absolute"></div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Welcome to{" "}
            <span className="text-primary">AI Powered Notes App</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Create, manage, and summarize your notes with the power of AI.
          </p>
          <div className="flex items-center justify-center gap-4 pt-4">
            <Button size="lg" asChild>
              <Link href="/dashboard">
                <FileText className="w-4 h-4 mr-2" />
                Try for free
              </Link>
            </Button>
          </div>
        </div>
        <div className="h-28 w-28 blur-[150px] bg-white absolute right-96"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-16 max-w-5xl w-full">
          <FeatureCard
            icon={<FileText className="w-6 h-6 text-primary" />}
            title="Simple Note Management"
            description="Create and organize your notes effortlessly. No clutter, just clarity."
          />
          <FeatureCard
            icon={<BrainCircuit className="w-6 h-6 text-primary" />}
            title="AI Summarization"
            description="Let AI summarize long notes into concise takeaways with one click."
          />
          <FeatureCard
            icon={<Sparkles className="w-6 h-6 text-primary" />}
            title="Beautiful & Minimal UI"
            description="Crafted with love using Tailwind CSS and shadcn/ui components."
          />
        </div>
      </section>{" "}
    </div>
  );
};

export default HeroSection;

export function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border p-6 text-left shadow-sm hover:shadow-md transition">
      <div className="mb-3">{icon}</div>
      <h3 className="font-semibold text-lg mb-1">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  );
}
