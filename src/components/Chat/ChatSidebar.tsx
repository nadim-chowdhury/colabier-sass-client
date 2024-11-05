"use client";

import { FaComments } from "react-icons/fa";
import Image from "next/image";

export default function ChatSidebar() {
  const channels = [
    { id: 1, name: "General", icon: <FaComments /> },
    { id: 2, name: "Development", icon: <FaComments /> },
    { id: 3, name: "Design", icon: <FaComments /> },
  ];

  const directMessages = [
    { id: 1, name: "Alice", avatar: "/avatar1.png" },
    { id: 2, name: "Bob", avatar: "/avatar2.png" },
    { id: 3, name: "Charlie", avatar: "/avatar3.png" },
  ];

  return (
    <div className="w-64 h-full bg-gray-100 p-4 shadow-md">
      {/* Channels Section */}
      <div className="mb-6">
        <p className="text-lg font-semibold text-gray-800">Channels</p>
        <ul>
          {channels.map((channel) => (
            <li key={channel.id} className="flex items-center space-x-3 py-2">
              <FaComments />
              <span>{channel.name}</span>
            </li>
          ))}
        </ul>
      </div>

      <hr className="my-4" />

      {/* Direct Messages Section */}
      <div>
        <p className="text-lg font-semibold text-gray-800">Direct Messages</p>
        <ul>
          {directMessages.map((user) => (
            <li key={user.id} className="flex items-center space-x-3 py-2">
              <Image
                src={user.avatar}
                alt={`${user.name}'s avatar`}
                width={360}
                height={360}
                className="w-8 h-8 rounded-full"
              />
              <span>{user.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
