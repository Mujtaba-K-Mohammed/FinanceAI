import Sidebar from "../components/Sidebar";

export default function Income() {
  const data = [
    { source: "راتب شهري", amount: 4500 },
    { source: "عمل جانبي", amount: 1200 },
    { source: "استثمار", amount: 800 },
  ];

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 bg-slate-950 text-slate-100 p-6">
        <h1 className="text-3xl font-bold mb-6">الدخل</h1>

        <div className="bg-slate-900 p-5 rounded-xl border border-slate-800 shadow-lg">
          {/* زر إضافة دخل */}
          <button className="mb-4 bg-emerald-600 px-5 py-2 rounded-lg shadow-md hover:bg-emerald-700 transition">
            + إضافة دخل
          </button>

          <table className="w-full text-left text-lg">
            <thead>
              <tr className="border-b border-slate-800 hover:bg-slate-800/50 transition">
                <th className="py-3">المصدر</th>
                <th className="py-3">المبلغ</th>
                <th className="py-3">خيارات</th>
              </tr>
            </thead>

            <tbody>
              {data.map((item, index) => (
                <tr key={index} className="border-b border-slate-800">
                  <td className="py-3">{item.source}</td>
                  <td className="py-3 text-emerald-400">${item.amount}</td>

                  <td className="py-3">
                    <button className="bg-blue-600 px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition mr-2">
                      تعديل
                    </button>

                    <button className="bg-red-600 px-4 py-2 rounded-lg shadow-md hover:bg-red-700 transition">
                      حذف
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
