"use client";

import { useState } from "react";
import { Input, Button, Typography } from "antd";

const { Title } = Typography;

interface LinkEmbedProps {
  onEmbed: (url: string) => void;
}

export default function LinkEmbed({ onEmbed }: LinkEmbedProps) {
  const [url, setUrl] = useState<string>("");

  const handleEmbed = () => {
    if (url.trim()) {
      onEmbed(url);
      setUrl("");
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <Title level={4}>Embed Link</Title>
      <Input
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter URL"
      />
      <Button onClick={handleEmbed} className="mt-2">
        Embed Link
      </Button>
      {url && (
        <div className="mt-4">
          <Typography.Text>Preview:</Typography.Text>
          <iframe
            src={url}
            className="w-full h-64 mt-2 border rounded"
          ></iframe>
        </div>
      )}
    </div>
  );
}
