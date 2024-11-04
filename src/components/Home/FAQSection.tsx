"use client";

import { useState } from "react";
import { motion } from "framer-motion";

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
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-8 mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center text-gray-800 md:text-4xl"
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="mt-10 space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
