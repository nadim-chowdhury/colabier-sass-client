import { useState } from "react";
import { List, Input, Button, Tag, Typography } from "antd";
import { PlusOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";

const { Text } = Typography;

interface Label {
  id: string;
  name: string;
  color: string;
}

interface LabelManagerProps {
  labels: Label[];
  onAddLabel: (label: Label) => void;
  onEditLabel: (id: string, newLabel: Label) => void;
  onDeleteLabel: (id: string) => void;
}

export default function LabelManager({
  labels,
  onAddLabel,
  onEditLabel,
  onDeleteLabel,
}: LabelManagerProps) {
  const [newLabelName, setNewLabelName] = useState("");
  const [editingLabel, setEditingLabel] = useState<Label | null>(null);

  const handleAddLabel = () => {
    if (newLabelName.trim()) {
      const newLabel = {
        id: Date.now().toString(),
        name: newLabelName,
        color: "blue", // Default color
      };
      onAddLabel(newLabel);
      setNewLabelName("");
    }
  };

  const handleEditLabel = (label: Label) => {
    setEditingLabel(label);
    setNewLabelName(label.name);
  };

  const handleSaveEdit = () => {
    if (editingLabel) {
      onEditLabel(editingLabel.id, { ...editingLabel, name: newLabelName });
      setEditingLabel(null);
      setNewLabelName("");
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <Text className="text-lg font-semibold">Manage Labels</Text>
      <div className="flex items-center mt-4">
        <Input
          placeholder="Add new label"
          value={newLabelName}
          onChange={(e) => setNewLabelName(e.target.value)}
          className="mr-2"
        />
        {editingLabel ? (
          <Button type="primary" onClick={handleSaveEdit}>
            Save
          </Button>
        ) : (
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={handleAddLabel}
          >
            Add
          </Button>
        )}
      </div>

      <List
        dataSource={labels}
        renderItem={(label) => (
          <List.Item>
            <Tag color={label.color}>{label.name}</Tag>
            <Button
              type="text"
              icon={<EditOutlined />}
              onClick={() => handleEditLabel(label)}
            />
            <Button
              type="text"
              icon={<DeleteOutlined />}
              onClick={() => onDeleteLabel(label.id)}
            />
          </List.Item>
        )}
        className="mt-4"
      />
    </div>
  );
}
