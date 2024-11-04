import { Menu } from "antd";
import { FileTextOutlined, FolderOutlined } from "@ant-design/icons";
import { Typography } from "antd";

const { Title } = Typography;

interface SidebarProps {
  onSelectSection?: (section: string) => void;
}

export default function Sidebar({ onSelectSection }: SidebarProps) {
  const handleClick = (e: any) => {
    if (onSelectSection) {
      onSelectSection(e.key);
    }
  };

  return (
    <div className="w-64 p-4 bg-gray-100 h-full">
      <Title level={4}>Document Navigation</Title>
      <Menu
        mode="inline"
        onClick={handleClick}
        items={[
          {
            key: "introduction",
            icon: <FileTextOutlined />,
            label: "Introduction",
          },
          { key: "chapter1", icon: <FileTextOutlined />, label: "Chapter 1" },
          { key: "chapter2", icon: <FileTextOutlined />, label: "Chapter 2" },
          { key: "appendix", icon: <FolderOutlined />, label: "Appendix" },
        ]}
      />
    </div>
  );
}
