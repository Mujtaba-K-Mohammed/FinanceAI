export default function Navbar() {
  return (
    <div className="w-full bg-slate-900 border-b border-slate-800 p-4 flex items-center justify-between shadow-lg">
      {/* العنوان */}
      <h2 className="text-2xl font-bold tracking-wide text-slate-200">
        مرحبًا، مجتبى 👋
      </h2>

      {/* الأزرار */}
      <div className="flex items-center gap-4">
        {/* زر الإشعارات */}
        <button className="bg-slate-800 px-4 py-2 rounded-lg hover:bg-slate-700 transition shadow-md text-xl">
          🔔
        </button>

        {/* زر تسجيل الخروج */}
        <button className="bg-red-600 px-5 py-2 rounded-lg hover:bg-red-700 transition shadow-md font-semibold">
          تسجيل الخروج
        </button>
        <button
          className=" text-slate-100 text-2xl"
          onClick={() => setSidebarOpen(true)}
        >
          ☰
        </button>
      </div>
    </div>
  );
}
