"use client";

import { Card, Tag, Typography } from "antd";

const { Text } = Typography;

interface Task {
  id: string;
  title: string;
  priority: string;
  dueDate: string;
}

interface TaskCardProps {
  task: Task;
  onOpenTask: (taskId: string) => void;
}

export default function TaskCard({ task, onOpenTask }: TaskCardProps) {
  return (
    <Card
      hoverable
      className="mb-4 cursor-pointer"
      onClick={() => onOpenTask(task.id)}
    >
      <div className="flex justify-between items-center">
        <Text className="font-semibold">{task.title}</Text>
        <Tag
          color={
            task.priority === "High"
              ? "red"
              : task.priority === "Medium"
              ? "orange"
              : "green"
          }
        >
          {task.priority}
        </Tag>
      </div>
      <Text type="secondary" className="text-sm">
        Due: {task.dueDate}
      </Text>
    </Card>
  );
}
