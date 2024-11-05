interface Notification {
  id: string;
  message: string;
  type: "success" | "info" | "warning" | "error";
}

interface NotificationProps {
  notifications: Notification[];
  onDismiss: (id: string) => void;
}

export default function Notifications({
  notifications,
  onDismiss,
}: NotificationProps) {
  const getAlertStyle = (type: Notification["type"]) => {
    switch (type) {
      case "success":
        return "bg-green-100 text-green-800 border-green-200";
      case "info":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "warning":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "error":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "";
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Notifications</h2>
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className={`p-4 mb-4 border rounded ${getAlertStyle(
            notification.type
          )}`}
        >
          <p>{notification.message}</p>
          <button
            onClick={() => onDismiss(notification.id)}
            className="text-sm text-gray-600 underline mt-2 hover:text-gray-800"
          >
            Dismiss
          </button>
        </div>
      ))}
    </div>
  );
}
