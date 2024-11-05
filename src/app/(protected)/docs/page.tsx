"use client";

import { useState } from "react";
import Editor from "@/components/Docs/Editor";
import Sidebar from "@/components/Docs/Sidebar";
import DocumentTitle from "@/components/Docs/DocumentTitle";

export default function DocsPage() {
  const [title, setTitle] = useState<string>("Untitled Document");

  const handleTitleChange = (newTitle: string) => {
    setTitle(newTitle);
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <DocumentTitle initialTitle={title} onTitleChange={handleTitleChange} />
        <Editor />
      </div>
    </div>
  );
}
