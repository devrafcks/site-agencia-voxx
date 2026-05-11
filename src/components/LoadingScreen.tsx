'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const words = [
  'Estratégia',
  'Branding',
  'Identidade',
  'Criatividade',
  'Performance',
  'Conversão',
  'Autoridade',
  'Resultados',
]

const DURATION_MS = 3400

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0)
  const [currentWord, setCurrentWord] = useState(0)
  const [done, setDone] = useState(false)
  const [hidden, setHidden] = useState(false)
  const startTime = useRef(Date.now())

  // Progress ticker — runs for exactly DURATION_MS
  useEffect(() => {
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime.current
      const raw = Math.min((elapsed / DURATION_MS) * 100, 100)

      // Add organic feel — ease-in-out curve
      const t = raw / 100
      const eased = t < 0.5
        ? 2 * t * t
        : 1 - Math.pow(-2 * t + 2, 2) / 2
      const display = Math.round(eased * 100)

      setProgress(display)

      if (elapsed >= DURATION_MS) {
        setProgress(100)
        clearInterval(interval)
      }
    }, 30)

    return () => clearInterval(interval)
  }, [])

  // Cycle words evenly across the duration
  useEffect(() => {
    const wordIndex = Math.min(
      Math.floor((progress / 100) * words.length),
      words.length - 1
    )
    setCurrentWord(wordIndex)
  }, [progress])

  // When progress hits 100, trigger exit after a brief pause
  useEffect(() => {
    if (progress >= 100 && !done) {
      const timer = setTimeout(() => setDone(true), 300)
      return () => clearTimeout(timer)
    }
  }, [progress, done])

  // Fully remove from DOM after exit animation
  const handleExitComplete = () => setHidden(true)

  if (hidden) return null

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {!done && (
        <motion.div
          key="loading-screen"
          exit={{ y: '-100%' }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] bg-navy flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Texture overlay */}
          <div className="absolute inset-0 bg-[url('/texture.avif')] opacity-10 mix-blend-overlay pointer-events-none" />

          {/* Subtle corner glow */}
          <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] bg-orange/8 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute -top-32 -left-32 w-[300px] h-[300px] bg-orange/5 rounded-full blur-[100px] pointer-events-none" />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center gap-12 px-6 w-full max-w-lg">

            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative w-36 h-10 md:w-44 md:h-12"
            >
              <Image
                src="/logo-white.png"
                alt="Voxx"
                fill
                sizes="176px"
                className="object-contain"
                priority
              />
            </motion.div>

            {/* Cycling word */}
            <div className="flex items-center justify-center w-full py-2">
              <AnimatePresence mode="wait">
                <motion.span
                  key={words[currentWord]}
                  initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -20, filter: 'blur(6px)' }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="font-display font-black text-white italic text-center whitespace-nowrap"
                  style={{ fontSize: 'clamp(2rem, 8vw, 4rem)' }}
                >
                  {words[currentWord]}
                </motion.span>
              </AnimatePresence>
            </div>

            {/* Progress bar + counter */}
            <div className="w-full space-y-4">
              {/* Bar track */}
              <div className="relative w-full h-[2px] bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="absolute left-0 top-0 h-full bg-orange rounded-full"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Counter + label */}
              <div className="flex items-baseline justify-between">
                <span className="font-body text-white/30 text-[10px] uppercase tracking-[0.3em]">
                  Carregando experiência
                </span>
                <span className="font-display font-black text-orange text-lg tabular-nums">
                  {String(progress).padStart(3, '0')}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
