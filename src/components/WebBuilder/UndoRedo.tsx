"use client";

import { Button, Tooltip } from "antd";
import { UndoOutlined, RedoOutlined } from "@ant-design/icons";

interface UndoRedoProps {
  onUndo: () => void;
  onRedo: () => void;
}

export default function UndoRedo({ onUndo, onRedo }: UndoRedoProps) {
  return (
    <div className="flex space-x-2">
      <Tooltip title="Undo">
        <Button icon={<UndoOutlined />} onClick={onUndo} />
      </Tooltip>
      <Tooltip title="Redo">
        <Button icon={<RedoOutlined />} onClick={onRedo} />
      </Tooltip>
    </div>
  );
}
