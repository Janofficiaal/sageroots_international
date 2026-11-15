'use client'

import { useState } from 'react'
import {
  CheckCircle2,
  Circle,
  FileCheck2,
  Printer,
  Download,
  AlertCircle,
  ShieldCheck,
  X,
  MessageCircle,
} from 'lucide-react'

interface ChecklistItem {
  id: string
  category: string
  title: string
  description: string
  mandatory: boolean
}

const CHECKLIST_ITEMS: ChecklistItem[] = [
  {
    id: 'cas',
    category: 'University Confirmation',
    title: 'Unconditional Offer & Official CAS Statement',
    description: 'Confirmation of Acceptance for Studies issued by your UK sponsor university within 6 months of application.',
    mandatory: true,
  },
  {
    id: 'bank-28',
    category: 'Financial Requirements (UKVI)',
    title: '28-Day Bank Statement (Continuous Balance)',
    description: 'Showing tuition balance + 9 months living costs (£1,334/mo London, £1,023/mo outside London) held unbroken for 28+ days.',
    mandatory: true,
  },
  {
    id: 'bank-letter',
    category: 'Financial Requirements (UKVI)',
    title: 'Bank Solvency & Verification Letter',
    description: 'Official letter on bank letterhead confirming funds availability and account holder details (acceptable Bangladesh bank).',
    mandatory: true,
  },
  {
    id: 'parent-consent',
    category: 'Financial Requirements (UKVI)',
    title: 'Parent Consent Letter & Birth Certificate (If using parent funds)',
    description: 'Signed affidavit/consent letter + student birth certificate with English translation showing relationship to account holder.',
    mandatory: false,
  },
  {
    id: 'tb-test',
    category: 'Medical Compliance',
    title: 'Tuberculosis (TB) Test Certificate from IOM Dhaka/Sylhet',
    description: 'Valid medical certificate from UKVI approved IOM clinic in Bangladesh (valid for 6 months).',
    mandatory: true,
  },
  {
    id: 'academic-certs',
    category: 'Academic Documents',
    title: 'Official Transcripts & Degree Certificates',
    description: 'Original certificates and grade sheets (HSC, Bachelor’s, or Master’s) listed in your CAS statement.',
    mandatory: true,
  },
  {
    id: 'moi-ielts',
    category: 'English Language Proficiency',
    title: 'Medium of Instruction (MOI) Certificate or IELTS/PTE/ELLT Test Report',
    description: 'Official MOI certificate from recognized university or English test certificate meeting CEFR B2.',
    mandatory: true,
  },
  {
    id: 'sop-cv',
    category: 'Supporting Evidence',
    title: 'Statement of Purpose (SOP) & Academic CV',
    description: 'Clear statement explaining study intent, university choice, career trajectory, and explaining any study gap with experience letters.',
    mandatory: true,
  },
  {
    id: 'passport',
    category: 'Identity & Travel',
    title: 'Current Valid Passport & Previous Passports',
    description: 'With at least 6 months validity and blank visa pages, plus previous travel visa copies.',
    mandatory: true,
  },
  {
    id: 'atas',
    category: 'Specialist Clearance',
    title: 'ATAS Certificate (If applicable for STEM/PhD)',
    description: 'Academic Technology Approval Scheme clearance if your course JACS/CAH3 code requires it.',
    mandatory: false,
  },
]

export default function VisaChecklistModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean
  onClose: () => void
}) {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({})

  if (!isOpen) return null

  const toggleItem = (id: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  const completedCount = Object.values(checkedItems).filter(Boolean).length
  const totalCount = CHECKLIST_ITEMS.length
  const progressPercent = Math.round((completedCount / totalCount) * 100)

  const handlePrint = () => {
    window.print()
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="checklist-title"
    >
      <div className="bg-white rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] flex flex-col overflow-hidden border border-emerald-100">
        {/* Header */}
        <div className="bg-[#042017] p-5 sm:p-6 text-white flex items-center justify-between">
          <div>
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-emerald-400">
              Interactive Applicant Tool (2027 Intakes)
            </span>
            <h2 id="checklist-title" className="text-lg sm:text-2xl font-black mt-0.5">
              UK Student Visa &amp; 28-Day Bank Checklist
            </h2>
            <p className="text-white/70 text-xs mt-1">
              Check off your documents to ensure 100% UKVI compliance before applying.
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close checklist"
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition flex-shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Bar Strip */}
        <div className="bg-emerald-50 px-5 sm:px-6 py-3 border-b border-emerald-100 flex items-center justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center justify-between text-xs font-bold text-emerald-950 mb-1">
              <span>Your Readiness Progress:</span>
              <span>{completedCount} of {totalCount} completed ({progressPercent}%)</span>
            </div>
            <div className="w-full bg-emerald-200/70 h-2 rounded-full overflow-hidden">
              <div
                className="bg-emerald-600 h-full transition-all duration-300 rounded-full"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
          <button
            onClick={handlePrint}
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-emerald-900 bg-white hover:bg-emerald-100 px-3 py-1.5 rounded-lg border border-emerald-200 transition"
          >
            <Printer className="w-3.5 h-3.5" />
            Print / Save PDF
          </button>
        </div>

        {/* List of items */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-3 flex-1">
          {CHECKLIST_ITEMS.map((item) => {
            const isChecked = !!checkedItems[item.id]
            return (
              <div
                key={item.id}
                onClick={() => toggleItem(item.id)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-start gap-3.5 ${
                  isChecked
                    ? 'bg-emerald-50/60 border-emerald-300'
                    : 'bg-white border-gray-200 hover:border-emerald-200'
                }`}
              >
                <button
                  type="button"
                  aria-checked={isChecked}
                  className="mt-0.5 text-emerald-700 flex-shrink-0"
                >
                  {isChecked ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  ) : (
                    <Circle className="w-5 h-5 text-gray-300" />
                  )}
                </button>
                <div className="flex-1 text-left">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider bg-gray-100 px-2 py-0.5 rounded">
                      {item.category}
                    </span>
                    {item.mandatory && (
                      <span className="text-[10px] font-bold text-red-600 bg-red-50 border border-red-200 px-2 py-0.5 rounded">
                        Mandatory
                      </span>
                    )}
                  </div>
                  <h3 className={`text-xs sm:text-sm font-bold ${isChecked ? 'text-emerald-950 line-through' : 'text-gray-900'}`}>
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-[11px] sm:text-xs mt-0.5 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Footer actions */}
        <div className="p-4 sm:p-5 bg-gray-50 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500 text-center sm:text-left">
            Need free document verification from our London office?
          </p>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <a
              href="https://wa.me/447776181483?text=Hello%20Sage%20Roots%20International,%20please%20verify%20my%20UK%20student%20visa%20documents%20and%20bank%20statement."
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs px-4 py-2.5 rounded-xl transition shadow"
            >
              <MessageCircle className="w-4 h-4" />
              Verify on WhatsApp Free
            </a>
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl text-xs font-bold text-gray-600 hover:text-gray-900 hover:bg-gray-200 transition"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
