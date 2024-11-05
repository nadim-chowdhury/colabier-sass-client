"use client";

import { useState } from "react";

interface TableEditorProps {
  onTableUpdate: (data: string[][]) => void;
}

export default function TableEditor({ onTableUpdate }: TableEditorProps) {
  const [rows, setRows] = useState<string[][]>([[""]]);

  const addRow = () => setRows([...rows, Array(rows[0].length).fill("")]);
  const addColumn = () => setRows(rows.map((row) => [...row, ""]));

  const handleCellChange = (
    rowIndex: number,
    colIndex: number,
    value: string
  ) => {
    const updatedRows = rows.map((row, i) =>
      i === rowIndex
        ? row.map((cell, j) => (j === colIndex ? value : cell))
        : row
    );
    setRows(updatedRows);
    onTableUpdate(updatedRows);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h4 className="text-lg font-semibold mb-4">Table Editor</h4>
      <div className="flex space-x-2 mb-4">
        <button
          onClick={addRow}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Add Row
        </button>
        <button
          onClick={addColumn}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Add Column
        </button>
      </div>
      <table className="w-full border border-gray-300">
        <thead>
          <tr>
            {rows[0].map((_, colIndex) => (
              <th key={colIndex} className="border border-gray-300 p-2">
                Col {colIndex + 1}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, colIndex) => (
                <td key={colIndex} className="border border-gray-300 p-2">
                  <input
                    type="text"
                    value={cell}
                    onChange={(e) =>
                      handleCellChange(rowIndex, colIndex, e.target.value)
                    }
                    className="w-full p-1"
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
