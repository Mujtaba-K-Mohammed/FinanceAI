import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", income: 4000 },
  { month: "Feb", income: 4500 },
  { month: "Mar", income: 4700 },
  { month: "Apr", income: 4300 },
  { month: "May", income: 5000 },
];

export default function IncomeChart() {
  return (
    <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 shadow-lg mt-8 hover:shadow-2xl transition">
      {/* ارتفاع الرسم البياني حسب حجم الشاشة */}
      <div className="w-full h-[220px] sm:h-[260px] md:h-[320px] lg:h-[380px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="4 4" stroke="#475569" />
            <XAxis dataKey="month" stroke="#cbd5e1" tick={{ fontSize: 14 }} />
            <YAxis stroke="#cbd5e1" tick={{ fontSize: 14 }} />

            <Tooltip
              contentStyle={{
                backgroundColor: "#1e293b",
                border: "1px solid #334155",
                borderRadius: "8px",
              }}
              itemStyle={{ color: "#10b981" }}
            />

            <Line
              type="monotone"
              dataKey="income"
              stroke="#10b981"
              strokeWidth={4}
              dot={{ r: 5 }}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
