'use server'

import { Resend } from 'resend'

export type FormState = {
  status: 'idle' | 'success' | 'error'
  message: string
}

const resend = new Resend(process.env.RESEND_API_KEY)

function sanitize(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

function buildEmailHtml(name: string, email: string, message: string, sentAt: string): string {
  const safeName    = sanitize(name)
  const safeEmail   = sanitize(email)
  const safeMessage = sanitize(message).replace(/\n/g, '<br>')

  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Nova mensagem de contato — Agência Voxx</title>
</head>
<body style="margin:0;padding:0;background:#0a1520;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a1520;padding:40px 16px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#0E1C26 0%,#1a3a52 100%);border-radius:20px 20px 0 0;padding:36px 48px 28px;border-bottom:1px solid rgba(255,255,255,0.06);">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td valign="middle">
                    <img src="https://agenciavoxx.com.br/logo-white.png" alt="Agência Voxx" height="36" style="display:block;height:36px;width:auto;" />
                  </td>
                  <td align="right" valign="middle">
                    <p style="margin:0;color:rgba(255,255,255,0.25);font-size:10px;font-weight:600;letter-spacing:2px;text-transform:uppercase;">Formulário de contato</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Hero band -->
          <tr>
            <td style="background:linear-gradient(135deg,#112233 0%,#0d2035 100%);padding:40px 48px 36px;">
              <h1 style="margin:0 0 8px;color:#ffffff;font-size:26px;font-weight:300;letter-spacing:-0.5px;line-height:1.3;">Nova mensagem <strong style="font-weight:700;">recebida</strong></h1>
              <p style="margin:0;color:rgba(255,255,255,0.4);font-size:13px;">Um visitante preencheu o formulário do site.</p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="background:#ffffff;padding:40px 48px;">

              <!-- Lead info -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
                <tr>
                  <td colspan="2" style="padding-bottom:14px;border-bottom:2px solid #0E1C26;">
                    <p style="margin:0;color:#0E1C26;font-size:10px;font-weight:700;letter-spacing:3px;text-transform:uppercase;">Dados do Lead</p>
                  </td>
                </tr>
                <tr>
                  <td style="width:90px;padding:14px 0;border-bottom:1px solid #EEF2F5;vertical-align:top;">
                    <p style="margin:0;color:#8FA0AD;font-size:10px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;">Nome</p>
                  </td>
                  <td style="padding:14px 0 14px 20px;border-bottom:1px solid #EEF2F5;">
                    <p style="margin:0;color:#0E1C26;font-size:15px;font-weight:600;">${safeName}</p>
                  </td>
                </tr>
                <tr>
                  <td style="width:90px;padding:14px 0;vertical-align:top;">
                    <p style="margin:0;color:#8FA0AD;font-size:10px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;">E-mail</p>
                  </td>
                  <td style="padding:14px 0 14px 20px;">
                    <a href="mailto:${safeEmail}" style="margin:0;color:#1a3a52;font-size:15px;font-weight:600;text-decoration:none;">${safeEmail}</a>
                  </td>
                </tr>
              </table>

              <!-- Message -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding-bottom:12px;">
                    <p style="margin:0;color:#0E1C26;font-size:10px;font-weight:700;letter-spacing:3px;text-transform:uppercase;">Mensagem</p>
                  </td>
                </tr>
                <tr>
                  <td style="background:#F4F7FA;border-radius:12px;padding:24px;border-left:3px solid #1a3a52;">
                    <p style="margin:0;color:#1A2E3B;font-size:15px;line-height:1.8;">${safeMessage}</p>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#0E1C26;border-radius:0 0 20px 20px;padding:24px 48px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <p style="margin:0 0 2px;color:rgba(255,255,255,0.5);font-size:11px;">agenciavoxx.com.br</p>
                  </td>
                  <td align="right">
                    <p style="margin:0;color:rgba(255,255,255,0.25);font-size:10px;text-align:right;">Recebido em <strong style="color:rgba(255,255,255,0.4);">${sentAt}</strong></p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
}

export async function sendContactEmail(
  _prev: FormState,
  formData: FormData
): Promise<FormState> {
  const name    = formData.get('name')?.toString().trim() ?? ''
  const email   = formData.get('email')?.toString().trim() ?? ''
  const message = formData.get('message')?.toString().trim() ?? ''

  if (!name || !email || !message) {
    return { status: 'error', message: 'Preencha todos os campos obrigatórios.' }
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return { status: 'error', message: 'Informe um e-mail válido.' }
  }

  if (name.length > 200 || email.length > 254 || message.length > 5000) {
    return { status: 'error', message: 'Dados inválidos. Verifique os campos e tente novamente.' }
  }

  const sentAt = new Date().toLocaleString('pt-BR', {
    timeZone: 'America/Sao_Paulo',
    day: '2-digit', month: '2-digit', year: 'numeric',
    hour: '2-digit', minute: '2-digit',
  })

  try {
    const isProd = process.env.NODE_ENV === 'production'
    const fromAddress = isProd
      ? 'Agência Voxx <noreply@agenciavoxx.com.br>'
      : 'Agência Voxx <onboarding@resend.dev>'

    const { error } = await resend.emails.send({
      from:    fromAddress,
      to:      ['rafcksps@gmail.com'],
      replyTo: email,
      subject: `Nova mensagem de ${name} via site`,
      html:    buildEmailHtml(name, email, message, sentAt),
      headers: {
        'X-Entity-Ref-ID': `voxx-contact-${Date.now()}`,
      },
    })

    if (error) {
      console.error('[sendContactEmail] Resend error:', JSON.stringify(error))
      return { status: 'error', message: `Resend: ${error.message}` }
    }

    return { status: 'success', message: 'Mensagem enviada! Entraremos em contato em breve.' }
  } catch (err) {
    console.error('[sendContactEmail] Unexpected error:', err)
    return { status: 'error', message: 'Falha ao enviar. Tente novamente ou nos chame no WhatsApp.' }
  }
}
