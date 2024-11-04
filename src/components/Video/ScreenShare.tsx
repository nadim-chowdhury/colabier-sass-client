import { useState } from "react";
import { Button, Typography } from "antd";
import { ScreenOutlined, StopOutlined } from "@ant-design/icons";

const { Text } = Typography;

export default function ScreenShare() {
  const [isSharing, setIsSharing] = useState(false);
  const [stream, setStream] = useState<MediaStream | null>(null);

  const startScreenShare = async () => {
    try {
      const screenStream = await navigator.mediaDevices.getDisplayMedia({
        video: true,
      });
      setStream(screenStream);
      setIsSharing(true);

      screenStream.getVideoTracks()[0].onended = () => {
        stopScreenShare();
      };
    } catch (error) {
      console.error("Error starting screen share:", error);
    }
  };

  const stopScreenShare = () => {
    stream?.getTracks().forEach((track) => track.stop());
    setStream(null);
    setIsSharing(false);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <Text className="text-lg font-semibold">Screen Sharing</Text>
      <Button
        type="primary"
        icon={isSharing ? <StopOutlined /> : <ScreenOutlined />}
        onClick={isSharing ? stopScreenShare : startScreenShare}
        className="mt-4"
      >
        {isSharing ? "Stop Sharing" : "Start Sharing"}
      </Button>
    </div>
  );
}
