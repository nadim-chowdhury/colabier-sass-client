"use client";

import Image from "next/image";
import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

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
        <ul>
          {messages.map((msg) => (
            <li key={msg.id} className="flex items-start space-x-3 mb-4">
              <Image
                src={msg.avatar}
                alt={`${msg.user}'s avatar`}
                width={360}
                height={360}
                className="w-8 h-8 rounded-full"
              />
              <div>
                <p className="font-semibold">{msg.user}</p>
                <p className="text-gray-700">{msg.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Message Input */}
      <div className="p-4 border-t border-gray-200 flex items-center space-x-2">
        <input
          type="text"
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full p-2 border rounded-lg"
        />
        <button
          onClick={handleSendMessage}
          className="p-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 flex items-center justify-center"
        >
          <FaPaperPlane />
        </button>
      </div>
    </div>
  );
}
