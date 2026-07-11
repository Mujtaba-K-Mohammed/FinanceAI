import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
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
      <ResponsiveContainer width="100%" height={320}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="4 4" stroke="#475569" />
          <XAxis dataKey="month" stroke="#cbd5e1" tick={{ fontSize: 14 }} />
          <YAxis stroke="#cbd5e1" tick={{ fontSize: 14 }} />

          <Tooltip
            contentStyle={{
              backgroundColor: "#1e293b",
              border: "1px solid #334155",
              borderRadius: "8px",
            }}
            itemStyle={{ color: "#ef4444" }}
          />

          <Bar
            dataKey="expenses"
            fill="#ef4444"
            radius={[6, 6, 0, 0]}
            barSize={40}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
