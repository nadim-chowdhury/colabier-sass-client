import { useEffect, useRef } from "react";

interface RulerGuidesProps {
  width: number;
  height: number;
}

export default function RulerGuides({ width, height }: RulerGuidesProps) {
  const rulerRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = rulerRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.clearRect(0, 0, width, 30); // Horizontal ruler
        ctx.clearRect(0, 0, 30, height); // Vertical ruler

        ctx.font = "10px Arial";
        ctx.fillStyle = "#888";
        ctx.strokeStyle = "#ccc";

        // Draw horizontal ruler
        for (let i = 0; i <= width; i += 50) {
          ctx.beginPath();
          ctx.moveTo(i, 0);
          ctx.lineTo(i, 10);
          ctx.stroke();
          ctx.fillText(`${i}px`, i + 2, 20);
        }

        // Draw vertical ruler
        for (let i = 0; i <= height; i += 50) {
          ctx.beginPath();
          ctx.moveTo(0, i);
          ctx.lineTo(10, i);
          ctx.stroke();
          ctx.fillText(`${i}px`, 12, i + 8);
        }
      }
    }
  }, [width, height]);

  return (
    <div style={{ position: "relative", width, height }}>
      <canvas
        ref={rulerRef}
        width={width}
        height={height}
        style={{ position: "absolute" }}
      />
    </div>
  );
}
