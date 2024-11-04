"use client";

import { useState } from "react";
import { Button, Typography, Dropdown, MenuProps } from "antd";
import Calendar, { CalendarProps } from "react-calendar";
import EventCard from "./EventCard";

const { Title } = Typography;

interface CalendarViewProps {
  events: { date: Date; title: string; id: string }[];
  onSelectEvent: (eventId: string) => void;
}

export default function CalendarView({
  events,
  onSelectEvent,
}: CalendarViewProps) {
  const [view, setView] = useState("month");
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const handleViewChange = (view: string) => setView(view);

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
    }
  };

  const viewMenuItems: MenuProps["items"] = [
    { key: "day", label: "Day View" },
    { key: "week", label: "Week View" },
    { key: "month", label: "Month View" },
  ];

  const viewMenu: MenuProps = {
    items: viewMenuItems,
    onClick: (e) => handleViewChange(e.key),
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <Title level={4}>Calendar</Title>
        <Dropdown menu={viewMenu}>
          <Button>View: {view.charAt(0).toUpperCase() + view.slice(1)}</Button>
        </Dropdown>
      </div>
      <Calendar
        onChange={handleDateChange}
        value={selectedDate}
        tileContent={({ date }) => <div>{renderEvents(date)}</div>}
      />
    </div>
  );
}
