import { useState } from "react";
import { Popover, Button } from "antd";
import { SmileOutlined } from "@ant-design/icons";
import { Picker, EmojiData } from "emoji-mart";
import "emoji-mart/css/emoji-mart.css"; // Import EmojiMart styles

interface EmojiPickerProps {
  onSelectEmoji: (emoji: string) => void;
}

export default function EmojiPicker({ onSelectEmoji }: EmojiPickerProps) {
  const [visible, setVisible] = useState(false);

  const handleSelect = (emoji: EmojiData) => {
    if ("native" in emoji) {
      onSelectEmoji(emoji.native);
    }
    setVisible(false);
  };

  return (
    <Popover
      content={<Picker onSelect={handleSelect} />}
      trigger="click"
      visible={visible}
      onVisibleChange={(v) => setVisible(v)}
    >
      <Button
        icon={<SmileOutlined />}
        className="text-gray-600 hover:text-cyan-600"
      />
    </Popover>
  );
}
