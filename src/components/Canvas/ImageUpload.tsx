"use client";

import { Upload, Button, Typography } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { UploadChangeParam, RcFile } from "antd/es/upload";

const { Text } = Typography;

interface ImageUploadProps {
  onUpload: (url: string) => void;
}

export default function ImageUpload({ onUpload }: ImageUploadProps) {
  const handleUpload = (info: UploadChangeParam) => {
    if (info.file.status === "done" && info.file.originFileObj) {
      const url = URL.createObjectURL(info.file.originFileObj as RcFile);
      onUpload(url);
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <Text className="text-lg font-semibold">Upload Image</Text>
      <Upload
        customRequest={({ onSuccess }) => {
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
