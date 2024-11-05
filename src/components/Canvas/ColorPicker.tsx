"use client";

import { useState } from "react";
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

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  return (
    <div className="relative inline-block">
      <button
        style={{ backgroundColor: color }}
        onClick={toggleVisibility}
        onBlur={() => setVisible(false)}
        className="w-full p-2 rounded text-white"
      >
        {color}
      </button>
      {visible && (
        <div
          className="absolute top-full mt-2 z-10"
          onMouseDown={(e) => e.preventDefault()} // Prevents onBlur from triggering immediately
        >
          <SketchPicker color={color} onChange={handleChange} />
        </div>
      )}
    </div>
  );
}
