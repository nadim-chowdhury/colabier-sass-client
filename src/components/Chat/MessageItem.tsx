"use client";

import { Avatar, Typography } from "antd";

const { Text } = Typography;

interface MessageItemProps {
  user: string;
  avatar: string;
  text: string;
  timestamp: string;
  isOwnMessage?: boolean;
}

export default function MessageItem({
  user,
  avatar,
  text,
  timestamp,
  isOwnMessage = false,
}: MessageItemProps) {
  return (
    <div
      className={`flex items-start ${isOwnMessage ? "justify-end" : ""} mb-4`}
    >
      {!isOwnMessage && <Avatar src={avatar} className="mr-3" />}
      <div
        className={`flex flex-col ${
          isOwnMessage ? "items-end" : "items-start"
        }`}
      >
        <Text className="font-semibold text-gray-800">{user}</Text>
        <div
          className={`bg-gray-100 p-2 rounded-lg ${
            isOwnMessage ? "bg-cyan-100" : "bg-gray-100"
          }`}
        >
          <Text>{text}</Text>
        </div>
        <Text className="text-xs text-gray-500 mt-1">{timestamp}</Text>
      </div>
      {isOwnMessage && <Avatar src={avatar} className="ml-3" />}
    </div>
  );
}
