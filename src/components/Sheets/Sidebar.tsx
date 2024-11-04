import { useState } from "react";
import { Button, List, Typography } from "antd";

const { Title } = Typography;

interface SidebarProps {
  sheets: string[];
  onSelectSheet: (sheetName: string) => void;
  onAddSheet: () => void;
  onDeleteSheet: (sheetName: string) => void;
}

export default function Sidebar({
  sheets,
  onSelectSheet,
  onAddSheet,
  onDeleteSheet,
}: SidebarProps) {
  const [selectedSheet, setSelectedSheet] = useState<string>(sheets[0] || "");

  const handleSheetClick = (sheetName: string) => {
    setSelectedSheet(sheetName);
    onSelectSheet(sheetName);
  };

  return (
    <div className="p-4 bg-gray-100 h-full border-r border-gray-300">
      <Title level={4}>Sheets</Title>
      <List
        dataSource={sheets}
        renderItem={(sheetName) => (
          <List.Item
            onClick={() => handleSheetClick(sheetName)}
            className={`cursor-pointer ${
              selectedSheet === sheetName ? "font-bold" : ""
            }`}
            actions={[
              <Button onClick={() => onDeleteSheet(sheetName)}>Delete</Button>,
            ]}
          >
            {sheetName}
          </List.Item>
        )}
      />
      <Button type="primary" onClick={onAddSheet} className="mt-4">
        Add Sheet
      </Button>
    </div>
  );
}
