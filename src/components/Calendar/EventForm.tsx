import { useState } from "react";
import { Form, Input, DatePicker, TimePicker, Button } from "antd";
import moment from "moment";

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

  const handleSave = () => {
    if (title && date) {
      onSave({ title, description, date });
    }
  };

  return (
    <Form layout="vertical" className="p-4 bg-white rounded-lg shadow-md">
      <Form.Item label="Event Title" required>
        <Input value={title} onChange={(e) => setTitle(e.target.value)} />
      </Form.Item>
      <Form.Item label="Description">
        <Input.TextArea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={3}
        />
      </Form.Item>
      <Form.Item label="Date" required>
        <DatePicker
          value={date ? moment(date) : null}
          onChange={(d) => setDate(d ? d.toDate() : null)}
          className="w-full"
        />
      </Form.Item>
      <Form.Item label="Time">
        <TimePicker
          value={date ? moment(date) : null}
          onChange={(time) => {
            if (date && time) {
              const newDate = moment(date);
              newDate.hour(time.hour()).minute(time.minute());
              setDate(newDate.toDate());
            }
          }}
          format="HH:mm"
          className="w-full"
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
