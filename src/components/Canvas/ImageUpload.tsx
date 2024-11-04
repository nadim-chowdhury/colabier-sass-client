import { Upload, Button, Typography } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const { Text } = Typography;

interface ImageUploadProps {
  onUpload: (url: string) => void;
}

export default function ImageUpload({ onUpload }: ImageUploadProps) {
  const handleUpload = (info: any) => {
    if (info.file.status === "done") {
      const url = URL.createObjectURL(info.file.originFileObj);
      onUpload(url);
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <Text className="text-lg font-semibold">Upload Image</Text>
      <Upload
        customRequest={({ file, onSuccess }) => {
          setTimeout(() => onSuccess && onSuccess("ok"), 0);
        }}
        onChange={handleUpload}
        showUploadList={false}
      >
        <Button icon={<UploadOutlined />}>Select File</Button>
      </Upload>
    </div>
  );
}
