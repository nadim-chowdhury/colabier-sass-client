// types.ts
export interface Task {
  id: string;
  title: string;
  description: string;
  priority: string;
  dueDate: string; // Ensure dueDate is defined here
}

export interface Column {
  id: string;
  title: string;
  tasks: Task[];
}
