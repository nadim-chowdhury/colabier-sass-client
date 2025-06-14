"use client";

import { useState } from "react";
import ToolPanel from "./ToolPanel";
import CanvasElement from "./CanvasElement";

interface ElementProperties {
  x: number;
  y: number;
  content: string;
  color: string;
}

interface Element {
  id: string;
  type: "text" | "shape" | "image";
  properties: ElementProperties;
}

export default function CanvasEditor() {
  const [elements, setElements] = useState<Element[]>([]);

  const addElement = (type: "text" | "shape" | "image") => {
    const newElement: Element = {
      id: Date.now().toString(),
      type,
      properties: { x: 100, y: 100, content: "Sample Text", color: "#000" },
    };
    setElements([...elements, newElement]);
  };

  const updateElement = (
    id: string,
    newProperties: Partial<ElementProperties>
  ) => {
    setElements(
      elements.map((el) =>
        el.id === id
          ? { ...el, properties: { ...el.properties, ...newProperties } }
          : el
      )
    );
  };

  return (
    <div className="flex">
      <ToolPanel onAddElement={addElement} />
      <div className="relative bg-gray-100 w-full h-screen border border-gray-300 rounded-lg p-4">
        <h3 className="text-xl font-semibold">Canvas Editor</h3>
        {elements.map((element) => (
          <CanvasElement
            key={element.id}
            element={element}
            onUpdate={(newProperties) =>
              updateElement(element.id, newProperties)
            }
          />
        ))}
      </div>
    </div>
  );
}
