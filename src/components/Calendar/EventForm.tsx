"use client";

import { useState } from "react";
import { Form, Input, DatePicker, TimePicker, Button, message } from "antd";
import dayjs, { Dayjs } from "dayjs";

interface EventFormProps {
  initialEvent?: { title: string; description: string; date: Date };
  onSave: (event: { title: string; description: string; date: Date }) => void;
}

export default function EventForm({ initialEvent, onSave }: EventFormProps) {
  const [title, setTitle] = useState(initialEvent?.title || "");
  const [description, setDescription] = useState(
    initialEvent?.description || ""
  );
  const [date, setDate] = useState<Date | null>(initialEvent?.date || null);
  const [time, setTime] = useState<Dayjs | null>(
    initialEvent ? dayjs(initialEvent.date) : null
  );

  const handleSave = () => {
    if (!title || !date || !time) {
      message.error("Please provide a title, date, and time for the event.");
      return;
    }

    const eventDate = dayjs(date)
      .hour(time.hour())
      .minute(time.minute())
      .toDate();
    onSave({ title, description, date: eventDate });
  };

  return (
    <Form layout="vertical" className="p-4 bg-white rounded-lg shadow-md">
      <Form.Item label="Event Title" required>
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter event title"
        />
      </Form.Item>
      <Form.Item label="Description">
        <Input.TextArea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={3}
          placeholder="Enter event description"
        />
      </Form.Item>
      <Form.Item label="Date" required>
        <DatePicker
          value={date ? dayjs(date) : null}
          onChange={(d) => {
            setDate(d ? d.toDate() : null);
            if (!time && d) {
              setTime(dayjs().startOf("hour"));
            }
          }}
          className="w-full"
          placeholder="Select date"
        />
      </Form.Item>
      <Form.Item label="Time" required>
        <TimePicker
          value={time}
          onChange={(t) => setTime(t)}
          format="HH:mm"
          className="w-full"
          placeholder="Select time"
          disabled={!date}
        />
      </Form.Item>
      <Button
        type="primary"
        onClick={handleSave}
        className="w-full bg-cyan-600 hover:bg-cyan-700"
      >
        {initialEvent ? "Save Changes" : "Create Event"}
      </Button>
    </Form>
  );
}
