"use client";

import CanvasEditor from "@/components/Canvas/CanvasEditor";
import ToolPanel from "@/components/Canvas/ToolPanel";
import LayerPanel from "@/components/Canvas/LayerPanel";

export default function DesignToolPage() {
  const onAddElement = () => {
    console.log("New element added");
  };

  const layers = [
    { id: "layer1", name: "Background", isVisible: true },
    { id: "layer2", name: "Text Layer", isVisible: true },
    { id: "layer3", name: "Image Layer", isVisible: false },
  ];

  const onMoveUp = (layerId: string) => {
    console.log(`Move layer ${layerId} up`);
  };

  const onMoveDown = (layerId: string) => {
    console.log(`Move layer ${layerId} down`);
  };

  return (
    <div className="flex">
      <ToolPanel onAddElement={onAddElement} />
      <CanvasEditor />
      <LayerPanel layers={layers} onMoveUp={onMoveUp} onMoveDown={onMoveDown} />
    </div>
  );
}
