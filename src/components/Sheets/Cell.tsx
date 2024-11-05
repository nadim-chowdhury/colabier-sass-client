interface CellProps {
  value: string;
  row: number;
  col: number;
  onUpdate: (row: number, col: number, value: string) => void;
  onClick: () => void;
}

export default function Cell({
  value,
  row,
  col,
  onUpdate,
  onClick,
}: CellProps) {
  return (
    <div
      className="w-24 h-8 border"
      onClick={onClick}
      contentEditable
      onBlur={(e) => onUpdate(row, col, e.currentTarget.textContent || "")}
    >
      {value}
    </div>
  );
}
