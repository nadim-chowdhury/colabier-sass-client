import { List } from "antd";
import TaskCard from "./TaskCard";

interface Task {
  id: string;
  title: string;
  priority: string;
  dueDate: string;
}

interface TaskListProps {
  tasks: Task[];
  onMoveTask: (taskId: string, newColumnId: string) => void;
  onOpenTask: (taskId: string) => void;
}

export default function TaskList({
  tasks,
  onMoveTask,
  onOpenTask,
}: TaskListProps) {
  return (
    <List
      dataSource={tasks}
      renderItem={(task) => (
        <TaskCard key={task.id} task={task} onOpenTask={onOpenTask} />
      )}
      className="space-y-3"
    />
  );
}
