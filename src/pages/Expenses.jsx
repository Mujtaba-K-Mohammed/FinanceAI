import Sidebar from "../components/Sidebar";

export default function Expenses() {
  const data = [
    { type: "إيجار", amount: 1500 },
    { type: "فواتير", amount: 400 },
    { type: "مصاريف يومية", amount: 300 },
    { type: "مواصلات", amount: 100 },
  ];

  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 bg-slate-950 text-slate-100 p-6">
        <h1 className="text-3xl font-bold mb-6">المصاريف</h1>

        <div className="bg-slate-900 p-5 rounded-xl border border-slate-800">
          {/* زر إضافة مصروف */}
          <button className="mb-4 bg-emerald-600 px-5 py-2 rounded-lg shadow-md hover:bg-emerald-700 transition">
            + إضافة مصروف
          </button>

          <table className="w-full text-left text-lg">
            <thead>
              <tr className="border-b border-slate-800 hover:bg-slate-800/50 transition">
                <th className="py-2">النوع</th>
                <th className="py-2">المبلغ</th>
                <th className="py-2">خيارات</th>
              </tr>
            </thead>

            <tbody>
              {data.map((item, index) => (
                <tr key={index} className="border-b border-slate-800">
                  <td className="py-2">{item.type}</td>
                  <td className="py-2 text-red-400">${item.amount}</td>

                  {/* أزرار تعديل وحذف */}
                  <td className="py-2">
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
