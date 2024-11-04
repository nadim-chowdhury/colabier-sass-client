"use client";

import { useState } from "react";
import { List, Avatar, Input, Button, Typography } from "antd";
import { SendOutlined } from "@ant-design/icons";

const { Text } = Typography;

const messages = [
  { id: 1, user: "Alice", text: "Hello there!", avatar: "/avatar1.png" },
  { id: 2, user: "Bob", text: "Hi! How are you?", avatar: "/avatar2.png" },
  {
    id: 3,
    user: "Alice",
    text: "I'm good, thanks for asking!",
    avatar: "/avatar1.png",
  },
];

export default function ChatWindow() {
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    if (message.trim()) {
      console.log("Message sent:", message);
      setMessage("");
    }
  };

  return (
    <div className="flex flex-col h-full bg-white rounded-lg shadow-md">
      {/* Messages List */}
      <div className="flex-grow overflow-y-auto p-4">
        <List
          dataSource={messages}
          renderItem={(msg) => (
            <List.Item key={msg.id} className="flex items-start space-x-3">
              <Avatar src={msg.avatar} />
              <div>
                <Text strong>{msg.user}</Text>
                <p className="text-gray-700">{msg.text}</p>
              </div>
            </List.Item>
          )}
        />
      </div>

      {/* Message Input */}
      <div className="p-4 border-t border-gray-200">
        <Input.Group compact>
          <Input
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full"
          />
          <Button
            type="primary"
            icon={<SendOutlined />}
            onClick={handleSendMessage}
            className="ml-2"
          >
            Send
          </Button>
        </Input.Group>
      </div>
    </div>
  );
}
