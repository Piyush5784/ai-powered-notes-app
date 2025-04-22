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
import JoinUsSection from "./header/Join-us-section";

export default function HomePage() {
  return (
    <>
      {" "}
      <HeroSection />
      <FeatureSection />
      <TestimonialSection />
      <FaqSection />
      <JoinUsSection />
      <footer className="p-4 text-center text-sm border-t">
        <p className="mb-2">Built with ❤️ by Your Name</p>

        <p className="mt-4">© 2025 NotesApp</p>
      </footer>
    </>
  );
}
