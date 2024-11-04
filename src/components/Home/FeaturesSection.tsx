"use client";

import { motion } from "framer-motion";
import {
  FaComments,
  FaTasks,
  FaFileAlt,
  FaPaintBrush,
  FaCalendarAlt,
  FaGlobe,
  FaTable,
  FaVideo,
} from "react-icons/fa";

const features = [
  {
    icon: <FaComments className="w-10 h-10 text-cyan-600" />,
    title: "Real-Time Chat",
    description:
      "Communicate with your team instantly with our real-time chat feature.",
  },
  {
    icon: <FaTasks className="w-10 h-10 text-cyan-600" />,
    title: "Project Management",
    description:
      "Organize tasks and projects efficiently with boards and analytics.",
  },
  {
    icon: <FaFileAlt className="w-10 h-10 text-cyan-600" />,
    title: "Document Collaboration",
    description:
      "Collaborate on documents in real-time, with version control and permissions.",
  },
  {
    icon: <FaPaintBrush className="w-10 h-10 text-cyan-600" />,
    title: "Design Tool",
    description:
      "Create stunning designs with drag-and-drop templates and collaborative editing.",
  },
  {
    icon: <FaCalendarAlt className="w-10 h-10 text-cyan-600" />,
    title: "Calendar & Scheduling",
    description:
      "Schedule events and sync with third-party calendars seamlessly.",
  },
  {
    icon: <FaGlobe className="w-10 h-10 text-cyan-600" />,
    title: "Website Builder",
    description:
      "Build websites with our drag-and-drop builder and pre-built templates.",
  },
  {
    icon: <FaTable className="w-10 h-10 text-cyan-600" />,
    title: "Spreadsheet & Data Analysis",
    description:
      "Work with data grids, functions, and visualizations collaboratively.",
  },
  {
    icon: <FaVideo className="w-10 h-10 text-cyan-600" />,
    title: "Video Conferencing",
    description:
      "Conduct meetings with video, screen sharing, and participant controls.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-16 bg-white rounded-xl">
      <div className="container px-8 mx-auto text-center">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-gray-800 md:text-4xl"
        >
          Key Features of Our Platform
        </motion.h2>

        {/* Feature Cards */}
        <div className="grid gap-8 mt-10 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="flex flex-col items-center p-6 bg-gray-100 rounded-lg"
            >
              {/* Feature Icon */}
              <div className="mb-4">{feature.icon}</div>

              {/* Feature Title */}
              <h3 className="mb-2 text-xl font-semibold text-gray-800">
                {feature.title}
              </h3>

              {/* Feature Description */}
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
