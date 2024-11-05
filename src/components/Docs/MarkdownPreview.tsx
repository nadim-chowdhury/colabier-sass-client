"use client";

import ReactMarkdown from "react-markdown";
import { Typography } from "antd";

const { Title } = Typography;

interface MarkdownPreviewProps {
  content: string;
}

export default function MarkdownPreview({ content }: MarkdownPreviewProps) {
  return (
    <div className="p-4 bg-gray-50 rounded-lg shadow-md overflow-y-auto">
      <Title level={4}>Preview</Title>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}
