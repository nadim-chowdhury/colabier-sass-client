"use client";

import { useState } from "react";

interface DayAvailability {
  day: string;
  startTime: string | null;
  endTime: string | null;
  available: boolean;
}

const initialAvailability: DayAvailability[] = [
  { day: "Monday", startTime: null, endTime: null, available: false },
  { day: "Tuesday", startTime: null, endTime: null, available: false },
];

export default function Availability() {
  const [availability, setAvailability] = useState(initialAvailability);

  const handleToggleDay = (index: number) => {
    const updatedAvailability = [...availability];
    updatedAvailability[index].available =
      !updatedAvailability[index].available;
    setAvailability(updatedAvailability);
  };

  const handleTimeChange = (
    index: number,
    field: "startTime" | "endTime",
    time: string
  ) => {
    const updatedAvailability = [...availability];
    updatedAvailability[index][field] = time;
    setAvailability(updatedAvailability);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Set Your Availability</h2>
      {availability.map((day, index) => (
        <div key={day.day} className="flex items-center space-x-4 mt-4">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={day.available}
              onChange={() => handleToggleDay(index)}
            />
            <span>{day.day}</span>
          </label>
          <input
            type="time"
            value={day.startTime || ""}
            onChange={(e) =>
              handleTimeChange(index, "startTime", e.target.value)
            }
            disabled={!day.available}
            className="p-2 border rounded"
          />
          <input
            type="time"
            value={day.endTime || ""}
            onChange={(e) => handleTimeChange(index, "endTime", e.target.value)}
            disabled={!day.available}
            className="p-2 border rounded"
          />
        </div>
      ))}
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
        Save Availability
      </button>
    </div>
  );
}
