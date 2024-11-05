"use client";

import Sidebar from "@/components/TaskManager/Sidebar";
import ProjectHeader from "@/components/TaskManager/ProjectHeader";
import Board from "@/components/TaskManager/Board";
import TaskFilter from "@/components/TaskManager/TaskFilter";
import { Column } from "@/types/types";

type Project = {
  id: string;
  name: string;
};

type Filter = {
  status?: string;
  priority?: string;
};

const projects: Project[] = [
  { id: "1", name: "Project A" },
  { id: "2", name: "Project B" },
];

const selectedProject: Project = projects[0];
const columns: Column[] = [{ id: "1", title: "To Do", tasks: [] }];

export default function TaskManagerPage() {
  const handleSelectProject = (projectId: string) => {
    console.log("Selected project ID:", projectId);
  };

  const handleOpenSettings = () => {
    console.log("Open settings clicked");
  };

  const handleEditProject = (project: Project) => {
    console.log("Edit project:", project);
  };

  const handleFilterChange = (filter: Filter) => {
    console.log("Filter changed:", filter);
  };

  const handleAddTask = (columnId: string) => {
    console.log("Task added to column:", columnId);
  };

  const handleMoveTask = (
    taskId: string,
    fromColumnId: string,
    toColumnId: string
  ) => {
    console.log("Task moved:", taskId, "from", fromColumnId, "to", toColumnId);
  };

  const handleOpenTask = (taskId: string) => {
    console.log("Opening task with ID:", taskId);
  };

  return (
    <div className="flex">
      <Sidebar
        projects={projects}
        onSelectProject={handleSelectProject}
        onOpenSettings={handleOpenSettings}
      />
      <div className="flex-1">
        <ProjectHeader
          project={selectedProject}
          onEditProject={handleEditProject}
        />
        <TaskFilter onFilterChange={handleFilterChange} />
        <Board
          columns={columns}
          onAddTask={handleAddTask}
          onMoveTask={handleMoveTask}
          onOpenTask={handleOpenTask}
        />
      </div>
    </div>
  );
}
