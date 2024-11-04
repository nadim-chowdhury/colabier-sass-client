import { useState } from "react";
import { List, Input, Button, Typography } from "antd";

const { Text } = Typography;

interface Message {
  sender: string;
  content: string;
}

export default function ChatPanel() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { sender: "You", content: input }]);
      setInput("");
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md h-full flex flex-col">
      <Text className="text-lg font-semibold">Chat</Text>
      <div className="flex-1 overflow-y-auto mt-4">
        <List
          dataSource={messages}
          renderItem={(msg, index) => (
            <List.Item key={index}>
              <Text strong>{msg.sender}:</Text> <Text>{msg.content}</Text>
            </List.Item>
          )}
        />
      </div>
      <div className="flex items-center mt-4 space-x-2">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message"
          onPressEnter={handleSendMessage}
        />
        <Button type="primary" onClick={handleSendMessage}>
          Send
        </Button>
      </div>
    </div>
  );
}
