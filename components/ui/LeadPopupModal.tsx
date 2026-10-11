'use client'

import { useState, useEffect } from 'react'
import { X, CheckCircle2 } from 'lucide-react'

export default function LeadPopupModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [name, setName] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    const dismissed = sessionStorage.getItem('sri_lead_popup_closed')
    if (!dismissed) {
      const timer = setTimeout(() => {
        setIsOpen(true)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  const handleClose = () => {
    setIsOpen(false)
    sessionStorage.setItem('sri_lead_popup_closed', 'true')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim()) {
      setErrorMsg('Please enter your name.')
      return
    }
    if (!whatsapp.trim() || whatsapp.trim().length < 7) {
      setErrorMsg('Please enter your WhatsApp number.')
      return
    }

    setErrorMsg('')
    setStatus('loading')

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          whatsapp: whatsapp.trim(),
          destination: 'United Kingdom',
          source: 'Entry Popup',
        }),
      })

      const result = await res.json()
      if (!res.ok || !result.ok) throw new Error('Submission failed')

      if (!result.syncedToGoogleSheet && result.webhookUrl) {
        await fetch(result.webhookUrl, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'text/plain;charset=utf-8' },
          body: JSON.stringify(result.lead),
        })
      }

      setStatus('success')
      sessionStorage.setItem('sri_lead_popup_closed', 'true')
      setTimeout(() => {
        setIsOpen(false)
      }, 1800)
    } catch {
      setStatus('error')
      setErrorMsg('Something went wrong. Please try again.')
    }
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="lead-popup-title"
    >
      {/* Light transparent overlay so the website behind remains clearly visible */}
      <div
        className="fixed inset-0 bg-black/25 transition-opacity"
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Compact, Minimal Center Card */}
      <div className="relative z-10 w-full max-w-[350px] rounded-2xl overflow-hidden bg-white shadow-2xl border border-emerald-900/15">
        {/* Close (X) Button */}
        <button
          type="button"
          onClick={handleClose}
          aria-label="Close"
          className="absolute top-3 right-3 z-20 w-7 h-7 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center transition"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Minimal Header with Official Logo */}
        <div className="bg-[#073224] px-5 py-4 text-white flex items-center gap-3">
          <img
            src="/images/sri-logo.jpg"
            alt="SRI Logo"
            className="w-10 h-10 rounded-full object-cover ring-2 ring-amber-400/70 flex-shrink-0"
          />
          <div className="pr-5">
            <h2 id="lead-popup-title" className="text-sm sm:text-base font-bold leading-snug">
              Free UK Study Consultation
            </h2>
            <p className="text-white/75 text-[11px] mt-0.5">
              Leave your details for a quick WhatsApp call back.
            </p>
          </div>
        </div>

        {/* Minimal Form */}
        <div className="p-5 bg-white">
          {status === 'success' ? (
            <div className="text-center py-4">
              <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
              <p className="text-[#06241B] font-bold text-sm">Thank you, {name}!</p>
              <p className="text-gray-500 text-xs mt-1">We will contact you on WhatsApp shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3" noValidate>
              <div>
                <input
                  id="lead-name"
                  name="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Name"
                  aria-label="Your Name"
                  className="w-full border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm text-[#06241B] placeholder:text-gray-400 focus:outline-none focus:border-[#073224] transition"
                />
              </div>

              <div>
                <input
                  id="lead-whatsapp"
                  name="whatsapp"
                  type="tel"
                  required
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  placeholder="WhatsApp Number"
                  aria-label="WhatsApp Number"
                  className="w-full border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm text-[#06241B] placeholder:text-gray-400 focus:outline-none focus:border-[#073224] transition"
                />
              </div>

              {errorMsg && (
                <p className="text-red-600 text-xs">{errorMsg}</p>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-[#073224] hover:bg-[#042017] text-white font-semibold text-sm py-2.5 rounded-xl transition disabled:opacity-60"
              >
                {status === 'loading' ? 'Submitting...' : 'Submit'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
