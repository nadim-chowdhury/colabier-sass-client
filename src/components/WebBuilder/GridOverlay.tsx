"use client";

import { useState } from "react";
import { Checkbox, Typography } from "antd";

const { Title } = Typography;

interface GridOverlayProps {
  showGrid: boolean;
  onToggleGrid: (show: boolean) => void;
}

export default function GridOverlay({
  showGrid,
  onToggleGrid,
}: GridOverlayProps) {
  const [isChecked, setIsChecked] = useState(showGrid);

  const handleToggleGrid = (checked: boolean) => {
    setIsChecked(checked);
    onToggleGrid(checked);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <Title level={5}>Grid Overlay</Title>
      <Checkbox
        checked={isChecked}
        onChange={(e) => handleToggleGrid(e.target.checked)}
      >
        Show Grid
      </Checkbox>
      {isChecked && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundSize: "20px 20px",
            backgroundImage:
              "linear-gradient(to right, #e0e0e0 1px, transparent 1px), linear-gradient(to bottom, #e0e0e0 1px, transparent 1px)",
          }}
        />
      )}
    </div>
  );
}
