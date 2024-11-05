"use client";

import { useState } from "react";
import { Typography, Input } from "antd";

const { Title } = Typography;

interface DocumentTitleProps {
  initialTitle: string;
  onTitleChange: (title: string) => void;
}

export default function DocumentTitle({
  initialTitle,
  onTitleChange,
}: DocumentTitleProps) {
  const [title, setTitle] = useState(initialTitle);
  const [isEditing, setIsEditing] = useState(false);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleBlur = () => {
    setIsEditing(false);
    onTitleChange(title);
  };

  return (
    <div className="mb-4">
      {isEditing ? (
        <Input
          value={title}
          onChange={handleTitleChange}
          onBlur={handleBlur}
          autoFocus
        />
      ) : (
        <Title
          level={3}
          onClick={() => setIsEditing(true)}
          className="cursor-pointer"
        >
          {title || "Untitled Document"}
        </Title>
      )}
    </div>
  );
}
