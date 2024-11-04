import { Button, Typography } from "antd";

const { Text } = Typography;

interface ToolPanelProps {
  onAddElement: (type: "text" | "shape" | "image") => void;
}

export default function ToolPanel({ onAddElement }: ToolPanelProps) {
  return (
    <div className="w-48 bg-gray-200 h-screen p-4">
      <Text className="text-lg font-semibold">Tools</Text>
      <div className="flex flex-col mt-4 space-y-2">
        <Button onClick={() => onAddElement("text")}>Add Text</Button>
        <Button onClick={() => onAddElement("shape")}>Add Shape</Button>
        <Button onClick={() => onAddElement("image")}>Add Image</Button>
      </div>
    </div>
  );
}
