"use client";

import { Typography, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import TaskList from "./TaskList";
import { Column as ColumnType } from "@/types/types"; // Import the shared types

const { Title } = Typography;

interface ColumnProps {
  column: ColumnType;
  onAddTask: (columnId: string) => void;
  onMoveTask: (taskId: string, newColumnId: string) => void;
  onOpenTask: (taskId: string) => void;
}

export default function Column({
  column,
  onAddTask,
  onMoveTask,
  onOpenTask,
}: ColumnProps) {
  return (
    <div className="flex flex-col w-72 bg-gray-100 p-4 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <Title level={4} className="text-gray-800">
          {column.title}
        </Title>
        <Button
          icon={<PlusOutlined />}
          type="text"
          onClick={() => onAddTask(column.id)}
          className="text-cyan-600 hover:text-cyan-700"
        />
      </div>
      <TaskList
        tasks={column.tasks}
        onMoveTask={(taskId, newColumnId) => onMoveTask(taskId, newColumnId)}
        onOpenTask={onOpenTask}
      />
    </div>
  );
}
