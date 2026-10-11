import Link from 'next/link'

const PARTNER_UNIVERSITIES = [
  { name: 'Anglia Ruskin University', city: 'Cambridge & Chelmsford', slug: 'anglia-ruskin-university', tag: 'Merit Bursaries' },
  { name: 'Coventry University', city: 'Coventry & London', slug: 'coventry-university', tag: 'Jan / May / Sept' },
  { name: 'De Montfort University', city: 'Leicester', slug: 'de-montfort-university', tag: 'Career Focused' },
  { name: 'Northumbria University', city: 'Newcastle & London', slug: 'northumbria-university', tag: 'Research Intensive' },
  { name: "Queen's University Belfast", city: 'Belfast', slug: 'queens-university-belfast', tag: 'Russell Group' },
  { name: 'Ulster University', city: 'Belfast, London & Birmingham', slug: 'ulster-university', tag: 'Affordable Fees' },
  { name: 'University of East London', city: 'London Docklands', slug: 'university-of-east-london', tag: 'Fast-Track CAS' },
  { name: 'University of Greenwich', city: 'London', slug: 'university-of-greenwich', tag: 'MOI Accepted' },
  { name: 'University of Hertfordshire', city: 'Hatfield (Near London)', slug: 'university-of-hertfordshire', tag: 'Placement Year' },
  { name: 'University of Portsmouth', city: 'Portsmouth', slug: 'university-of-portsmouth', tag: 'TEF Gold' },
  { name: 'University of Roehampton', city: 'South West London', slug: 'university-of-roehampton', tag: 'London Campus' },
  { name: 'University of South Wales', city: 'Cardiff & Newport', slug: 'university-of-south-wales', tag: 'MOI Friendly' },
]

export default function UniversityMarquee() {
  return (
    <section
      className="py-12 bg-white border-b border-emerald-100"
      aria-label="Official UK University Partners"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-7">
          <div>
            <p className="text-brand-magenta font-bold text-xs tracking-widest uppercase mb-1">
              Official Institutional Network
            </p>
            <h2 className="text-[#06241B] font-black text-xl sm:text-2xl">
              Direct Admission Pathways Across 50+ UK Universities
            </h2>
          </div>
          <Link
            href="/universities"
            className="text-xs sm:text-sm font-bold text-[#073224] hover:text-brand-magenta underline underline-offset-4"
          >
            Browse All 50 Partner Universities
          </Link>
        </div>

        {/* Clean Institutional Partner Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {PARTNER_UNIVERSITIES.map((uni) => (
            <Link
              key={uni.slug}
              href={`/universities/${uni.slug}`}
              className="group bg-[#F8FAF9] hover:bg-[#073224] border border-emerald-100 hover:border-[#073224] rounded-xl p-3.5 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-emerald-800 group-hover:text-emerald-300 bg-emerald-100/80 group-hover:bg-white/10 px-2 py-0.5 rounded mb-2">
                  {uni.tag}
                </span>
                <h3 className="font-bold text-xs sm:text-sm text-[#06241B] group-hover:text-white leading-snug">
                  {uni.name}
                </h3>
              </div>
              <p className="text-[11px] text-gray-500 group-hover:text-emerald-200/80 mt-2 font-medium">
                {uni.city}, UK
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
