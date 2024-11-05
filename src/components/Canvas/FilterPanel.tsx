"use client";

import { useState, useEffect } from "react";

interface FilterPanelProps {
  onApplyFilters: (filters: {
    brightness: number;
    contrast: number;
    grayscale: number;
  }) => void;
}

export default function FilterPanel({ onApplyFilters }: FilterPanelProps) {
  const [brightness, setBrightness] = useState(100);
  const [contrast, setContrast] = useState(100);
  const [grayscale, setGrayscale] = useState(0);

  useEffect(() => {
    onApplyFilters({ brightness, contrast, grayscale });
  }, [brightness, contrast, grayscale, onApplyFilters]);

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <p className="text-lg font-semibold">Image Filters</p>

      <hr className="my-4" />
      <p>Brightness</p>
      <input
        type="range"
        min="0"
        max="200"
        value={brightness}
        onChange={(e) => setBrightness(Number(e.target.value))}
        className="w-full"
      />

      <hr className="my-4" />
      <p>Contrast</p>
      <input
        type="range"
        min="0"
        max="200"
        value={contrast}
        onChange={(e) => setContrast(Number(e.target.value))}
        className="w-full"
      />

      <hr className="my-4" />
      <p>Grayscale</p>
      <input
        type="range"
        min="0"
        max="100"
        value={grayscale}
        onChange={(e) => setGrayscale(Number(e.target.value))}
        className="w-full"
      />
    </div>
  );
}
