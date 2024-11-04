import { useState } from "react";
import { Avatar, Button, Typography, List } from "antd";
import { AudioOutlined, AudioMutedOutlined } from "@ant-design/icons";

const { Text } = Typography;

interface Participant {
  id: number;
  name: string;
  avatar: string;
  isMuted: boolean;
}

const participants: Participant[] = [
  { id: 1, name: "Alice", avatar: "/avatar1.png", isMuted: false },
  { id: 2, name: "Bob", avatar: "/avatar2.png", isMuted: true },
  { id: 3, name: "Charlie", avatar: "/avatar3.png", isMuted: false },
];

export default function VoiceChannel() {
  const [inChannel, setInChannel] = useState(false);

  const toggleChannel = () => {
    setInChannel(!inChannel);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <Text className="text-lg font-semibold text-gray-800">
          Voice Channel
        </Text>
        <Button
          type="primary"
          icon={inChannel ? <AudioMutedOutlined /> : <AudioOutlined />}
          onClick={toggleChannel}
          className="bg-cyan-600 hover:bg-cyan-700"
        >
          {inChannel ? "Leave Channel" : "Join Channel"}
        </Button>
      </div>

      {/* Participant List */}
      {inChannel && (
        <List
          dataSource={participants}
          renderItem={(participant) => (
            <List.Item className="flex items-center space-x-3">
              <Avatar src={participant.avatar} />
              <Text className="font-medium">{participant.name}</Text>
              {participant.isMuted && (
                <AudioMutedOutlined className="text-gray-500" />
              )}
            </List.Item>
          )}
        />
      )}
    </div>
  );
}
