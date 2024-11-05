"use client";

import { List, Button, Typography } from "antd";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";

const { Text } = Typography;

interface Layer {
  id: string;
  name: string;
}

interface LayerPanelProps {
  layers: Layer[];
  onMoveUp: (id: string) => void;
  onMoveDown: (id: string) => void;
}

export default function LayerPanel({
  layers,
  onMoveUp,
  onMoveDown,
}: LayerPanelProps) {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md w-48">
      <Text className="text-lg font-semibold">Layers</Text>
      <List
        dataSource={layers}
        renderItem={(layer) => (
          <List.Item className="flex justify-between items-center">
            <Text>{layer.name}</Text>
            <div className="flex space-x-1">
              <Button
                icon={<ArrowUpOutlined />}
                onClick={() => onMoveUp(layer.id)}
              />
              <Button
                icon={<ArrowDownOutlined />}
                onClick={() => onMoveDown(layer.id)}
              />
            </div>
          </List.Item>
        )}
      />
    </div>
  );
}
