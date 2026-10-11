import type { Metadata } from 'next'
import Link from 'next/link'
import ConsultationForm from '@/components/home/ConsultationForm'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Sage Roots International. Book a free consultation for study abroad guidance, university admissions and visa support.',
}

export default function ContactPage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-brand-midnight to-brand-royal pt-32 pb-20 px-4 text-center">
        <p className="text-brand-magenta font-bold text-xs tracking-widest uppercase mb-4">Get In Touch</p>
        <h1 className="text-white font-black text-4xl sm:text-5xl mb-4">Contact Us</h1>
        <p className="text-white/60 text-base max-w-lg mx-auto mb-8">
          Ready to explore your study options? Our team is here to help — completely free of charge.
        </p>

        <div className="inline-flex items-center gap-2 p-1.5 rounded-2xl bg-black/35 border border-white/15 backdrop-blur-md">
          <Link
            href="/about"
            className="px-5 py-2.5 rounded-xl text-white/80 hover:text-white hover:bg-white/10 text-xs sm:text-sm font-bold transition-colors"
          >
            About Sage Roots
          </Link>
          <Link
            href="/contact"
            className="px-5 py-2.5 rounded-xl bg-emerald-600 text-white text-xs sm:text-sm font-bold shadow-sm"
          >
            Contact &amp; London Office
          </Link>
        </div>
      </section>

      {/* Contact details */}
      <section className="py-14 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mb-4">
          {[
            {
              title: 'Location',
              content: 'London, United Kingdom\nUK & Global Admissions Desk',
            },
            {
              title: 'Email',
              content: 'info@sagerootsinternational.co.uk',
              href: 'mailto:info@sagerootsinternational.co.uk',
            },
            {
              title: 'Phone / WhatsApp',
              content: '+44 7776 181483\nDirect WhatsApp & UK Line',
              href: 'https://wa.me/447776181483',
            },
            {
              title: 'Office Hours',
              content: 'Monday – Saturday\n9:00am – 6:00pm (UK time)',
            },
          ].map(({ title, content, href }) => (
            <div key={title} className="bg-white border border-emerald-100 border-t-4 border-t-[#073224] rounded-2xl p-6 shadow-sm text-center card-hover">
              <h3 className="text-brand-dark font-bold text-sm mb-2">{title}</h3>
              {href ? (
                <a href={href} className="text-brand-royal hover:text-brand-magenta text-xs font-semibold transition-colors" style={{ whiteSpace: 'pre-line' }}>
                  {content}
                </a>
              ) : (
                <p className="text-gray-500 text-xs" style={{ whiteSpace: 'pre-line' }}>{content}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Consultation form */}
      <ConsultationForm />
    </div>
  )
}
