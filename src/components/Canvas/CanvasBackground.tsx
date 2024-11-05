"use client";

import { useState, ChangeEvent } from "react";
import { FaUpload } from "react-icons/fa";
import ColorPicker from "./ColorPicker";

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

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      onBackgroundChange({ image: imageUrl });
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <p className="text-lg font-semibold">Canvas Background</p>

      <div className="mt-4">
        <p>Background Color</p>
        <ColorPicker color={backgroundColor} onChange={handleColorChange} />
      </div>

      <div className="mt-4">
        <p>Background Image</p>
        <label className="flex items-center space-x-2 cursor-pointer">
          <FaUpload />
          <span>Upload Image</span>
          <input
            type="file"
            onChange={handleImageUpload}
            className="hidden"
            accept="image/*"
          />
        </label>
      </div>
    </div>
  );
}
