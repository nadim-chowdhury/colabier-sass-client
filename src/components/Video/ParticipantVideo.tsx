import { Typography, Avatar } from "antd";
import { AudioMutedOutlined, VideoCameraOutlined } from "@ant-design/icons";

const { Text } = Typography;

interface Participant {
  id: string;
  name: string;
  isMuted: boolean;
  isVideoOn: boolean;
}

interface ParticipantVideoProps {
  participant: Participant;
  onToggleMute: () => void;
  onToggleVideo: () => void;
}

export default function ParticipantVideo({
  participant,
  onToggleMute,
  onToggleVideo,
}: ParticipantVideoProps) {
  return (
    <div className="relative w-full h-48 bg-black rounded-lg overflow-hidden">
      {/* Show Video or Avatar */}
      {participant.isVideoOn ? (
        <div className="w-full h-full bg-gray-700 flex items-center justify-center">
          <Text className="text-white text-lg">{participant.name}</Text>
        </div>
      ) : (
        <div className="flex items-center justify-center h-full bg-gray-800">
          <Avatar size={64}>{participant.name[0]}</Avatar>
        </div>
      )}

      {/* Mute and Video Off Indicators */}
      <div className="absolute bottom-2 left-2 text-white space-x-2">
        {participant.isMuted && <AudioMutedOutlined style={{ fontSize: 20 }} />}
        {!participant.isVideoOn && (
          <VideoCameraOutlined style={{ fontSize: 20 }} />
        )}
      </div>
    </div>
  );
}
