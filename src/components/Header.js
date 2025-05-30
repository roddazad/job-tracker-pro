export default function Header() {
  return (
    <header className="bg-white shadow-sm p-4 flex justify-between items-center z-10">
      <h1 className="text-lg font-semibold">Welcome back, Rodd 👋</h1>
      <button className="text-sm bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
        Logout
      </button>
    </header>
  );
}