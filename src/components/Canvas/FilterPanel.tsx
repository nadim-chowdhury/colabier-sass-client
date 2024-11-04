import { Slider, Typography, Divider } from "antd";
import { useState, useEffect } from "react";

const { Text } = Typography;

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
  }, [brightness, contrast, grayscale]);

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <Text className="text-lg font-semibold">Image Filters</Text>

      <Divider />
      <Text>Brightness</Text>
      <Slider
        min={0}
        max={200}
        value={brightness}
        onChange={(value) => setBrightness(value)}
      />

      <Divider />
      <Text>Contrast</Text>
      <Slider
        min={0}
        max={200}
        value={contrast}
        onChange={(value) => setContrast(value)}
      />

      <Divider />
      <Text>Grayscale</Text>
      <Slider
        min={0}
        max={100}
        value={grayscale}
        onChange={(value) => setGrayscale(value)}
      />
    </div>
  );
}
