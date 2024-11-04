import { DatePicker } from "antd";
import moment from "moment";

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
      value={selectedDate ? moment(selectedDate) : null}
      onChange={(date) => onChange(date ? date.toDate() : null)}
      format="YYYY-MM-DD"
      className="w-full"
    />
  );
}
