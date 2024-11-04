import { Card, Typography } from "antd";

const { Text } = Typography;

interface EventCardProps {
  event: { id: string; title: string; date: Date };
  onClick: () => void;
}

export default function EventCard({ event, onClick }: EventCardProps) {
  return (
    <Card hoverable className="cursor-pointer mb-2" onClick={onClick}>
      <Text className="font-semibold">{event.title}</Text>
      <Text type="secondary" className="block text-xs">
        {event.date.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </Text>
    </Card>
  );
}
