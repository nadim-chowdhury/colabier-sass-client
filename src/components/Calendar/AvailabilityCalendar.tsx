"use client";

import { useState } from "react";
import { Calendar, Typography, Checkbox, TimePicker } from "antd";
import { Dayjs } from "dayjs";

const { Text } = Typography;

interface Availability {
  date: Date;
  startTime: Dayjs | null;
  endTime: Dayjs | null;
  available: boolean;
}

export default function AvailabilityCalendar() {
  const [availability, setAvailability] = useState<Availability[]>([]);

  const handleDateSelect = (date: Dayjs) => {
    const dateString = date.toDate().toDateString();
    if (!availability.some((av) => av.date.toDateString() === dateString)) {
      setAvailability([
        ...availability,
        {
          date: date.toDate(),
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
    time: Dayjs | null
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
      <Text className="text-lg font-semibold mb-4">Set Your Availability</Text>
      <Calendar
        fullscreen={false}
        onSelect={handleDateSelect}
        className="mb-4"
      />

      <div className="mt-4">
        {availability.map((av) => (
          <div
            key={av.date.toDateString()}
            className="flex items-center space-x-4 mt-2"
          >
            <Checkbox
              checked={av.available}
              onChange={() => toggleAvailability(av.date)}
            >
              {av.date.toDateString()}
            </Checkbox>
            <TimePicker
              value={av.startTime}
              onChange={(time) => handleTimeChange(av.date, "startTime", time)}
              disabled={!av.available}
              placeholder="Start Time"
              format="HH:mm"
            />
            <TimePicker
              value={av.endTime}
              onChange={(time) => handleTimeChange(av.date, "endTime", time)}
              disabled={!av.available}
              placeholder="End Time"
              format="HH:mm"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
