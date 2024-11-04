import { Button, Tooltip, Divider, Typography } from "antd";
import {
  BoldOutlined,
  ItalicOutlined,
  BgColorsOutlined,
  FontColorsOutlined,
} from "@ant-design/icons";
import { useState } from "react";

const { Title } = Typography;

interface CellFormattingProps {
  onApplyFormatting: (format: string, value: any) => void;
}

export default function CellFormatting({
  onApplyFormatting,
}: CellFormattingProps) {
  const [bgColor, setBgColor] = useState<string>("#ffffff");
  const [textColor, setTextColor] = useState<string>("#000000");

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <Title level={5}>Cell Formatting</Title>
      <div className="flex space-x-2 mb-4">
        <Tooltip title="Bold">
          <Button
            icon={<BoldOutlined />}
            onClick={() => onApplyFormatting("bold", true)}
          />
        </Tooltip>
        <Tooltip title="Italic">
          <Button
            icon={<ItalicOutlined />}
            onClick={() => onApplyFormatting("italic", true)}
          />
        </Tooltip>
      </div>
      <Divider />
      <div className="mb-4">
        <Typography.Text>Background Color</Typography.Text>
        <input
          type="color"
          value={bgColor}
          onChange={(e) => {
            setBgColor(e.target.value);
            onApplyFormatting("backgroundColor", e.target.value);
          }}
          className="ml-2"
        />
      </div>
      <div>
        <Typography.Text>Text Color</Typography.Text>
        <input
          type="color"
          value={textColor}
          onChange={(e) => {
            setTextColor(e.target.value);
            onApplyFormatting("textColor", e.target.value);
          }}
          className="ml-2"
        />
      </div>
    </div>
  );
}
