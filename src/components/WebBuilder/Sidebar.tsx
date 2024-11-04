import { Button, Typography } from "antd";

const { Title } = Typography;

interface SidebarProps {
  onAddElement: (type: string) => void;
}

export default function Sidebar({ onAddElement }: SidebarProps) {
  return (
    <div className="w-64 bg-white border-r border-gray-300 p-4">
      <Title level={5}>Elements</Title>
      <Button
        type="dashed"
        block
        onClick={() => onAddElement("text")}
        className="my-2"
      >
        Add Text
      </Button>
      <Button
        type="dashed"
        block
        onClick={() => onAddElement("image")}
        className="my-2"
      >
        Add Image
      </Button>
      <Button
        type="dashed"
        block
        onClick={() => onAddElement("video")}
        className="my-2"
      >
        Add Video
      </Button>
    </div>
  );
}
