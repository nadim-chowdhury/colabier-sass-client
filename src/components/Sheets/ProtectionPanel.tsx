"use client";

import { useState } from "react";
import { Switch, Select, Typography, Divider } from "antd";

const { Title } = Typography;
const { Option } = Select;

interface ProtectionPanelProps {
  onSetProtection: (isProtected: boolean) => void;
  onSetPermissions: (permission: string) => void;
}

export default function ProtectionPanel({
  onSetProtection,
  onSetPermissions,
}: ProtectionPanelProps) {
  const [isProtected, setIsProtected] = useState<boolean>(false);
  const [permission, setPermission] = useState<string>("view");

  const handleProtectionToggle = (checked: boolean) => {
    setIsProtected(checked);
    onSetProtection(checked);
  };

  const handlePermissionChange = (value: string) => {
    setPermission(value);
    onSetPermissions(value);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <Title level={5}>Sheet Protection</Title>
      <div className="flex items-center justify-between mb-2">
        <Typography.Text>Protected</Typography.Text>
        <Switch checked={isProtected} onChange={handleProtectionToggle} />
      </div>
      <Divider />
      <Title level={5}>Permissions</Title>
      <Select
        value={permission}
        onChange={handlePermissionChange}
        className="w-full"
      >
        <Option value="view">View Only</Option>
        <Option value="comment">Comment</Option>
        <Option value="edit">Edit</Option>
      </Select>
    </div>
  );
}
