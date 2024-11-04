import { useState } from "react";
import { Checkbox, TimePicker, Typography, Button } from "antd";
import moment from "moment";

const { Text } = Typography;

interface DayAvailability {
  day: string;
  startTime: moment.Moment | null;
  endTime: moment.Moment | null;
  available: boolean;
}

const initialAvailability: DayAvailability[] = [
  { day: "Monday", startTime: null, endTime: null, available: false },
  { day: "Tuesday", startTime: null, endTime: null, available: false },
  { day: "Wednesday", startTime: null, endTime: null, available: false },
  { day: "Thursday", startTime: null, endTime: null, available: false },
  { day: "Friday", startTime: null, endTime: null, available: false },
  { day: "Saturday", startTime: null, endTime: null, available: false },
  { day: "Sunday", startTime: null, endTime: null, available: false },
];

export default function Availability() {
  const [availability, setAvailability] = useState(initialAvailability);

  const handleToggleDay = (index: number) => {
    const updatedAvailability = [...availability];
    updatedAvailability[index].available =
      !updatedAvailability[index].available;
    setAvailability(updatedAvailability);
  };

  const handleTimeChange = (
    index: number,
    field: "startTime" | "endTime",
    time: moment.Moment | null
  ) => {
    const updatedAvailability = [...availability];
    updatedAvailability[index][field] = time;
    setAvailability(updatedAvailability);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <Text className="text-lg font-semibold">Set Your Availability</Text>
      {availability.map((day, index) => (
        <div key={day.day} className="flex items-center space-x-4 mt-4">
          <Checkbox
            checked={day.available}
            onChange={() => handleToggleDay(index)}
          >
            {day.day}
          </Checkbox>
          <TimePicker
            value={day.startTime}
            onChange={(time) => handleTimeChange(index, "startTime", time)}
            disabled={!day.available}
            placeholder="Start Time"
            format="HH:mm"
          />
          <TimePicker
            value={day.endTime}
            onChange={(time) => handleTimeChange(index, "endTime", time)}
            disabled={!day.available}
            placeholder="End Time"
            format="HH:mm"
          />
        </div>
      ))}
      <Button type="primary" className="mt-4 bg-cyan-600 hover:bg-cyan-700">
        Save Availability
      </Button>
    </div>
  );
}
