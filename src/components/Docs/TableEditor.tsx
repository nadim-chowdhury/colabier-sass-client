import { useState } from "react";
import { Button, Input, Table, Typography } from "antd";

const { Title } = Typography;

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
      <Title level={4}>Table Editor</Title>
      <div className="flex space-x-2 mb-2">
        <Button onClick={addRow}>Add Row</Button>
        <Button onClick={addColumn}>Add Column</Button>
      </div>
      <Table
        dataSource={rows.map((row, i) => ({ key: i, row }))}
        columns={rows[0].map((_, colIndex) => ({
          title: `Col ${colIndex + 1}`,
          dataIndex: ["row", colIndex],
          render: (_, __, rowIndex) => (
            <Input
              value={rows[rowIndex][colIndex]}
              onChange={(e) =>
                handleCellChange(rowIndex, colIndex, e.target.value)
              }
            />
          ),
        }))}
        pagination={false}
      />
    </div>
  );
}
