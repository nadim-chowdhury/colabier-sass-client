import { useState } from "react";
import { Select, Input, Button, Typography } from "antd";

const { Title, Text } = Typography;
const { Option } = Select;

interface DataValidationProps {
  onApplyValidation: (rule: string, criteria: any) => void;
}

export default function DataValidation({
  onApplyValidation,
}: DataValidationProps) {
  const [rule, setRule] = useState<string>("number");
  const [criteria, setCriteria] = useState<any>("");

  const applyValidation = () => {
    onApplyValidation(rule, criteria);
    setCriteria("");
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <Title level={5}>Data Validation</Title>
      <Text>Select Rule:</Text>
      <Select
        value={rule}
        onChange={(value) => setRule(value)}
        className="w-full mb-2"
      >
        <Option value="number">Number</Option>
        <Option value="text">Text Length</Option>
        <Option value="list">List of Values</Option>
      </Select>
      <Input
        placeholder="Enter criteria (e.g., min=1 max=10)"
        value={criteria}
        onChange={(e) => setCriteria(e.target.value)}
        className="mb-2"
      />
      <Button type="primary" onClick={applyValidation}>
        Apply Validation
      </Button>
    </div>
  );
}
