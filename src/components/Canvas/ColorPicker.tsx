import { useState } from "react";
import { Popover, Button } from "antd";
import { SketchPicker, ColorResult } from "react-color";

interface ColorPickerProps {
  color: string;
  onChange: (color: string) => void;
}

export default function ColorPicker({ color, onChange }: ColorPickerProps) {
  const [visible, setVisible] = useState(false);

  const handleChange = (colorResult: ColorResult) => {
    onChange(colorResult.hex);
  };

  return (
    <Popover
      content={<SketchPicker color={color} onChange={handleChange} />}
      trigger="click"
      visible={visible}
      onVisibleChange={(vis) => setVisible(vis)}
    >
      <Button style={{ backgroundColor: color }} className="w-full">
        {color}
      </Button>
    </Popover>
  );
}
