import { Input } from "antd";

interface FormulaBarProps {
  formula: string;
  setFormula: (formula: string) => void;
}

export default function FormulaBar({ formula, setFormula }: FormulaBarProps) {
  return (
    <div className="mb-2 p-2 bg-gray-100 border border-gray-300 rounded-md">
      <Input
        value={formula}
        onChange={(e) => setFormula(e.target.value)}
        placeholder="Enter formula"
      />
    </div>
  );
}
