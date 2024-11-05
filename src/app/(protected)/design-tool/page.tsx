"use client";

import CanvasEditor from "@/components/Canvas/CanvasEditor";
import ToolPanel from "@/components/Canvas/ToolPanel";
import LayerPanel from "@/components/Canvas/LayerPanel";

export default function DesignToolPage() {
  const onAddElement = () => {
    console.log("New element added");
    // Add logic to add an element to the canvas or layer list
  };

  // Sample data for layers
  const layers = [
    { id: "layer1", name: "Background", isVisible: true },
    { id: "layer2", name: "Text Layer", isVisible: true },
    { id: "layer3", name: "Image Layer", isVisible: false },
  ];

  const onMoveUp = (layerId: string) => {
    console.log(`Move layer ${layerId} up`);
    // Add logic to change layer order, moving the specified layer up
  };

  const onMoveDown = (layerId: string) => {
    console.log(`Move layer ${layerId} down`);
    // Add logic to change layer order, moving the specified layer down
  };

  return (
    <div className="flex">
      <ToolPanel onAddElement={onAddElement} />
      <CanvasEditor />
      <LayerPanel layers={layers} onMoveUp={onMoveUp} onMoveDown={onMoveDown} />
    </div>
  );
}
