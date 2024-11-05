"use client";

import { FaTrash, FaCopy, FaArrowUp, FaArrowDown } from "react-icons/fa";

interface ElementToolbarProps {
  onDelete: () => void;
  onDuplicate: () => void;
  onMoveUp: () => void;
  onMoveDown: () => void;
}

export default function ElementToolbar({
  onDelete,
  onDuplicate,
  onMoveUp,
  onMoveDown,
}: ElementToolbarProps) {
  return (
    <div className="flex space-x-2 bg-gray-200 p-2 rounded-md shadow-md absolute top-0 left-0">
      <button
        onClick={onDelete}
        title="Delete"
        className="p-2 hover:bg-gray-300 rounded"
      >
        <FaTrash />
      </button>
      <button
        onClick={onDuplicate}
        title="Duplicate"
        className="p-2 hover:bg-gray-300 rounded"
      >
        <FaCopy />
      </button>
      <button
        onClick={onMoveUp}
        title="Move Up"
        className="p-2 hover:bg-gray-300 rounded"
      >
        <FaArrowUp />
      </button>
      <button
        onClick={onMoveDown}
        title="Move Down"
        className="p-2 hover:bg-gray-300 rounded"
      >
        <FaArrowDown />
      </button>
    </div>
  );
}
