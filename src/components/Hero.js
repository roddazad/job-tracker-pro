import Link from 'next/link';

export default function Hero () {
    return (
        <section className="relative h-[80vh] w-full">
  <img
    src="/images/hero.png"
    alt="Job Tracker Hero"
    className="absolute inset-0 h-full w-full object-cover z-0"
  />
  <div className="absolute inset-0 bg-black/50 z-10" />

  <div className="relative z-20 h-full flex flex-col justify-center items-center text-center text-white px-4">
    <h1 className="text-4xl md:text-6xl font-bold mb-4">Track Your Job Hunt</h1>
    <p className="text-lg md:text-xl max-w-2xl">
      Stay organized, focused, and one step ahead in your job search journey.
    </p>
    <Link href="/sign-in">
  <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
    Get Started
  </button>
</Link>
  </div>
  
</section>
    )
}