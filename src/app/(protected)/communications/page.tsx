"use client";

import ChatSidebar from "@/components/Chat/ChatSidebar";
import ChatWindow from "@/components/Chat/ChatWindow";
import ChatHeader from "@/components/Chat/ChatHeader";
import MessageInput from "@/components/Chat/MessageInput";

export default function ChatPage() {
  // Define some mock data or fetch it dynamically
  const channelName = "General";
  const memberCount = 42;
  const avatarUrl = "/path/to/avatar.jpg"; // Replace with actual avatar URL or logic

  // Define the function to handle sending messages
  const handleSendMessage = (message: string) => {
    console.log("Message sent:", message);
    // Add logic to send the message to the server or update state
  };

  return (
    <div className="flex h-screen">
      <ChatSidebar />
      <div className="flex-1 flex flex-col">
        {/* Pass required props to ChatHeader */}
        <ChatHeader
          channelName={channelName}
          memberCount={memberCount}
          avatarUrl={avatarUrl}
        />
        <ChatWindow />
        {/* Pass required prop to MessageInput */}
        <MessageInput onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
}
