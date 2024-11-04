import { useState } from "react";
import { Select, Input, Button, Typography } from "antd";

const { Title, Text } = Typography;
const { Option } = Select;

interface ConditionalFormattingProps {
  onApplyCondition: (condition: string, format: any) => void;
}

export default function ConditionalFormatting({
  onApplyCondition,
}: ConditionalFormattingProps) {
  const [condition, setCondition] = useState<string>("greaterThan");
  const [value, setValue] = useState<string>("");
  const [format, setFormat] = useState<string>("#ffcccc");

  const applyCondition = () => {
    onApplyCondition(condition, { value, format });
    setValue("");
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <Title level={5}>Conditional Formatting</Title>
      <Text>Condition:</Text>
      <Select
        value={condition}
        onChange={(value) => setCondition(value)}
        className="w-full mb-2"
      >
        <Option value="greaterThan">Greater Than</Option>
        <Option value="lessThan">Less Than</Option>
        <Option value="equal">Equal To</Option>
      </Select>
      <Input
        placeholder="Enter comparison value"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="mb-2"
      />
      <Text>Color:</Text>
      <Input
        type="color"
        value={format}
        onChange={(e) => setFormat(e.target.value)}
        className="mb-2"
      />
      <Button type="primary" onClick={applyCondition}>
        Apply Conditional Formatting
      </Button>
    </div>
  );
}
