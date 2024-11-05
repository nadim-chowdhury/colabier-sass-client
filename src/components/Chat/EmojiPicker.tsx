"use client";

import { useState, Suspense } from "react";
import dynamic from "next/dynamic";
import { FaSmile } from "react-icons/fa";
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
    <div className="relative inline-block">
      <button
        onClick={() => setOpen(!open)}
        className="text-gray-600 hover:text-cyan-600 p-2 focus:outline-none"
      >
        <FaSmile size={20} />
      </button>

      {open && (
        <div className="absolute z-10 mt-2 p-2 bg-white shadow-lg rounded">
          <Suspense fallback={<div>Loading...</div>}>
            <Picker onSelect={handleSelect} />
          </Suspense>
        </div>
      )}
    </div>
  );
}
