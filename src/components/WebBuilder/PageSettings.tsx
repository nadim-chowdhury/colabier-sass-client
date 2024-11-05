"use client";

import { useState } from "react";
import { Input, Typography } from "antd";

const { Title } = Typography;

interface PageSettingsProps {
  onUpdateSettings: (settings: {
    title: string;
    description: string;
    keywords: string;
  }) => void;
}

export default function PageSettings({ onUpdateSettings }: PageSettingsProps) {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [keywords, setKeywords] = useState<string>("");

  const handleUpdate = () => {
    onUpdateSettings({ title, description, keywords });
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <Title level={5}>Page Settings</Title>
      <Input
        placeholder="Page Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onBlur={handleUpdate}
        className="mb-2"
      />
      <Input.TextArea
        placeholder="Page Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        onBlur={handleUpdate}
        className="mb-2"
      />
      <Input
        placeholder="SEO Keywords (comma-separated)"
        value={keywords}
        onChange={(e) => setKeywords(e.target.value)}
        onBlur={handleUpdate}
        className="mb-2"
      />
    </div>
  );
}
