import { useState } from "react";
import { Input, Typography } from "antd";
import MarkdownPreview from "./MarkdownPreview";
import Toolbar from "./Toolbar";
import Sidebar from "./Sidebar";

const { TextArea } = Input;
const { Title } = Typography;

export default function Editor() {
  const [content, setContent] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4 bg-white rounded-lg shadow-md flex flex-col h-full">
        <Title level={3}>Markdown Editor</Title>
        <Toolbar content={content} onContentChange={setContent} />
        <div className="flex flex-1 mt-4 space-x-4">
          {/* Markdown Text Editor */}
          <TextArea
            value={content}
            onChange={handleChange}
            placeholder="Start writing in Markdown..."
            className="flex-1 h-full p-4"
            autoSize={{ minRows: 20 }}
          />

          {/* Markdown Preview */}
          <MarkdownPreview content={content} />
        </div>
      </div>
    </div>
  );
}
