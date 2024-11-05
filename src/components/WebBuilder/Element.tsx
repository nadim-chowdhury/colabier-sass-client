"use client";

import Image from "next/image";

interface ElementProps {
  id: string;
  type: string;
  content: string;
  style: React.CSSProperties;
}

export default function Element({ type, content, style }: ElementProps) {
  return (
    <div className="p-2 border border-gray-300 rounded" style={style}>
      {type === "text" && <p>{content}</p>}
      {type === "image" && (
        <Image src={content} alt="Element" style={{ maxWidth: "100%" }} />
      )}
      {type === "video" && (
        <video controls style={{ maxWidth: "100%" }}>
          <source src={content} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
}
