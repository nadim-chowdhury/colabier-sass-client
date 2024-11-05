"use client";

import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Alice Johnson",
    rating: 5,
    review:
      "This platform has completely transformed how my team collaborates. It's efficient, reliable, and packed with powerful features.",
  },
  {
    name: "Mark Anderson",
    rating: 4,
    review:
      "Great tool for project management and document collaboration. Real-time updates are smooth and keep us in sync.",
  },
  {
    name: "Sara Lee",
    rating: 5,
    review:
      "The video conferencing and chat features make it easy to communicate with our remote teams. Highly recommend!",
  },
];

export default function TestimonialsSection() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container px-8 mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 md:text-4xl">
          What Our Users Say
        </h2>

        <div className="grid gap-8 mt-10 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-md">
              <p className="mb-4 text-gray-700">
                &quot;{testimonial.review}&quot;
              </p>
              <div className="flex items-center justify-center mt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="w-5 h-5 text-yellow-500" />
                ))}
              </div>
              <p className="mt-2 text-gray-800 font-semibold">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
