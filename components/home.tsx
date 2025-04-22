import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sparkles,
  FileText,
  BrainCircuit,
  Star,
  ArrowRight,
  Zap,
  Search,
} from "lucide-react";
import { Card, CardContent } from "./ui/card";
import HeroSection, { FeatureCard } from "./header/hero-section";
import FaqSection from "./header/faq-section";
import TestimonialSection from "./header/testimonial-section";
import FeatureSection from "./header/features-section";

export default function HomePage() {
  return (
    <>
      {" "}
      <HeroSection />
      <FeatureSection />
      <TestimonialSection />
      <FaqSection />
      <section className="py-5">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Transform Your Notes?
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join thousands of users who have revolutionized their
                note-taking experience with NoteGenius.
              </p>
            </div>
            <div className="h-28 w-28 blur-[150px] bg-white absolute right-1/2"></div>

            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" className="bg-gray-300" asChild>
                <Link href={"/dashboard"}>
                  Get Started for Free <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <p className="text-xs text-gray-500">No credit card required</p>
          </div>
        </div>
      </section>
      <footer className="p-4 text-center text-sm border-t">
        <p className="mb-2">Built with ❤️ by Your Name</p>

        <p className="mt-4">© 2025 NotesApp</p>
      </footer>
    </>
  );
}
