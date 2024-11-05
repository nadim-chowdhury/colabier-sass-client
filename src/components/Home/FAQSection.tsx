"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What features are included in the Free plan?",
    answer:
      "The Free plan includes basic access to real-time chat, project management, and document collaboration features.",
  },
  {
    question: "Can I upgrade or downgrade my subscription at any time?",
    answer:
      "Yes, you can upgrade or downgrade your subscription at any time from your account settings.",
  },
  {
    question: "Is there a free trial for the Pro plan?",
    answer:
      "Yes, we offer a 14-day free trial for the Pro plan so you can test all the features.",
  },
  {
    question: "How does the Enterprise plan differ from Pro?",
    answer:
      "The Enterprise plan includes all Pro features plus custom integrations, dedicated support, and advanced analytics.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="container px-8 mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 md:text-4xl">
          Frequently Asked Questions
        </h2>

        <div className="mt-10 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="p-4 bg-white border rounded-lg shadow-md"
            >
              <h3
                onClick={() => toggleFAQ(index)}
                className="flex items-center justify-between cursor-pointer text-lg font-semibold text-gray-800"
              >
                {faq.question}
                <span>{activeIndex === index ? "-" : "+"}</span>
              </h3>
              {activeIndex === index && (
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
