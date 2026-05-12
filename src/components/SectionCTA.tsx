import { ArrowRight } from '@phosphor-icons/react'
import { motion } from 'framer-motion'

type SectionCTAProps = {
  headline?: string
  accentWord?: string
  buttonLabel?: string
  href?: string
}

export default function SectionCTA({
  headline = 'Pronto para profissionalizar o seu marketing?',
  accentWord = 'profissionalizar',
  buttonLabel = 'Falar com a Voxx',
  href = 'https://wa.me/5515997273323',
}: SectionCTAProps) {
  const parts = accentWord ? headline.split(accentWord) : [headline, '']
  const isExternal = href.startsWith('http')

  return (
    <section className="py-32 bg-navy relative overflow-hidden section-grid">
      <div className="absolute inset-0 bg-[url('/texture.avif')] opacity-10 mix-blend-overlay" />

      <div className="voxx-container relative z-10 text-center">
        <h2 className="font-display font-normal text-white text-4xl md:text-6xl mb-12 max-w-4xl mx-auto leading-tight">
          {parts[0]}
          {accentWord && <span className="text-orange italic accent-line" style={{ textUnderlineOffset: '12px' }}>{accentWord}</span>}
          {parts[1]}
        </h2>
        <motion.div whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 400, damping: 17 }} className="inline-block">
          <a
            href={href}
            target={isExternal ? '_blank' : undefined}
            rel={isExternal ? 'noopener noreferrer' : undefined}
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-orange text-white font-body font-bold text-xl shadow-[0_0_40px_rgba(243,150,66,0.3)]"
          >
            {buttonLabel} <ArrowRight size={20} weight="bold" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
