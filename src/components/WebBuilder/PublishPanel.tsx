import { Button, Input, Typography, message } from "antd";
import { useState } from "react";

const { Title } = Typography;

interface PublishPanelProps {
  onPublish: (url: string) => void;
}

export default function PublishPanel({ onPublish }: PublishPanelProps) {
  const [url, setUrl] = useState<string>("");

  const handlePublish = () => {
    if (url.trim()) {
      onPublish(url);
      message.success("Website published successfully!");
    } else {
      message.error("Please enter a valid URL.");
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <Title level={5}>Publish Website</Title>
      <Input
        placeholder="Enter custom URL (e.g., mywebsite.com)"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="mb-2"
      />
      <Button type="primary" onClick={handlePublish}>
        Publish
      </Button>
    </div>
  );
}
