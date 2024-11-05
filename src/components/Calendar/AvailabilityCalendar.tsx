"use client";

import { useState } from "react";

interface Availability {
  date: Date;
  startTime: string | null;
  endTime: string | null;
  available: boolean;
}

export default function AvailabilityCalendar() {
  const [availability, setAvailability] = useState<Availability[]>([]);
  const [selectedDate, setSelectedDate] = useState<string>("");

  const handleDateSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const date = new Date(event.target.value);
    setSelectedDate(event.target.value);
    if (
      !availability.some((av) => av.date.toDateString() === date.toDateString())
    ) {
      setAvailability([
        ...availability,
        {
          date,
          startTime: null,
          endTime: null,
          available: true,
        },
      ]);
    }
  };

  const handleTimeChange = (
    date: Date,
    field: "startTime" | "endTime",
    time: string
  ) => {
    const updatedAvailability = availability.map((av) =>
      av.date.toDateString() === date.toDateString()
        ? { ...av, [field]: time }
        : av
    );
    setAvailability(updatedAvailability);
  };

  const toggleAvailability = (date: Date) => {
    setAvailability((prevAvailability) =>
      prevAvailability.map((av) =>
        av.date.toDateString() === date.toDateString()
          ? { ...av, available: !av.available }
          : av
      )
    );
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Set Your Availability</h2>
      <input
        type="date"
        value={selectedDate}
        onChange={handleDateSelect}
        className="mb-4 p-2 border rounded"
      />

      <div className="mt-4">
        {availability.map((av) => (
          <div
            key={av.date.toDateString()}
            className="flex items-center space-x-4 mt-2"
          >
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={av.available}
                onChange={() => toggleAvailability(av.date)}
              />
              <span>{av.date.toDateString()}</span>
            </label>
            <input
              type="time"
              value={av.startTime || ""}
              onChange={(e) =>
                handleTimeChange(av.date, "startTime", e.target.value)
              }
              disabled={!av.available}
              className="p-2 border rounded"
            />
            <input
              type="time"
              value={av.endTime || ""}
              onChange={(e) =>
                handleTimeChange(av.date, "endTime", e.target.value)
              }
              disabled={!av.available}
              className="p-2 border rounded"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
