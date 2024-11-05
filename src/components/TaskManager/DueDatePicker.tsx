"use client";

import { DatePicker, Typography } from "antd";
import moment from "moment";

const { Text } = Typography;

interface DueDatePickerProps {
  dueDate: string;
  onChange: (date: string) => void;
}

export default function DueDatePicker({
  dueDate,
  onChange,
}: DueDatePickerProps) {
  const handleDateChange = (date: moment.Moment | null) => {
    onChange(date ? date.format("YYYY-MM-DD") : "");
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <Text className="text-lg font-semibold">Due Date</Text>
      <DatePicker
        value={dueDate ? moment(dueDate) : null}
        onChange={handleDateChange}
        format="YYYY-MM-DD"
        className="w-full mt-2"
      />
    </div>
  );
}
