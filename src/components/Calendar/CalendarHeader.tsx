"use client";

import { useState } from "react";

interface CalendarHeaderProps {
  currentDate: Date;
  onDateChange: (newDate: Date) => void;
  onViewChange: (view: "day" | "week" | "month") => void;
}

export default function CalendarHeader({
  currentDate,
  onDateChange,
  onViewChange,
}: CalendarHeaderProps) {
  const [view, setView] = useState<"day" | "week" | "month">("month");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handlePrev = () => {
    const newDate = new Date(currentDate);
    if (view === "month") newDate.setMonth(newDate.getMonth() - 1);
    else if (view === "week") newDate.setDate(newDate.getDate() - 7);
    else newDate.setDate(newDate.getDate() - 1);
    onDateChange(newDate);
  };

  const handleNext = () => {
    const newDate = new Date(currentDate);
    if (view === "month") newDate.setMonth(newDate.getMonth() + 1);
    else if (view === "week") newDate.setDate(newDate.getDate() + 7);
    else newDate.setDate(newDate.getDate() + 1);
    onDateChange(newDate);
  };

  const handleViewChange = (newView: "day" | "week" | "month") => {
    setView(newView);
    onViewChange(newView);
    setDropdownOpen(false);
  };

  return (
    <div className="flex items-center justify-between p-4 bg-white shadow-md">
      <button onClick={handlePrev} className="p-2 bg-gray-200 rounded">
        {"<"}
      </button>
      <h4>{currentDate.toDateString()}</h4>
      <button onClick={handleNext} className="p-2 bg-gray-200 rounded">
        {">"}
      </button>

      <div className="relative">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="p-2 bg-gray-200 rounded"
        >
          {view.charAt(0).toUpperCase() + view.slice(1)} View
        </button>
        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-300 rounded shadow-md">
            <ul>
              <li
                onClick={() => handleViewChange("day")}
                className="p-2 hover:bg-gray-100 cursor-pointer"
              >
                Day View
              </li>
              <li
                onClick={() => handleViewChange("week")}
                className="p-2 hover:bg-gray-100 cursor-pointer"
              >
                Week View
              </li>
              <li
                onClick={() => handleViewChange("month")}
                className="p-2 hover:bg-gray-100 cursor-pointer"
              >
                Month View
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
