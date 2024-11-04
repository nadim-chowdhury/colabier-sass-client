"use client";

import { useState } from "react";
import { Input, Button } from "antd";
import {
  SendOutlined,
  SmileOutlined,
  PaperClipOutlined,
} from "@ant-design/icons";

export default function MessageInput({
  onSendMessage,
}: {
  onSendMessage: (message: string) => void;
}) {
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    if (message.trim()) {
      onSendMessage(message);
      setMessage("");
    }
  };

  return (
    <div className="flex items-center p-4 border-t border-gray-200">
      <Button
        type="text"
        icon={<SmileOutlined />}
        className="mr-2 text-gray-600 hover:text-cyan-600"
      />
      <Button
        type="text"
        icon={<PaperClipOutlined />}
        className="mr-2 text-gray-600 hover:text-cyan-600"
      />
      <Input
        placeholder="Type a message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onPressEnter={handleSendMessage}
        className="flex-grow"
      />
      <Button
        type="primary"
        icon={<SendOutlined />}
        onClick={handleSendMessage}
        className="ml-2 bg-cyan-600 hover:bg-cyan-700"
      >
        Send
      </Button>
    </div>
  );
}
