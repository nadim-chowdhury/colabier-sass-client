"use client";

import { useState } from "react";
import { Button, Dropdown, Menu, Typography } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const { Title } = Typography;

interface CalendarHeaderProps {
  currentDate: Date;
  onDateChange: (newDate: Date) => void;
  onViewChange: (view: "day" | "week" | "month") => void;
}

export default function CalendarHeader({
  currentDate,
  onDateChange,
  onViewChange,
}: CalendarHeaderProps) {
  const [view, setView] = useState("month");

  const handlePrev = () => {
    const newDate = new Date(currentDate);
    if (view === "month") newDate.setMonth(newDate.getMonth() - 1);
    else if (view === "week") newDate.setDate(newDate.getDate() - 7);
    else newDate.setDate(newDate.getDate() - 1);
    onDateChange(newDate);
  };

  const handleNext = () => {
    const newDate = new Date(currentDate);
    if (view === "month") newDate.setMonth(newDate.getMonth() + 1);
    else if (view === "week") newDate.setDate(newDate.getDate() + 7);
    else newDate.setDate(newDate.getDate() + 1);
    onDateChange(newDate);
  };

  const handleViewChange = (view: "day" | "week" | "month") => {
    setView(view);
    onViewChange(view);
  };

  return (
    <div className="flex items-center justify-between p-4 bg-white shadow-md">
      <Button icon={<LeftOutlined />} onClick={handlePrev} />
      <Title level={4}>{currentDate.toDateString()}</Title>
      <Button icon={<RightOutlined />} onClick={handleNext} />
      <Dropdown
        overlay={
          <Menu
            onClick={(e) => handleViewChange(e.key as "day" | "week" | "month")}
          >
            <Menu.Item key="day">Day View</Menu.Item>
            <Menu.Item key="week">Week View</Menu.Item>
            <Menu.Item key="month">Month View</Menu.Item>
          </Menu>
        }
      >
        <Button>{view.charAt(0).toUpperCase() + view.slice(1)} View</Button>
      </Dropdown>
    </div>
  );
}
