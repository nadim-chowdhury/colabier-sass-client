import { Button, Typography } from "antd";

const { Text } = Typography;

interface TimeSlotProps {
  time: string;
  isSelected: boolean;
  onSelect: () => void;
}

export default function TimeSlot({
  time,
  isSelected,
  onSelect,
}: TimeSlotProps) {
  return (
    <Button
      type={isSelected ? "primary" : "default"}
      onClick={onSelect}
      className={`w-full mb-2 ${
        isSelected ? "bg-cyan-600 hover:bg-cyan-700" : ""
      }`}
    >
      <Text>{time}</Text>
    </Button>
  );
}
