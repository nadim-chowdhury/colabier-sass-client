import Spreadsheet from "@/components/Sheets/Spreadsheet";
import FormulaBar from "@/components/Sheets/FormulaBar";
import Sidebar from "@/components/Sheets/Sidebar";
import Toolbar from "@/components/Sheets/Toolbar";

export default function SheetsPage() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Toolbar />
        <FormulaBar />
        <Spreadsheet />
      </div>
    </div>
  );
}
