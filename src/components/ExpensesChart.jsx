import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", expenses: 2300 },
  { month: "Feb", expenses: 2100 },
  { month: "Mar", expenses: 2500 },
  { month: "Apr", expenses: 2000 },
  { month: "May", expenses: 2700 },
];

export default function ExpensesChart() {
  return (
    <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 shadow-lg mt-8 hover:shadow-2xl transition">
      <div className="w-full h-[220px] sm:h-[260px] md:h-[320px] lg:h-[380px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="4 4" stroke="#475569" />
            <XAxis dataKey="month" stroke="#cbd5e1" tick={{ fontSize: 14 }} />
            <YAxis stroke="#cbd5e1" tick={{ fontSize: 14 }} />

            {/* Tooltip Removed */}

            <Bar
              dataKey="expenses"
              fill="#ef4444"
              radius={[6, 6, 0, 0]}
              barSize={40}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
