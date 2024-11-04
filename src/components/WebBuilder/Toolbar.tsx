import { Button, Select, Typography } from "antd";

const { Title } = Typography;
const { Option } = Select;

interface ToolbarProps {
  onThemeChange: (theme: string) => void;
  onLayoutChange: (layout: string) => void;
}

export default function Toolbar({
  onThemeChange,
  onLayoutChange,
}: ToolbarProps) {
  return (
    <div className="flex items-center p-4 bg-white border-b border-gray-300">
      <Title level={5} className="mr-4">
        Toolbar
      </Title>
      <Select
        defaultValue="default"
        onChange={onThemeChange}
        className="mr-4"
        style={{ width: 120 }}
      >
        <Option value="default">Default Theme</Option>
        <Option value="dark">Dark Theme</Option>
        <Option value="light">Light Theme</Option>
      </Select>
      <Select
        defaultValue="single-column"
        onChange={onLayoutChange}
        className="mr-4"
        style={{ width: 140 }}
      >
        <Option value="single-column">Single Column</Option>
        <Option value="two-column">Two Columns</Option>
        <Option value="grid">Grid Layout</Option>
      </Select>
      <Button type="primary">Save</Button>
    </div>
  );
}
