import { useState } from "react";
import Cell from "./Cell";
import RowHeaders from "./RowHeaders";
import ColumnHeaders from "./ColumnHeaders";
import FormulaBar from "./FormulaBar";
import Toolbar from "./Toolbar";

export default function Spreadsheet() {
  const [data, setData] = useState<string[][]>(
    Array(20).fill(Array(10).fill(""))
  );
  const [currentCell, setCurrentCell] = useState<{
    row: number;
    col: number;
  } | null>(null);
  const [formula, setFormula] = useState<string>("");

  const updateCell = (row: number, col: number, value: string) => {
    const updatedData = data.map((r, i) =>
      i === row ? r.map((c, j) => (j === col ? value : c)) : r
    );
    setData(updatedData);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <Toolbar />
      <FormulaBar formula={formula} setFormula={setFormula} />
      <div
        className="grid"
        style={{ gridTemplateColumns: "50px repeat(10, 100px)" }}
      >
        <ColumnHeaders />
        {data.map((row, rowIndex) => (
          <div key={rowIndex} className="flex items-center">
            <RowHeaders rowIndex={rowIndex} />
            {row.map((value, colIndex) => (
              <Cell
                key={`${rowIndex}-${colIndex}`}
                value={value}
                row={rowIndex}
                col={colIndex}
                onUpdate={updateCell}
                onClick={() => setCurrentCell({ row: rowIndex, col: colIndex })}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
