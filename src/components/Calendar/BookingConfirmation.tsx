"use client";

import { Typography, Button } from "antd";

const { Title, Text } = Typography;

interface BookingConfirmationProps {
  event: { title: string; date: Date; location: string };
  onClose: () => void;
}

export default function BookingConfirmation({
  event,
  onClose,
}: BookingConfirmationProps) {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-center">
      <Title level={3} className="text-cyan-600">
        Booking Confirmed!
      </Title>
      <Text className="block text-lg font-semibold mt-2">{event.title}</Text>
      <Text className="block mt-1">{event.date.toLocaleString()}</Text>
      <Text className="block text-gray-500 mt-1">{event.location}</Text>
      <Button
        type="primary"
        onClick={onClose}
        className="mt-4 bg-cyan-600 hover:bg-cyan-700"
      >
        Back to Calendar
      </Button>
    </div>
  );
}
