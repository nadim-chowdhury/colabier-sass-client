import { Switch, Typography, Select, Divider } from "antd";

const { Title } = Typography;
const { Option } = Select;

interface DocumentSettingsProps {
  isPublic: boolean;
  onPermissionChange: (isPublic: boolean) => void;
  onSharingOptionChange: (option: string) => void;
}

export default function DocumentSettings({
  isPublic,
  onPermissionChange,
  onSharingOptionChange,
}: DocumentSettingsProps) {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <Title level={4}>Document Settings</Title>
      <div className="flex items-center justify-between mb-4">
        <Typography.Text>Public Access</Typography.Text>
        <Switch
          checked={isPublic}
          onChange={onPermissionChange}
          checkedChildren="Public"
          unCheckedChildren="Private"
        />
      </div>
      <Divider />
      <div>
        <Typography.Text>Sharing Options</Typography.Text>
        <Select
          defaultValue="view"
          onChange={onSharingOptionChange}
          className="w-full mt-2"
        >
          <Option value="view">View Only</Option>
          <Option value="comment">View and Comment</Option>
          <Option value="edit">Edit Access</Option>
        </Select>
      </div>
    </div>
  );
}
