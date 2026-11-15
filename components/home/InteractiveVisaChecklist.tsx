'use client'

import { useState } from 'react'
import {
  CheckCircle2,
  Circle,
  FileCheck2,
  Printer,
  ShieldCheck,
  AlertCircle,
  MessageCircle,
  Clock,
  Sparkles,
} from 'lucide-react'

interface ChecklistItem {
  id: string
  category: string
  title: string
  description: string
  mandatory: boolean
}

const ITEMS: ChecklistItem[] = [
  {
    id: 'cas',
    category: 'University CAS',
    title: 'Valid CAS Statement (Confirmation of Acceptance for Studies)',
    description: 'Issued by your UK university sponsor within the last 6 months, listing your exact course, tuition fee and CAS deposit paid.',
    mandatory: true,
  },
  {
    id: 'bank-28',
    category: '28-Day Bank Funds',
    title: 'Bank Statement Showing 28 Consecutive Days Balance',
    description: 'Tuition remaining + £1,334/mo (London) or £1,023/mo (Outside London) for 9 months, unbroken without dipping for 28+ days.',
    mandatory: true,
  },
  {
    id: 'bank-solvency',
    category: 'Bank Verification',
    title: 'Official Bank Solvency Letter & Account Verification',
    description: 'Printed on official bank stationery with manager sign, official seal and contact phone/email for UKVI verification.',
    mandatory: true,
  },
  {
    id: 'tb-cert',
    category: 'Medical Clearance',
    title: 'Tuberculosis (TB) Certificate from IOM Bangladesh',
    description: 'Issued by IOM Dhaka or Sylhet migration health assessment centre (valid for 6 months).',
    mandatory: true,
  },
  {
    id: 'academic',
    category: 'Academic Credentials',
    title: 'Academic Certificates & Marksheets (Listed on CAS)',
    description: 'HSC / Degree / Master’s certificates and transcripts matching the exact qualification references on your CAS.',
    mandatory: true,
  },
  {
    id: 'english-cert',
    category: 'English Requirement',
    title: 'MOI Certificate or IELTS / PTE Academic / ELLT Report',
    description: 'English Medium of Instruction letter from recognized university or official test report form meeting CEFR B2 level.',
    mandatory: true,
  },
  {
    id: 'parental-sponsor',
    category: 'Parent Sponsorship',
    title: 'Parent Consent Letter & Notarized Birth Certificate',
    description: 'Required only if using father’s or mother’s bank account. Must include birth certificate in English and signed consent affidavit.',
    mandatory: false,
  },
  {
    id: 'sop-cv',
    category: 'Compliance & Gap',
    title: 'Statement of Purpose (SOP) & Work Experience Letters',
    description: 'Comprehensive SOP demonstrating genuine student intent and original job experience letters explaining any gap years.',
    mandatory: true,
  },
]

export default function InteractiveVisaChecklist() {
  const [checked, setChecked] = useState<Record<string, boolean>>({})

  const toggle = (id: string) => {
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  const completedCount = Object.values(checked).filter(Boolean).length
  const totalCount = ITEMS.length
  const progressPercent = Math.round((completedCount / totalCount) * 100)

  const handlePrint = () => {
    window.print()
  }

  return (
    <section className="py-16 bg-white border-y border-emerald-100 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="bg-[#042017] rounded-3xl p-6 sm:p-10 text-white shadow-xl mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <span className="inline-flex items-center gap-1.5 bg-emerald-500/20 text-emerald-300 text-xs font-bold px-3 py-1 rounded-full border border-emerald-400/30 uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                Interactive Applicant Tool (2027 Intakes)
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                Interactive UK Student Visa &amp; Bank Statement Checklist 2027
              </h2>
              <p className="text-emerald-100/70 text-xs sm:text-sm mt-1 max-w-2xl">
                Tick each document as you prepare your file. When you reach 100%, your file is ready for priority visa submission.
              </p>
            </div>
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm px-4 py-2.5 rounded-xl border border-white/20 transition self-start md:self-auto"
            >
              <Printer className="w-4 h-4 text-emerald-400" />
              Print / Save PDF
            </button>
          </div>

          {/* Progress Indicator */}
          <div className="bg-white/10 p-4 rounded-2xl border border-white/10 backdrop-blur-sm">
            <div className="flex items-center justify-between text-xs font-bold mb-2">
              <span className="text-emerald-200">Visa File Readiness:</span>
              <span className="text-emerald-300 font-extrabold">
                {completedCount} of {totalCount} Items Checked ({progressPercent}%)
              </span>
            </div>
            <div className="w-full bg-white/20 h-2.5 rounded-full overflow-hidden">
              <div
                className="bg-emerald-400 h-full rounded-full transition-all duration-300 shadow-[0_0_12px_rgba(52,211,153,0.8)]"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </div>

        {/* Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {ITEMS.map((item) => {
            const isChecked = !!checked[item.id]
            return (
              <div
                key={item.id}
                onClick={() => toggle(item.id)}
                className={`p-5 rounded-2xl border transition-all cursor-pointer flex items-start gap-3.5 select-none ${
                  isChecked
                    ? 'bg-emerald-50/70 border-emerald-400 shadow-sm'
                    : 'bg-[#F9FCFA] border-gray-200 hover:border-emerald-300 hover:bg-white'
                }`}
              >
                <div className="mt-0.5 flex-shrink-0">
                  {isChecked ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  ) : (
                    <Circle className="w-5 h-5 text-gray-300" />
                  )}
                </div>
                <div className="flex-1 text-left">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider bg-white px-2 py-0.5 rounded border border-gray-200">
                      {item.category}
                    </span>
                    {item.mandatory && (
                      <span className="text-[10px] font-bold text-red-600 bg-red-50 border border-red-200 px-2 py-0.5 rounded">
                        Mandatory
                      </span>
                    )}
                  </div>
                  <h3
                    className={`text-xs sm:text-sm font-bold ${
                      isChecked ? 'text-emerald-950 line-through' : 'text-[#06241B]'
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-[11px] sm:text-xs mt-1 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* WhatsApp Verification Prompt */}
        <div className="mt-8 bg-emerald-50 border border-emerald-200 rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-emerald-700 flex-shrink-0" />
            <div>
              <p className="text-xs sm:text-sm font-bold text-emerald-950">
                Want our London team to audit your bank statement before CAS request?
              </p>
              <p className="text-[11px] sm:text-xs text-emerald-800">
                100% free document verification to ensure zero refusal risk.
              </p>
            </div>
          </div>
          <a
            href="https://wa.me/447776181483?text=Hello%20Sage%20Roots%20International,%20please%20verify%20my%20UK%20student%20visa%20checklist%20and%20bank%20statement."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs px-5 py-3 rounded-xl transition shadow whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4" />
            Verify on WhatsApp Free
          </a>
        </div>
      </div>
    </section>
  )
}
