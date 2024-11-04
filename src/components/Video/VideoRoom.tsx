import { useState, useEffect } from "react";
import ParticipantVideo from "./ParticipantVideo";
import VideoControls from "./VideoControls";
import { Button, Typography } from "antd";

const { Title } = Typography;

interface Participant {
  id: string;
  name: string;
  isMuted: boolean;
  isVideoOn: boolean;
}

export default function VideoRoom() {
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [isJoined, setIsJoined] = useState(false);

  const handleJoin = () => {
    setIsJoined(true);
    // Add the local participant as an example
    setParticipants([
      ...participants,
      { id: "local", name: "You", isMuted: false, isVideoOn: true },
    ]);
  };

  const handleLeave = () => {
    setIsJoined(false);
    setParticipants([]);
  };

  const toggleMute = (id: string) => {
    setParticipants((prevParticipants) =>
      prevParticipants.map((p) =>
        p.id === id ? { ...p, isMuted: !p.isMuted } : p
      )
    );
  };

  const toggleVideo = (id: string) => {
    setParticipants((prevParticipants) =>
      prevParticipants.map((p) =>
        p.id === id ? { ...p, isVideoOn: !p.isVideoOn } : p
      )
    );
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <Title level={3}>Video Room</Title>
      {!isJoined ? (
        <Button type="primary" onClick={handleJoin}>
          Join Room
        </Button>
      ) : (
        <Button type="primary" danger onClick={handleLeave}>
          Leave Room
        </Button>
      )}

      {isJoined && (
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {participants.map((participant) => (
            <ParticipantVideo
              key={participant.id}
              participant={participant}
              onToggleMute={() => toggleMute(participant.id)}
              onToggleVideo={() => toggleVideo(participant.id)}
            />
          ))}
        </div>
      )}

      {isJoined && (
        <VideoControls
          onMute={() => toggleMute("local")}
          onToggleVideo={() => toggleVideo("local")}
        />
      )}
    </div>
  );
}
