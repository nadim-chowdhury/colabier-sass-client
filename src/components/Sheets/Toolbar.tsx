import { Button, Tooltip } from "antd";
import {
  BoldOutlined,
  ItalicOutlined,
  UnderlineOutlined,
} from "@ant-design/icons";

export default function Toolbar() {
  const handleFormat = (format: string) => {
    console.log(`Applying format: ${format}`);
  };

  return (
    <div className="flex space-x-2 mb-4">
      <Tooltip title="Bold">
        <Button icon={<BoldOutlined />} onClick={() => handleFormat("bold")} />
      </Tooltip>
      <Tooltip title="Italic">
        <Button
          icon={<ItalicOutlined />}
          onClick={() => handleFormat("italic")}
        />
      </Tooltip>
      <Tooltip title="Underline">
        <Button
          icon={<UnderlineOutlined />}
          onClick={() => handleFormat("underline")}
        />
      </Tooltip>
    </div>
  );
}
