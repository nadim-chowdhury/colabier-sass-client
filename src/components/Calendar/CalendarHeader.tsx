import { Button, Dropdown, Menu, Typography } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { useState } from "react";

const { Title } = Typography;

interface CalendarHeaderProps {
  currentDate: Date;
  onDateChange: (newDate: Date) => void;
  onViewChange: (view: string) => void;
}

export default function CalendarHeader({
  currentDate,
  onDateChange,
  onViewChange,
}: CalendarHeaderProps) {
  const [view, setView] = useState("month");

  const handlePrev = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() - 1);
    onDateChange(newDate);
  };

  const handleNext = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() + 1);
    onDateChange(newDate);
  };

  const handleViewChange = (view: string) => {
    setView(view);
    onViewChange(view);
  };

  return (
    <div className="flex items-center justify-between p-4 bg-white shadow-md rounded-lg">
      <Button icon={<LeftOutlined />} onClick={handlePrev} />
      <Title level={4}>
        {currentDate.toLocaleDateString("en-US", {
          month: "long",
          year: "numeric",
        })}
      </Title>
      <Button icon={<RightOutlined />} onClick={handleNext} />

      <Dropdown
        overlay={
          <Menu onClick={(e) => handleViewChange(e.key)}>
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
