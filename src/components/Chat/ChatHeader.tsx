"use client";

import Image from "next/image";
import { FaPhone, FaVideo, FaEllipsisH } from "react-icons/fa"; // Import icons from react-icons

interface ChatHeaderProps {
  channelName: string;
  memberCount: number;
  avatarUrl?: string;
}

export default function ChatHeader({
  channelName,
  memberCount,
  avatarUrl,
}: ChatHeaderProps) {
  return (
    <div className="flex items-center justify-between p-4 bg-white shadow-md rounded-t-lg">
      {/* Channel Info */}
      <div className="flex items-center space-x-3">
        <Image
          src={avatarUrl || "/default-avatar.png"}
          alt="Avatar"
          width={360}
          height={360}
          className="w-10 h-10 rounded-full"
        />
        <div>
          <p className="font-semibold text-gray-800">{channelName}</p>
          <p className="text-xs text-gray-500">{memberCount} members</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-2">
        <button
          title="Voice Call"
          className="p-2 rounded-full text-gray-700 hover:text-cyan-600"
        >
          <FaPhone size={18} />
        </button>
        <button
          title="Video Call"
          className="p-2 rounded-full text-gray-700 hover:text-cyan-600"
        >
          <FaVideo size={18} />
        </button>
        <button
          title="More Options"
          className="p-2 rounded-full text-gray-700 hover:text-cyan-600"
        >
          <FaEllipsisH size={18} />
        </button>
      </div>
    </div>
  );
}
