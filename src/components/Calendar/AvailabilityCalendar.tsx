import { Calendar, Typography, Checkbox, TimePicker } from "antd";
import moment from "moment";
import { useState } from "react";

const { Text } = Typography;

interface Availability {
  date: Date;
  startTime: moment.Moment | null;
  endTime: moment.Moment | null;
  available: boolean;
}

export default function AvailabilityCalendar() {
  const [availability, setAvailability] = useState<Availability[]>([]);

  const handleDateSelect = (date: moment.Moment) => {
    const dateString = date.toDate().toDateString();
    if (!availability.find((av) => av.date.toDateString() === dateString)) {
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
    time: moment.Moment | null
  ) => {
    const updatedAvailability = availability.map((av) =>
      av.date.toDateString() === date.toDateString()
        ? { ...av, [field]: time }
        : av
    );
    setAvailability(updatedAvailability);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <Text className="text-lg font-semibold mb-4">Set Your Availability</Text>
      <Calendar
        fullscreen={false}
        onSelect={(date) => handleDateSelect(date)}
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
              onChange={() => {
                const updatedAvailability = availability.map((item) =>
                  item.date === av.date
                    ? { ...item, available: !av.available }
                    : item
                );
                setAvailability(updatedAvailability);
              }}
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
