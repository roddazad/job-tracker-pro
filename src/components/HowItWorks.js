import Link from 'next/link';


export default function HowItWorks() {
  const steps = [
    {
      title: "Create Your Profile",
      description: "Set up your account, define your preferences, and get ready to track your job applications.",
      icon: "👤",
    },
    {
      title: "Track Applications",
      description: "Log every job you apply for, update statuses, and keep notes in one centralized place.",
      icon: "📋",
    },
    {
      title: "Stay Organized",
      description: "Visualize your progress and stay on top of upcoming interviews, follow-ups, and deadlines.",
      icon: "📈",
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-800">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="text-5xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-700">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10 text-center">
        <Link href="/sign-in">
  <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
    Get Started
  </button>
</Link>
</div>
    </section>
  );
}