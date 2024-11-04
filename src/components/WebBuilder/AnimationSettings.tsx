import { Select, Typography } from "antd";

const { Title } = Typography;
const { Option } = Select;

interface AnimationSettingsProps {
  onSetAnimation: (animation: string) => void;
}

export default function AnimationSettings({
  onSetAnimation,
}: AnimationSettingsProps) {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <Title level={5}>Animation Settings</Title>
      <Select
        defaultValue="none"
        onChange={(value) => onSetAnimation(value)}
        className="w-full"
      >
        <Option value="none">None</Option>
        <Option value="fade-in">Fade In</Option>
        <Option value="slide-up">Slide Up</Option>
        <Option value="zoom-in">Zoom In</Option>
        <Option value="rotate">Rotate</Option>
      </Select>
    </div>
  );
}
