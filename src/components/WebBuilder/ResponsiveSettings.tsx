import { Select, Typography } from "antd";

const { Title } = Typography;
const { Option } = Select;

interface ResponsiveSettingsProps {
  onSetResponsive: (screenSize: string, layout: string) => void;
}

export default function ResponsiveSettings({
  onSetResponsive,
}: ResponsiveSettingsProps) {
  const handleResponsiveChange = (screenSize: string, layout: string) => {
    onSetResponsive(screenSize, layout);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <Title level={5}>Responsive Settings</Title>
      <div className="mb-2">
        <Typography.Text>Mobile Layout</Typography.Text>
        <Select
          defaultValue="stacked"
          onChange={(value) => handleResponsiveChange("mobile", value)}
          className="w-full mb-2"
        >
          <Option value="stacked">Stacked</Option>
          <Option value="grid">Grid</Option>
        </Select>
      </div>
      <div className="mb-2">
        <Typography.Text>Tablet Layout</Typography.Text>
        <Select
          defaultValue="two-column"
          onChange={(value) => handleResponsiveChange("tablet", value)}
          className="w-full mb-2"
        >
          <Option value="two-column">Two Column</Option>
          <Option value="grid">Grid</Option>
        </Select>
      </div>
      <div className="mb-2">
        <Typography.Text>Desktop Layout</Typography.Text>
        <Select
          defaultValue="three-column"
          onChange={(value) => handleResponsiveChange("desktop", value)}
          className="w-full mb-2"
        >
          <Option value="three-column">Three Column</Option>
          <Option value="grid">Grid</Option>
        </Select>
      </div>
    </div>
  );
}
