"use client";

import { Avatar, Typography, List, Divider } from "antd";
import { UsergroupAddOutlined, MessageOutlined } from "@ant-design/icons";

const { Text } = Typography;

const channels = [
  { id: 1, name: "General", icon: <MessageOutlined /> },
  { id: 2, name: "Development", icon: <MessageOutlined /> },
  { id: 3, name: "Design", icon: <MessageOutlined /> },
];

const directMessages = [
  { id: 1, name: "Alice", avatar: "/avatar1.png" },
  { id: 2, name: "Bob", avatar: "/avatar2.png" },
  { id: 3, name: "Charlie", avatar: "/avatar3.png" },
];

export default function ChatSidebar() {
  return (
    <div className="w-64 h-full bg-gray-100 p-4 shadow-md">
      {/* Channels Section */}
      <div className="mb-6">
        <Text className="text-lg font-semibold text-gray-800">Channels</Text>
        <List
          itemLayout="horizontal"
          dataSource={channels}
          renderItem={(channel) => (
            <List.Item key={channel.id} className="flex items-center space-x-3">
              {channel.icon}
              <Text>{channel.name}</Text>
            </List.Item>
          )}
        />
      </div>

      <Divider />

      {/* Direct Messages Section */}
      <div>
        <Text className="text-lg font-semibold text-gray-800">
          Direct Messages
        </Text>
        <List
          itemLayout="horizontal"
          dataSource={directMessages}
          renderItem={(user) => (
            <List.Item key={user.id} className="flex items-center space-x-3">
              <Avatar src={user.avatar} />
              <Text>{user.name}</Text>
            </List.Item>
          )}
        />
      </div>
    </div>
  );
}
