"use client";

import { useState } from "react";
import CalendarView from "@/components/Calendar/CalendarView";
import Sidebar from "@/components/Calendar/Sidebar";
import EventForm from "@/components/Calendar/EventForm";
import CalendarHeader from "@/components/Calendar/CalendarHeader";

interface Event {
  id: string;
  title: string;
  description: string;
  date: Date;
}

export default function CalendarPage() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const [events, setEvents] = useState<Event[]>([
    {
      id: "1",
      title: "Sample Event",
      description: "This is a sample event",
      date: new Date(),
    },
  ]);

  const handleSaveEvent = (event: Omit<Event, "id">) => {
    const newEvent = { ...event, id: String(events.length + 1) };
    setEvents([...events, newEvent]);
  };

  const handleDateChange = (date: Date) => setCurrentDate(date);
  const handleFilterChange = () => {};
  const handleSettingsClick = () => {};

  return (
    <div className="flex h-screen">
      {/* Sidebar with filter and settings handlers */}
      <Sidebar
        onFilterChange={handleFilterChange}
        onSettingsClick={handleSettingsClick}
      />

      <div className="flex-1 flex flex-col">
        {/* Calendar Header with date and view change handlers */}
        <CalendarHeader
          currentDate={currentDate}
          onDateChange={handleDateChange}
          onViewChange={() => {}} // Placeholder if not required
        />

        <div className="flex-1 p-4 bg-gray-50">
          {/* Calendar View with events and event selection handler */}
          <CalendarView
            events={events}
            onSelectEvent={(eventId) => console.log("Selected Event:", eventId)}
          />
        </div>

        {/* Event Form with onSave handler */}
        <EventForm onSave={handleSaveEvent} />
      </div>
    </div>
  );
}
