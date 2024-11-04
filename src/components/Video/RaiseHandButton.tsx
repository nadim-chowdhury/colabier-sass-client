"use client";

import { Button } from "antd";
import { useState } from "react";
import { UpOutlined, CheckOutlined } from "@ant-design/icons";

interface RaiseHandButtonProps {
  onRaiseHand: () => void;
  onLowerHand: () => void;
}

export default function RaiseHandButton({
  onRaiseHand,
  onLowerHand,
}: RaiseHandButtonProps) {
  const [isHandRaised, setIsHandRaised] = useState(false);

  const toggleHand = () => {
    if (isHandRaised) {
      onLowerHand();
    } else {
      onRaiseHand();
    }
    setIsHandRaised(!isHandRaised);
  };

  return (
    <Button
      type={isHandRaised ? "default" : "primary"}
      icon={isHandRaised ? <CheckOutlined /> : <UpOutlined />}
      onClick={toggleHand}
    >
      {isHandRaised ? "Lower Hand" : "Raise Hand"}
    </Button>
  );
}
