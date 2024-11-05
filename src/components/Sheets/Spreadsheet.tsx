"use client";

import { useState, useCallback } from "react";
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
  console.log("Spreadsheet ~ currentCell:", currentCell);
  const totalColumns = data[0].length; // Calculate total columns based on data

  const updateCell = useCallback((row: number, col: number, value: string) => {
    setData((prevData) =>
      prevData.map((r, i) =>
        i === row ? r.map((c, j) => (j === col ? value : c)) : r
      )
    );
  }, []);

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <Toolbar />
      <FormulaBar formula={formula} setFormula={setFormula} />
      <div
        className="grid"
        style={{
          gridTemplateColumns: `50px repeat(${totalColumns}, 100px)`,
          gridAutoRows: "30px",
        }}
      >
        <ColumnHeaders totalColumns={totalColumns} />{" "}
        {/* Pass totalColumns prop */}
        {data.map((row, rowIndex) => (
          <div key={rowIndex} className="contents">
            <RowHeaders totalRows={data.length} />
            {row.map((value, colIndex) => (
              <Cell
                key={`${rowIndex}-${colIndex}`}
                value={value} // Ensure `value` prop matches Cell prop types
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
