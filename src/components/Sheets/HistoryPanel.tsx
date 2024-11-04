import { Button, List, Typography } from "antd";
import { useState } from "react";

const { Title } = Typography;

interface HistoryPanelProps {
  history: string[];
  onUndo: () => void;
  onRedo: () => void;
}

export default function HistoryPanel({
  history,
  onUndo,
  onRedo,
}: HistoryPanelProps) {
  const [currentStep, setCurrentStep] = useState<number>(history.length - 1);

  const handleUndo = () => {
    if (currentStep > 0) {
      onUndo();
      setCurrentStep(currentStep - 1);
    }
  };

  const handleRedo = () => {
    if (currentStep < history.length - 1) {
      onRedo();
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <Title level={5}>History</Title>
      <div className="flex space-x-2 mb-4">
        <Button onClick={handleUndo} disabled={currentStep <= 0}>
          Undo
        </Button>
        <Button
          onClick={handleRedo}
          disabled={currentStep >= history.length - 1}
        >
          Redo
        </Button>
      </div>
      <List
        dataSource={history}
        renderItem={(item, index) => (
          <List.Item className={index === currentStep ? "font-bold" : ""}>
            {item}
          </List.Item>
        )}
      />
    </div>
  );
}
