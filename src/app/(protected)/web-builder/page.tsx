import WebBuilderCanvas from "@/components/WebBuilder/WebBuilderCanvas";
import Sidebar from "@/components/WebBuilder/Sidebar";
import Toolbar from "@/components/WebBuilder/Toolbar";

export default function WebBuilderPage() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Toolbar />
        <WebBuilderCanvas />
      </div>
    </div>
  );
}
