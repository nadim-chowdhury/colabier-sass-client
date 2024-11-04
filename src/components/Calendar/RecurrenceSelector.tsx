import { Select, Typography } from "antd";
import { useState } from "react";

const { Option } = Select;
const { Text } = Typography;

interface RecurrenceSelectorProps {
  onChange: (recurrence: string) => void;
}

export default function RecurrenceSelector({
  onChange,
}: RecurrenceSelectorProps) {
  const [recurrence, setRecurrence] = useState<string>("none");

  const handleRecurrenceChange = (value: string) => {
    setRecurrence(value);
    onChange(value);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <Text className="text-lg font-semibold">Recurrence</Text>
      <Select
        value={recurrence}
        onChange={handleRecurrenceChange}
        className="w-full mt-2"
      >
        <Option value="none">None</Option>
        <Option value="daily">Daily</Option>
        <Option value="weekly">Weekly</Option>
        <Option value="monthly">Monthly</Option>
        <Option value="custom">Custom</Option>
      </Select>
    </div>
  );
}
