"use client";

import { motion } from "framer-motion";

const comparisonData = [
  {
    feature: "Real-Time Chat",
    platform: "Your Platform",
    slack: "✓",
    notion: "✗",
    trello: "✗",
  },
  {
    feature: "Project Management",
    platform: "Your Platform",
    slack: "✗",
    notion: "✓",
    trello: "✓",
  },
  {
    feature: "Document Collaboration",
    platform: "Your Platform",
    slack: "✗",
    notion: "✓",
    trello: "✗",
  },
  {
    feature: "Design Tool",
    platform: "Your Platform",
    slack: "✗",
    notion: "✗",
    trello: "✗",
  },
  {
    feature: "Calendar & Scheduling",
    platform: "Your Platform",
    slack: "✗",
    notion: "✓",
    trello: "✗",
  },
  {
    feature: "Spreadsheet & Data Analysis",
    platform: "Your Platform",
    slack: "✗",
    notion: "✗",
    trello: "✗",
  },
  {
    feature: "Video Conferencing",
    platform: "Your Platform",
    slack: "✗",
    notion: "✗",
    trello: "✗",
  },
];

export default function ComparisonSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container px-8 mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-gray-800 md:text-4xl"
        >
          How We Compare
        </motion.h2>

        <div className="overflow-x-auto mt-8">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="px-4 py-3 text-left bg-gray-200 text-gray-800 font-semibold">
                  Feature
                </th>
                <th className="px-4 py-3 text-left bg-gray-200 text-gray-800 font-semibold">
                  Your Platform
                </th>
                <th className="px-4 py-3 text-left bg-gray-200 text-gray-800 font-semibold">
                  Slack
                </th>
                <th className="px-4 py-3 text-left bg-gray-200 text-gray-800 font-semibold">
                  Notion
                </th>
                <th className="px-4 py-3 text-left bg-gray-200 text-gray-800 font-semibold">
                  Trello
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="hover:bg-gray-100"
                >
                  <td className="px-4 py-3 border-b text-gray-700">
                    {row.feature}
                  </td>
                  <td className="px-4 py-3 border-b text-green-600 font-semibold">
                    {row.platform}
                  </td>
                  <td className="px-4 py-3 border-b text-gray-600">
                    {row.slack}
                  </td>
                  <td className="px-4 py-3 border-b text-gray-600">
                    {row.notion}
                  </td>
                  <td className="px-4 py-3 border-b text-gray-600">
                    {row.trello}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
