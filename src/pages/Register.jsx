export default function Register() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          إنشاء حساب جديد
        </h2>

        <form className="space-y-4">
          <div>
            <label className="block mb-1 text-gray-700">الاسم الكامل</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="الاسم"
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-700">البريد الإلكتروني</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="example@gmail.com"
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-700">كلمة المرور</label>
            <input
              type="password"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="********"
            />
          </div>

          <button className="w-full bg-emerald-600 text-white py-2 rounded-lg hover:bg-emerald-700 transition">
            إنشاء حساب
          </button>
        </form>
      </div>
    </div>
  );
}
