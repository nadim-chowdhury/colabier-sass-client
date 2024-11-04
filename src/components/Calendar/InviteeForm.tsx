import { Form, Input, Button, Typography } from "antd";
import { useState } from "react";

const { Text } = Typography;

interface InviteeFormProps {
  onSubmit: (invitee: {
    name: string;
    email: string;
    message?: string;
  }) => void;
}

export default function InviteeForm({ onSubmit }: InviteeFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    if (name && email) {
      onSubmit({ name, email, message });
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <Form layout="vertical" className="p-4 bg-white rounded-lg shadow-md">
      <Text className="text-lg font-semibold">Book an Event</Text>
      <Form.Item label="Name" required>
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
      </Form.Item>
      <Form.Item label="Email" required>
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
      </Form.Item>
      <Form.Item label="Message (optional)">
        <Input.TextArea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={3}
          placeholder="Additional message"
        />
      </Form.Item>
      <Button
        type="primary"
        onClick={handleSubmit}
        className="w-full bg-cyan-600 hover:bg-cyan-700"
      >
        Confirm Booking
      </Button>
    </Form>
  );
}
