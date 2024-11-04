import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  style?: React.CSSProperties;
}

export default function Section({ children, style }: SectionProps) {
  return (
    <div
      className="p-4 border border-gray-300 rounded-md bg-gray-50"
      style={style}
    >
      {children}
    </div>
  );
}
