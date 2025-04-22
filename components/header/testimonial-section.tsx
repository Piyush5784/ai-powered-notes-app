import React from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Manager",
    quote:
      "AI powered Notes app has completely transformed how I take notes. The AI summarization saves me hours of review time every week.",
  },
  {
    name: "Michael Chen",
    role: "Graduate Student",
    quote:
      "As a student, AI powered notes app has been a game-changer for organizing my notes. The smart search feature helps me find exactly what I need during exam prep.",
  },
  {
    name: "Alex Rodriguez",
    role: "Team Lead",
    quote:
      "Our team's productivity has increased dramatically since we started using AI powered notes app. It is simple to use, with fast performance.",
  },
];

const TestimonialSection = () => {
  return (
    <section id="testimonials" className="py-5">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg px-3 py-1 text-sm text-black bg-gradient-to-r from-gray-100 to-gray-300">
              Testimonials
            </div>
            <h2 className="text-4xl font-bold tracking-tighter">
              What Our Users Say
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Join thousands of satisfied users who have transformed their
              note-taking experience.
            </p>
          </div>
        </div>

        <div className="h-56 w-56 blur-[400px] bg-white absolute right-96" />

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col rounded-lg border p-6 shadow-sm"
            >
              <div className="flex items-center gap-2">
                {Array(5)
                  .fill(null)
                  .map((_, i) => (
                    <Star
                      key={i}
                      fill="#FEFF00"
                      className="text-yellow-500"
                      size={12}
                    />
                  ))}
              </div>
              <blockquote className="mt-4 flex-1">
                <p className="text-gray-500">"{testimonial.quote}"</p>
              </blockquote>
              <div className="mt-6 flex items-center gap-3">
                <div>
                  <p className="font-medium">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
