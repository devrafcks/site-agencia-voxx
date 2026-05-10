'use client'
import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import SectionCTA from '@/components/SectionCTA'

const categories = ['Todos', 'Branding', 'Web', 'Performance']

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
  const [activeFilter, setActiveFilter] = useState('Todos')
  
  const filteredProjects = projects.filter(p => activeFilter === 'Todos' || p.category === activeFilter)

  return (
    <main className="overflow-x-hidden bg-cream selection:bg-orange/20 selection:text-navy">
      {/* ─── Hero ────────────────────────────────────────── */}
      <section className="pt-40 pb-12 md:pt-52 md:pb-20">
        <div className="voxx-container">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="max-w-4xl">
            <h1 className="font-display font-black text-navy leading-tight mb-8" style={{ fontSize: 'clamp(3.5rem, 6vw, 6rem)' }}>
               Onde a visão <br/>
               <span className="text-orange italic">toma forma.</span>
            </h1>
            <p className="font-body text-muted text-xl max-w-2xl leading-relaxed">
              Explore nossa galeria de casos de sucesso. Cada projeto é um manifesto de como unimos estratégia impecável e execução criativa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── Filtros ─────────────────────────────────── */}
      <section className="pb-8">
         <div className="voxx-container">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-wrap items-center gap-4">
               {categories.map(cat => (
                  <button 
                    key={cat}
                    onClick={() => setActiveFilter(cat)}
                    className={`px-6 py-3 rounded-full font-body font-bold text-sm uppercase tracking-wider transition-all duration-300 ${
                       activeFilter === cat 
                         ? 'bg-navy text-white shadow-lg shadow-navy/20' 
                         : 'bg-white text-navy border border-navy/10 hover:border-orange hover:text-orange'
                    }`}
                  >
                     {cat}
                  </button>
               ))}
            </motion.div>
         </div>
      </section>

      {/* ─── Grid de Projetos ─────────────────────────────────── */}
      <section className="py-16 bg-cream min-h-[800px]">
        <div className="voxx-container">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <AnimatePresence mode="popLayout">
               {filteredProjects.map((p, i) => (
                 <motion.div 
                   key={p.id}
                   layout
                   initial={{ opacity: 0, scale: 0.9 }}
                   animate={{ opacity: 1, scale: 1 }}
                   exit={{ opacity: 0, scale: 0.9 }}
                   transition={{ duration: 0.5, ease: "easeInOut" }}
                   whileHover={{ y: -10 }}
                   whileTap={{ scale: 0.98 }}
                   className="group cursor-pointer"
                 >
                   <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden bg-navy/5 mb-6">
                      <Image 
                        src={`https://images.unsplash.com/photo-${p.image}?w=1000&q=80&auto=format&fit=crop`} 
                        alt={p.title} 
                        fill 
                        sizes="(max-width: 768px) 100vw, 45vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105" 
                      />
                      <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/40 transition-colors duration-500" />
                      
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                         <div className="w-16 h-16 bg-orange text-white rounded-full flex items-center justify-center scale-50 group-hover:scale-100 transition-transform duration-500 ease-out">
                            <ArrowUpRight size={32} />
                         </div>
                      </div>
                   </div>
                   
                   <div>
                      <div className="flex items-center gap-3 mb-3">
                         <span className="w-8 h-[1px] bg-orange" />
                         <span className="font-body text-orange text-xs font-bold uppercase tracking-widest">{p.category}</span>
                      </div>
                      <h3 className="font-display font-bold text-navy text-3xl mb-3 group-hover:text-orange transition-colors">{p.title}</h3>
                      <p className="font-body text-muted text-lg leading-relaxed">{p.desc}</p>
                   </div>
                 </motion.div>
               ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <SectionCTA />
    </main>
  )
}
