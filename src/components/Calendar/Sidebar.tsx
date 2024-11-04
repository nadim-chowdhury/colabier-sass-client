"use client";

import { Menu, Typography, DatePicker } from "antd";
import {
  FilterOutlined,
  SettingOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import { Dayjs } from "dayjs";

const { Text } = Typography;

interface SidebarProps {
  onFilterChange: (filter: { dateRange?: [Date, Date]; type?: string }) => void;
  onSettingsClick: () => void;
}

export default function Sidebar({
  onFilterChange,
  onSettingsClick,
}: SidebarProps) {
  const handleDateChange = (dates: [Dayjs | null, Dayjs | null] | null) => {
    if (dates && dates[0] && dates[1]) {
      const range: [Date, Date] = [dates[0].toDate(), dates[1].toDate()];
      onFilterChange({ dateRange: range });
    } else {
      onFilterChange({ dateRange: undefined });
    }
  };

  return (
    <div className="p-4 bg-gray-100 h-full">
      <Text className="text-lg font-semibold mb-4">Calendar Filters</Text>
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        className="bg-transparent"
      >
        <Menu.Item key="1" icon={<CalendarOutlined />}>
          <DatePicker.RangePicker onChange={handleDateChange} />
        </Menu.Item>
        <Menu.Item
          key="2"
          icon={<FilterOutlined />}
          onClick={() => onFilterChange({ type: "Meeting" })}
        >
          Meetings
        </Menu.Item>
        <Menu.Item
          key="3"
          icon={<FilterOutlined />}
          onClick={() => onFilterChange({ type: "Appointment" })}
        >
          Appointments
        </Menu.Item>
        <Menu.Item key="4" icon={<SettingOutlined />} onClick={onSettingsClick}>
          Settings
        </Menu.Item>
      </Menu>
    </div>
  );
}
