import { Typography, Menu, Button } from "antd";
import {
  ProjectOutlined,
  SettingOutlined,
  FilterOutlined,
} from "@ant-design/icons";

const { Title } = Typography;

interface Project {
  id: string;
  name: string;
}

interface SidebarProps {
  projects: Project[];
  onSelectProject: (projectId: string) => void;
  onOpenSettings: () => void;
}

export default function Sidebar({
  projects,
  onSelectProject,
  onOpenSettings,
}: SidebarProps) {
  return (
    <div className="w-64 p-4 bg-gray-100 h-full">
      {/* Project List */}
      <Title level={4} className="text-gray-800 mb-4">
        Projects
      </Title>
      <Menu
        mode="inline"
        className="bg-transparent"
        items={projects.map((project) => ({
          key: project.id,
          icon: <ProjectOutlined />,
          label: project.name,
          onClick: () => onSelectProject(project.id),
        }))}
      />

      {/* Filters and Settings */}
      <div className="mt-8 space-y-4">
        <Button
          icon={<FilterOutlined />}
          className="w-full bg-cyan-600 hover:bg-cyan-700 text-white"
        >
          Task Filters
        </Button>
        <Button
          icon={<SettingOutlined />}
          className="w-full bg-gray-200 hover:bg-gray-300"
          onClick={onOpenSettings}
        >
          User Settings
        </Button>
      </div>
    </div>
  );
}
