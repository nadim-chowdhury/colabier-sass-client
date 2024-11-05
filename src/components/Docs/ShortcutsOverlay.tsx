"use client";

import { useState } from "react";
import { Modal, List, Typography, Button } from "antd";

const { Text } = Typography;

export default function ShortcutsOverlay() {
  const [isVisible, setIsVisible] = useState(false);

  const shortcuts = [
    { command: "Bold", keys: "Ctrl + B", markdown: "**text**" },
    { command: "Italic", keys: "Ctrl + I", markdown: "_text_" },
    { command: "Header", keys: "Ctrl + H", markdown: "# Header" },
    {
      command: "Bullet List",
      keys: "Ctrl + Shift + L",
      markdown: "- List item",
    },
  ];

  return (
    <div>
      <Button onClick={() => setIsVisible(true)}>Show Shortcuts</Button>
      <Modal
        title="Keyboard Shortcuts & Markdown Guide"
        visible={isVisible}
        onCancel={() => setIsVisible(false)}
        footer={null}
      >
        <List
          dataSource={shortcuts}
          renderItem={(shortcut) => (
            <List.Item>
              <Text strong>{shortcut.command}</Text>
              <Text className="ml-2">({shortcut.keys})</Text>
              <Text className="ml-4">Markdown: {shortcut.markdown}</Text>
            </List.Item>
          )}
        />
      </Modal>
    </div>
  );
}
