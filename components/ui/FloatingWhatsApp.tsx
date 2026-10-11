'use client'

import { MessageCircle } from 'lucide-react'

interface FloatingWhatsAppProps {
  phoneNumber: string
  message?: string
}

export default function FloatingWhatsApp({
  phoneNumber,
  message = 'Hello! I would like to enquire about study abroad opportunities.',
}: FloatingWhatsAppProps) {
  const cleanNumber = phoneNumber.replace(/\D/g, '')
  const encodedMessage = encodeURIComponent(message)
  const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodedMessage}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Sage Roots International on WhatsApp"
      className="fixed bottom-6 right-6 z-50 group flex items-center gap-2.5 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 px-4 py-3"
    >
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 pointer-events-none" />

      <MessageCircle className="w-5 h-5 flex-shrink-0 fill-white" aria-hidden="true" />
      <div className="hidden md:flex flex-col leading-tight text-left">
        <span className="text-[10px] font-bold uppercase tracking-wider text-white/90">
          WhatsApp Chat
        </span>
        <span className="text-xs font-extrabold whitespace-nowrap">+44 7776 181483</span>
      </div>
    </a>
  )
}
