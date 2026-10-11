import Image from 'next/image'

export default function Loading() {
  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center select-none"
      role="status"
      aria-live="polite"
      aria-label="Loading..."
    >
      {/* Light subtle backdrop (NO BLACK) */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-[2px]" />

      <div className="relative flex flex-col items-center justify-center p-6 text-center z-10">
        <div className="absolute w-36 h-36 bg-emerald-500/15 rounded-full blur-2xl pointer-events-none" />

        <div className="relative w-28 h-24 sm:w-36 sm:h-32 animate-cap-float mix-blend-multiply">
          <Image
            src="/images/graduation-cap.png"
            alt="Graduation Hat"
            fill
            priority
            className="object-contain"
          />
        </div>

        <div className="w-32 sm:w-40 h-1.5 bg-black/10 rounded-full overflow-hidden mt-3 relative shadow-sm">
          <div className="absolute inset-y-0 bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-full animate-progress" />
        </div>

        <span className="mt-2.5 px-3 py-1 rounded-full bg-white/85 shadow-sm border border-black/5 text-[11px] sm:text-xs font-bold tracking-wider uppercase text-emerald-700">
          Loading...
        </span>
      </div>
    </div>
  )
}
