import Layout from "../layout/Layout";

export default function Income() {
  const data = [
    { source: "راتب شهري", amount: 4500 },
    { source: "عمل جانبي", amount: 1200 },
    { source: "استثمار", amount: 800 },
  ];

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">الدخل</h1>

      <div className="bg-slate-900 p-5 rounded-xl border border-slate-800 shadow-lg">
        {/* زر إضافة دخل */}
        <button className="mb-4 bg-emerald-600 px-5 py-2 rounded-lg shadow-md hover:bg-emerald-700 transition">
          + إضافة دخل
        </button>

        {/* جدول متجاوب */}
        <div className="overflow-x-auto rounded-xl">
          <table className="w-full text-left text-base md:text-lg">
            <thead>
              <tr className="border-b border-slate-800 bg-slate-800/30">
                <th className="py-3 px-2">المصدر</th>
                <th className="py-3 px-2">المبلغ</th>
                <th className="py-3 px-2">خيارات</th>
              </tr>
            </thead>

            <tbody>
              {data.map((item, index) => (
                <tr key={index} className="border-b border-slate-800">
                  <td className="py-3 px-2">{item.source}</td>

                  <td className="py-3 px-2 text-emerald-400">${item.amount}</td>

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
