import { Link } from "react-router-dom";
export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center">
      <div className="w-full max-w-4xl px-4">
        {/* Header */}
        <header className="flex items-center justify-between mb-10">
          <h1 className="text-2xl font-bold">
            Finance<span className="text-emerald-400">AI</span>
          </h1>
          ...
          <Link
            to="/login"
            className="border border-slate-700 px-4 py-1 rounded-lg text-sm hover:bg-slate-800"
          >
            تسجيل الدخول
          </Link>
        </header>

        {/* Hero */}
        <main className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              منصة ذكية لإدارة أموالك
            </h2>
            <p className="text-slate-300 mb-6 text-sm md:text-base">
              حلّل مصاريفك، راقب دخلك، وخلي الذكاء الاصطناعي يساعدك تتخذ قرارات
              مالية أفضل.
            </p>
            <button className="bg-emerald-500 text-slate-950 font-semibold px-5 py-2 rounded-lg hover:bg-emerald-400">
              ابدأ الآن
            </button>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
            <p className="text-sm text-slate-400 mb-2">
              نظرة سريعة على وضعك المالي
            </p>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="bg-slate-800 p-3 rounded-lg">
                <p className="text-slate-400">الدخل الشهري</p>
                <p className="text-emerald-400 text-lg font-semibold">
                  $ 4,500
                </p>
              </div>
              <div className="bg-slate-800 p-3 rounded-lg">
                <p className="text-slate-400">المصاريف</p>
                <p className="text-red-400 text-lg font-semibold">$ 2,300</p>
              </div>
              <div className="bg-slate-800 p-3 rounded-lg">
                <p className="text-slate-400">المدخرات</p>
                <p className="text-sky-400 text-lg font-semibold">$ 1,200</p>
              </div>
              <div className="bg-slate-800 p-3 rounded-lg">
                <p className="text-slate-400">تقييم الذكاء الاصطناعي</p>
                <p className="text-amber-400 text-lg font-semibold">جيد 👍</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
