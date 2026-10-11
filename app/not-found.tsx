import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#F8FAF9] flex items-center justify-center px-4 py-24">
      <div className="max-w-lg w-full bg-white rounded-3xl border border-emerald-100 shadow-xl p-8 sm:p-12 text-center">
        <p className="text-brand-magenta font-extrabold text-xs uppercase tracking-widest mb-2">
          Error 404 • Page Not Found
        </p>
        <h1 className="text-[#06241B] font-black text-3xl sm:text-4xl mb-3">
          We Couldn&apos;t Find That Page
        </h1>
        <p className="text-gray-500 text-sm leading-relaxed mb-8">
          The page you are looking for may have moved or no longer exists. Explore our 50+ UK partner universities or return to the home page below.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center bg-[#073224] hover:bg-[#042017] text-white font-bold text-sm px-6 py-3 rounded-xl transition"
          >
            Back to Home
          </Link>
          <Link
            href="/universities"
            className="inline-flex items-center justify-center bg-emerald-50 hover:bg-emerald-100 text-[#073224] font-bold text-sm px-6 py-3 rounded-xl transition"
          >
            Browse 50 UK Universities
          </Link>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-100">
          <a
            href="https://wa.me/447776181483"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-emerald-700 hover:underline"
          >
            Need immediate help? Chat on WhatsApp (+44 7776 181483)
          </a>
        </div>
      </div>
    </div>
  )
}
