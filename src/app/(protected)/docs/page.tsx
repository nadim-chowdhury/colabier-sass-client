import Editor from "@/components/Docs/Editor";
import Sidebar from "@/components/Docs/Sidebar";
import DocumentTitle from "@/components/Docs/DocumentTitle";

export default function DocsPage() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <DocumentTitle />
        <Editor />
      </div>
    </div>
  );
}
