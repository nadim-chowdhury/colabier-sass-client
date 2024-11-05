"use client";

import { useEffect, useRef } from "react";

interface GridOverlayProps {
  width: number;
  height: number;
  gridSize: number;
  isVisible: boolean;
}

export default function GridOverlay({
  width,
  height,
  gridSize,
  isVisible,
}: GridOverlayProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current && isVisible) {
      const ctx = canvasRef.current.getContext("2d");
      if (ctx) {
        ctx.clearRect(0, 0, width, height);
        ctx.strokeStyle = "#ddd";
        ctx.lineWidth = 0.5;

        // Draw vertical lines
        for (let x = 0; x <= width; x += gridSize) {
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x, height);
          ctx.stroke();
        }

        // Draw horizontal lines
        for (let y = 0; y <= height; y += gridSize) {
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(width, y);
          ctx.stroke();
        }
      }
    }
  }, [width, height, gridSize, isVisible]);

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        pointerEvents: "none",
        display: isVisible ? "block" : "none",
      }}
    />
  );
}
