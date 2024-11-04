import { Card, Progress, Typography, List } from "antd";

const { Text, Title } = Typography;

interface TaskStat {
  label: string;
  count: number;
}

interface Activity {
  id: string;
  description: string;
  timestamp: string;
}

interface ProjectOverviewProps {
  projectName: string;
  taskStats: TaskStat[];
  completionRate: number;
  activities: Activity[];
}

export default function ProjectOverview({
  projectName,
  taskStats,
  completionRate,
  activities,
}: ProjectOverviewProps) {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <Title level={3} className="text-gray-800 mb-4">
        {projectName} Overview
      </Title>

      {/* Task Statistics */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        {taskStats.map((stat) => (
          <Card key={stat.label} className="text-center">
            <Text className="text-xl font-semibold">{stat.count}</Text>
            <Text type="secondary">{stat.label}</Text>
          </Card>
        ))}
      </div>

      {/* Completion Rate */}
      <div className="mb-6">
        <Title level={4} className="text-gray-800">
          Completion Rate
        </Title>
        <Progress percent={completionRate} status="active" />
      </div>

      {/* Recent Activity */}
      <div>
        <Title level={4} className="text-gray-800">
          Recent Activity
        </Title>
        <List
          dataSource={activities}
          renderItem={(activity) => (
            <List.Item key={activity.id}>
              <Text>{activity.description}</Text>
              <Text type="secondary" className="text-xs ml-2">
                {activity.timestamp}
              </Text>
            </List.Item>
          )}
          className="mt-4"
        />
      </div>
    </div>
  );
}
