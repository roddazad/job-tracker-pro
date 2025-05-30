'use client';

import { useState } from 'react';

const mockApplications = [
  {
    id: 1,
    company: 'Google',
    title: 'Frontend Engineer',
    date: '2025-05-01',
    status: 'Interview',
  },
  {
    id: 2,
    company: 'Netflix',
    title: 'UI Developer',
    date: '2025-05-05',
    status: 'Applied',
  },
  {
    id: 3,
    company: 'Amazon',
    title: 'React Developer',
    date: '2025-05-10',
    status: 'Rejected',
  },
];

export default function ApplicationsPage() {
  const [applications, setApplications] = useState(mockApplications);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">My Applications</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded shadow-md">
          <thead className="bg-gray-100 text-left text-sm uppercase text-gray-600">
            <tr>
              <th className="p-4">Company</th>
              <th className="p-4">Position</th>
              <th className="p-4">Date Applied</th>
              <th className="p-4">Status</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {applications.map((app) => (
              <tr key={app.id} className="border-t hover:bg-gray-50">
                <td className="p-4">{app.company}</td>
                <td className="p-4">{app.title}</td>
                <td className="p-4">{app.date}</td>
                <td className="p-4">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      app.status === 'Interview'
                        ? 'bg-blue-100 text-blue-700'
                        : app.status === 'Rejected'
                        ? 'bg-red-100 text-red-700'
                        : 'bg-yellow-100 text-yellow-700'
                    }`}
                  >
                    {app.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}