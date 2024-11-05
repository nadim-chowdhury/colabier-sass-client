"use client";

import Image from "next/image";

interface User {
  id: number;
  name: string;
  avatar: string;
  online: boolean;
}

const users: User[] = [
  { id: 1, name: "Alice", avatar: "/avatar1.png", online: true },
  { id: 2, name: "Bob", avatar: "/avatar2.png", online: false },
  { id: 3, name: "Charlie", avatar: "/avatar3.png", online: true },
];

export default function UserList() {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <p className="text-lg font-semibold text-gray-800 mb-2">Online Users</p>
      <ul className="space-y-4">
        {users.map((user) => (
          <li key={user.id} className="flex items-center space-x-3">
            <Image
              src={user.avatar}
              alt={`${user.name}'s avatar`}
              width={360}
              height={360}
              className="w-10 h-10 rounded-full"
            />
            <div className="flex flex-col">
              <p className="font-medium">{user.name}</p>
              <p
                className={`text-xs ${
                  user.online ? "text-green-500" : "text-gray-400"
                }`}
              >
                {user.online ? "Online" : "Offline"}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
