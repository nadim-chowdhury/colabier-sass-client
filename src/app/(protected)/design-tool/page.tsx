import CanvasEditor from "@/components/Canvas/CanvasEditor";
import ToolPanel from "@/components/Canvas/ToolPanel";
import LayerPanel from "@/components/Canvas/LayerPanel";

export default function DesignToolPage() {
  return (
    <div className="flex">
      <ToolPanel />
      <CanvasEditor />
      <LayerPanel />
    </div>
  );
}
