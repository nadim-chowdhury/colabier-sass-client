"use client";

import { useState } from "react";
import { FaCalendarAlt, FaCog } from "react-icons/fa";

interface SidebarProps {
  onFilterChange: (filter: { dateRange?: [Date, Date]; type?: string }) => void;
  onSettingsClick: () => void;
}

export default function Sidebar({
  onFilterChange,
  onSettingsClick,
}: SidebarProps) {
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");

  const handleDateChange = () => {
    if (startDate && endDate) {
      const range: [Date, Date] = [new Date(startDate), new Date(endDate)];
      onFilterChange({ dateRange: range });
    } else {
      onFilterChange({ dateRange: undefined });
    }
  };

  return (
    <div className="p-4 bg-gray-100 h-full">
      <h2 className="text-lg font-semibold mb-4">Calendar Filters</h2>
      <div className="mb-4">
        <label className="block mb-1">Date Range</label>
        <div className="flex space-x-2">
          <input
            type="date"
            value={startDate}
            onChange={(e) => {
              setStartDate(e.target.value);
              handleDateChange();
            }}
            className="border rounded p-2"
          />
          <input
            type="date"
            value={endDate}
            onChange={(e) => {
              setEndDate(e.target.value);
              handleDateChange();
            }}
            className="border rounded p-2"
          />
        </div>
      </div>
      <div className="space-y-2">
        <button
          onClick={() => onFilterChange({ type: "Meeting" })}
          className="flex items-center w-full p-2 border rounded hover:bg-gray-200"
        >
          <FaCalendarAlt className="mr-2" /> Meetings
        </button>
        <button
          onClick={() => onFilterChange({ type: "Appointment" })}
          className="flex items-center w-full p-2 border rounded hover:bg-gray-200"
        >
          <FaCalendarAlt className="mr-2" /> Appointments
        </button>
        <button
          onClick={onSettingsClick}
          className="flex items-center w-full p-2 border rounded hover:bg-gray-200"
        >
          <FaCog className="mr-2" /> Settings
        </button>
      </div>
    </div>
  );
}
