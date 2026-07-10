import { Link, useLocation } from "react-router-dom";

export default function Sidebar({ isOpen, onClose }) {
  const { pathname } = useLocation();

  const linkClass = (path) =>
    `block p-3 rounded-lg transition ${
      pathname === path
        ? "bg-slate-800 text-white"
        : "text-slate-300 hover:bg-slate-800 hover:text-white"
    }`;

  return (
    <div
      className={`
        bg-slate-900 min-h-screen p-6 border-r border-slate-800 shadow-xl
        w-64 fixed md:static top-0 left-0 z-50
        transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
      `}
    >
      <button className="md:hidden text-slate-300 mb-4" onClick={onClose}>
        ✕ إغلاق
      </button>

      <h2 className="text-2xl font-bold mb-8 tracking-wide">
        Finance<span className="text-emerald-400">AI</span>
      </h2>

      <nav className="space-y-2 text-lg">
        <Link to="/dashboard" className={linkClass("/dashboard")}>لوحة التحكم</Link>
        <Link to="/income" className={linkClass("/income")}>الدخل</Link>
        <Link to="/expenses" className={linkClass("/expenses")}>المصاريف</Link>
        <Link to="/savings" className={linkClass("/savings")}>المدخرات</Link>
        <Link to="/analysis" className={linkClass("/analysis")}>التحليل</Link>
        <Link to="/settings" className={linkClass("/settings")}>الإعدادات</Link>
      </nav>
    </div>
  );
}
