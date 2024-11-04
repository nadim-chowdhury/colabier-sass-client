"use client";

import VideoRoom from "@/components/Video/VideoRoom";
import ParticipantList from "@/components/Video/ParticipantList";
import VideoControls from "@/components/Video/VideoControls";

export default function MeetingsPage() {
  // Mock participants data with string IDs
  const participants = [
    { id: "1", name: "Alice", isMuted: false },
    { id: "2", name: "Bob", isMuted: true },
    // Add more participants as needed
  ];

  // Function to handle mute/unmute for participants
  const handleToggleMute = (participantId: string) => {
    console.log(`Toggling mute for participant with ID: ${participantId}`);
    // Implement actual mute/unmute logic here
  };

  // Functions for video controls
  const handleMute = () => {
    console.log("Muting/unmuting local audio");
    // Implement actual mute logic here
  };

  const handleToggleVideo = () => {
    console.log("Toggling local video");
    // Implement actual video toggle logic here
  };

  return (
    <div className="flex">
      <ParticipantList
        participants={participants}
        onToggleMute={handleToggleMute}
      />
      <div className="flex-1">
        <VideoRoom />
        <VideoControls onMute={handleMute} onToggleVideo={handleToggleVideo} />
      </div>
    </div>
  );
}
