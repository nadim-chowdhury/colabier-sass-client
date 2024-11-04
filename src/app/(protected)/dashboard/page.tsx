import Link from "next/link";

export default function DashboardPage() {
  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
      <nav>
        <ul>
          <li>
            <Link href="/chat">Chat</Link>
          </li>
          <li>
            <Link href="/task-manager">Task Manager</Link>
          </li>
          <li>
            <Link href="/calendar">Calendar</Link>
          </li>
          <li>
            <Link href="/design-tool">Design Tool</Link>
          </li>
          <li>
            <Link href="/docs">Docs</Link>
          </li>
          <li>
            <Link href="/sheets">Sheets</Link>
          </li>
          <li>
            <Link href="/web-builder">Website Builder</Link>
          </li>
          <li>
            <Link href="/web-builder">Meetings</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
