"use client";

import { useState } from "react";
import Calendar, { CalendarProps } from "react-calendar";
import EventCard from "./EventCard";

interface CalendarViewProps {
  events: { date: Date; title: string; id: string }[];
  onSelectEvent: (eventId: string) => void;
}

export default function CalendarView({
  events,
  onSelectEvent,
}: CalendarViewProps) {
  const [view, setView] = useState("month");
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleViewChange = (newView: string) => {
    setView(newView);
    setDropdownOpen(false);
  };

  const renderEvents = (date: Date) => {
    return events
      .filter((event) => event.date.toDateString() === date.toDateString())
      .map((event) => (
        <EventCard
          key={event.id}
          event={event}
          onClick={() => onSelectEvent(event.id)}
        />
      ));
  };

  const handleDateChange: CalendarProps["onChange"] = (value) => {
    if (value instanceof Date) {
      setSelectedDate(value);
    } else if (Array.isArray(value) && value.length > 0) {
      setSelectedDate(value[0]);
    } else {
      setSelectedDate(null);
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Calendar</h2>
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="px-4 py-2 bg-gray-200 rounded"
          >
            View: {view.charAt(0).toUpperCase() + view.slice(1)}
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
      <Calendar
        onChange={handleDateChange}
        value={selectedDate}
        tileContent={({ date }) => <div>{renderEvents(date)}</div>}
      />
    </div>
  );
}
