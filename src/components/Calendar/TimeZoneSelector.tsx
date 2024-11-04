import { Select, Typography } from "antd";
import { useState } from "react";

const { Option } = Select;
const { Text } = Typography;

const timeZones = [
  "UTC",
  "GMT",
  "EST",
  "CST",
  "MST",
  "PST",
  "IST",
  "CET",
  "AEST",
  // Add more time zones as needed
];

interface TimeZoneSelectorProps {
  onTimeZoneChange: (timeZone: string) => void;
}

export default function TimeZoneSelector({
  onTimeZoneChange,
}: TimeZoneSelectorProps) {
  const [selectedTimeZone, setSelectedTimeZone] = useState("UTC");

  const handleChange = (value: string) => {
    setSelectedTimeZone(value);
    onTimeZoneChange(value);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <Text className="text-lg font-semibold">Select Time Zone</Text>
      <Select
        value={selectedTimeZone}
        onChange={handleChange}
        className="w-full mt-2"
        placeholder="Select Time Zone"
      >
        {timeZones.map((tz) => (
          <Option key={tz} value={tz}>
            {tz}
          </Option>
        ))}
      </Select>
    </div>
  );
}
