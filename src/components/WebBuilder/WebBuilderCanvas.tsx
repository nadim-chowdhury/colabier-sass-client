import { useState } from "react";
import Element from "./Element";

interface ElementData {
  id: string;
  type: string;
  content: string;
  style: React.CSSProperties;
}

export default function WebBuilderCanvas() {
  const [elements, setElements] = useState<ElementData[]>([]);

  const addElement = (element: ElementData) => {
    setElements([...elements, element]);
  };

  return (
    <div className="relative bg-gray-100 w-full h-full p-4 border border-gray-300 rounded-md">
      {elements.map((el) => (
        <Element key={el.id} {...el} />
      ))}
    </div>
  );
}
