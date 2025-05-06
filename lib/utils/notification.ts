import type { Lead } from "@/lib/models/lead"
import nodemailer from "nodemailer"
import fetch from "node-fetch"

const {
  EMAIL_USER,
  EMAIL_PASSWORD,
  TELEGRAM_BOT_TOKEN,
  TELEGRAM_CHAT_ID1,
  TELEGRAM_CHAT_ID2,
} = process.env

export async function sendLeadNotificationEmail(lead: Lead) {
  if (!EMAIL_USER || !EMAIL_PASSWORD) {
    console.warn("Email credentials are missing")
    return
  }
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASSWORD,
    },
  })

  const time = new Date().toLocaleString()
  const text = `
New SGTU application received at ${time}

Name: ${lead.name}
Email: ${lead.email}
Phone: ${lead.phone}
Course: ${lead.course}
Graduation: ${lead.graduation || "N/A"}
Experience: ${lead.experienceMonths ?? "N/A"} months
Consent: ${lead.consent}
  `.trim()

  const html = `
    <h2>New SGTU application received at ${time}</h2>
    <p><strong>Name:</strong> ${lead.name}</p>
    <p><strong>Email:</strong> ${lead.email}</p>
    <p><strong>Phone:</strong> ${lead.phone}
       &nbsp;<a href="tel:${lead.phone}" 
               style="display:inline-block;
                      padding:4px 8px;
                      background:#28a745;
                      color:#fff;
                      text-decoration:none;
                      border-radius:4px;
                      font-size:14px;">
         Call
       </a>
    </p>
    <p><strong>Course:</strong> ${lead.course}</p>
    <p><strong>Graduation:</strong> ${lead.graduation || "N/A"}</p>
    <p><strong>Experience:</strong> ${lead.experienceMonths ?? "N/A"} months</p>
    <p><strong>Consent:</strong> ${lead.consent}</p>
  `.trim()

  await transporter.sendMail({
    from: EMAIL_USER,
    to: ["niyazi.waqar007@gmail.com", "ice40125@gmail.com"],
    subject: "New SGTU Application Received",
    text,
    html,
  })
}

export async function sendLeadNotificationTelegram(lead: Lead) {
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID1) {
    console.warn("Telegram bot config missing")
    return
  }
  const time = new Date().toLocaleString()
  const message = `
📬 New SGTU application at ${time}

👤 ${lead.name}
✉️ ${lead.email}
📞 ${lead.phone}
🎓 ${lead.course}
🎓 Grad: ${lead.graduation || "N/A"}
💼 Exp: ${lead.experienceMonths ?? "N/A"} mo
✅ Consent: ${lead.consent}
  `.trim()

  const targets = [TELEGRAM_CHAT_ID1, TELEGRAM_CHAT_ID2].filter(Boolean)
  await Promise.all(
    targets.map((chat_id) =>
      fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id,
          text: message,
          parse_mode: "HTML",
        }),
      })
    )
  )
}