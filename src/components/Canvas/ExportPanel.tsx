import { Button, Typography } from "antd";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

const { Text } = Typography;

interface ExportPanelProps {
  canvasRef: React.RefObject<HTMLDivElement>;
}

export default function ExportPanel({ canvasRef }: ExportPanelProps) {
  const exportAsImage = async () => {
    if (canvasRef.current) {
      const canvas = await html2canvas(canvasRef.current);
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = "canvas.png";
      link.click();
    }
  };

  const exportAsPDF = async () => {
    if (canvasRef.current) {
      const canvas = await html2canvas(canvasRef.current);
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("canvas.pdf");
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <Text className="text-lg font-semibold">Export Options</Text>
      <div className="mt-4 flex space-x-2">
        <Button onClick={exportAsImage}>Export as PNG</Button>
        <Button onClick={exportAsPDF}>Export as PDF</Button>
      </div>
    </div>
  );
}
