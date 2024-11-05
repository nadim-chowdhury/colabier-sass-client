export interface Task {
  id: string;
  title: string;
  description: string;
  priority: string;
  dueDate: string;
}

export interface Column {
  id: string;
  title: string;
  tasks: Task[];
}
