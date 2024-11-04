import { Button, Tooltip } from "antd";
import {
  DeleteOutlined,
  CopyOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined,
} from "@ant-design/icons";

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
      <Tooltip title="Delete">
        <Button icon={<DeleteOutlined />} onClick={onDelete} />
      </Tooltip>
      <Tooltip title="Duplicate">
        <Button icon={<CopyOutlined />} onClick={onDuplicate} />
      </Tooltip>
      <Tooltip title="Move Up">
        <Button icon={<ArrowUpOutlined />} onClick={onMoveUp} />
      </Tooltip>
      <Tooltip title="Move Down">
        <Button icon={<ArrowDownOutlined />} onClick={onMoveDown} />
      </Tooltip>
    </div>
  );
}
