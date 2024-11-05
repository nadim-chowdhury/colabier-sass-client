"use client";

import MessageInput from "./MessageInput";
import MessageItem from "./MessageItem";

interface Message {
  id: number;
  user: string;
  avatar: string;
  text: string;
  timestamp: string;
  isOwnMessage?: boolean;
}

const replies: Message[] = [
  {
    id: 1,
    user: "Alice",
    avatar: "/avatar1.png",
    text: "I totally agree!",
    timestamp: "10:01 AM",
  },
  {
    id: 2,
    user: "Bob",
    avatar: "/avatar2.png",
    text: "Yes, it's a great idea.",
    timestamp: "10:02 AM",
    isOwnMessage: true,
  },
];

export default function ThreadView({ mainMessage }: { mainMessage: Message }) {
  const handleReply = (message: string) => {
    console.log("Reply sent:", message);
  };

  return (
    <div className="flex flex-col h-full bg-white rounded-lg shadow-md p-4">
      <h5 className="text-cyan-700 font-semibold mb-4">Thread</h5>

      {/* Main Message */}
      <div className="mb-4">
        <MessageItem
          user={mainMessage.user}
          avatar={mainMessage.avatar}
          text={mainMessage.text}
          timestamp={mainMessage.timestamp}
          isOwnMessage={mainMessage.isOwnMessage}
        />
      </div>

      {/* Replies */}
      <div className="flex-grow overflow-y-auto mb-4">
        <ul className="space-y-4">
          {replies.map((reply) => (
            <li key={reply.id}>
              <MessageItem
                user={reply.user}
                avatar={reply.avatar}
                text={reply.text}
                timestamp={reply.timestamp}
                isOwnMessage={reply.isOwnMessage}
              />
            </li>
          ))}
        </ul>
      </div>

      {/* Reply Input */}
      <MessageInput onSendMessage={handleReply} />
    </div>
  );
}
