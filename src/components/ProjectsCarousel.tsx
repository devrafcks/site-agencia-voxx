'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './ProjectsCarousel.module.css'

type Project = {
  id: number
  image: string
  title: string
  category: string
  desc: string
}

type Props = {
  projects: Project[]
  reverse?: boolean
  initialSelected?: string
}

export default function ProjectsCarousel({ projects, reverse = false, initialSelected }: Props) {
  const doubled = [...projects, ...projects]
  const [selected, setSelected] = useState<string | null>(null)

  useEffect(() => {
    if (initialSelected) {
      setSelected(initialSelected)
    }
  }, [initialSelected])

  return (
    <>
      <div className={styles.carousel}>
        <div className={styles.track}>
          <div className={`${styles.inner} ${reverse ? styles.reverse : ''}`}>
            {doubled.map((proj, i) => (
              <div
                key={`r-${i}`}
                className={`${styles.card} cursor-pointer`}
                onClick={() => setSelected(proj.image)}
              >
                <Image
                  src={proj.image}
                  alt={proj.title}
                  fill
                  sizes="520px"
                  className={styles.cardImg}
                />
                <span className={styles.overlay}>Ver projeto →</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 sm:p-6"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 320, damping: 28 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl bg-black max-h-[90dvh] max-w-[90vw] w-auto"
              style={{ aspectRatio: 'auto' }}
              onClick={e => e.stopPropagation()}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={selected}
                alt="Projeto"
                className="block max-h-[90dvh] max-w-[90vw] w-auto h-auto object-contain rounded-2xl"
              />
              <button
                onClick={() => setSelected(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center text-lg leading-none hover:bg-black/90 transition-colors"
                aria-label="Fechar"
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
