import { Badge, Button } from "antd";
import { BellOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";

interface ChatNotificationsProps {
  unreadCount: number;
  onClearNotifications: () => void;
}

export default function ChatNotifications({
  unreadCount,
  onClearNotifications,
}: ChatNotificationsProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(unreadCount > 0);
  }, [unreadCount]);

  return (
    <div className="flex items-center">
      <Badge count={unreadCount} offset={[10, 0]}>
        <Button
          type="text"
          icon={<BellOutlined />}
          className="text-gray-700 hover:text-cyan-600"
          onClick={() => onClearNotifications()}
        />
      </Badge>
      {visible && (
        <Button
          type="link"
          className="text-cyan-600 ml-2 hover:underline"
          onClick={() => onClearNotifications()}
        >
          View Latest
        </Button>
      )}
    </div>
  );
}
