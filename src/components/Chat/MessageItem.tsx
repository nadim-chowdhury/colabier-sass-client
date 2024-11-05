"use client";

import Image from "next/image";

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
      {!isOwnMessage && (
        <Image
          src={avatar}
          alt={`${user}'s avatar`}
          width={360}
          height={360}
          className="w-8 h-8 rounded-full mr-3"
        />
      )}
      <div
        className={`flex flex-col ${
          isOwnMessage ? "items-end" : "items-start"
        }`}
      >
        <p className="font-semibold text-gray-800">{user}</p>
        <div
          className={`p-2 rounded-lg ${
            isOwnMessage ? "bg-cyan-100" : "bg-gray-100"
          }`}
        >
          <p>{text}</p>
        </div>
        <p className="text-xs text-gray-500 mt-1">{timestamp}</p>
      </div>
      {isOwnMessage && (
        <Image
          src={avatar}
          alt={`${user}'s avatar`}
          width={360}
          height={360}
          className="w-8 h-8 rounded-full ml-3"
        />
      )}
    </div>
  );
}
