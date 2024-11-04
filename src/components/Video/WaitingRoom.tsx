import { Typography, Button } from "antd";

const { Title, Text } = Typography;

interface WaitingRoomProps {
  onJoinRoom: () => void;
}

export default function WaitingRoom({ onJoinRoom }: WaitingRoomProps) {
  return (
    <div className="flex flex-col items-center justify-center h-full p-4 bg-gray-100">
      <Title level={3}>Waiting Room</Title>
      <Text>
        Please wait until the host lets you in, or click below to join.
      </Text>
      <Button type="primary" className="mt-4" onClick={onJoinRoom}>
        Join Room
      </Button>
    </div>
  );
}
