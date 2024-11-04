import { Button, Typography } from "antd";
import { UploadOutlined, DownloadOutlined } from "@ant-design/icons";

const { Title } = Typography;

interface ImportExportPanelProps {
  onImport: (file: File) => void;
  onExport: (format: string) => void;
}

export default function ImportExportPanel({
  onImport,
  onExport,
}: ImportExportPanelProps) {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      onImport(e.target.files[0]);
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <Title level={5}>Import & Export</Title>
      <div className="mb-2">
        <input type="file" onChange={handleFileChange} className="mb-2" />
        <Button
          icon={<UploadOutlined />}
          onClick={() => document.querySelector("input[type='file']")?.click()}
        >
          Import File
        </Button>
      </div>
      <div>
        <Button
          icon={<DownloadOutlined />}
          onClick={() => onExport("csv")}
          className="mr-2"
        >
          Export as CSV
        </Button>
        <Button icon={<DownloadOutlined />} onClick={() => onExport("excel")}>
          Export as Excel
        </Button>
      </div>
    </div>
  );
}
