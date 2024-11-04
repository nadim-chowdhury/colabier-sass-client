import { Button, Tooltip } from "antd";
import { DeleteOutlined, CopyOutlined, EditOutlined } from "@ant-design/icons";

interface ElementToolbarProps {
  onEdit: () => void;
  onDuplicate: () => void;
  onDelete: () => void;
}

export default function ElementToolbar({
  onEdit,
  onDuplicate,
  onDelete,
}: ElementToolbarProps) {
  return (
    <div className="flex space-x-2 p-2 bg-white border border-gray-300 rounded-lg shadow-md">
      <Tooltip title="Edit">
        <Button icon={<EditOutlined />} onClick={onEdit} />
      </Tooltip>
      <Tooltip title="Duplicate">
        <Button icon={<CopyOutlined />} onClick={onDuplicate} />
      </Tooltip>
      <Tooltip title="Delete">
        <Button icon={<DeleteOutlined />} onClick={onDelete} />
      </Tooltip>
    </div>
  );
}
