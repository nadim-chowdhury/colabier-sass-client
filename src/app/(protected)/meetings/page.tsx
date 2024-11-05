"use client";

import VideoRoom from "@/components/Video/VideoRoom";
import ParticipantList from "@/components/Video/ParticipantList";
import VideoControls from "@/components/Video/VideoControls";

export default function MeetingsPage() {
  const participants = [
    { id: "1", name: "Alice", isMuted: false },
    { id: "2", name: "Bob", isMuted: true },
  ];

  const handleToggleMute = (participantId: string) => {
    console.log(`Toggling mute for participant with ID: ${participantId}`);
  };

  const handleMute = () => {
    console.log("Muting/unmuting local audio");
  };

  const handleToggleVideo = () => {
    console.log("Toggling local video");
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
