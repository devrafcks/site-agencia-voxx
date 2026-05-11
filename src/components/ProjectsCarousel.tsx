'use client'

import Image from 'next/image'
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

  return (
    <div className={styles.carousel}>
      <div className={styles.track}>
        <div className={`${styles.inner} ${reverse ? styles.reverse : ''}`}>
          {doubled.map((proj, i) => (
            <div key={`r-${i}`} className={styles.card}>
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
  )
}
