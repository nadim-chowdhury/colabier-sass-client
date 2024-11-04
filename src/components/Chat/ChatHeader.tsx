import { Avatar, Typography, Button, Tooltip } from "antd";
import {
  PhoneOutlined,
  VideoCameraOutlined,
  MoreOutlined,
} from "@ant-design/icons";

const { Text } = Typography;

interface ChatHeaderProps {
  channelName: string;
  memberCount: number;
  avatarUrl?: string;
}

export default function ChatHeader({
  channelName,
  memberCount,
  avatarUrl,
}: ChatHeaderProps) {
  return (
    <div className="flex items-center justify-between p-4 bg-white shadow-md rounded-t-lg">
      {/* Channel Info */}
      <div className="flex items-center space-x-3">
        <Avatar src={avatarUrl || "/default-avatar.png"} />
        <div>
          <Text className="font-semibold text-gray-800">{channelName}</Text>
          <Text className="text-xs text-gray-500">{memberCount} members</Text>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-2">
        <Tooltip title="Voice Call">
          <Button
            icon={<PhoneOutlined />}
            className="text-gray-700 hover:text-cyan-600"
          />
        </Tooltip>
        <Tooltip title="Video Call">
          <Button
            icon={<VideoCameraOutlined />}
            className="text-gray-700 hover:text-cyan-600"
          />
        </Tooltip>
        <Tooltip title="More Options">
          <Button
            icon={<MoreOutlined />}
            className="text-gray-700 hover:text-cyan-600"
          />
        </Tooltip>
      </div>
    </div>
  );
}
