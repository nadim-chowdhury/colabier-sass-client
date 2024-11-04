import { Radio, Typography } from "antd";

const { Text } = Typography;

interface TaskSortProps {
  onSortChange: (sortBy: string) => void;
}

export default function TaskSort({ onSortChange }: TaskSortProps) {
  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      <Text className="text-lg font-semibold">Sort Tasks</Text>
      <Radio.Group
        onChange={(e) => onSortChange(e.target.value)}
        className="mt-4"
      >
        <Radio value="dueDate">Due Date</Radio>
        <Radio value="priority">Priority</Radio>
        <Radio value="assignee">Assignee</Radio>
      </Radio.Group>
    </div>
  );
}
