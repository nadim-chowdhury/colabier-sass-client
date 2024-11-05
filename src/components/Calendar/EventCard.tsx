"use client";

interface EventCardProps {
  event: { id: string; title: string; date: Date };
  onClick: () => void;
}

export default function EventCard({ event, onClick }: EventCardProps) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer mb-2 p-4 bg-white rounded shadow hover:shadow-md transition-shadow"
    >
      <p className="font-semibold">{event.title}</p>
      <p className="text-gray-500 text-xs">
        {event.date.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </p>
    </div>
  );
}
