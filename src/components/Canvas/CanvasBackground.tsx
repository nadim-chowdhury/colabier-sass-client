import { Button, Upload, Typography } from "antd";
import ColorPicker from "./ColorPicker";
import { UploadOutlined } from "@ant-design/icons";
import { useState } from "react";

const { Text } = Typography;

interface CanvasBackgroundProps {
  onBackgroundChange: (background: { color?: string; image?: string }) => void;
}

export default function CanvasBackground({
  onBackgroundChange,
}: CanvasBackgroundProps) {
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");

  const handleColorChange = (color: string) => {
    setBackgroundColor(color);
    onBackgroundChange({ color });
  };

  const handleImageUpload = (info: any) => {
    if (info.file.status === "done") {
      const imageUrl = URL.createObjectURL(info.file.originFileObj);
      onBackgroundChange({ image: imageUrl });
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <Text className="text-lg font-semibold">Canvas Background</Text>

      <div className="mt-4">
        <Text>Background Color</Text>
        <ColorPicker color={backgroundColor} onChange={handleColorChange} />
      </div>

      <div className="mt-4">
        <Text>Background Image</Text>
        <Upload
          customRequest={({ file, onSuccess }) => {
            setTimeout(() => onSuccess && onSuccess("ok"), 0);
          }}
          onChange={handleImageUpload}
          showUploadList={false}
        >
          <Button icon={<UploadOutlined />}>Upload Image</Button>
        </Upload>
      </div>
    </div>
  );
}
