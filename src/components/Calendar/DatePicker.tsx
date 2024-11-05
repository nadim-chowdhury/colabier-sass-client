"use client";

interface DatePickerComponentProps {
  selectedDate: Date | null;
  onChange: (date: Date | null) => void;
}

export default function DatePickerComponent({
  selectedDate,
  onChange,
}: DatePickerComponentProps) {
  const formatDate = (date: Date) => {
    return date.toISOString().split("T")[0];
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    onChange(value ? new Date(value) : null);
  };

  return (
    <input
      type="date"
      value={selectedDate ? formatDate(selectedDate) : ""}
      onChange={handleDateChange}
      className="w-full p-2 border rounded"
    />
  );
}
