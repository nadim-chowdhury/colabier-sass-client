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
    <button
      onClick={onSelect}
      className={`w-full mb-2 p-2 border rounded ${
        isSelected ? "bg-cyan-600 text-white" : "bg-white text-black"
      } hover:bg-cyan-700`}
      style={{ transition: "background-color 0.3s" }}
    >
      <span>{time}</span>
    </button>
  );
}
