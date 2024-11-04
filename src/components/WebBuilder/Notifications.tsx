import { Alert, Typography } from "antd";
import { useState } from "react";

const { Text } = Typography;

interface Notification {
  id: string;
  message: string;
  type: "info" | "warning" | "success" | "error";
}

interface NotificationsProps {
  notifications: Notification[];
}

export default function Notifications({ notifications }: NotificationsProps) {
  const [visibleNotifications, setVisibleNotifications] =
    useState<Notification[]>(notifications);

  const dismissNotification = (id: string) => {
    setVisibleNotifications(visibleNotifications.filter((n) => n.id !== id));
  };

  return (
    <div className="fixed top-4 right-4 space-y-2">
      {visibleNotifications.map((notification) => (
        <Alert
          key={notification.id}
          message={<Text>{notification.message}</Text>}
          type={notification.type}
          showIcon
          closable
          onClose={() => dismissNotification(notification.id)}
        />
      ))}
    </div>
  );
}
