import { Avatar, List, Typography } from "antd";

const { Text } = Typography;

interface User {
  id: number;
  name: string;
  avatar: string;
  online: boolean;
}

const users: User[] = [
  { id: 1, name: "Alice", avatar: "/avatar1.png", online: true },
  { id: 2, name: "Bob", avatar: "/avatar2.png", online: false },
  { id: 3, name: "Charlie", avatar: "/avatar3.png", online: true },
];

export default function UserList() {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <Text className="text-lg font-semibold text-gray-800 mb-2">
        Online Users
      </Text>
      <List
        dataSource={users}
        renderItem={(user) => (
          <List.Item className="flex items-center space-x-3">
            <Avatar src={user.avatar} />
            <div className="flex flex-col">
              <Text className="font-medium">{user.name}</Text>
              <Text
                className={`text-xs ${
                  user.online ? "text-green-500" : "text-gray-400"
                }`}
              >
                {user.online ? "Online" : "Offline"}
              </Text>
            </div>
          </List.Item>
        )}
      />
    </div>
  );
}
