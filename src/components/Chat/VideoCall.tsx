import { useState } from "react";
import { Button, Typography } from "antd";
import {
  AudioMutedOutlined,
  AudioOutlined,
  VideoCameraOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import Image from "next/image";

const { Text } = Typography;

interface VideoCallParticipant {
  id: number;
  name: string;
  videoSrc: string;
  isMuted: boolean;
}

const participants: VideoCallParticipant[] = [
  {
    id: 1,
    name: "Alice",
    videoSrc: "/video-placeholder-1.png",
    isMuted: false,
  },
  { id: 2, name: "Bob", videoSrc: "/video-placeholder-2.png", isMuted: true },
];

export default function VideoCall() {
  const [isMuted, setIsMuted] = useState(false);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <Text className="text-lg font-semibold text-gray-800 mb-4">
        Video Call
      </Text>

      {/* Video Grid */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        {participants.map((participant) => (
          <div
            key={participant.id}
            className="relative bg-gray-200 rounded-lg overflow-hidden"
          >
            <Image
              src={participant.videoSrc}
              alt={`${participant.name}'s video`}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 p-2 bg-gray-800 bg-opacity-75 w-full">
              <Text className="text-white">{participant.name}</Text>
              {participant.isMuted && (
                <AudioMutedOutlined className="text-red-500 ml-2" />
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="flex justify-center space-x-4">
        <Button
          type="primary"
          icon={isMuted ? <AudioMutedOutlined /> : <AudioOutlined />}
          onClick={toggleMute}
          className="bg-cyan-600 hover:bg-cyan-700"
        >
          {isMuted ? "Unmute" : "Mute"}
        </Button>
        <Button
          type="primary"
          icon={<VideoCameraOutlined />}
          className="bg-cyan-600 hover:bg-cyan-700"
        >
          Video
        </Button>
        <Button
          type="danger"
          icon={<PhoneOutlined />}
          className="bg-red-600 hover:bg-red-700"
        >
          End Call
        </Button>
      </div>
    </div>
  );
}
