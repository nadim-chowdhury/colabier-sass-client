"use client";

import { useState } from "react";
import { Input, Select, Typography } from "antd";

const { Title } = Typography;
const { Option } = Select;

interface ElementSettingsProps {
  onUpdateSettings: (settings: React.CSSProperties) => void;
}

export default function ElementSettings({
  onUpdateSettings,
}: ElementSettingsProps) {
  const [color, setColor] = useState<string>("#000000");
  const [fontSize, setFontSize] = useState<number>(16);
  const [fontWeight, setFontWeight] = useState<string>("normal");

  const handleUpdateSettings = () => {
    onUpdateSettings({ color, fontSize, fontWeight });
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <Title level={5}>Element Settings</Title>
      <div className="mb-2">
        <Typography.Text>Text Color</Typography.Text>
        <Input
          type="color"
          value={color}
          onChange={(e) => {
            setColor(e.target.value);
            handleUpdateSettings();
          }}
        />
      </div>
      <div className="mb-2">
        <Typography.Text>Font Size</Typography.Text>
        <Input
          type="number"
          value={fontSize}
          onChange={(e) => {
            setFontSize(Number(e.target.value));
            handleUpdateSettings();
          }}
        />
      </div>
      <div className="mb-2">
        <Typography.Text>Font Weight</Typography.Text>
        <Select
          value={fontWeight}
          onChange={(value) => {
            setFontWeight(value);
            handleUpdateSettings();
          }}
          className="w-full"
        >
          <Option value="normal">Normal</Option>
          <Option value="bold">Bold</Option>
          <Option value="bolder">Bolder</Option>
        </Select>
      </div>
    </div>
  );
}
