"use client";

import { useState } from "react";
import { Select, Input, Button, Typography } from "antd";

const { Title, Text } = Typography;
const { Option } = Select;

interface DataValidationProps {
  onApplyValidation: (rule: string, criteria: Criteria) => void;
}

type Criteria =
  | { min?: number; max?: number } // For "number"
  | { minLength?: number; maxLength?: number } // For "text"
  | string[]; // For "list"

export default function DataValidation({
  onApplyValidation,
}: DataValidationProps) {
  const [rule, setRule] = useState<string>("number");
  const [criteria, setCriteria] = useState<Criteria>({ min: 1, max: 10 });

  const applyValidation = () => {
    onApplyValidation(rule, criteria);
    setCriteria(rule === "list" ? [] : {}); // Reset criteria based on rule
  };

  const handleCriteriaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (rule === "number") {
      const [min, max] = value
        .split(" ")
        .map((v) => parseInt(v.split("=")[1], 10));
      setCriteria({ min, max });
    } else if (rule === "text") {
      const [minLength, maxLength] = value
        .split(" ")
        .map((v) => parseInt(v.split("=")[1], 10));
      setCriteria({ minLength, maxLength });
    } else if (rule === "list") {
      setCriteria(value.split(",").map((item) => item.trim()));
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <Title level={5}>Data Validation</Title>
      <Text>Select Rule:</Text>
      <Select
        value={rule}
        onChange={(value) => {
          setRule(value);
          setCriteria(value === "list" ? [] : {}); // Reset criteria for new rule
        }}
        className="w-full mb-2"
      >
        <Option value="number">Number</Option>
        <Option value="text">Text Length</Option>
        <Option value="list">List of Values</Option>
      </Select>
      <Input
        placeholder={
          rule === "number"
            ? "Enter min=1 max=10"
            : rule === "text"
            ? "Enter minLength=1 maxLength=10"
            : "Enter comma-separated values"
        }
        value={
          rule === "list"
            ? (criteria as string[]).join(", ")
            : rule === "number"
            ? `min=${(criteria as { min?: number }).min || ""} max=${
                (criteria as { max?: number }).max || ""
              }`
            : `minLength=${
                (criteria as { minLength?: number }).minLength || ""
              } maxLength=${
                (criteria as { maxLength?: number }).maxLength || ""
              }`
        }
        onChange={handleCriteriaChange}
        className="mb-2"
      />
      <Button type="primary" onClick={applyValidation}>
        Apply Validation
      </Button>
    </div>
  );
}
