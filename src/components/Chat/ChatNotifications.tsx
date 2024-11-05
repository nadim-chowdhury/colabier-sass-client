"use client";

import { useState, useEffect } from "react";
import { FaBell } from "react-icons/fa";

interface ChatNotificationsProps {
  unreadCount: number;
  onClearNotifications: () => void;
}

export default function ChatNotifications({
  unreadCount,
  onClearNotifications,
}: ChatNotificationsProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(unreadCount > 0);
  }, [unreadCount]);

  return (
    <div className="flex items-center relative">
      {/* Notification Icon with Badge */}
      <button
        className="relative text-gray-700 hover:text-cyan-600 p-2"
        onClick={() => onClearNotifications()}
        title="Notifications"
      >
        <FaBell size={20} />
        {unreadCount > 0 && (
          <span className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
            {unreadCount}
          </span>
        )}
      </button>

      {/* View Latest Button */}
      {visible && (
        <button
          className="text-cyan-600 ml-2 hover:underline"
          onClick={() => onClearNotifications()}
        >
          View Latest
        </button>
      )}
    </div>
  );
}
