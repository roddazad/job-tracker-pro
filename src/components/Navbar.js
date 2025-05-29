'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-md sticky top-0 z-20">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <Link href="/" className="text-2xl font-bold text-teal-400">JobTrackerPro</Link>
        <ul className="flex gap-6 text-sm font-medium">
          <li><Link href="/dashboard" className="hover:text-teal-400">Dashboard</Link></li>
          <li><Link href="/add-job" className="hover:text-teal-400">Add Job</Link></li>
          <li><Link href="/about" className="hover:text-teal-400">About</Link></li>
        </ul>
      </div>
    </nav>
  )
}