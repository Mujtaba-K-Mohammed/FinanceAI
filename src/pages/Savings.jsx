import Layout from "../layout/Layout";

export default function Savings() {
  const data = [
    { goal: "صندوق طوارئ", saved: 2000 },
    { goal: "شراء سيارة", saved: 3500 },
    { goal: "سفر", saved: 1200 },
  ];

  return (
    <Layout>
      <div className="p-4 sm:p-5 md:p-6 space-y-8">
        <h1 className="text-3xl font-bold">المدخرات</h1>

        <div className="bg-slate-900 p-5 rounded-xl border border-slate-800 shadow-lg">
          {/* زر إضافة هدف ادخار */}
          <button className="mb-4 bg-emerald-600 px-5 py-2 rounded-lg shadow-md hover:bg-emerald-700 transition">
            + إضافة هدف ادخار
          </button>

          {/* جدول متجاوب */}
          <div className="overflow-x-auto rounded-xl">
            <table className="w-full text-left text-base md:text-lg">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-800/30">
                  <th className="py-3 px-2">الهدف</th>
                  <th className="py-3 px-2">المبلغ المدخر</th>
                  <th className="py-3 px-2">خيارات</th>
                </tr>
              </thead>

              <tbody>
                {data.map((item, index) => (
                  <tr key={index} className="border-b border-slate-800">
                    <td className="py-3 px-2">{item.goal}</td>

                    <td className="py-3 px-2 text-sky-400">${item.saved}</td>

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
      </div>
    </Layout>
  );
}
