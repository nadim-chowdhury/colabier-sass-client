import { Typography, Select, InputNumber } from "antd";
import ColorPicker from "./ColorPicker";

const { Text } = Typography;
const { Option } = Select;

interface TextPanelProps {
  fontSize: number;
  color: string;
  fontFamily: string;
  onFontSizeChange: (size: number) => void;
  onColorChange: (color: string) => void;
  onFontFamilyChange: (font: string) => void;
}

export default function TextPanel({
  fontSize,
  color,
  fontFamily,
  onFontSizeChange,
  onColorChange,
  onFontFamilyChange,
}: TextPanelProps) {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <Text className="text-lg font-semibold">Text Customization</Text>

      <div className="mt-4">
        <Text>Font Size</Text>
        <InputNumber
          min={10}
          max={100}
          value={fontSize}
          onChange={onFontSizeChange}
          className="w-full"
        />
      </div>

      <div className="mt-4">
        <Text>Color</Text>
        <ColorPicker color={color} onChange={onColorChange} />
      </div>

      <div className="mt-4">
        <Text>Font Family</Text>
        <Select
          value={fontFamily}
          onChange={onFontFamilyChange}
          className="w-full"
        >
          <Option value="Arial">Arial</Option>
          <Option value="Courier New">Courier New</Option>
          <Option value="Georgia">Georgia</Option>
          <Option value="Times New Roman">Times New Roman</Option>
          <Option value="Verdana">Verdana</Option>
        </Select>
      </div>
    </div>
  );
}
