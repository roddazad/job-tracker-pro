'use client';

import { useState } from 'react';

const mockInterviews = [
  {
    id: 1,
    company: 'Google',
    role: 'Frontend Engineer',
    date: '2025-06-01',
    time: '10:00 AM',
    mode: 'Virtual',
  },
  {
    id: 2,
    company: 'Amazon',
    role: 'React Developer',
    date: '2025-06-03',
    time: '1:30 PM',
    mode: 'On-site',
  },
];

export default function InterviewsPage() {
  const [interviews, setInterviews] = useState(mockInterviews);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Upcoming Interviews</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded shadow-md">
          <thead className="bg-gray-100 text-left text-sm uppercase text-gray-600">
            <tr>
              <th className="p-4">Company</th>
              <th className="p-4">Role</th>
              <th className="p-4">Date</th>
              <th className="p-4">Time</th>
              <th className="p-4">Mode</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {interviews.map((interview) => (
              <tr key={interview.id} className="border-t hover:bg-gray-50">
                <td className="p-4">{interview.company}</td>
                <td className="p-4">{interview.role}</td>
                <td className="p-4">{interview.date}</td>
                <td className="p-4">{interview.time}</td>
                <td className="p-4">{interview.mode}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}