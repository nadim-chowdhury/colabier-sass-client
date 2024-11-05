"use client";

import Spreadsheet from "@/components/Sheets/Spreadsheet";
import FormulaBar from "@/components/Sheets/FormulaBar";
import Sidebar from "@/components/Sheets/Sidebar";
import Toolbar from "@/components/Sheets/Toolbar";
import { useState } from "react";

export default function SheetsPage() {
  const [sheets, setSheets] = useState([{ id: 1, name: "Sheet1" }]);
  const [selectedSheetId, setSelectedSheetId] = useState(sheets[0].id);
  const [formula, setFormula] = useState("");

  const onSelectSheet = (sheetId: number) => {
    setSelectedSheetId(sheetId);
  };

  const onAddSheet = () => {
    const newSheet = {
      id: sheets.length + 1,
      name: `Sheet${sheets.length + 1}`,
    };
    setSheets([...sheets, newSheet]);
    setSelectedSheetId(newSheet.id);
  };

  const onDeleteSheet = (sheetId: number) => {
    setSheets(sheets.filter((sheet) => sheet.id !== sheetId));
    if (selectedSheetId === sheetId && sheets.length > 1) {
      setSelectedSheetId(sheets[0].id); // Select another sheet if the current one is deleted
    }
  };

  return (
    <div className="flex h-screen">
      <Sidebar
        sheets={sheets}
        onSelectSheet={onSelectSheet}
        onAddSheet={onAddSheet}
        onDeleteSheet={onDeleteSheet}
      />
      <div className="flex-1 flex flex-col">
        <Toolbar />
        <FormulaBar formula={formula} setFormula={setFormula} />
        <Spreadsheet />
      </div>
    </div>
  );
}
