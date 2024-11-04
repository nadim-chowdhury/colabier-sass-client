import { Button, Slider, Typography } from "antd";
import {
  ZoomInOutlined,
  ZoomOutOutlined,
  RedoOutlined,
} from "@ant-design/icons";
import { useState } from "react";

const { Text } = Typography;

interface ZoomControlsProps {
  onZoomChange: (zoomLevel: number) => void;
}

export default function ZoomControls({ onZoomChange }: ZoomControlsProps) {
  const [zoomLevel, setZoomLevel] = useState(100);

  const handleZoomIn = () => {
    const newZoom = Math.min(zoomLevel + 10, 200);
    setZoomLevel(newZoom);
    onZoomChange(newZoom);
  };

  const handleZoomOut = () => {
    const newZoom = Math.max(zoomLevel - 10, 10);
    setZoomLevel(newZoom);
    onZoomChange(newZoom);
  };

  const handleReset = () => {
    setZoomLevel(100);
    onZoomChange(100);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <Text className="text-lg font-semibold">Zoom Controls</Text>
      <div className="flex items-center space-x-2 mt-4">
        <Button icon={<ZoomOutOutlined />} onClick={handleZoomOut} />
        <Slider
          min={10}
          max={200}
          value={zoomLevel}
          onChange={(value) => {
            setZoomLevel(value);
            onZoomChange(value);
          }}
          style={{ width: 150 }}
        />
        <Button icon={<ZoomInOutlined />} onClick={handleZoomIn} />
        <Button icon={<RedoOutlined />} onClick={handleReset} />
      </div>
      <Text className="mt-2">Zoom: {zoomLevel}%</Text>
    </div>
  );
}
