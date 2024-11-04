import { useState } from "react";
import { Upload, Button, Typography, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const { Title } = Typography;

interface ImageUploadProps {
  onImageUpload: (url: string) => void;
}

export default function ImageUpload({ onImageUpload }: ImageUploadProps) {
  const [uploading, setUploading] = useState(false);

  const handleUpload = async ({ file }: any) => {
    setUploading(true);
    try {
      const imageUrl = URL.createObjectURL(file);
      onImageUpload(imageUrl);
      message.success("Image uploaded successfully!");
    } catch (error) {
      message.error("Failed to upload image.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <Title level={4}>Image Upload</Title>
      <Upload customRequest={handleUpload} showUploadList={false}>
        <Button icon={<UploadOutlined />} loading={uploading}>
          {uploading ? "Uploading" : "Upload Image"}
        </Button>
      </Upload>
    </div>
  );
}
