"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const demos = [
  {
    title: "Real-Time Chat",
    description:
      "Experience seamless real-time messaging and presence tracking.",
    videoSrc:
      "https://videos.pexels.com/video-files/7579564/7579564-uhd_2732_1440_25fps.mp4",
    link: "/features/chat",
  },
  {
    title: "Project Management",
    description:
      "Organize tasks with boards, priorities, and drag-and-drop functionality.",
    videoSrc:
      "https://videos.pexels.com/video-files/7579564/7579564-uhd_2732_1440_25fps.mp4",
    link: "/features/project-management",
  },
  {
    title: "Document Collaboration",
    description:
      "Collaborate on documents with version control and sharing options.",
    videoSrc:
      "https://videos.pexels.com/video-files/7579564/7579564-uhd_2732_1440_25fps.mp4",
    link: "/features/document-collaboration",
  },
  {
    title: "Design Tool",
    description:
      "Create stunning designs with collaborative editing and templates.",
    videoSrc:
      "https://videos.pexels.com/video-files/7579564/7579564-uhd_2732_1440_25fps.mp4",
    link: "/features/design-tool",
  },
  // Add more demos as needed
];

export default function DemoSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="py-16 bg-gray-100 mx-4 md:mx-6 rounded-xl">
      <div className="container px-8 mx-auto text-center">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-gray-800 md:text-4xl"
        >
          Explore Interactive Demos
        </motion.h2>

        {/* Demo Cards */}
        <div className="grid gap-8 mt-10 md:grid-cols-2 lg:grid-cols-4">
          {demos.map((demo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="relative overflow-hidden rounded-lg cursor-pointer group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Demo Video */}
              <div className="absolute inset-0 overflow-hidden">
                <video
                  src={demo.videoSrc}
                  autoPlay
                  muted
                  loop
                  className={`object-cover w-full h-full transition-opacity duration-500 ${
                    hoveredIndex === index ? "opacity-100" : "opacity-0"
                  }`}
                />
              </div>

              {/* Overlay Content */}
              <div className="relative z-10 p-6 bg-white bg-opacity-90">
                <h3 className="mb-2 text-xl font-semibold text-gray-800">
                  {demo.title}
                </h3>
                <p className="mb-4 text-gray-600">{demo.description}</p>
                <Link
                  href={demo.link}
                  className="inline-block px-4 py-2 font-semibold text-white bg-cyan-700 rounded-md hover:bg-cyan-200 transition"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
