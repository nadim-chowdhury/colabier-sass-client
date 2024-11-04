import { Button, Typography } from "antd";
import { useState } from "react";
import { PlayCircleOutlined, StopOutlined } from "@ant-design/icons";

const { Text } = Typography;

interface RecordingControlsProps {
  onStartRecording: () => void;
  onStopRecording: () => void;
}

export default function RecordingControls({
  onStartRecording,
  onStopRecording,
}: RecordingControlsProps) {
  const [isRecording, setIsRecording] = useState(false);

  const toggleRecording = () => {
    if (isRecording) {
      onStopRecording();
    } else {
      onStartRecording();
    }
    setIsRecording(!isRecording);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <Text className="text-lg font-semibold">Recording</Text>
      <Button
        type="primary"
        danger={isRecording}
        icon={isRecording ? <StopOutlined /> : <PlayCircleOutlined />}
        onClick={toggleRecording}
        className="mt-4"
      >
        {isRecording ? "Stop Recording" : "Start Recording"}
      </Button>
    </div>
  );
}
