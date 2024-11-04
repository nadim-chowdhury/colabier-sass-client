import { useState } from "react";
import { Button, Typography, Dropdown, Menu } from "antd";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
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
  const [view, setView] = useState("month"); // Switch between "day", "week", "month" views
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

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <Title level={4}>Calendar</Title>
        <Dropdown
          overlay={
            <Menu onClick={(e) => handleViewChange(e.key)}>
              <Menu.Item key="day">Day View</Menu.Item>
              <Menu.Item key="week">Week View</Menu.Item>
              <Menu.Item key="month">Month View</Menu.Item>
            </Menu>
          }
        >
          <Button>View: {view.charAt(0).toUpperCase() + view.slice(1)}</Button>
        </Dropdown>
      </div>

      <Calendar
        onChange={setSelectedDate}
        value={selectedDate}
        tileContent={({ date }) => <div>{renderEvents(date)}</div>}
      />
    </div>
  );
}
