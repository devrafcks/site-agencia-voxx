'use client'

import Image from 'next/image'
import { useState } from 'react'
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
}

export default function ProjectsCarousel({ projects, reverse = false }: Props) {
  const doubled = [...projects, ...projects]
  const [selected, setSelected] = useState<string | null>(null)

  return (
    <>
      <div className={styles.carousel}>
        <div className={styles.track}>
          <div className={`${styles.inner} ${reverse ? styles.reverse : ''}`}>
            {doubled.map((proj, i) => (
              <div
                key={`r-${i}`}
                className={`${styles.card} cursor-pointer`}
                onClick={() =>
                  setSelected(
                    `https://images.unsplash.com/photo-${proj.image}?w=1400&q=90&auto=format&fit=crop`
                  )
                }
              >
                <Image
                  src={`https://images.unsplash.com/photo-${proj.image}?w=1000&q=80&auto=format&fit=crop`}
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
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 320, damping: 28 }}
              className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              <Image
                src={selected}
                alt="Projeto"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 80vw"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
