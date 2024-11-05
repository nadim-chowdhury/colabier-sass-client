"use client";

import { Avatar, Select, Typography } from "antd";

const { Option } = Select;
const { Text } = Typography;

interface User {
  id: string;
  name: string;
  avatar: string;
}

interface TaskAssigneesProps {
  users: User[];
  selectedAssignees: string[];
  onChange: (assignees: string[]) => void;
}

export default function TaskAssignees({
  users,
  selectedAssignees,
  onChange,
}: TaskAssigneesProps) {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <Text className="text-lg font-semibold">Assignees</Text>
      <Select
        mode="multiple"
        placeholder="Select assignees"
        value={selectedAssignees}
        onChange={onChange}
        style={{ width: "100%" }}
        className="mt-2"
      >
        {users.map((user) => (
          <Option key={user.id} value={user.id}>
            <div className="flex items-center space-x-2">
              <Avatar src={user.avatar} size="small" />
              <span>{user.name}</span>
            </div>
          </Option>
        ))}
      </Select>
    </div>
  );
}
