"use client";

import { Alert, List, Typography } from "antd";

const { Text } = Typography;

interface Notification {
  id: string;
  message: string;
  type: "success" | "info" | "warning" | "error";
}

interface NotificationProps {
  notifications: Notification[];
  onClearNotification: (id: string) => void;
}

export default function Notifications({
  notifications,
  onClearNotification,
}: NotificationProps) {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <Text className="text-lg font-semibold">Notifications</Text>
      <List
        dataSource={notifications}
        renderItem={(notification) => (
          <List.Item key={notification.id}>
            <Alert
              message={notification.message}
              type={notification.type}
              closable
              onClose={() => onClearNotification(notification.id)}
            />
          </List.Item>
        )}
        className="mt-4"
      />
    </div>
  );
}
