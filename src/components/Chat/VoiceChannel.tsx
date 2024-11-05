"use client";

import Image from "next/image";
import { useState } from "react";
import { FaMicrophone, FaMicrophoneSlash } from "react-icons/fa";

interface Participant {
  id: number;
  name: string;
  avatar: string;
  isMuted: boolean;
}

const participants: Participant[] = [
  { id: 1, name: "Alice", avatar: "/avatar1.png", isMuted: false },
  { id: 2, name: "Bob", avatar: "/avatar2.png", isMuted: true },
  { id: 3, name: "Charlie", avatar: "/avatar3.png", isMuted: false },
];

export default function VoiceChannel() {
  const [inChannel, setInChannel] = useState(false);

  const toggleChannel = () => {
    setInChannel(!inChannel);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <p className="text-lg font-semibold text-gray-800">Voice Channel</p>
        <button
          onClick={toggleChannel}
          className={`flex items-center px-4 py-2 rounded-lg text-white ${
            inChannel
              ? "bg-red-600 hover:bg-red-700"
              : "bg-cyan-600 hover:bg-cyan-700"
          } focus:outline-none`}
        >
          {inChannel ? (
            <FaMicrophoneSlash className="mr-2" />
          ) : (
            <FaMicrophone className="mr-2" />
          )}
          {inChannel ? "Leave Channel" : "Join Channel"}
        </button>
      </div>

      {/* Participant List */}
      {inChannel && (
        <ul className="space-y-4">
          {participants.map((participant) => (
            <li key={participant.id} className="flex items-center space-x-3">
              <Image
                src={participant.avatar}
                alt={`${participant.name}'s avatar`}
                width={360}
                height={360}
                className="w-10 h-10 rounded-full"
              />
              <p className="font-medium">{participant.name}</p>
              {participant.isMuted && (
                <FaMicrophoneSlash className="text-gray-500" />
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
