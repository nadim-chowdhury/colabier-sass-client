"use client";

import { useState } from "react";
import { Input, Button, Typography } from "antd";

const { Title } = Typography;

interface FindReplaceProps {
  onFind: (query: string) => void;
  onReplace: (query: string, replacement: string) => void;
}

export default function FindReplace({ onFind, onReplace }: FindReplaceProps) {
  const [findText, setFindText] = useState<string>("");
  const [replaceText, setReplaceText] = useState<string>("");

  const handleFind = () => onFind(findText);
  const handleReplace = () => onReplace(findText, replaceText);

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <Title level={5}>Find & Replace</Title>
      <Input
        placeholder="Find..."
        value={findText}
        onChange={(e) => setFindText(e.target.value)}
        className="mb-2"
      />
      <Input
        placeholder="Replace with..."
        value={replaceText}
        onChange={(e) => setReplaceText(e.target.value)}
        className="mb-2"
      />
      <Button onClick={handleFind} className="mr-2">
        Find
      </Button>
      <Button onClick={handleReplace} type="primary">
        Replace
      </Button>
    </div>
  );
}
