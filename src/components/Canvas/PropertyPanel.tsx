import { Input, InputNumber, Typography, Divider } from "antd";
import ColorPicker from "./ColorPicker";

const { Text } = Typography;

interface PropertyPanelProps {
  element: {
    id: string;
    type: "text" | "shape" | "image";
    properties: any;
  };
  onUpdate: (newProperties: any) => void;
}

export default function PropertyPanel({
  element,
  onUpdate,
}: PropertyPanelProps) {
  const { properties } = element;

  return (
    <div className="p-4 bg-white rounded-lg shadow-md w-64">
      <Text className="text-lg font-semibold">Properties</Text>

      {element.type === "text" && (
        <>
          <Divider />
          <Text>Content</Text>
          <Input
            value={properties.content}
            onChange={(e) => onUpdate({ content: e.target.value })}
          />
          <Divider />
          <Text>Color</Text>
          <ColorPicker
            color={properties.color}
            onChange={(color) => onUpdate({ color })}
          />
          <Divider />
          <Text>Font Size</Text>
          <InputNumber
            min={10}
            max={100}
            value={properties.fontSize}
            onChange={(value) => onUpdate({ fontSize: value })}
          />
        </>
      )}

      {element.type === "shape" && (
        <>
          <Divider />
          <Text>Color</Text>
          <ColorPicker
            color={properties.color}
            onChange={(color) => onUpdate({ color })}
          />
          <Divider />
          <Text>Width</Text>
          <InputNumber
            min={10}
            max={500}
            value={properties.width}
            onChange={(value) => onUpdate({ width: value })}
          />
          <Text>Height</Text>
          <InputNumber
            min={10}
            max={500}
            value={properties.height}
            onChange={(value) => onUpdate({ height: value })}
          />
        </>
      )}

      {element.type === "image" && (
        <>
          <Divider />
          <Text>Width</Text>
          <InputNumber
            min={10}
            max={500}
            value={properties.width}
            onChange={(value) => onUpdate({ width: value })}
          />
          <Text>Height</Text>
          <InputNumber
            min={10}
            max={500}
            value={properties.height}
            onChange={(value) => onUpdate({ height: value })}
          />
        </>
      )}
    </div>
  );
}
