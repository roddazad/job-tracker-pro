export default function Testimonial() {
  const testimonials = [
    {
      name: 'Sara M.',
      role: 'Frontend Developer',
      quote: "Job Tracker Pro helped me organize my job search like a pro. No more sticky notes or forgotten applications!",
      image: '/images/sara.jpeg',
    },
    {
      name: 'David L.',
      role: 'Full-Stack Engineer',
      quote: "The clean UI and tracking tools kept me on top of deadlines and interviews — I landed my dream job!",
      image: '/images/david.jpeg',
    },
    {
      name: 'Emily R.',
      role: 'UI/UX Designer',
      quote: "Beautifully designed and incredibly useful. Every serious job seeker needs this app!",
      image: '/images/emily.jpeg',
    },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">What Our Users Are Saying</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-md">
              <img
                src={t.image}
                alt={t.name}
                className="w-16 h-16 mx-auto rounded-full mb-4 object-cover"
              />
              <p className="italic text-gray-700">"{t.quote}"</p>
              <div className="mt-4">
                <h4 className="font-semibold text-gray-900">{t.name}</h4>
                <span className="text-sm text-gray-500">{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}