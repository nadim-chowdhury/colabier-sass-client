import { Upload, Button, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import type { UploadFile } from "antd/lib/upload/interface";

export default function FileUpload() {
  const props = {
    beforeUpload: (file: UploadFile) => {
      // You can add any validation or custom logic here
      const isAllowed = file.size / 1024 / 1024 < 5; // Limit to 5MB
      if (!isAllowed) {
        message.error(`${file.name} is too large (max 5MB)`);
      }
      return isAllowed || Upload.LIST_IGNORE;
    },
    onChange(info: any) {
      if (info.file.status === "done") {
        message.success(`${info.file.name} uploaded successfully.`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} upload failed.`);
      }
    },
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <Upload {...props} showUploadList={false}>
        <Button
          icon={<UploadOutlined />}
          className="bg-cyan-600 text-white hover:bg-cyan-700"
        >
          Upload File
        </Button>
      </Upload>
    </div>
  );
}
