export default function StatsCard({ title, value }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow text-center">
      <p className="text-gray-500 text-sm">{title}</p>
      <h3 className="text-3xl font-bold text-blue-600">{value}</h3>
    </div>
  );
}