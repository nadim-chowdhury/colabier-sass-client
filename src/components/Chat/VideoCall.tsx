"use client";

import { useState } from "react";
import {
  FaMicrophone,
  FaMicrophoneSlash,
  FaVideo,
  FaPhone,
} from "react-icons/fa";
import Image from "next/image";

interface VideoCallParticipant {
  id: number;
  name: string;
  videoSrc: string;
  isMuted: boolean;
}

const participants: VideoCallParticipant[] = [
  {
    id: 1,
    name: "Alice",
    videoSrc: "/video-placeholder-1.png",
    isMuted: false,
  },
  { id: 2, name: "Bob", videoSrc: "/video-placeholder-2.png", isMuted: true },
];

export default function VideoCall() {
  const [isMuted, setIsMuted] = useState(false);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <p className="text-lg font-semibold text-gray-800 mb-4">Video Call</p>

      {/* Video Grid */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        {participants.map((participant) => (
          <div
            key={participant.id}
            className="relative bg-gray-200 rounded-lg overflow-hidden"
          >
            <Image
              src={participant.videoSrc}
              alt={`${participant.name}'s video`}
              className="w-full h-full object-cover"
              layout="fill"
            />
            <div className="absolute bottom-0 left-0 p-2 bg-gray-800 bg-opacity-75 w-full flex items-center">
              <p className="text-white">{participant.name}</p>
              {participant.isMuted && (
                <FaMicrophoneSlash className="text-red-500 ml-2" />
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="flex justify-center space-x-4">
        <button
          onClick={toggleMute}
          className="flex items-center bg-cyan-600 text-white px-4 py-2 rounded-lg hover:bg-cyan-700 focus:outline-none"
        >
          {isMuted ? (
            <FaMicrophoneSlash className="mr-2" />
          ) : (
            <FaMicrophone className="mr-2" />
          )}
          {isMuted ? "Unmute" : "Mute"}
        </button>
        <button className="flex items-center bg-cyan-600 text-white px-4 py-2 rounded-lg hover:bg-cyan-700 focus:outline-none">
          <FaVideo className="mr-2" />
          Video
        </button>
        <button className="flex items-center bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 focus:outline-none">
          <FaPhone className="mr-2" />
          End Call
        </button>
      </div>
    </div>
  );
}
