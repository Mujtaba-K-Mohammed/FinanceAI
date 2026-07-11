import Layout from "../layout/Layout";

export default function Expenses() {
  const data = [
    { type: "إيجار", amount: 1500 },
    { type: "فواتير", amount: 400 },
    { type: "مصاريف يومية", amount: 300 },
    { type: "مواصلات", amount: 100 },
  ];

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">المصاريف</h1>

      <div className="bg-slate-900 p-5 rounded-xl border border-slate-800 shadow-lg">
        {/* زر إضافة مصروف */}
        <button className="mb-4 bg-emerald-600 px-5 py-2 rounded-lg shadow-md hover:bg-emerald-700 transition">
          + إضافة مصروف
        </button>

        {/* جدول متجاوب */}
        <div className="overflow-x-auto rounded-xl">
          <table className="w-full text-left text-base md:text-lg">
            <thead>
              <tr className="border-b border-slate-800 bg-slate-800/30">
                <th className="py-3 px-2">النوع</th>
                <th className="py-3 px-2">المبلغ</th>
                <th className="py-3 px-2">خيارات</th>
              </tr>
            </thead>

            <tbody>
              {data.map((item, index) => (
                <tr key={index} className="border-b border-slate-800">
                  <td className="py-3 px-2">{item.type}</td>

                  <td className="py-3 px-2 text-red-400">${item.amount}</td>

                  <td className="py-3 px-2 flex flex-wrap gap-2">
                    <button className="bg-blue-600 px-3 py-2 rounded-lg shadow-md hover:bg-blue-700 transition text-sm">
                      تعديل
                    </button>

                    <button className="bg-red-600 px-3 py-2 rounded-lg shadow-md hover:bg-red-700 transition text-sm">
                      حذف
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}
