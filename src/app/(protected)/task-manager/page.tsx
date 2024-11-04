import Sidebar from "@/components/TaskManager/Sidebar";
import ProjectHeader from "@/components/TaskManager/ProjectHeader";
import Board from "@/components/TaskManager/Board";
import TaskFilter from "@/components/TaskManager/TaskFilter";

export default function TaskManagerPage() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <ProjectHeader />
        <TaskFilter />
        <Board />
      </div>
    </div>
  );
}
