"use client";

import { Button, Tooltip, Typography } from "antd";
import {
  AlignLeftOutlined,
  AlignCenterOutlined,
  AlignRightOutlined,
  VerticalAlignTopOutlined,
  VerticalAlignMiddleOutlined,
  VerticalAlignBottomOutlined,
} from "@ant-design/icons";

const { Text } = Typography;

interface AlignmentToolsProps {
  onAlignLeft: () => void;
  onAlignCenter: () => void;
  onAlignRight: () => void;
  onAlignTop: () => void;
  onAlignMiddle: () => void;
  onAlignBottom: () => void;
}

export default function AlignmentTools({
  onAlignLeft,
  onAlignCenter,
  onAlignRight,
  onAlignTop,
  onAlignMiddle,
  onAlignBottom,
}: AlignmentToolsProps) {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <Text className="text-lg font-semibold">Alignment Tools</Text>
      <div className="flex items-center space-x-2 mt-4">
        <Tooltip title="Align Left">
          <Button icon={<AlignLeftOutlined />} onClick={onAlignLeft} />
        </Tooltip>
        <Tooltip title="Align Center">
          <Button icon={<AlignCenterOutlined />} onClick={onAlignCenter} />
        </Tooltip>
        <Tooltip title="Align Right">
          <Button icon={<AlignRightOutlined />} onClick={onAlignRight} />
        </Tooltip>
        <Tooltip title="Align Top">
          <Button icon={<VerticalAlignTopOutlined />} onClick={onAlignTop} />
        </Tooltip>
        <Tooltip title="Align Middle">
          <Button
            icon={<VerticalAlignMiddleOutlined />}
            onClick={onAlignMiddle}
          />
        </Tooltip>
        <Tooltip title="Align Bottom">
          <Button
            icon={<VerticalAlignBottomOutlined />}
            onClick={onAlignBottom}
          />
        </Tooltip>
      </div>
    </div>
  );
}
