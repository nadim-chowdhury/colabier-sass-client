"use client";

import { Typography, Button } from "antd";
import {
  UserAddOutlined,
  EditOutlined,
  BarChartOutlined,
} from "@ant-design/icons";

const { Title } = Typography;

interface Project {
  id: string;
  name: string;
}

interface ProjectHeaderProps {
  project: Project;
  onEditProject: (project: Project) => void;
}

export default function ProjectHeader({
  project,
  onEditProject,
}: ProjectHeaderProps) {
  return (
    <div className="flex items-center justify-between p-4 bg-white shadow-md">
      <Title level={4} className="text-gray-800">
        {project.name}
      </Title>
      <div className="flex space-x-2">
        <Button
          icon={<UserAddOutlined />}
          className="bg-cyan-600 hover:bg-cyan-700 text-white"
        >
          Invite
        </Button>
        <Button
          icon={<EditOutlined />}
          onClick={() => onEditProject(project)}
        />
        <Button icon={<BarChartOutlined />} />
      </div>
    </div>
  );
}
