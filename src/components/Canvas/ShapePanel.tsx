import { Typography, Button, InputNumber } from "antd";
import ColorPicker from "./ColorPicker";

const { Text } = Typography;

interface ShapePanelProps {
  onAddShape: (type: string) => void;
  color: string;
  width: number;
  height: number;
  onColorChange: (color: string) => void;
  onWidthChange: (width: number) => void;
  onHeightChange: (height: number) => void;
}

export default function ShapePanel({
  onAddShape,
  color,
  width,
  height,
  onColorChange,
  onWidthChange,
  onHeightChange,
}: ShapePanelProps) {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <Text className="text-lg font-semibold">Shape Customization</Text>

      <div className="mt-4">
        <Button onClick={() => onAddShape("rectangle")}>Add Rectangle</Button>
        <Button onClick={() => onAddShape("circle")} className="ml-2">
          Add Circle
        </Button>
      </div>

      <div className="mt-4">
        <Text>Color</Text>
        <ColorPicker color={color} onChange={onColorChange} />
      </div>

      <div className="mt-4">
        <Text>Width</Text>
        <InputNumber
          min={10}
          max={500}
          value={width}
          onChange={onWidthChange}
          className="w-full"
        />
      </div>

      <div className="mt-4">
        <Text>Height</Text>
        <InputNumber
          min={10}
          max={500}
          value={height}
          onChange={onHeightChange}
          className="w-full"
        />
      </div>
    </div>
  );
}
