"use client";

import { List, Avatar, Typography } from "antd";

const { Text } = Typography;

interface Activity {
  id: string;
  user: string;
  action: string;
  timestamp: string;
  avatar: string;
}

interface UserActivityProps {
  activities: Activity[];
}

export default function UserActivity({ activities }: UserActivityProps) {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <Text className="text-lg font-semibold">User Activity</Text>
      <List
        dataSource={activities}
        renderItem={(activity) => (
          <List.Item key={activity.id}>
            <List.Item.Meta
              avatar={<Avatar src={activity.avatar} />}
              title={<Text strong>{activity.user}</Text>}
              description={
                <div>
                  <Text>{activity.action}</Text>
                  <Text type="secondary" className="block text-xs">
                    {activity.timestamp}
                  </Text>
                </div>
              }
            />
          </List.Item>
        )}
        className="mt-4"
      />
    </div>
  );
}
