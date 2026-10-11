'use client'

import { useState, useEffect } from 'react'
import {
  ExternalLink,
  Copy,
  Check,
  Download,
  RefreshCw,
  Send,
  CheckCircle2,
  FileSpreadsheet,
} from 'lucide-react'

const SHEET_ID = '1iseIi95hm7gGEE9WTF-0gLip4yRqt11lEysvnm2uDdI'
const SHEET_URL =
  'https://docs.google.com/spreadsheets/d/1iseIi95hm7gGEE9WTF-0gLip4yRqt11lEysvnm2uDdI/edit?gid=0#gid=0'

const APPS_SCRIPT_CODE = `function doPost(e) {
  var ss = SpreadsheetApp.openById('${SHEET_ID}');
  var sheet = ss.getSheets()[0];
  var data = JSON.parse(e.postData.contents);

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['Date (BD Time)', 'Date (UK Time)', 'Full Name', 'WhatsApp Number', 'Email', 'Study Level', 'University', 'Source']);
  }

  sheet.appendRow([
    data.bdTime || new Date().toLocaleString(),
    data.ukTime || '',
    data.name || '',
    data.whatsapp || '',
    data.email || '',
    data.level || '',
    data.university || '',
    data.source || 'Popup'
  ]);

  return ContentService.createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}`

interface Lead {
  id?: string
  bdTime?: string
  ukTime?: string
  name: string
  whatsapp: string
  email?: string
  level?: string
  university?: string
  source?: string
}

export default function AdminLeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([])
  const [webhookUrl, setWebhookUrl] = useState('')
  const [copied, setCopied] = useState(false)
  const [savedMsg, setSavedMsg] = useState('')
  const [loading, setLoading] = useState(true)

  const fetchLeads = async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/leads')
      const data = await res.json()
      if (data.ok) {
        setLeads(data.leads || [])
        if (data.webhookUrl) setWebhookUrl(data.webhookUrl)
      }
    } catch {
      // ignore
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchLeads()
  }, [])

  const handleCopyScript = () => {
    navigator.clipboard.writeText(APPS_SCRIPT_CODE)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  const handleSaveWebhook = async (e: React.FormEvent) => {
    e.preventDefault()
    setSavedMsg('Saving...')
    try {
      const res = await fetch('/api/leads', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ webhookUrl }),
      })
      if (res.ok) {
        setSavedMsg('Connected! Sending a test lead to your Google Sheet...')
        await fetch('/api/leads', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: 'Test Student (Connected)',
            whatsapp: '+447776181483',
            source: 'Google Sheet Connection Test',
          }),
        })
        await fetchLeads()
        setSavedMsg('Connected & Test Lead Sent to Your Google Sheet!')
      }
    } catch {
      setSavedMsg('Error saving URL.')
    }
  }

  const handleDownloadCsv = () => {
    const headers = ['Date (BD)', 'Date (UK)', 'Name', 'WhatsApp', 'Email', 'Level', 'University', 'Source']
    const rows = leads.map((l) => [
      l.bdTime || '',
      l.ukTime || '',
      l.name || '',
      l.whatsapp || '',
      l.email || '',
      l.level || '',
      l.university || '',
      l.source || '',
    ])
    const csvContent =
      'data:text/csv;charset=utf-8,' +
      [headers, ...rows]
        .map((row) => row.map((v) => `"${String(v).replace(/"/g, '""')}"`).join(','))
        .join('\n')
    const encodedUri = encodeURI(csvContent)
    const link = document.createElement('a')
    link.setAttribute('href', encodedUri)
    link.setAttribute('download', 'sage-roots-leads.csv')
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="min-h-screen bg-[#F8FAF9] pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Header Card */}
        <div className="bg-[#073224] text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-lg">
          <div>
            <p className="text-emerald-300 text-xs font-bold uppercase tracking-widest mb-1">
              Sage Roots International • Lead Manager
            </p>
            <h1 className="text-2xl sm:text-3xl font-black">
              Google Sheet &amp; Website Leads
            </h1>
            <p className="text-white/75 text-xs sm:text-sm mt-1">
              Target Sheet ID: <code className="bg-black/30 px-2 py-0.5 rounded">{SHEET_ID}</code>
            </p>
          </div>
          <div className="flex flex-wrap gap-2.5">
            <a
              href={SHEET_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs sm:text-sm px-4 py-2.5 rounded-xl transition"
            >
              <FileSpreadsheet className="w-4 h-4" />
              Open Your Google Sheet
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <button
              type="button"
              onClick={handleDownloadCsv}
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm px-4 py-2.5 rounded-xl transition"
            >
              <Download className="w-4 h-4" />
              Download Excel (CSV)
            </button>
          </div>
        </div>

        {/* One-Time Google Sheet Authorization Box */}
        <div className="bg-white rounded-2xl border border-emerald-100 p-6 sm:p-8 shadow-sm space-y-5">
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div>
              <h2 className="text-[#06241B] font-black text-lg">
                Connect Directly to Your Google Sheet (30-Second Setup)
              </h2>
              <p className="text-gray-500 text-xs sm:text-sm mt-1">
                Google requires your sheet&apos;s permission to write rows automatically. Copy the pre-configured script below into your sheet&apos;s <strong>Extensions → Apps Script</strong> and paste the Web App URL here once:
              </p>
            </div>
            <button
              type="button"
              onClick={handleCopyScript}
              className="inline-flex items-center gap-2 bg-[#073224] hover:bg-[#042017] text-white font-bold text-xs px-4 py-2.5 rounded-xl transition"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              {copied ? 'Script Copied!' : '1. Copy Script for Your Sheet'}
            </button>
          </div>

          <pre className="bg-gray-900 text-emerald-300 text-xs p-4 rounded-xl overflow-x-auto leading-relaxed">
            {APPS_SCRIPT_CODE}
          </pre>

          <form onSubmit={handleSaveWebhook} className="flex flex-col sm:flex-row gap-3 pt-2">
            <input
              type="url"
              value={webhookUrl}
              onChange={(e) => setWebhookUrl(e.target.value)}
              placeholder="2. Paste your Google Apps Script Web App URL (https://script.google.com/macros/s/.../exec)"
              className="flex-1 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-[#06241B] focus:outline-none focus:border-[#073224]"
              required
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm px-6 py-2.5 rounded-xl transition whitespace-nowrap"
            >
              <Send className="w-4 h-4" />
              Save &amp; Test Send
            </button>
          </form>

          {savedMsg && (
            <p className="text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-xl px-4 py-2.5 text-xs font-semibold flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              {savedMsg}
            </p>
          )}
        </div>

        {/* Live Collected Leads Table */}
        <div className="bg-white rounded-2xl border border-emerald-100 p-6 sm:p-8 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-[#06241B] font-black text-lg">
              Collected Leads ({leads.length})
            </h2>
            <button
              type="button"
              onClick={fetchLeads}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#073224] hover:underline"
            >
              <RefreshCw className="w-3.5 h-3.5" /> Refresh
            </button>
          </div>

          {loading ? (
            <p className="text-gray-400 text-sm py-8 text-center">Loading leads...</p>
          ) : leads.length === 0 ? (
            <p className="text-gray-400 text-sm py-8 text-center">
              No leads submitted yet. Try submitting a lead from the popup on the home page!
            </p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="border-b border-gray-200 text-gray-500 text-xs uppercase">
                    <th className="py-3 px-3">Date / Time</th>
                    <th className="py-3 px-3">Full Name</th>
                    <th className="py-3 px-3">WhatsApp Number</th>
                    <th className="py-3 px-3">Source</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {leads.map((lead, i) => (
                    <tr key={lead.id || i} className="hover:bg-gray-50">
                      <td className="py-3 px-3 text-xs text-gray-500 whitespace-nowrap">
                        {lead.bdTime || lead.ukTime || '-'}
                      </td>
                      <td className="py-3 px-3 font-bold text-[#06241B]">{lead.name}</td>
                      <td className="py-3 px-3 font-semibold text-emerald-700">
                        <a
                          href={`https://wa.me/${lead.whatsapp.replace(/\D/g, '')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline"
                        >
                          {lead.whatsapp}
                        </a>
                      </td>
                      <td className="py-3 px-3 text-xs text-gray-500">{lead.source}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
