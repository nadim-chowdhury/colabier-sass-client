"use client";

import { useState } from "react";
import { Button, List, Typography } from "antd";

const { Title } = Typography;

interface Sheet {
  id: number;
  name: string;
}

interface SidebarProps {
  sheets: Sheet[];
  onSelectSheet: (sheetId: number) => void;
  onAddSheet: () => void;
  onDeleteSheet: (sheetId: number) => void;
}

export default function Sidebar({
  sheets,
  onSelectSheet,
  onAddSheet,
  onDeleteSheet,
}: SidebarProps) {
  const [selectedSheet, setSelectedSheet] = useState<number>(
    sheets[0]?.id || 0
  );

  const handleSheetClick = (sheetId: number) => {
    setSelectedSheet(sheetId);
    onSelectSheet(sheetId);
  };

  return (
    <div className="p-4 bg-gray-100 h-full border-r border-gray-300">
      <Title level={4}>Sheets</Title>
      <List
        dataSource={sheets}
        renderItem={(sheet) => (
          <List.Item
            onClick={() => handleSheetClick(sheet.id)}
            className={`cursor-pointer ${
              selectedSheet === sheet.id ? "font-bold" : ""
            }`}
            actions={[
              <Button
                key={sheet.id}
                onClick={(e) => {
                  e.stopPropagation();
                  onDeleteSheet(sheet.id);
                }}
              >
                Delete
              </Button>,
            ]}
          >
            {sheet.name}
          </List.Item>
        )}
      />
      <Button type="primary" onClick={onAddSheet} className="mt-4">
        Add Sheet
      </Button>
    </div>
  );
}
