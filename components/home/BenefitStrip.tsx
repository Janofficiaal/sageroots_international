const benefits = [
  {
    number: '01',
    title: 'Personalised Guidance',
    description: 'Support from application to arrival',
  },
  {
    number: '02',
    title: 'University Application Support',
    description: 'Explore courses and admission pathways',
  },
  {
    number: '03',
    title: 'Visa & Documentation Guidance',
    description: 'Support throughout your application journey',
  },
  {
    number: '04',
    title: 'Global Study Opportunities',
    description: 'Discover destinations around the world',
  },
]

export default function BenefitStrip() {
  return (
    <section
      className="relative z-10 -mt-6 sm:-mt-10 mx-auto max-w-6xl px-3 sm:px-6"
      aria-label="Our key benefits"
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {benefits.map(({ number, title, description }) => (
          <div
            key={title}
            className="bg-white rounded-2xl shadow-lg shadow-brand-midnight/8 p-5 flex flex-col items-start gap-2 border border-white hover:border-brand-lavender transition-colors duration-200"
          >
            <span className="text-xs font-black tracking-widest text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
              {number}
            </span>
            <div>
              <h3 className="font-bold text-brand-dark text-sm leading-tight mb-1">{title}</h3>
              <p className="text-gray-500 text-xs leading-snug">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
