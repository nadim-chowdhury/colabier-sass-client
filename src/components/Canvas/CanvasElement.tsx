import { useState } from "react";
import { Typography, Input } from "antd";
import Image from "next/image";

const { Text } = Typography;

interface CanvasElementProps {
  element: {
    id: string;
    type: "text" | "shape" | "image";
    properties: any;
  };
  onUpdate: (newProperties: any) => void;
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
        color: properties.color,
      }}
      onDoubleClick={handleDoubleClick}
    >
      {type === "text" &&
        (editing ? (
          <Input
            value={properties.content}
            onChange={handleTextChange}
            onBlur={() => setEditing(false)}
          />
        ) : (
          <Text>{properties.content}</Text>
        ))}
      {type === "shape" && (
        <div
          style={{ width: 100, height: 100, backgroundColor: properties.color }}
        />
      )}
      {type === "image" && (
        <Image
          src={properties.src}
          alt="Canvas element"
          style={{ width: 100, height: 100 }}
        />
      )}
    </div>
  );
}
