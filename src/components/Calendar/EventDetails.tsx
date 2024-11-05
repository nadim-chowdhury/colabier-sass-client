"use client";

interface EventDetailsProps {
  event: { title: string; description: string; date: Date };
  onEdit: () => void;
  onDelete: () => void;
}

export default function EventDetails({
  event,
  onEdit,
  onDelete,
}: EventDetailsProps) {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h4 className="text-lg font-semibold">{event.title}</h4>
      <p className="text-gray-500">
        {event.date.toLocaleDateString()} -{" "}
        {event.date.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </p>
      <div className="mt-4">
        <p>{event.description || "No description available."}</p>
      </div>
      <div className="flex space-x-2 mt-4">
        <button
          onClick={onEdit}
          className="px-4 py-2 bg-cyan-600 text-white rounded hover:bg-cyan-700"
        >
          Edit Event
        </button>
        <button
          onClick={onDelete}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          Delete Event
        </button>
      </div>
    </div>
  );
}
