import { Button, Select, Typography } from "antd";
import { useState } from "react";

const { Title } = Typography;
const { Option } = Select;

interface LayoutPanelProps {
  onLayoutChange: (layout: string) => void;
}

export default function LayoutPanel({ onLayoutChange }: LayoutPanelProps) {
  const [layout, setLayout] = useState<string>("single-column");

  const handleLayoutChange = (value: string) => {
    setLayout(value);
    onLayoutChange(value);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <Title level={5}>Layout Options</Title>
      <Select
        value={layout}
        onChange={handleLayoutChange}
        className="w-full mb-2"
      >
        <Option value="single-column">Single Column</Option>
        <Option value="two-column">Two Columns</Option>
        <Option value="three-column">Three Columns</Option>
      </Select>
      <Button onClick={() => onLayoutChange(layout)} type="primary">
        Apply Layout
      </Button>
    </div>
  );
}
