import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen fixed left-0 top-0 bg-white shadow-md p-6">
      <h2 className="text-xl font-bold mb-6">Job Tracker</h2>
      <ul className="space-y-4 text-sm font-medium">
        <li>
          <Link href="/dashboard" className="text-blue-600 hover:underline">
            Overview
          </Link>
        </li>
        <li>
          <Link href="/dashboard/add-job" className="hover:text-teal-400">
            Add Job
          </Link>
        </li>
        <li>
          <Link href="/dashboard/applications" className="hover:underline">
            Applications
          </Link>
        </li>
        <li>
          <Link href="/dashboard/interviews" className="hover:underline">
            Interviews
          </Link>
        </li>
      </ul>
    </aside>
  );
}