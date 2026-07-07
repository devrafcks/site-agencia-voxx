'use client'

import { useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PaperPlaneTilt, CheckCircle, WarningCircle, CircleNotch } from '@phosphor-icons/react'
import { sendContactEmail, type FormState } from './actions'
import { trackEvent } from '@/lib/gtag'

const fadeInUp = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
}

const inputBase =
  'w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 font-body text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-orange transition-all duration-200'

function Field({ label, id, children, required }: {
  label: string; id: string; children: React.ReactNode; required?: boolean
}) {
  return (
    <div className="group">
      <label
        htmlFor={id}
        className="block font-body text-xs font-bold uppercase tracking-widest text-white/40 mb-2 transition-colors group-focus-within:text-orange"
      >

        {label}{required && <span className="text-orange ml-0.5">*</span>}
      </label>
      {children}
    </div>
  )
}

export default function Contato() {
  const [state, setState]   = useState<FormState>({ status: 'idle', message: '' })
  const [loading, setLoading] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setState({ status: 'idle', message: '' })
    const result = await sendContactEmail({ status: 'idle', message: '' }, new FormData(e.currentTarget))
    setState(result)
    setLoading(false)
    if (result.status === 'success') {
      trackEvent('generate_lead', { form: 'contato' })
      formRef.current?.reset()
    } else {
      trackEvent('form_error', { form: 'contato' })
    }
  }

  return (
    <main className="relative overflow-x-hidden bg-navy selection:bg-orange/20 selection:text-white min-h-screen section-grid">
      <div className="absolute inset-0 bg-[url('/texture.avif')] opacity-10 mix-blend-overlay pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange/3 rounded-full blur-[120px] pointer-events-none" />

      <section className="relative z-10 pt-36 pb-24 md:pt-52 md:pb-32">
        <div className="voxx-container max-w-2xl mx-auto">

          {/* Title */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="mb-12"
          >
            <motion.h1
              variants={fadeInUp}
              className="font-display font-normal text-white leading-[1.05] mb-4"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
            >
              Vamos fazer sua marca<br />
              <span className="text-orange italic accent-line">crescer.</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="font-body text-cream/60 text-lg leading-relaxed">
              Preencha o formulário e nossa equipe entra em contato em até 24h úteis.
            </motion.p>
          </motion.div>

          {/* Form card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative rounded-[2rem] border border-white/10 bg-white/4 backdrop-blur-sm overflow-hidden p-8 md:p-12">
              <div className="absolute top-0 right-0 w-48 h-48 bg-orange/8 rounded-bl-full pointer-events-none" />

              <form ref={formRef} onSubmit={handleSubmit} className="relative z-10 space-y-6">

                {/* Name + Email side by side */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <Field label="Nome Completo" id="name" required>
                    <input
                      id="name" name="name" type="text" required
                      placeholder="Seu nome"
                      className={inputBase}
                    />
                  </Field>
                  <Field label="E-mail" id="email" required>
                    <input
                      id="email" name="email" type="email" required
                      placeholder="nome@empresa.com"
                      className={inputBase}
                    />
                  </Field>
                </div>

                {/* Message */}
                <Field label="Mensagem" id="message" required>
                  <textarea
                    id="message" name="message" required rows={6}
                    placeholder="Conte sobre seu projeto, objetivos e como podemos ajudar..."
                    className={`${inputBase} resize-none`}
                  />
                </Field>

                {/* Feedback */}
                <AnimatePresence>
                  {state.status !== 'idle' && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className={`flex items-start gap-3 p-4 rounded-xl text-sm font-body ${
                        state.status === 'success'
                          ? 'bg-green-500/10 border border-green-500/20 text-green-400'
                          : 'bg-red-500/10 border border-red-500/20 text-red-400'
                      }`}
                    >
                      {state.status === 'success'
                        ? <CheckCircle size={18} weight="bold" className="flex-shrink-0 mt-0.5" />
                        : <WarningCircle size={18} weight="bold" className="flex-shrink-0 mt-0.5" />
                      }
                      {state.message}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="group w-full py-4 rounded-xl bg-orange text-white font-body font-bold text-sm uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-orange/90 active:scale-[0.98] transition-all duration-200 shadow-lg shadow-orange/20 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <><CircleNotch size={18} weight="bold" className="animate-spin" />Enviando...</>
                  ) : (
                    <>Enviar Mensagem<PaperPlaneTilt size={16} weight="bold" className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" /></>
                  )}
                </button>

                <p className="font-body text-white/20 text-[10px] text-center tracking-wider uppercase">
                  Seus dados estão protegidos e nunca serão compartilhados.
                </p>
              </form>
            </div>
          </motion.div>

        </div>
      </section>
    </main>
  )
}
