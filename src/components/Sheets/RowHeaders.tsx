interface RowHeadersProps {
  totalRows: number;
}

export default function RowHeaders({ totalRows }: RowHeadersProps) {
  return (
    <div className="flex flex-col">
      {Array.from({ length: totalRows }, (_, index) => (
        <div
          key={`row-header-${index}`}
          className="w-10 h-10 flex items-center justify-center border-b border-gray-300 bg-gray-200"
        >
          {index + 1}
        </div>
      ))}
    </div>
  );
}
