"use client";

import { Button, Tooltip } from "antd";
import {
  BoldOutlined,
  ItalicOutlined,
  OrderedListOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";

interface ToolbarProps {
  content: string;
  onContentChange: (content: string) => void;
}

export default function Toolbar({ content, onContentChange }: ToolbarProps) {
  const applyFormatting = (format: string) => {
    let formattedText = content;
    switch (format) {
      case "bold":
        formattedText += "**Bold Text** ";
        break;
      case "italic":
        formattedText += "_Italic Text_ ";
        break;
      case "orderedList":
        formattedText += "1. List item\n";
        break;
      case "unorderedList":
        formattedText += "- List item\n";
        break;
      default:
        break;
    }
    onContentChange(formattedText);
  };

  return (
    <div className="flex space-x-2 mb-4">
      <Tooltip title="Bold">
        <Button
          icon={<BoldOutlined />}
          onClick={() => applyFormatting("bold")}
        />
      </Tooltip>
      <Tooltip title="Italic">
        <Button
          icon={<ItalicOutlined />}
          onClick={() => applyFormatting("italic")}
        />
      </Tooltip>
      <Tooltip title="Ordered List">
        <Button
          icon={<OrderedListOutlined />}
          onClick={() => applyFormatting("orderedList")}
        />
      </Tooltip>
      <Tooltip title="Unordered List">
        <Button
          icon={<UnorderedListOutlined />}
          onClick={() => applyFormatting("unorderedList")}
        />
      </Tooltip>
    </div>
  );
}
