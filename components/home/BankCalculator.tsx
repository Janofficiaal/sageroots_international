'use client'

import { useState } from 'react'

const LONDON_MONTHLY = 1483 // Official UKVI 2025/2026 rate (£1,483/mo × 9 = £13,347)
const OUTSIDE_LONDON_MONTHLY = 1136 // Official UKVI 2025/2026 rate (£1,136/mo × 9 = £10,224)

export default function BankCalculator() {
  const [location, setLocation] = useState<'london' | 'outside'>('outside')
  const [tuitionFee, setTuitionFee] = useState<number>(15500)
  const [scholarship, setScholarship] = useState<number>(3000)
  const [casDeposit, setCasDeposit] = useState<number>(4000)
  const [bufferPercent, setBufferPercent] = useState<number>(5)

  const remainingTuition = Math.max(0, tuitionFee - scholarship - casDeposit)
  const livingCost9Months =
    location === 'london' ? LONDON_MONTHLY * 9 : OUTSIDE_LONDON_MONTHLY * 9
  const totalGbpRequired = remainingTuition + livingCost9Months
  const recommendedGbpWithBuffer = Math.round(
    totalGbpRequired * (1 + bufferPercent / 100)
  )
  const bufferAmountGbp = recommendedGbpWithBuffer - totalGbpRequired

  const formatGbp = (val: number) =>
    new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP',
      maximumFractionDigits: 0,
    }).format(val)

  const whatsappAuditText = encodeURIComponent(
    `Hello Sage Roots International! I calculated my UKVI 28-day bank requirement: ${formatGbp(
      totalGbpRequired
    )} (Recommended with buffer: ${formatGbp(recommendedGbpWithBuffer)}) for ${
      location === 'london' ? 'Inside London' : 'Outside London'
    }. I would like a free bank statement & visa compliance check.`
  )

  return (
    <section
      id="bank-calculator"
      className="py-20 bg-[#F4F9F6] border-t border-emerald-100"
      aria-labelledby="bank-calc-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-block bg-emerald-100 text-[#073224] text-xs font-extrabold uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-3">
            Official UKVI 28-Day Financial Rule
          </div>
          <h2
            id="bank-calc-heading"
            className="text-[#06241B] font-black text-3xl sm:text-4xl"
          >
            UK 28-Day Bank Statement Calculator (£ GBP)
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mt-3 leading-relaxed">
            Calculate the exact maintenance funds in <strong>British Pounds (GBP £)</strong> you must hold for 28 consecutive days for your UK Student Route Visa under official UKVI guidelines.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Interactive Inputs */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-emerald-100 shadow-lg space-y-6">
            {/* Step 1: Study Location */}
            <div>
              <label className="block text-xs font-extrabold uppercase tracking-wider text-[#06241B] mb-2.5">
                1. University Campus Location (UKVI Living Cost Tier)
              </label>
              <div className="grid sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setLocation('outside')}
                  className={`p-4 rounded-2xl border-2 text-left transition-all ${
                    location === 'outside'
                      ? 'border-[#073224] bg-[#ECFDF5]/60 shadow-sm'
                      : 'border-gray-200 hover:border-emerald-300 bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-black text-[#06241B] text-sm">
                      Outside London
                    </span>
                    <span className="text-xs font-bold bg-[#073224] text-white px-2.5 py-0.5 rounded-full">
                      £1,136 / mo
                    </span>
                  </div>
                  <p className="text-xs text-gray-500">
                    9 Months Total: <strong>£10,224</strong> (Birmingham, Manchester, Leeds, Portsmouth, etc.)
                  </p>
                </button>

                <button
                  type="button"
                  onClick={() => setLocation('london')}
                  className={`p-4 rounded-2xl border-2 text-left transition-all ${
                    location === 'london'
                      ? 'border-[#073224] bg-[#ECFDF5]/60 shadow-sm'
                      : 'border-gray-200 hover:border-emerald-300 bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-black text-[#06241B] text-sm">
                      Inside London
                    </span>
                    <span className="text-xs font-bold bg-[#073224] text-white px-2.5 py-0.5 rounded-full">
                      £1,483 / mo
                    </span>
                  </div>
                  <p className="text-xs text-gray-500">
                    9 Months Total: <strong>£13,347</strong> (Greater London Boroughs)
                  </p>
                </button>
              </div>
            </div>

            {/* Step 2: Tuition, Scholarship & CAS Deposit */}
            <div className="grid sm:grid-cols-3 gap-4">
              <div>
                <label
                  htmlFor="calc-tuition"
                  className="block text-xs font-bold text-[#06241B] mb-1.5"
                >
                  1st Year Tuition Fee (£)
                </label>
                <input
                  id="calc-tuition"
                  type="number"
                  min={5000}
                  max={45000}
                  step={500}
                  value={tuitionFee}
                  onChange={(e) => setTuitionFee(Math.max(0, Number(e.target.value)))}
                  className="w-full border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm font-bold text-[#06241B] focus:outline-none focus:border-[#073224]"
                />
              </div>

              <div>
                <label
                  htmlFor="calc-scholarship"
                  className="block text-xs font-bold text-[#06241B] mb-1.5"
                >
                  Scholarship Deducted (£)
                </label>
                <input
                  id="calc-scholarship"
                  type="number"
                  min={0}
                  max={20000}
                  step={500}
                  value={scholarship}
                  onChange={(e) => setScholarship(Math.max(0, Number(e.target.value)))}
                  className="w-full border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm font-bold text-emerald-700 focus:outline-none focus:border-[#073224]"
                />
              </div>

              <div>
                <label
                  htmlFor="calc-deposit"
                  className="block text-xs font-bold text-[#06241B] mb-1.5"
                >
                  CAS Deposit Paid (£)
                </label>
                <input
                  id="calc-deposit"
                  type="number"
                  min={0}
                  max={30000}
                  step={500}
                  value={casDeposit}
                  onChange={(e) => setCasDeposit(Math.max(0, Number(e.target.value)))}
                  className="w-full border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm font-bold text-[#06241B] focus:outline-none focus:border-[#073224]"
                />
              </div>
            </div>

            {/* Step 3: Safety Buffer Slider in GBP */}
            <div className="bg-[#F8FAF9] rounded-2xl p-4 border border-gray-200/80">
              <div className="flex items-center justify-between text-xs font-bold text-[#06241B] mb-2">
                <span>Recommended UKVI Safety Buffer (%)</span>
                <span className="bg-white border border-emerald-200 px-2.5 py-1 rounded-lg text-[#073224]">
                  +{bufferPercent}% ({formatGbp(bufferAmountGbp)})
                </span>
              </div>
              <input
                type="range"
                min={0}
                max={15}
                step={1}
                value={bufferPercent}
                onChange={(e) => setBufferPercent(Number(e.target.value))}
                aria-label="Recommended GBP safety buffer percentage"
                className="w-full accent-[#073224] cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-gray-400 mt-1">
                <span>0% (Exact Minimum)</span>
                <span>5%–7% buffer recommended for OANDA protection</span>
                <span>+15% Buffer</span>
              </div>
            </div>

            {/* Compliance Tips */}
            <div className="grid sm:grid-cols-2 gap-3 pt-1">
              <div className="border-l-2 border-emerald-600 pl-3 text-xs text-gray-600">
                Funds must remain continuously for <strong>28 consecutive days</strong>.
              </div>
              <div className="border-l-2 border-emerald-600 pl-3 text-xs text-gray-600">
                Bank statement closing date must not be older than <strong>31 days</strong>.
              </div>
            </div>
          </div>

          {/* Right: Live Result Card (100% in UK Pounds £) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#042017] via-[#073224] to-[#0A4431] text-white rounded-3xl p-6 sm:p-8 shadow-2xl flex flex-col justify-between border border-emerald-500/30">
            <div>
              <div className="flex items-center justify-between gap-2 pb-4 border-b border-white/10">
                <span className="text-emerald-300 text-xs font-bold uppercase tracking-widest">
                  Required 28-Day Balance (£ GBP)
                </span>
                <span className="bg-emerald-500/20 text-emerald-300 text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                  {location === 'london' ? 'Inside London' : 'Outside London'}
                </span>
              </div>

              {/* Breakdown Rows */}
              <div className="space-y-3 my-5 text-xs sm:text-sm">
                <div className="flex justify-between text-white/75">
                  <span>Unpaid 1st-Year Tuition Balance:</span>
                  <span className="font-bold text-white">{formatGbp(remainingTuition)}</span>
                </div>
                <div className="flex justify-between text-white/75">
                  <span>UKVI 9-Month Living Maintenance:</span>
                  <span className="font-bold text-white">{formatGbp(livingCost9Months)}</span>
                </div>
                <div className="border-t border-white/15 pt-3 flex justify-between items-baseline">
                  <span className="font-bold text-emerald-300">Exact UKVI Minimum (GBP):</span>
                  <span className="font-black text-2xl sm:text-3xl text-white">
                    {formatGbp(totalGbpRequired)}
                  </span>
                </div>
              </div>

              {/* Recommended GBP Balance with Buffer Box */}
              <div className="bg-white/10 border border-emerald-400/30 rounded-2xl p-4 mb-5">
                <p className="text-emerald-300 text-[11px] font-bold uppercase tracking-wider">
                  Recommended Safe Balance in GBP (+{bufferPercent}% Buffer)
                </p>
                <p className="text-2xl sm:text-3xl font-black text-white mt-1">
                  {formatGbp(recommendedGbpWithBuffer)} GBP
                </p>
                <p className="text-emerald-200/80 text-xs mt-2">
                  <strong>UKVI Compliance Advice:</strong> Maintaining{' '}
                  <strong className="text-white">{formatGbp(recommendedGbpWithBuffer)}</strong> ({formatGbp(bufferAmountGbp)} above the exact minimum) protects your application against daily OANDA exchange fluctuations.
                </p>
              </div>
            </div>

            {/* Action CTA */}
            <div className="space-y-2.5 pt-2">
              <a
                href={`https://wa.me/447776181483?text=${whatsappAuditText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block text-center bg-[#25D366] hover:bg-[#1fb855] text-white font-black text-sm py-3.5 px-5 rounded-xl transition shadow-lg"
              >
                Verify My Bank Statement Free on WhatsApp
              </a>
              <p className="text-center text-white/50 text-[11px]">
                Free UKVI OANDA rate &amp; bank solvency letter check
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
