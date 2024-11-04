"use client";

import { useEffect, useState } from "react";
import { Select, Typography } from "antd";

const { Text } = Typography;
const { Option } = Select;

interface SettingsPanelProps {
  onAudioDeviceChange: (deviceId: string) => void;
  onVideoDeviceChange: (deviceId: string) => void;
}

export default function SettingsPanel({
  onAudioDeviceChange,
  onVideoDeviceChange,
}: SettingsPanelProps) {
  const [audioDevices, setAudioDevices] = useState<MediaDeviceInfo[]>([]);
  const [videoDevices, setVideoDevices] = useState<MediaDeviceInfo[]>([]);
  const [selectedAudioDevice, setSelectedAudioDevice] = useState<string>("");
  const [selectedVideoDevice, setSelectedVideoDevice] = useState<string>("");

  useEffect(() => {
    const fetchDevices = async () => {
      const devices = await navigator.mediaDevices.enumerateDevices();
      setAudioDevices(devices.filter((device) => device.kind === "audioinput"));
      setVideoDevices(devices.filter((device) => device.kind === "videoinput"));
    };

    fetchDevices();
  }, []);

  const handleAudioDeviceChange = (value: string) => {
    setSelectedAudioDevice(value);
    onAudioDeviceChange(value);
  };

  const handleVideoDeviceChange = (value: string) => {
    setSelectedVideoDevice(value);
    onVideoDeviceChange(value);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <Text className="text-lg font-semibold">Settings</Text>

      <div className="mt-4">
        <Text>Audio Device</Text>
        <Select
          value={selectedAudioDevice}
          onChange={handleAudioDeviceChange}
          className="w-full"
          placeholder="Select Audio Device"
        >
          {audioDevices.map((device) => (
            <Option key={device.deviceId} value={device.deviceId}>
              {device.label || "Unnamed Audio Device"}
            </Option>
          ))}
        </Select>
      </div>

      <div className="mt-4">
        <Text>Video Device</Text>
        <Select
          value={selectedVideoDevice}
          onChange={handleVideoDeviceChange}
          className="w-full"
          placeholder="Select Video Device"
        >
          {videoDevices.map((device) => (
            <Option key={device.deviceId} value={device.deviceId}>
              {device.label || "Unnamed Video Device"}
            </Option>
          ))}
        </Select>
      </div>
    </div>
  );
}
