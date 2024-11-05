"use client";

import { Button, Typography } from "antd";

const { Text } = Typography;

interface HistoryPanelProps {
  onUndo: () => void;
  onRedo: () => void;
  canUndo: boolean;
  canRedo: boolean;
}

export default function HistoryPanel({
  onUndo,
  onRedo,
  canUndo,
  canRedo,
}: HistoryPanelProps) {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <Text className="text-lg font-semibold">History</Text>

      <div className="mt-4 flex space-x-2">
        <Button onClick={onUndo} disabled={!canUndo}>
          Undo
        </Button>
        <Button onClick={onRedo} disabled={!canRedo}>
          Redo
        </Button>
      </div>
    </div>
  );
}
