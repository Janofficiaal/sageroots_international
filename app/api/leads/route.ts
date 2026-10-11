import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

const GOOGLE_SHEET_ID = '1iseIi95hm7gGEE9WTF-0gLip4yRqt11lEysvnm2uDdI'
const GOOGLE_SHEET_URL =
  'https://docs.google.com/spreadsheets/d/1iseIi95hm7gGEE9WTF-0gLip4yRqt11lEysvnm2uDdI/edit?gid=0#gid=0'
const DEFAULT_WEBHOOK_URL =
  'https://script.google.com/macros/s/AKfycbyYlTUStK0vhhnsSPEuE623Y-Bu_gwajkuTRvLc8Iu-Q3wLWul3jguEtBaIRimgyNTq/exec'

const backupFile = path.join(process.cwd(), 'data', 'leads-backup.json')
const configFile = path.join(process.cwd(), 'data', 'sheet-config.json')

function getSavedWebhookUrl(): string {
  if (process.env.GOOGLE_SHEET_WEBHOOK_URL) {
    return process.env.GOOGLE_SHEET_WEBHOOK_URL
  }
  if (process.env.NEXT_PUBLIC_GOOGLE_SHEET_WEBHOOK_URL) {
    return process.env.NEXT_PUBLIC_GOOGLE_SHEET_WEBHOOK_URL
  }
  try {
    if (fs.existsSync(configFile)) {
      const raw = JSON.parse(fs.readFileSync(configFile, 'utf8') || '{}')
      if (raw.webhookUrl) return raw.webhookUrl
    }
  } catch {
    // ignore
  }
  return DEFAULT_WEBHOOK_URL
}

function readLeads(): unknown[] {
  try {
    if (fs.existsSync(backupFile)) {
      return JSON.parse(fs.readFileSync(backupFile, 'utf8') || '[]')
    }
  } catch {
    // ignore
  }
  return []
}

export async function GET() {
  return NextResponse.json({
    ok: true,
    sheetId: GOOGLE_SHEET_ID,
    sheetUrl: GOOGLE_SHEET_URL,
    webhookUrl: getSavedWebhookUrl(),
    leads: readLeads(),
  })
}

export async function PUT(request: Request) {
  try {
    const { webhookUrl = '' } = await request.json()
    fs.writeFileSync(
      configFile,
      JSON.stringify(
        {
          sheetId: GOOGLE_SHEET_ID,
          sheetUrl: GOOGLE_SHEET_URL,
          webhookUrl: webhookUrl.trim() || DEFAULT_WEBHOOK_URL,
          updatedAt: new Date().toISOString(),
        },
        null,
        2
      ),
      'utf8'
    )
    return NextResponse.json({
      ok: true,
      webhookUrl: webhookUrl.trim() || DEFAULT_WEBHOOK_URL,
    })
  } catch (err) {
    console.error('Failed to save webhook config:', err)
    return NextResponse.json(
      { ok: false, error: 'Failed to save webhook URL' },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const {
      name = '',
      whatsapp = '',
      email = '',
      level = '',
      destination = 'United Kingdom',
      university = '',
      message = '',
      source = 'Entry Popup',
    } = body

    if (!name.trim() || !whatsapp.trim()) {
      return NextResponse.json(
        { ok: false, error: 'Name and WhatsApp number are required.' },
        { status: 400 }
      )
    }

    const payload = {
      id: Date.now().toString(),
      timestamp: new Date().toISOString(),
      ukTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/London' }),
      bdTime: new Date().toLocaleString('en-GB', { timeZone: 'Asia/Dhaka' }),
      name: name.trim(),
      whatsapp: whatsapp.trim(),
      email: email.trim(),
      level,
      destination,
      university,
      message,
      source,
      sheetId: GOOGLE_SHEET_ID,
    }

    // 1. Forward to Google Sheets Apps Script Webhook
    const webhookUrl = getSavedWebhookUrl()
    let syncedToGoogleSheet = false

    if (webhookUrl && webhookUrl.startsWith('https://script.google.com/')) {
      try {
        const res = await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'text/plain;charset=utf-8' },
          body: JSON.stringify(payload),
          redirect: 'follow',
        })
        syncedToGoogleSheet = res.ok || res.status === 302
      } catch (err) {
        console.error('Google Sheet webhook error:', err)
      }
    }

    // 2. Always append to local JSON file so zero leads are ever lost
    try {
      const existing = readLeads()
      existing.unshift(payload)
      fs.writeFileSync(backupFile, JSON.stringify(existing, null, 2), 'utf8')
    } catch {
      // Ignore filesystem write errors on read-only serverless environments
    }

    return NextResponse.json({
      ok: true,
      syncedToGoogleSheet,
      webhookUrl,
      sheetUrl: GOOGLE_SHEET_URL,
      lead: payload,
    })
  } catch (error) {
    console.error('Lead submission error:', error)
    return NextResponse.json(
      { ok: false, error: 'Failed to submit lead.' },
      { status: 500 }
    )
  }
}
