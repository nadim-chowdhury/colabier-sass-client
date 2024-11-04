"use client";

import { DatePicker } from "antd";
import dayjs, { Dayjs } from "dayjs";

interface DatePickerComponentProps {
  selectedDate: Date | null;
  onChange: (date: Date | null) => void;
}

export default function DatePickerComponent({
  selectedDate,
  onChange,
}: DatePickerComponentProps) {
  return (
    <DatePicker
      value={selectedDate ? dayjs(selectedDate) : null}
      onChange={(date: Dayjs | null) => onChange(date ? date.toDate() : null)}
      format="YYYY-MM-DD"
      className="w-full"
    />
  );
}
