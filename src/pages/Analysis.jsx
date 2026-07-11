import Layout from "../layout/Layout";

export default function Analysis() {
  const data = [
    { metric: "نسبة الادخار", value: "25%" },
    { metric: "نسبة المصاريف", value: "51%" },
    { metric: "نسبة الدخل الحر", value: "24%" },
  ];

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">التحليل المالي</h1>

      <div className="bg-slate-900 p-5 rounded-xl border border-slate-800 shadow-lg">
        {/* زر تحديث التحليل */}
        <button className="mb-4 bg-emerald-600 px-5 py-2 rounded-lg shadow-md hover:bg-emerald-700 transition">
          تحديث التحليل
        </button>

        <table className="w-full text-left text-lg">
          <thead>
            <tr className="border-b border-slate-800 hover:bg-slate-800/50 transition">
              <th className="py-2">العنصر</th>
              <th className="py-2">القيمة</th>
              <th className="py-2">خيارات</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="border-b border-slate-800">
                <td className="py-2">{item.metric}</td>
                <td className="py-2 text-emerald-400">{item.value}</td>

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
    </Layout>
  );
}
