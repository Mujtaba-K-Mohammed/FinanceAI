import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
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
      <div className="w-full h-[220px] sm:h-[260px] md:h-[320px] lg:h-[380px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="4 4" stroke="#475569" />
            <XAxis dataKey="month" stroke="#cbd5e1" tick={{ fontSize: 14 }} />
            <YAxis stroke="#cbd5e1" tick={{ fontSize: 14 }} />

            {/* Tooltip Removed */}

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
