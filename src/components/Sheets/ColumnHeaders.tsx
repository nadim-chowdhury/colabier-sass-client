interface ColumnHeadersProps {
  totalColumns: number;
}

const getColumnLetter = (colIndex: number) => {
  let letter = "";
  let index = colIndex;
  while (index >= 0) {
    letter = String.fromCharCode((index % 26) + 65) + letter;
    index = Math.floor(index / 26) - 1;
  }
  return letter;
};

export default function ColumnHeaders({ totalColumns }: ColumnHeadersProps) {
  return (
    <div className="flex">
      {Array.from({ length: totalColumns }, (_, index) => (
        <div
          key={index}
          className="w-24 h-10 flex items-center justify-center border-r border-gray-300 bg-gray-200"
        >
          {getColumnLetter(index)}
        </div>
      ))}
    </div>
  );
}
