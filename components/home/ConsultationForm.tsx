'use client'

import { useState, useEffect } from 'react'
import { Send, CheckCircle, AlertCircle, MessageCircle, Building2 } from 'lucide-react'
import Button from '@/components/ui/Button'
import { universities } from '@/data/universities'

const destinations = [
  'United Kingdom',
  'Cyprus',
  'Malta',
  'Dubai (UAE)',
  'Australia',
  'Canada',
  'Germany',
  'Ireland',
  'New Zealand',
  'United States',
  'Other',
]

const levels = ['Undergraduate', 'Postgraduate', 'Foundation', 'PhD', 'Other']

const subjects = [
  'Business & Management',
  'Computer Science & IT',
  'Engineering & Technology',
  'Health Sciences',
  'Law & Humanities',
  'Arts & Design',
  'Education',
  'Other',
]

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

export default function ConsultationForm() {
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [selectedUni, setSelectedUni] = useState<string>('')
  const [selectedDest, setSelectedDest] = useState<string>('United Kingdom')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search)
      const uniSlug = params.get('university')
      if (uniSlug) {
        const matched = universities.find((u) => u.slug === uniSlug)
        if (matched) {
          setSelectedUni(matched.name)
          setSelectedDest(matched.country || 'United Kingdom')
        }
      }
    }
  }, [])

  const validate = (data: FormData): Record<string, string> => {
    const e: Record<string, string> = {}
    if (!data.get('name')?.toString().trim()) e.name = 'Please enter your full name.'
    const email = data.get('email')?.toString().trim() || ''
    if (!email) e.email = 'Please enter your email address.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = 'Please enter a valid email.'
    if (!data.get('phone')?.toString().trim()) e.phone = 'Please enter your phone number.'
    return e
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const fieldErrors = validate(data)
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors)
      return
    }
    setErrors({})
    setStatus('loading')

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.get('name')?.toString().trim() || '',
          whatsapp: data.get('phone')?.toString().trim() || '',
          email: data.get('email')?.toString().trim() || '',
          level: data.get('level')?.toString() || 'Not Specified',
          destination: selectedDest,
          university: selectedUni || data.get('university')?.toString() || '',
          message: data.get('message')?.toString() || '',
          source: 'Consultation Form',
        }),
      })
      const result = await res.json()
      if (result?.ok && !result.syncedToGoogleSheet && result.webhookUrl) {
        await fetch(result.webhookUrl, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'text/plain;charset=utf-8' },
          body: JSON.stringify(result.lead),
        })
      }
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  const whatsappText = encodeURIComponent(
    selectedUni
      ? `Hello Sage Roots International! I would like to book a free UK consultation regarding admission to ${selectedUni}.`
      : `Hello Sage Roots International! I would like to book a free UK study abroad & scholarship consultation.`
  )

  if (status === 'success') {
    return (
      <section id="consultation" className="py-20 px-4 sm:px-6 lg:px-8" aria-labelledby="form-heading">
        <div className="max-w-xl mx-auto bg-white rounded-3xl shadow-xl p-10 text-center border border-emerald-100">
          <CheckCircle className="w-16 h-16 text-brand-success mx-auto mb-5" aria-hidden="true" />
          <h2 className="text-brand-dark font-black text-2xl mb-3">Enquiry Received!</h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-6">
            Thank you for reaching out{selectedUni ? ` regarding ${selectedUni}` : ''}. A dedicated UK admissions counselor will contact you within 24 hours to discuss your offer & scholarship options.
          </p>
          <a
            href={`https://wa.me/447776181483?text=${whatsappText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#25D366] text-white font-bold text-sm px-6 py-3 rounded-xl hover:bg-[#1fb855] transition shadow-md"
          >
            Fast-Track via WhatsApp Now
          </a>
        </div>
      </section>
    )
  }

  return (
    <section
      id="consultation"
      className="py-20 relative overflow-hidden"
      aria-labelledby="form-heading"
    >
      {/* Background accent */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-[#ECFDF5] via-[#F8FAF9] to-emerald-50/60"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-brand-magenta font-bold text-xs tracking-widest uppercase mb-2">
            Free 1-on-1 UK Consultation
          </p>
          <h2 id="form-heading" className="text-brand-dark font-black text-3xl sm:text-4xl">
            Let&apos;s Plan Your Next Step
          </h2>
          <p className="text-gray-500 mt-3 text-sm">
            Tell us about your academic goals and receive a personalized UK university shortlist within 24 hours.
          </p>
        </div>

        {/* Contextual Pre-selected University Banner */}
        {selectedUni && (
          <div className="mb-6 bg-[#042017] text-white rounded-2xl p-4 flex items-center justify-between gap-3 shadow-lg border border-emerald-500/30">
            <div>
              <p className="text-[11px] uppercase tracking-wider text-emerald-300 font-bold">
                Selected Target University
              </p>
              <p className="font-bold text-sm sm:text-base text-white">{selectedUni}</p>
            </div>
            <button
              type="button"
              onClick={() => setSelectedUni('')}
              className="text-xs text-emerald-300 hover:text-white underline px-2 py-1"
            >
              Change
            </button>
          </div>
        )}

        {/* Form card */}
        <div className="bg-white rounded-3xl shadow-xl shadow-brand-midnight/8 border border-emerald-100 p-8 sm:p-10">
          <form onSubmit={handleSubmit} noValidate>
            <div className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <Field
                  label="Full Name"
                  name="name"
                  type="text"
                  placeholder="Your full name"
                  error={errors.name}
                  required
                />

                {/* Phone */}
                <Field
                  label="Phone / WhatsApp Number"
                  name="phone"
                  type="tel"
                  placeholder="+880 or +44 number"
                  error={errors.phone}
                  required
                />
              </div>

              {/* Email */}
              <Field
                label="Email Address"
                name="email"
                type="email"
                placeholder="you@email.com"
                error={errors.email}
                required
              />

              {/* Preferred UK University (Contextual Selector) */}
              <div>
                <label htmlFor="university" className="block text-sm font-semibold text-brand-dark mb-1.5">
                  Preferred UK University <span className="text-gray-400 font-normal">(optional)</span>
                </label>
                <select
                  id="university"
                  name="university"
                  value={selectedUni}
                  onChange={(e) => setSelectedUni(e.target.value)}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-magenta/30 focus:border-brand-magenta transition bg-white"
                >
                  <option value="">Recommend best universities for my profile</option>
                  {universities.map((u) => (
                    <option key={u.id} value={u.name}>
                      {u.name} ({u.city})
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Destination */}
                <div>
                  <label htmlFor="destination" className="block text-sm font-semibold text-brand-dark mb-1.5">
                    Study Destination
                  </label>
                  <select
                    id="destination"
                    name="destination"
                    value={selectedDest}
                    onChange={(e) => setSelectedDest(e.target.value)}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-magenta/30 focus:border-brand-magenta transition bg-white"
                  >
                    {destinations.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Level */}
                <SelectField
                  label="Preferred Study Level"
                  name="level"
                  options={levels}
                />
              </div>

              {/* Subject */}
              <SelectField
                label="Preferred Subject Area"
                name="subject"
                options={subjects}
              />

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-brand-dark mb-1.5"
                >
                  Academic Background / Questions <span className="text-gray-400 font-normal">(optional)</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  placeholder="Share your GPA/CGPA, IELTS/MOI status, or any specific scholarship questions..."
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-brand-dark placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-magenta/30 focus:border-brand-magenta transition resize-none"
                />
              </div>

              {/* Privacy notice */}
              <p className="text-gray-400 text-xs leading-relaxed">
                By submitting this form you agree to our{' '}
                <a href="/privacy-policy" className="underline hover:text-brand-royal">
                  Privacy Policy
                </a>
                . 100% free assessment with zero hidden agency charges.
              </p>

              {/* Submit + Direct WhatsApp CTA */}
              <div className="flex flex-col sm:flex-row gap-3 pt-1">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="flex-1"
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? (
                    'Sending...'
                  ) : (
                    'Request Free Consultation'
                  )}
                </Button>

                <a
                  href={`https://wa.me/447776181483?text=${whatsappText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-[#042017] hover:bg-[#073224] text-white font-semibold text-sm px-6 py-3.5 rounded-xl transition-all duration-200 shadow-sm"
                >
                  Instant WhatsApp
                </a>
              </div>

              {status === 'error' && (
                <div className="flex items-start gap-2 bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 text-sm">
                  <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  Something went wrong. Please try again or contact us directly.
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

// Field sub-component
function Field({
  label,
  name,
  type,
  placeholder,
  error,
  required,
}: {
  label: string
  name: string
  type: string
  placeholder: string
  error?: string
  required?: boolean
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-semibold text-brand-dark mb-1.5">
        {label}
        {required && <span className="text-brand-magenta ml-0.5">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        aria-describedby={error ? `${name}-error` : undefined}
        aria-invalid={!!error}
        className={`w-full border rounded-xl px-4 py-3 text-sm text-brand-dark placeholder:text-gray-400 focus:outline-none focus:ring-2 transition ${
          error
            ? 'border-red-400 focus:ring-red-200 bg-red-50'
            : 'border-gray-200 focus:ring-brand-magenta/30 focus:border-brand-magenta'
        }`}
      />
      {error && (
        <p id={`${name}-error`} className="text-red-500 text-xs mt-1" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}

function SelectField({
  label,
  name,
  options,
}: {
  label: string
  name: string
  options: string[]
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-semibold text-brand-dark mb-1.5">
        {label}
      </label>
      <select
        id={name}
        name={name}
        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-magenta/30 focus:border-brand-magenta transition bg-white"
      >
        <option value="">Select an option</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  )
}
