"use client";

import { useState } from "react";

interface EventFormProps {
  initialEvent?: { title: string; description: string; date: Date };
  onSave: (event: { title: string; description: string; date: Date }) => void;
}

export default function EventForm({ initialEvent, onSave }: EventFormProps) {
  const [title, setTitle] = useState(initialEvent?.title || "");
  const [description, setDescription] = useState(
    initialEvent?.description || ""
  );
  const [date, setDate] = useState<string | null>(
    initialEvent ? initialEvent.date.toISOString().split("T")[0] : null
  );
  const [time, setTime] = useState<string | null>(
    initialEvent
      ? initialEvent.date.toISOString().split("T")[1].slice(0, 5)
      : null
  );

  const handleSave = () => {
    if (!title || !date || !time) {
      alert("Please provide a title, date, and time for the event.");
      return;
    }

    const eventDate = new Date(`${date}T${time}`);
    onSave({ title, description, date: eventDate });
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <div className="mb-4">
        <label className="block font-semibold mb-1">Event Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter event title"
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block font-semibold mb-1">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={3}
          placeholder="Enter event description"
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block font-semibold mb-1">Date</label>
        <input
          type="date"
          value={date || ""}
          onChange={(e) => setDate(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block font-semibold mb-1">Time</label>
        <input
          type="time"
          value={time || ""}
          onChange={(e) => setTime(e.target.value)}
          className="w-full p-2 border rounded"
          required
          disabled={!date}
        />
      </div>
      <button
        onClick={handleSave}
        className="w-full px-4 py-2 bg-cyan-600 text-white rounded hover:bg-cyan-700"
      >
        {initialEvent ? "Save Changes" : "Create Event"}
      </button>
    </div>
  );
}
