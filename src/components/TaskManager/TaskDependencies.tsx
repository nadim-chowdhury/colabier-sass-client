"use client";

import { useState } from "react";
import { List, Select, Button, Typography } from "antd";
import { PlusOutlined, DeleteOutlined } from "@ant-design/icons";

const { Option } = Select;
const { Text } = Typography;

interface Task {
  id: string;
  title: string;
}

interface Dependency {
  taskId: string;
  dependencyId: string;
}

interface TaskDependenciesProps {
  tasks: Task[];
  dependencies: Dependency[];
  onAddDependency: (dependency: Dependency) => void;
  onRemoveDependency: (dependencyId: string) => void;
}

export default function TaskDependencies({
  tasks,
  dependencies,
  onAddDependency,
  onRemoveDependency,
}: TaskDependenciesProps) {
  const [selectedTask, setSelectedTask] = useState<string | null>(null);
  const [selectedDependency, setSelectedDependency] = useState<string | null>(
    null
  );

  const handleAddDependency = () => {
    if (selectedTask && selectedDependency) {
      onAddDependency({
        taskId: selectedTask,
        dependencyId: selectedDependency,
      });
      setSelectedTask(null);
      setSelectedDependency(null);
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <Text className="text-lg font-semibold">Task Dependencies</Text>

      <div className="flex items-center space-x-2 mt-4">
        <Select
          placeholder="Select Task"
          value={selectedTask}
          onChange={(value) => setSelectedTask(value)}
          className="w-full"
        >
          {tasks.map((task) => (
            <Option key={task.id} value={task.id}>
              {task.title}
            </Option>
          ))}
        </Select>

        <Select
          placeholder="Depends On"
          value={selectedDependency}
          onChange={(value) => setSelectedDependency(value)}
          className="w-full"
        >
          {tasks
            .filter((task) => task.id !== selectedTask)
            .map((task) => (
              <Option key={task.id} value={task.id}>
                {task.title}
              </Option>
            ))}
        </Select>

        <Button
          icon={<PlusOutlined />}
          type="primary"
          onClick={handleAddDependency}
          disabled={!selectedTask || !selectedDependency}
          className="bg-cyan-600 hover:bg-cyan-700"
        >
          Add
        </Button>
      </div>

      <List
        dataSource={dependencies}
        renderItem={(dependency) => {
          const task = tasks.find((t) => t.id === dependency.taskId);
          const dependsOn = tasks.find((t) => t.id === dependency.dependencyId);

          return (
            <List.Item
              key={dependency.dependencyId}
              className="flex justify-between"
            >
              <Text>
                {task?.title} depends on {dependsOn?.title}
              </Text>
              <Button
                type="text"
                icon={<DeleteOutlined />}
                onClick={() => onRemoveDependency(dependency.dependencyId)}
                className="text-red-500"
              />
            </List.Item>
          );
        }}
        className="mt-4"
      />
    </div>
  );
}
