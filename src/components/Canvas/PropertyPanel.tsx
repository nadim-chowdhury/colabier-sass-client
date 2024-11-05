"use client";

import { Input, InputNumber, Typography, Divider } from "antd";
import ColorPicker from "./ColorPicker";

const { Text } = Typography;

interface TextProperties {
  content: string;
  color: string;
  fontSize: number | null;
}

interface ShapeProperties {
  color: string;
  width: number | null;
  height: number | null;
}

interface ImageProperties {
  width: number | null;
  height: number | null;
}

type ElementProperties = TextProperties | ShapeProperties | ImageProperties;

interface PropertyPanelProps {
  element: {
    id: string;
    type: "text" | "shape" | "image";
    properties: ElementProperties;
  };
  onUpdate: (newProperties: Partial<ElementProperties>) => void;
}

export default function PropertyPanel({
  element,
  onUpdate,
}: PropertyPanelProps) {
  const { properties } = element;

  return (
    <div className="p-4 bg-white rounded-lg shadow-md w-64">
      <Text className="text-lg font-semibold">Properties</Text>

      {element.type === "text" && (
        <>
          <Divider />
          <Text>Content</Text>
          <Input
            value={(properties as TextProperties).content}
            onChange={(e) => onUpdate({ content: e.target.value })}
          />
          <Divider />
          <Text>Color</Text>
          <ColorPicker
            color={(properties as TextProperties).color}
            onChange={(color) => onUpdate({ color })}
          />
          <Divider />
          <Text>Font Size</Text>
          <InputNumber
            min={10}
            max={100}
            value={(properties as TextProperties).fontSize ?? undefined}
            onChange={(value) => onUpdate({ fontSize: value })}
          />
        </>
      )}

      {element.type === "shape" && (
        <>
          <Divider />
          <Text>Color</Text>
          <ColorPicker
            color={(properties as ShapeProperties).color}
            onChange={(color) => onUpdate({ color })}
          />
          <Divider />
          <Text>Width</Text>
          <InputNumber
            min={10}
            max={500}
            value={(properties as ShapeProperties).width ?? undefined}
            onChange={(value) => onUpdate({ width: value })}
          />
          <Text>Height</Text>
          <InputNumber
            min={10}
            max={500}
            value={(properties as ShapeProperties).height ?? undefined}
            onChange={(value) => onUpdate({ height: value })}
          />
        </>
      )}

      {element.type === "image" && (
        <>
          <Divider />
          <Text>Width</Text>
          <InputNumber
            min={10}
            max={500}
            value={(properties as ImageProperties).width ?? undefined}
            onChange={(value) => onUpdate({ width: value })}
          />
          <Text>Height</Text>
          <InputNumber
            min={10}
            max={500}
            value={(properties as ImageProperties).height ?? undefined}
            onChange={(value) => onUpdate({ height: value })}
          />
        </>
      )}
    </div>
  );
}
