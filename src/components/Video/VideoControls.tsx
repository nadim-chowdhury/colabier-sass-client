import { Button } from "antd";
import {
  AudioMutedOutlined,
  AudioOutlined,
  VideoCameraOutlined,
  VideoCameraAddOutlined,
} from "@ant-design/icons";
import { useState } from "react";

interface VideoControlsProps {
  onMute: () => void;
  onToggleVideo: () => void;
}

export default function VideoControls({
  onMute,
  onToggleVideo,
}: VideoControlsProps) {
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOn, setIsVideoOn] = useState(true);

  const handleMute = () => {
    setIsMuted(!isMuted);
    onMute();
  };

  const handleToggleVideo = () => {
    setIsVideoOn(!isVideoOn);
    onToggleVideo();
  };

  return (
    <div className="flex space-x-2 mt-4">
      <Button
        onClick={handleMute}
        icon={isMuted ? <AudioMutedOutlined /> : <AudioOutlined />}
      >
        {isMuted ? "Unmute" : "Mute"}
      </Button>
      <Button
        onClick={handleToggleVideo}
        icon={isVideoOn ? <VideoCameraOutlined /> : <VideoCameraAddOutlined />}
      >
        {isVideoOn ? "Turn Video Off" : "Turn Video On"}
      </Button>
    </div>
  );
}
