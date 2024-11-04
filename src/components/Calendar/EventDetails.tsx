import { Typography, Button } from "antd";

const { Title, Text } = Typography;

interface EventDetailsProps {
  event: { title: string; description: string; date: Date };
  onEdit: () => void;
  onDelete: () => void;
}

export default function EventDetails({
  event,
  onEdit,
  onDelete,
}: EventDetailsProps) {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <Title level={4}>{event.title}</Title>
      <Text type="secondary">
        {event.date.toLocaleDateString()} -{" "}
        {event.date.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </Text>
      <div className="mt-4">
        <Text>{event.description || "No description available."}</Text>
      </div>
      <div className="flex space-x-2 mt-4">
        <Button
          type="primary"
          onClick={onEdit}
          className="bg-cyan-600 hover:bg-cyan-700"
        >
          Edit Event
        </Button>
        <Button danger onClick={onDelete}>
          Delete Event
        </Button>
      </div>
    </div>
  );
}
