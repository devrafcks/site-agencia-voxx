'use server'

import nodemailer from 'nodemailer'

export type FormState = {
  status: 'idle' | 'success' | 'error'
  message: string
}

export async function sendContactEmail(
  _prev: FormState,
  formData: FormData
): Promise<FormState> {
  const name    = formData.get('name')?.toString().trim() ?? ''
  const email   = formData.get('email')?.toString().trim() ?? ''
  const phone   = formData.get('phone')?.toString().trim() ?? ''
  const service = formData.get('service')?.toString().trim() ?? ''
  const message = formData.get('message')?.toString().trim() ?? ''

  if (!name || !email || !message) {
    return { status: 'error', message: 'Preencha todos os campos obrigatórios.' }
  }

  const transporter = nodemailer.createTransport({
    host:   process.env.SMTP_HOST   ?? 'smtp.gmail.com',
    port:   Number(process.env.SMTP_PORT ?? 587),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  const html = `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#003F5C;border-radius:16px;overflow:hidden;">
      <div style="padding:32px;background:#F39642;">
        <h1 style="color:#fff;margin:0;font-size:24px;">Nova Solicitação de Contato</h1>
      </div>
      <div style="padding:32px;background:#fff;">
        <table style="width:100%;border-collapse:collapse;">
          <tr><td style="padding:12px 0;border-bottom:1px solid #f0f0f0;color:#6B7D8A;font-size:12px;text-transform:uppercase;letter-spacing:1px;width:120px;">Nome</td><td style="padding:12px 0;border-bottom:1px solid #f0f0f0;color:#0E1C26;font-weight:600;">${name}</td></tr>
          <tr><td style="padding:12px 0;border-bottom:1px solid #f0f0f0;color:#6B7D8A;font-size:12px;text-transform:uppercase;letter-spacing:1px;">E-mail</td><td style="padding:12px 0;border-bottom:1px solid #f0f0f0;color:#0E1C26;font-weight:600;">${email}</td></tr>
          ${phone ? `<tr><td style="padding:12px 0;border-bottom:1px solid #f0f0f0;color:#6B7D8A;font-size:12px;text-transform:uppercase;letter-spacing:1px;">Telefone</td><td style="padding:12px 0;border-bottom:1px solid #f0f0f0;color:#0E1C26;font-weight:600;">${phone}</td></tr>` : ''}
          ${service ? `<tr><td style="padding:12px 0;border-bottom:1px solid #f0f0f0;color:#6B7D8A;font-size:12px;text-transform:uppercase;letter-spacing:1px;">Serviço</td><td style="padding:12px 0;border-bottom:1px solid #f0f0f0;color:#0E1C26;font-weight:600;">${service}</td></tr>` : ''}
        </table>
        <div style="margin-top:24px;padding:20px;background:#F5F0E6;border-radius:12px;">
          <p style="color:#6B7D8A;font-size:12px;text-transform:uppercase;letter-spacing:1px;margin:0 0 8px;">Mensagem</p>
          <p style="color:#0E1C26;margin:0;line-height:1.7;">${message.replace(/\n/g, '<br>')}</p>
        </div>
      </div>
      <div style="padding:16px 32px;background:#F5F0E6;text-align:center;">
        <p style="color:#6B7D8A;font-size:11px;margin:0;">Enviado via formulário de contato — Voxx Agência</p>
      </div>
    </div>
  `

  try {
    await transporter.sendMail({
      from:    `"${name}" <${process.env.SMTP_USER}>`,
      replyTo: email,
      to:      process.env.CONTACT_EMAIL ?? process.env.SMTP_USER,
      subject: `[Voxx] Nova solicitação de ${name}`,
      html,
    })
    return { status: 'success', message: 'Mensagem enviada! Entraremos em contato em breve.' }
  } catch (err) {
    console.error('[sendContactEmail]', err)
    return { status: 'error', message: 'Falha ao enviar. Tente novamente ou nos chame no WhatsApp.' }
  }
}
