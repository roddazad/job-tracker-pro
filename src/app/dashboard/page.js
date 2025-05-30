import StatsCard from '../../components/StatsCard';

const stats = [
  { title: 'Applications', value: 12 },
  { title: 'Interviews', value: 3 },
  { title: 'Offers', value: 1 },
  { title: 'Rejections', value: 4 },
];

export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Dashboard Overview</h1>
      <p className="mb-6">
        Welcome to your job tracker dashboard. Here you'll manage your applications and interviews.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <StatsCard key={stat.title} title={stat.title} value={stat.value} />
        ))}
      </div>
    </div>
  );
}