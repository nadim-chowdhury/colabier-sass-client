"use client";

import { useState } from "react";

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email) {
      onSubmit({ name, email, message });
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Book an Event</h2>
      <div className="mb-4">
        <label className="block font-semibold mb-1">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block font-semibold mb-1">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block font-semibold mb-1">Message (optional)</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={3}
          placeholder="Additional message"
          className="w-full p-2 border rounded"
        />
      </div>
      <button
        type="submit"
        className="w-full px-4 py-2 bg-cyan-600 text-white rounded hover:bg-cyan-700"
      >
        Confirm Booking
      </button>
    </form>
  );
}
