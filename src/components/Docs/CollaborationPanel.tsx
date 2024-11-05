"use client";

import { Avatar, List, Typography } from "antd";

const { Title } = Typography;

interface Participant {
  id: string;
  name: string;
  color: string;
}

interface CollaborationPanelProps {
  participants: Participant[];
}

export default function CollaborationPanel({
  participants,
}: CollaborationPanelProps) {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <Title level={4}>Collaborators</Title>
      <List
        dataSource={participants}
        renderItem={(participant) => (
          <List.Item>
            <Avatar style={{ backgroundColor: participant.color }}>
              {participant.name[0]}
            </Avatar>
            <Typography.Text className="ml-2">
              {participant.name}
            </Typography.Text>
          </List.Item>
        )}
      />
    </div>
  );
}
