import Layout from "../layout/Layout";
import IncomeChart from "../components/IncomeChart";
import ExpensesChart from "../components/ExpensesChart";

export default function Dashboard() {
  return (
    <Layout>
      <h1 className="text-2xl md:text-3xl font-bold mb-6">لوحة التحكم</h1>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-6">
        <div className="bg-slate-900 p-4 md:p-6 rounded-xl border border-slate-800 shadow-lg">
          <h2 className="text-lg md:text-xl font-bold mb-3">الدخل الشهري</h2>
          <p className="text-emerald-400 text-2xl md:text-3xl font-semibold">
            $4500
          </p>
        </div>

        <div className="bg-slate-900 p-4 md:p-6 rounded-xl border border-slate-800 shadow-lg">
          <h2 className="text-lg md:text-xl font-bold mb-3">
            المصاريف الشهرية
          </h2>
          <p className="text-red-400 text-2xl md:text-3xl font-semibold">
            $2100
          </p>
        </div>

        <div className="bg-slate-900 p-4 md:p-6 rounded-xl border border-slate-800 shadow-lg">
          <h2 className="text-lg md:text-xl font-bold mb-3">المدخرات</h2>
          <p className="text-sky-400 text-2xl md:text-3xl font-semibold">
            $3500
          </p>
        </div>
      </div>

      {/* AI Analysis */}
      <div className="bg-slate-900 p-4 md:p-6 rounded-xl border border-slate-800 shadow-lg mb-6">
        <h2 className="text-lg md:text-xl font-bold mb-3">
          تحليل الذكاء الاصطناعي
        </h2>
        <p className="text-slate-300 leading-relaxed text-base md:text-lg">
          وضعك المالي جيد. يمكنك تحسين المدخرات عبر تقليل المصاريف الشهرية بنسبة
          10%.
        </p>
      </div>

      {/* Income Chart */}
      <div className="w-full h-[240px] sm:h-[300px] md:h-[420px] lg:h-[480px] mb-6">
        <IncomeChart />
      </div>

      {/* Expenses Chart */}
      <div className="w-full h-[240px] sm:h-[300px] md:h-[420px] lg:h-[480px] mb-6">
        <ExpensesChart />
      </div>
    </Layout>
  );
}
