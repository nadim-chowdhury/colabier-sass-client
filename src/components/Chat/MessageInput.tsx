"use client";

import { useState } from "react";
import { FaPaperPlane, FaSmile, FaPaperclip } from "react-icons/fa";

export default function MessageInput({
  onSendMessage,
}: {
  onSendMessage: (message: string) => void;
}) {
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    if (message.trim()) {
      onSendMessage(message);
      setMessage("");
    }
  };

  return (
    <div className="flex items-center p-4 border-t border-gray-200">
      <button
        onClick={() => console.log("Emoji picker opened")}
        className="mr-2 text-gray-600 hover:text-cyan-600 p-2 focus:outline-none"
        title="Emoji"
      >
        <FaSmile size={20} />
      </button>
      <button
        onClick={() => console.log("Attachment opened")}
        className="mr-2 text-gray-600 hover:text-cyan-600 p-2 focus:outline-none"
        title="Attach file"
      >
        <FaPaperclip size={20} />
      </button>
      <input
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
        className="flex-grow p-2 border rounded-lg outline-none"
      />
      <button
        onClick={handleSendMessage}
        className="ml-2 bg-cyan-600 text-white p-2 rounded-lg hover:bg-cyan-700 focus:outline-none flex items-center justify-center"
        title="Send message"
      >
        <FaPaperPlane size={20} />
      </button>
    </div>
  );
}
