import { useState } from "react";
import { Form, Input, Button, Select, DatePicker } from "antd";

const { TextArea } = Input;
const { Option } = Select;

interface Task {
  id?: string;
  title: string;
  description: string;
  priority: string;
  dueDate: string;
}

interface TaskFormProps {
  initialTask?: Task;
  onSave: (task: Task) => void;
}

export default function TaskForm({ initialTask, onSave }: TaskFormProps) {
  const [task, setTask] = useState<Task>(
    initialTask || { title: "", description: "", priority: "Low", dueDate: "" }
  );

  const handleSave = () => {
    if (task.title.trim()) {
      onSave(task);
    }
  };

  return (
    <Form
      layout="vertical"
      className="space-y-4 p-4 bg-white shadow-md rounded-lg"
    >
      <Form.Item label="Task Title" required>
        <Input
          value={task.title}
          onChange={(e) => setTask({ ...task, title: e.target.value })}
          placeholder="Enter task title"
        />
      </Form.Item>

      <Form.Item label="Description">
        <TextArea
          rows={4}
          value={task.description}
          onChange={(e) => setTask({ ...task, description: e.target.value })}
          placeholder="Enter task description"
        />
      </Form.Item>

      <Form.Item label="Priority">
        <Select
          value={task.priority}
          onChange={(value) => setTask({ ...task, priority: value })}
        >
          <Option value="High">High</Option>
          <Option value="Medium">Medium</Option>
          <Option value="Low">Low</Option>
        </Select>
      </Form.Item>

      <Form.Item label="Due Date">
        <DatePicker
          value={task.dueDate ? moment(task.dueDate) : null}
          onChange={(date, dateString) =>
            setTask({ ...task, dueDate: dateString })
          }
          className="w-full"
        />
      </Form.Item>

      <Button
        type="primary"
        onClick={handleSave}
        className="bg-cyan-600 hover:bg-cyan-700 w-full"
      >
        {initialTask ? "Save Changes" : "Create Task"}
      </Button>
    </Form>
  );
}
