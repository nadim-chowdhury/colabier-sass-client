"use client";

import { useState } from "react";
import Image from "next/image";

interface TextProperties {
  x: number;
  y: number;
  color: string;
  content: string;
}

interface ShapeProperties {
  x: number;
  y: number;
  color: string;
}

interface ImageProperties {
  x: number;
  y: number;
  src: string;
}

type Properties = TextProperties | ShapeProperties | ImageProperties;

interface CanvasElementProps {
  element: {
    id: string;
    type: "text" | "shape" | "image";
    properties: Properties;
  };
  onUpdate: (newProperties: Partial<Properties>) => void;
}

export default function CanvasElement({
  element,
  onUpdate,
}: CanvasElementProps) {
  const { type, properties } = element;
  const [editing, setEditing] = useState(false);

  const handleDoubleClick = () => {
    setEditing(true);
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onUpdate({ content: e.target.value });
  };

  return (
    <div
      style={{
        position: "absolute",
        top: properties.y,
        left: properties.x,
        cursor: "pointer",
        color:
          type === "text" ? (properties as TextProperties).color : undefined,
      }}
      onDoubleClick={handleDoubleClick}
    >
      {type === "text" &&
        (editing ? (
          <input
            type="text"
            value={(properties as TextProperties).content}
            onChange={handleTextChange}
            onBlur={() => setEditing(false)}
            className="border p-1 rounded"
          />
        ) : (
          <span>{(properties as TextProperties).content}</span>
        ))}
      {type === "shape" && (
        <div
          style={{
            width: 100,
            height: 100,
            backgroundColor: (properties as ShapeProperties).color,
          }}
        />
      )}
      {type === "image" && (
        <Image
          src={(properties as ImageProperties).src}
          alt="Canvas element"
          width={100}
          height={100}
        />
      )}
    </div>
  );
}
