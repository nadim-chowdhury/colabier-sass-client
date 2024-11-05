"use client";

import Column from "./Column";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { Column as ColumnType } from "@/types/types"; // Import the shared types

interface BoardProps {
  columns: ColumnType[];
  onAddTask: (columnId: string) => void;
  onMoveTask: (
    taskId: string,
    fromColumnId: string,
    toColumnId: string
  ) => void;
  onOpenTask: (taskId: string) => void;
}

export default function Board({
  columns,
  onAddTask,
  onMoveTask,
  onOpenTask,
}: BoardProps) {
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
          onOpenTask={onOpenTask}
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
