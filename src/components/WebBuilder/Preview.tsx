import { Typography, Button } from "antd";
import { useState } from "react";

const { Title } = Typography;

interface PreviewProps {
  htmlContent: string;
}

export default function Preview({ htmlContent }: PreviewProps) {
  const [isPreviewMode, setIsPreviewMode] = useState<boolean>(false);

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-2">
        <Title level={5}>Live Preview</Title>
        <Button onClick={() => setIsPreviewMode(!isPreviewMode)}>
          {isPreviewMode ? "Exit Preview" : "Enter Preview"}
        </Button>
      </div>
      {isPreviewMode ? (
        <div
          className="border border-gray-300 rounded-md p-4 bg-gray-50"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      ) : (
        <p>
          Click &apos;Enter Preview&apos; to see the live preview of your page.
        </p>
      )}
    </div>
  );
}
