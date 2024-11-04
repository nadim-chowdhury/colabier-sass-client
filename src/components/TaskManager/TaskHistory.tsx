import { List, Typography } from "antd";

const { Text } = Typography;

interface HistoryEntry {
  id: string;
  description: string;
  timestamp: string;
}

interface TaskHistoryProps {
  history: HistoryEntry[];
}

export default function TaskHistory({ history }: TaskHistoryProps) {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <Text className="text-lg font-semibold">Task History</Text>
      <List
        dataSource={history}
        renderItem={(entry) => (
          <List.Item key={entry.id}>
            <List.Item.Meta
              title={<Text>{entry.description}</Text>}
              description={<Text type="secondary">{entry.timestamp}</Text>}
            />
          </List.Item>
        )}
        className="mt-4"
      />
    </div>
  );
}
