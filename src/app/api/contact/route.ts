import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(req: NextRequest) {
  const { name, email, company, service, message } = await req.json()

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 })
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    return NextResponse.json({ error: 'Email service is not configured.' }, { status: 500 })
  }

  const resend = new Resend(apiKey)

  try {
    await resend.emails.send({
      from:    'AARAi Contact Form <onboarding@resend.dev>',
      to:      'hello@aarai.solutions',
      replyTo: email,
      subject: `New enquiry from ${name}${company ? ` · ${company}` : ''} — ${service}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#1a1a1a">
          <h2 style="color:#00c8ff;margin-bottom:4px">New Contact Form Submission</h2>
          <p style="color:#666;margin-top:0;font-size:14px">Received via aarai.solutions</p>
          <hr style="border:none;border-top:1px solid #eee;margin:20px 0"/>

          <table style="width:100%;font-size:15px;border-collapse:collapse">
            <tr><td style="padding:8px 0;color:#666;width:140px">Name</td><td style="padding:8px 0;font-weight:600">${name}</td></tr>
            <tr><td style="padding:8px 0;color:#666">Email</td><td style="padding:8px 0"><a href="mailto:${email}" style="color:#00c8ff">${email}</a></td></tr>
            ${company ? `<tr><td style="padding:8px 0;color:#666">Company</td><td style="padding:8px 0">${company}</td></tr>` : ''}
            <tr><td style="padding:8px 0;color:#666">Service</td><td style="padding:8px 0">${service}</td></tr>
          </table>

          <hr style="border:none;border-top:1px solid #eee;margin:20px 0"/>
          <p style="color:#666;font-size:13px;margin-bottom:6px">Message</p>
          <p style="font-size:15px;line-height:1.7;white-space:pre-wrap">${message}</p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Failed to send message.' }, { status: 500 })
  }
}
