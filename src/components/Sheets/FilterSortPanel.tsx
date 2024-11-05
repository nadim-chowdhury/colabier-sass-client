"use client";

import { useState } from "react";
import { Select, Button, Typography } from "antd";
import {
  BarChartOutlined,
  LineChartOutlined,
  PieChartOutlined,
} from "@ant-design/icons";

const { Title } = Typography;
const { Option } = Select;

interface ChartPanelProps {
  onGenerateChart: (chartType: string) => void;
}

export default function ChartPanel({ onGenerateChart }: ChartPanelProps) {
  const [chartType, setChartType] = useState<string>("bar");

  const handleGenerateChart = () => {
    onGenerateChart(chartType);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <Title level={5}>Generate Chart</Title>
      <Select
        value={chartType}
        onChange={(value) => setChartType(value)}
        className="w-full mb-2"
      >
        <Option value="bar" icon={<BarChartOutlined />}>
          Bar Chart
        </Option>
        <Option value="line" icon={<LineChartOutlined />}>
          Line Chart
        </Option>
        <Option value="pie" icon={<PieChartOutlined />}>
          Pie Chart
        </Option>
      </Select>
      <Button type="primary" onClick={handleGenerateChart} className="mt-2">
        Generate Chart
      </Button>
    </div>
  );
}
