"use client";

import { useState } from "react";
import { Tabs, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const { TabPane } = Tabs;

interface SheetTabsProps {
  sheets: string[];
  onAddSheet: () => void;
  onSelectSheet: (sheetName: string) => void;
  onDeleteSheet: (sheetName: string) => void;
}

export default function SheetTabs({
  sheets,
  onAddSheet,
  onSelectSheet,
  onDeleteSheet,
}: SheetTabsProps) {
  const [activeTab, setActiveTab] = useState(sheets[0] || "");

  const handleTabChange = (key: string) => {
    setActiveTab(key);
    onSelectSheet(key);
  };

  return (
    <Tabs
      activeKey={activeTab}
      onChange={handleTabChange}
      tabBarExtraContent={
        <Button icon={<PlusOutlined />} onClick={onAddSheet} />
      }
    >
      {sheets.map((sheet) => (
        <TabPane tab={sheet} key={sheet} closable>
          <Button type="link" danger onClick={() => onDeleteSheet(sheet)}>
            Delete
          </Button>
        </TabPane>
      ))}
    </Tabs>
  );
}
