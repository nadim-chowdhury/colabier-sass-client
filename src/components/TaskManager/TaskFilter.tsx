"use client";

import { useState } from "react";
import { Form, Select, Typography } from "antd";

const { Text } = Typography;
const { Option } = Select;

interface Filters {
  labels: string[];
  priority: string;
  assignees: string[];
}

interface TaskFilterProps {
  onFilterChange: (filters: Filters) => void;
}

export default function TaskFilter({ onFilterChange }: TaskFilterProps) {
  const [filters, setFilters] = useState<Filters>({
    labels: [],
    priority: "",
    assignees: [],
  });

  const handleFilterChange = (
    field: keyof Filters,
    value: string[] | string // Specify types based on possible field values
  ) => {
    const newFilters = { ...filters, [field]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <Form layout="vertical" className="p-4 bg-gray-100 rounded-lg space-y-4">
      <Text className="text-lg font-semibold">Filter Tasks</Text>

      {/* Label Filter */}
      <Form.Item label="Labels">
        <Select
          mode="multiple"
          placeholder="Select labels"
          onChange={(value: string[]) => handleFilterChange("labels", value)}
        >
          <Option value="Urgent">Urgent</Option>
          <Option value="Bug">Bug</Option>
          <Option value="Feature">Feature</Option>
        </Select>
      </Form.Item>

      {/* Priority Filter */}
      <Form.Item label="Priority">
        <Select
          placeholder="Select priority"
          onChange={(value: string) => handleFilterChange("priority", value)}
        >
          <Option value="High">High</Option>
          <Option value="Medium">Medium</Option>
          <Option value="Low">Low</Option>
        </Select>
      </Form.Item>

      {/* Assignees Filter */}
      <Form.Item label="Assignees">
        <Select
          mode="multiple"
          placeholder="Select assignees"
          onChange={(value: string[]) => handleFilterChange("assignees", value)}
        >
          <Option value="Alice">Alice</Option>
          <Option value="Bob">Bob</Option>
          <Option value="Charlie">Charlie</Option>
        </Select>
      </Form.Item>
    </Form>
  );
}
