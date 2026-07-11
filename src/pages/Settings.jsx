import Layout from "../layout/Layout";

export default function Settings() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">الإعدادات</h1>

      {/* تغيير اللغة */}
      <div className="bg-slate-900 p-5 rounded-xl border border-slate-800 mb-6">
        <h2 className="text-xl font-semibold mb-3">اللغة</h2>
        <select className="bg-slate-800 p-2 rounded-lg w-full">
          <option>العربية</option>
          <option>English</option>
        </select>
      </div>

      {/* تغيير الثيم */}
      <div className="bg-slate-900 p-5 rounded-xl border border-slate-800 mb-6">
        <h2 className="text-xl font-semibold mb-3">الثيم</h2>
        <select className="bg-slate-800 p-2 rounded-lg w-full">
          <option>داكن</option>
          <option>فاتح</option>
        </select>
      </div>

      {/* معلومات الحساب */}
      <div className="bg-slate-900 p-5 rounded-xl border border-slate-800">
        <h2 className="text-xl font-semibold mb-3">معلومات الحساب</h2>

        <p className="text-slate-300 mb-2">الاسم: مجتبى</p>
        <p className="text-slate-300 mb-2">
          البريد الإلكتروني: example@gmail.com
        </p>

        <button className="mt-4 bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition">
          تعديل المعلومات
        </button>
      </div>
    </Layout>
  );
}
