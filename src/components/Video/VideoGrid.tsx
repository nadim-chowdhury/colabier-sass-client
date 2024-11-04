import ParticipantVideo from "./ParticipantVideo";

interface Participant {
  id: string;
  name: string;
  isMuted: boolean;
  isVideoOn: boolean;
}

interface VideoGridProps {
  participants: Participant[];
}

export default function VideoGrid({ participants }: VideoGridProps) {
  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4 bg-gray-100 rounded-lg shadow-md">
      {participants.map((participant) => (
        <ParticipantVideo key={participant.id} participant={participant} />
      ))}
    </div>
  );
}
