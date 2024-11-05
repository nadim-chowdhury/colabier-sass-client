"use client";

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
      <h3 className="text-2xl font-bold text-cyan-600">Booking Confirmed!</h3>
      <p className="text-lg font-semibold mt-2">{event.title}</p>
      <p className="mt-1">{event.date.toLocaleString()}</p>
      <p className="text-gray-500 mt-1">{event.location}</p>
      <button
        onClick={onClose}
        className="mt-4 px-4 py-2 bg-cyan-600 text-white rounded hover:bg-cyan-700"
      >
        Back to Calendar
      </button>
    </div>
  );
}
