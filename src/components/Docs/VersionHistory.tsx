import { useState } from "react";
import { List, Button, Typography } from "antd";

const { Title } = Typography;

interface Version {
  id: string;
  timestamp: string;
  content: string;
}

interface VersionHistoryProps {
  versions: Version[];
  onRestoreVersion: (version: Version) => void;
}

export default function VersionHistory({
  versions,
  onRestoreVersion,
}: VersionHistoryProps) {
  const [selectedVersion, setSelectedVersion] = useState<Version | null>(null);

  const handleRestore = (version: Version) => {
    setSelectedVersion(version);
    onRestoreVersion(version);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <Title level={4}>Version History</Title>
      <List
        dataSource={versions}
        renderItem={(version) => (
          <List.Item
            actions={[
              <Button onClick={() => handleRestore(version)}>Restore</Button>,
            ]}
          >
            <Typography.Text>{version.timestamp}</Typography.Text>
          </List.Item>
        )}
      />
      {selectedVersion && (
        <div className="mt-4">
          <Title level={5}>Selected Version</Title>
          <Typography.Paragraph>{selectedVersion.content}</Typography.Paragraph>
        </div>
      )}
    </div>
  );
}
