"use client";

import { useState } from "react";
import { Button, Input, List, Typography } from "antd";

const { TextArea } = Input;
const { Title } = Typography;

interface Block {
  id: string;
  type: "text" | "header" | "list";
  content: string;
}

export default function BlockEditor() {
  const [blocks, setBlocks] = useState<Block[]>([]);
  const [currentBlock, setCurrentBlock] = useState<string>("");

  const addBlock = (type: Block["type"]) => {
    setBlocks([
      ...blocks,
      {
        id: Math.random().toString(36).substr(2, 9),
        type,
        content: currentBlock,
      },
    ]);
    setCurrentBlock("");
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <Title level={4}>Block Editor</Title>
      <TextArea
        value={currentBlock}
        onChange={(e) => setCurrentBlock(e.target.value)}
        placeholder="Type something..."
        autoSize={{ minRows: 2 }}
      />
      <div className="flex space-x-2 mt-2">
        <Button onClick={() => addBlock("text")}>Add Text</Button>
        <Button onClick={() => addBlock("header")}>Add Header</Button>
        <Button onClick={() => addBlock("list")}>Add List Item</Button>
      </div>
      <List
        className="mt-4"
        dataSource={blocks}
        renderItem={(block) => (
          <List.Item>
            {block.type === "header" && (
              <Typography.Title level={5}>{block.content}</Typography.Title>
            )}
            {block.type === "text" && (
              <Typography.Text>{block.content}</Typography.Text>
            )}
            {block.type === "list" && (
              <Typography.Text>- {block.content}</Typography.Text>
            )}
          </List.Item>
        )}
      />
    </div>
  );
}
