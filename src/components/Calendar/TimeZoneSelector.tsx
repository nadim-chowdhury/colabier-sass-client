"use client";

import { useState } from "react";

const timeZones = [
  "UTC",
  "GMT",
  "EST",
  "CST",
  "MST",
  "PST",
  "IST",
  "CET",
  "AEST",
  // Add more time zones as needed
];

interface TimeZoneSelectorProps {
  onTimeZoneChange: (timeZone: string) => void;
}

export default function TimeZoneSelector({
  onTimeZoneChange,
}: TimeZoneSelectorProps) {
  const [selectedTimeZone, setSelectedTimeZone] = useState("UTC");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedTimeZone(value);
    onTimeZoneChange(value);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-semibold">Select Time Zone</h2>
      <select
        value={selectedTimeZone}
        onChange={handleChange}
        className="w-full mt-2 p-2 border rounded"
      >
        {timeZones.map((tz) => (
          <option key={tz} value={tz}>
            {tz}
          </option>
        ))}
      </select>
    </div>
  );
}
