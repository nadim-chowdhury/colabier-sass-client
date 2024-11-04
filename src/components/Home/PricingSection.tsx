"use client";

import { motion } from "framer-motion";

const pricingPlans = [
  {
    title: "Free",
    price: "$0",
    description: "Basic access with limited features",
    features: [
      "Real-time chat",
      "Project management",
      "Document collaboration",
    ],
    buttonText: "Start Free",
  },
  {
    title: "Pro",
    price: "$29",
    description: "Advanced features for small teams",
    features: [
      "All Free features",
      "Design tool access",
      "Task prioritization",
      "Calendar & scheduling",
    ],
    buttonText: "Start Free Trial",
  },
  {
    title: "Enterprise",
    price: "Custom",
    description: "Full access for large organizations",
    features: [
      "All Pro features",
      "Custom integrations",
      "Dedicated support",
      "Advanced analytics",
    ],
    buttonText: "Contact Us",
  },
];

export default function PricingSection() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container px-8 mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-gray-800 md:text-4xl"
        >
          Choose Your Plan
        </motion.h2>
        <p className="mt-4 text-gray-600">
          Flexible plans for any type of team
        </p>

        <div className="grid gap-8 mt-10 md:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="p-6 bg-white rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold text-gray-800">
                {plan.title}
              </h3>
              <p className="mt-2 text-3xl font-bold text-indigo-600">
                {plan.price}
              </p>
              <p className="mt-2 text-gray-600">{plan.description}</p>

              <ul className="mt-4 text-left">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center mb-2 text-gray-700">
                    <span className="mr-2 text-green-500">✓</span> {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className="inline-block px-6 py-3 mt-6 font-semibold text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition"
              >
                {plan.buttonText}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
