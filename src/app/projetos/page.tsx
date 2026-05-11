'use client'
import { motion } from 'framer-motion'
import SectionCTA from '@/components/SectionCTA'
import ProjectsCarousel from '@/components/ProjectsCarousel'

const projects = [
  { id: 1, image: '1522202176988-66273c2fd55f', category: 'Branding', title: 'Rebranding Nexus Corp', desc: 'Identidade visual completa e posicionamento global para líder de logística.' },
  { id: 2, image: '1460925895917-afdab827c52f', category: 'Web', title: 'Portal FinTech Solutions', desc: 'UX/UI e desenvolvimento de plataforma de investimentos de alta escala.' },
  { id: 3, image: '1542744173-8e7e53415bb0', category: 'Performance', title: 'Lançamento Tech Alpha', desc: 'Estratégia de tráfego que gerou ROI de 450% em 30 dias.' },
  { id: 4, image: '1486325212027-8081e485255e', category: 'Branding', title: 'StartUp Urban', desc: 'Criação de naming, voz e marca para mobilidade urbana sustentável.' },
  { id: 5, image: '1551434678-e076c223a692', category: 'Web', title: 'E-commerce Luxury', desc: 'Plataforma headless focada em conversão e experiência de alto padrão.' },
  { id: 6, image: '1497366216548-37526070297c', category: 'Performance', title: 'Growth B2B SaaS', desc: 'Escala de aquisição de leads qualificados via LinkedIn e Google Ads.' },
]

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as any } }
}

export default function Projetos() {
  const half = Math.ceil(projects.length / 2)
  const row1 = projects.slice(0, half)
  const row2 = projects.slice(half)

  return (
    <main className="overflow-x-hidden bg-white selection:bg-orange/20 selection:text-navy">
      {/* ─── Hero ────────────────────────────────────────── */}
      <section className="relative pt-40 pb-32 md:pt-52 md:pb-48 overflow-hidden bg-navy text-white section-grid">
        <div className="absolute inset-0 bg-[url('/texture.avif')] opacity-20 mix-blend-overlay" />
        <div className="absolute top-1/2 -right-20 w-96 h-96 bg-orange/5 blur-[120px] rounded-full hidden lg:block" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-orange/5 blur-[100px] rounded-full" />

        <div className="voxx-container relative z-10">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="max-w-4xl">
            <h1 className="font-display font-normal text-white leading-tight mb-8" style={{ fontSize: 'clamp(3.5rem, 6vw, 6rem)' }}>
               Onde a visão <br/>
               <span className="text-orange italic accent-line">toma forma.</span>
            </h1>
            <p className="font-body text-cream/70 text-xl max-w-2xl leading-relaxed">
              Explore nossa galeria de casos de sucesso. Cada projeto é um manifesto de como unimos estratégia impecável e execução criativa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── Carrossel — invade o hero com margem negativa ────────── */}
      <section className="bg-white pb-24 -mt-16 md:-mt-40">
        <ProjectsCarousel projects={row1} />
        <ProjectsCarousel projects={row2} reverse />
      </section>

      <SectionCTA />
    </main>
  )
}
