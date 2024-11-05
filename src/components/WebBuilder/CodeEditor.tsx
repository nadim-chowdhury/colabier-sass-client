"use client";

import { useState } from "react";
import { Tabs, Input, Button, Typography } from "antd";

const { Title } = Typography;
const { TextArea } = Input;
const { TabPane } = Tabs;

interface CodeEditorProps {
  onSaveCode: (html: string, css: string, js: string) => void;
}

export default function CodeEditor({ onSaveCode }: CodeEditorProps) {
  const [html, setHtml] = useState<string>("");
  const [css, setCss] = useState<string>("");
  const [js, setJs] = useState<string>("");

  const handleSave = () => {
    onSaveCode(html, css, js);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <Title level={5}>Code Editor</Title>
      <Tabs defaultActiveKey="html">
        <TabPane tab="HTML" key="html">
          <TextArea
            rows={6}
            value={html}
            onChange={(e) => setHtml(e.target.value)}
            placeholder="<html>...</html>"
          />
        </TabPane>
        <TabPane tab="CSS" key="css">
          <TextArea
            rows={6}
            value={css}
            onChange={(e) => setCss(e.target.value)}
            placeholder="body { ... }"
          />
        </TabPane>
        <TabPane tab="JavaScript" key="js">
          <TextArea
            rows={6}
            value={js}
            onChange={(e) => setJs(e.target.value)}
            placeholder="function myScript() { ... }"
          />
        </TabPane>
      </Tabs>
      <Button type="primary" onClick={handleSave} className="mt-4">
        Save Code
      </Button>
    </div>
  );
}
