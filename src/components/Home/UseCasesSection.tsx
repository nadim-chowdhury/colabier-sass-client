"use client";

const useCases = [
  {
    title: "Remote Teams",
    description:
      "Stay connected with team members across the globe. Real-time chat, video conferencing, and collaborative tools make remote work seamless.",
  },
  {
    title: "Designers",
    description:
      "Collaborate on design projects with ease. Use the design tool to create stunning visuals and share with team members for feedback.",
  },
  {
    title: "Project Managers",
    description:
      "Manage tasks and projects effectively. Organize tasks, set priorities, and track project progress with ease.",
  },
  {
    title: "Developers",
    description:
      "Organize code sprints, track bugs, and collaborate with other team members. The perfect tool for streamlined development workflows.",
  },
];

export default function UseCasesSection() {
  return (
    <div className="py-16 bg-white">
      <div className="container px-8 mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 md:text-4xl">
          Use Cases
        </h2>
        <p className="mt-4 text-gray-600">
          See how different teams benefit from our platform
        </p>

        <div className="grid gap-8 mt-10 md:grid-cols-2 lg:grid-cols-4">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 rounded-lg shadow-md hover:bg-gray-100 transition"
            >
              <h3 className="mb-2 text-xl font-semibold text-gray-800">
                {useCase.title}
              </h3>
              <p className="text-gray-600">{useCase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
