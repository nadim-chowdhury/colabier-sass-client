"use client";

import { useState } from "react";

interface RecurrenceSelectorProps {
  onChange: (recurrence: string) => void;
}

export default function RecurrenceSelector({
  onChange,
}: RecurrenceSelectorProps) {
  const [recurrence, setRecurrence] = useState<string>("none");

  const handleRecurrenceChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const value = event.target.value;
    setRecurrence(value);
    onChange(value);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-2">Recurrence</h2>
      <select
        value={recurrence}
        onChange={handleRecurrenceChange}
        className="w-full p-2 border rounded"
      >
        <option value="none">None</option>
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
        <option value="custom">Custom</option>
      </select>
    </div>
  );
}
