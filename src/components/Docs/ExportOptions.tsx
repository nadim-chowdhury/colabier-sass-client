import { Button, Typography } from "antd";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

const { Title } = Typography;

interface ExportOptionsProps {
  content: string;
}

export default function ExportOptions({ content }: ExportOptionsProps) {
  const exportAsPDF = async () => {
    const pdf = new jsPDF("p", "mm", "a4");
    const canvas = await html2canvas(document.body);
    const imgData = canvas.toDataURL("image/png");
    pdf.addImage(imgData, "PNG", 10, 10);
    pdf.save("document.pdf");
  };

  const exportAsMarkdown = () => {
    const blob = new Blob([content], { type: "text/markdown" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "document.md";
    link.click();
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <Title level={4}>Export Options</Title>
      <Button onClick={exportAsPDF} className="mr-2">
        Export as PDF
      </Button>
      <Button onClick={exportAsMarkdown}>Export as Markdown</Button>
    </div>
  );
}
