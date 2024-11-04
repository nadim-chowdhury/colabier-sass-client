import { useState } from "react";
import { List, Alert, Typography } from "antd";

const { Text } = Typography;

interface Notification {
  id: string;
  message: string;
  type: "info" | "warning";
}

interface NotificationsProps {
  notifications: Notification[];
}

export default function Notifications({ notifications }: NotificationsProps) {
  const [visibleNotifications, setVisibleNotifications] =
    useState<Notification[]>(notifications);

  return (
    <div className="fixed top-4 right-4 space-y-2">
      {visibleNotifications.map((notification) => (
        <Alert
          key={notification.id}
          message={<Text>{notification.message}</Text>}
          type={notification.type}
          showIcon
          closable
          onClose={() =>
            setVisibleNotifications(
              visibleNotifications.filter((n) => n.id !== notification.id)
            )
          }
        />
      ))}
    </div>
  );
}
