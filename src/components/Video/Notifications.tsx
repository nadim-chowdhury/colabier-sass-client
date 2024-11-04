"use client";

import { useEffect, useState } from "react";
import { Alert, Typography } from "antd";

const { Text } = Typography;

interface Notification {
  id: string;
  message: string;
  type: "join" | "leave";
}

interface NotificationsProps {
  notifications: Notification[];
}

export default function Notifications({ notifications }: NotificationsProps) {
  const [visibleNotifications, setVisibleNotifications] = useState<
    Notification[]
  >([]);

  useEffect(() => {
    setVisibleNotifications(notifications);
    const timer = setTimeout(() => {
      setVisibleNotifications([]);
    }, 5000);

    return () => clearTimeout(timer);
  }, [notifications]);

  return (
    <div className="absolute top-4 right-4 space-y-2">
      {visibleNotifications.map((notification) => (
        <Alert
          key={notification.id}
          message={
            <Text>
              {notification.type === "join"
                ? `${notification.message} has joined the meeting`
                : `${notification.message} has left the meeting`}
            </Text>
          }
          type={notification.type === "join" ? "success" : "warning"}
          showIcon
          closable
        />
      ))}
    </div>
  );
}
