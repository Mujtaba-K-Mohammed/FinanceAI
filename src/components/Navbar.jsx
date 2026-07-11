export default function Navbar({ setSidebarOpen }) {
  return (
    <nav className="bg-slate-900 p-4 border-b border-slate-800 flex items-center justify-between">
      {/* زر فتح السايدبار في التلفون */}
      <button
        className="md:hidden text-slate-100 text-2xl"
        onClick={() => setSidebarOpen(true)}
      >
        ☰
      </button>

      <h1 className="text-xl font-bold">مرحباً، مجتبى 👋</h1>

      <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg">
        تسجيل الخروج
      </button>
    </nav>
  );
}
