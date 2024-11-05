"use client";

import { useState } from "react";
import { Input, Button, Typography } from "antd";

const { Title } = Typography;

interface SearchReplaceProps {
  content: string;
  onContentChange: (newContent: string) => void;
}

export default function SearchReplace({
  content,
  onContentChange,
}: SearchReplaceProps) {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [replaceTerm, setReplaceTerm] = useState<string>("");

  const handleReplace = () => {
    const updatedContent = content.replace(
      new RegExp(searchTerm, "g"),
      replaceTerm
    );
    onContentChange(updatedContent);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <Title level={4}>Search & Replace</Title>
      <Input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for..."
        className="mb-2"
      />
      <Input
        value={replaceTerm}
        onChange={(e) => setReplaceTerm(e.target.value)}
        placeholder="Replace with..."
        className="mb-2"
      />
      <Button type="primary" onClick={handleReplace}>
        Replace All
      </Button>
    </div>
  );
}
