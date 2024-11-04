"use client";

import { List, Button, Typography, Avatar } from "antd";
import { AudioMutedOutlined, AudioOutlined } from "@ant-design/icons";

const { Text } = Typography;

interface Participant {
  id: string;
  name: string;
  isMuted: boolean;
}

interface ParticipantListProps {
  participants: Participant[];
  onToggleMute: (id: string) => void;
}

export default function ParticipantList({
  participants,
  onToggleMute,
}: ParticipantListProps) {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <Text className="text-lg font-semibold">Participants</Text>
      <List
        dataSource={participants}
        renderItem={(participant) => (
          <List.Item className="flex items-center space-x-2">
            <Avatar>{participant.name[0]}</Avatar>
            <Text strong>{participant.name}</Text>
            <Button
              type="text"
              icon={
                participant.isMuted ? <AudioMutedOutlined /> : <AudioOutlined />
              }
              onClick={() => onToggleMute(participant.id)}
            >
              {participant.isMuted ? "Unmute" : "Mute"}
            </Button>
          </List.Item>
        )}
      />
    </div>
  );
}
