import { useState } from "react";
import Column from "./Column";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

interface Column {
  id: string;
  title: string;
  tasks: Task[];
}

interface Task {
  id: string;
  title: string;
  description: string;
  priority: string;
}

interface BoardProps {
  columns: Column[];
  onAddTask: (columnId: string) => void;
  onMoveTask: (
    taskId: string,
    fromColumnId: string,
    toColumnId: string
  ) => void;
}

export default function Board({ columns, onAddTask, onMoveTask }: BoardProps) {
  return (
    <div className="flex space-x-4 p-4 bg-gray-100">
      {columns.map((column) => (
        <Column
          key={column.id}
          column={column}
          onAddTask={onAddTask}
          onMoveTask={(taskId, newColumnId) =>
            onMoveTask(taskId, column.id, newColumnId)
          }
        />
      ))}
      <Button
        icon={<PlusOutlined />}
        className="mt-4 bg-cyan-600 hover:bg-cyan-700 text-white"
        onClick={() => onAddTask(columns[0].id)}
      >
        Add New Task
      </Button>
    </div>
  );
}
