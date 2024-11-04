"use client";

import { useState, Suspense } from "react";
import { Popover, Button } from "antd";
import { SmileOutlined } from "@ant-design/icons";
import dynamic from "next/dynamic";
import "emoji-mart/css/emoji-mart.css"; // Import EmojiMart styles

// Define a custom type for emojis
interface CustomEmoji {
  native: string;
}

// Dynamic import with `unknown` cast for compatibility
const Picker = dynamic(
  () =>
    import("emoji-mart").then(
      (mod) =>
        mod.Picker as unknown as React.ComponentType<{
          onSelect: (emoji: CustomEmoji) => void;
        }>
    ),
  { ssr: false }
);

interface EmojiPickerProps {
  onSelectEmoji: (emoji: string) => void;
}

export default function EmojiPicker({ onSelectEmoji }: EmojiPickerProps) {
  const [open, setOpen] = useState(false);

  const handleSelect = (emoji: CustomEmoji) => {
    onSelectEmoji(emoji.native);
    setOpen(false);
  };

  return (
    <Popover
      content={
        <Suspense fallback={<div>Loading...</div>}>
          <Picker onSelect={handleSelect} />
        </Suspense>
      }
      trigger="click"
      open={open}
      onOpenChange={(v) => setOpen(v)}
    >
      <Button
        icon={<SmileOutlined />}
        className="text-gray-600 hover:text-cyan-600"
      />
    </Popover>
  );
}
