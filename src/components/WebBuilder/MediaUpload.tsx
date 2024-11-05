"use client";

import { Upload, Typography, message, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const { Title } = Typography;

interface MediaUploadProps {
  onUpload: (fileUrl: string) => void;
}

export default function MediaUpload({ onUpload }: MediaUploadProps) {
  const handleUpload = (file: File) => {
    const fileUrl = URL.createObjectURL(file);
    onUpload(fileUrl);
    message.success(`${file.name} uploaded successfully.`);
    return false; // Prevents automatic upload by Ant Design
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <Title level={5}>Media Upload</Title>
      <Upload beforeUpload={handleUpload} showUploadList={false}>
        <Button icon={<UploadOutlined />}>Upload Media</Button>
      </Upload>
    </div>
  );
}
