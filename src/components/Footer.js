import Link from 'next/link';
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-16 sticky">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Job Tracker Pro. All rights reserved.</p>

        <div className="flex gap-4 mt-4 md:mt-0">
          <Link href="#" className="hover:text-teal-400 transition text-sm">Privacy Policy</Link>
          <Link href="#" className="hover:text-teal-400 transition text-sm">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}