import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const JoinUsSection = () => {
  return (
    <section className="py-5">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to Transform Your Notes?
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Join thousands of users who have revolutionized their note-taking
              experience with NoteGenius.
            </p>
          </div>
          <div className="h-28 w-28 blur-[150px] bg-white absolute right-1/2"></div>

          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button size="lg" asChild>
              <Link href={"/dashboard"}>
                Get Started for Free <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <p className="text-xs text-gray-500">No credit card required</p>
        </div>
      </div>
    </section>
  );
};

export default JoinUsSection;
