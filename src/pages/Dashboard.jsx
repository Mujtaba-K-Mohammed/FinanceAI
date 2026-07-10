import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import IncomeChart from "../components/IncomeChart";
import ExpensesChart from "../components/ExpensesChart";

export default function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 bg-slate-950 text-slate-100">
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-6">لوحة التحكم</h1>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 shadow-lg hover:shadow-2xl transition">
              <h2 className="text-xl font-bold mb-3">الدخل الشهري</h2>
              <p className="text-emerald-400 text-3xl font-semibold">$4500</p>
            </div>

            <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 shadow-lg hover:shadow-2xl transition">
              <h2 className="text-xl font-bold mb-3">المصاريف الشهرية</h2>
              <p className="text-red-400 text-3xl font-semibold">$2100</p>
            </div>

            <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 shadow-lg hover:shadow-2xl transition">
              <h2 className="text-xl font-bold mb-3">المدخرات</h2>
              <p className="text-sky-400 text-3xl font-semibold">$3500</p>
            </div>
          </div>
          {/* AI Analysis */}
          <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 shadow-lg hover:shadow-2xl transition">
            <h2 className="text-xl font-bold mb-3">تحليل الذكاء الاصطناعي</h2>
            <p className="text-slate-300 leading-relaxed text-lg">
              وضعك المالي جيد. يمكنك تحسين المدخرات عبر تقليل المصاريف الشهرية
              بنسبة 10%.
            </p>
          </div>

          {/* Chart */}
          <IncomeChart />
          <ExpensesChart />
        </div>
      </div>
    </div>
  );
}
