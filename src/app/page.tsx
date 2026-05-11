'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Sparkles, Globe, Share2, BarChart2, Users2, CheckCircle2, ChevronRight } from 'lucide-react'
import SectionLabel from '@/components/SectionLabel'
import MetricCounter from '@/components/MetricCounter'
import SectionCTA from '@/components/SectionCTA'
import { useRef } from 'react'
import AlgoliaBlueButton from '@/components/animata/button/algolia-blue-button'

const clientLogos = ['Empresa Alpha', 'Conecta', 'BrandMax', 'Inova Corp', 'TechSul', 'Grupo Nexus']

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as any } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
}

export default function Home() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 300])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  return (
    <main className="overflow-x-hidden bg-cream selection:bg-orange/20 selection:text-navy">
      <section ref={heroRef} className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-navy pt-48 pb-24">
        <motion.div 
          style={{ y, opacity }} 
          className="absolute inset-0 z-0 h-[140%] w-full will-change-transform"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/12902-242487547.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-linear-to-t from-navy via-navy/70 to-transparent" />
        </motion.div>

        <div className="voxx-container relative z-10 w-full pt-12 md:pt-0">
          <div className="max-w-4xl">
            <motion.h1 
              initial="hidden" animate="visible" variants={staggerContainer}
              className="font-display font-black text-white leading-[1.05] tracking-tight mb-8"
              style={{ fontSize: 'clamp(2.2rem, 6vw, 5rem)' }}
            >
              <motion.span variants={fadeInUp} className="block">Elevamos sua marca</motion.span>
              <motion.span variants={fadeInUp} className="block">
                ao próximo <span className="text-orange">nível.</span>
              </motion.span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
              className="font-body text-cream/80 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl"
            >
              Estratégia, criatividade e tecnologia integradas para gerar resultados inquestionáveis em um cenário digital hipercompetitivo.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center gap-4"
            >
              <Link href="/contato" className="w-full sm:w-auto">
                <AlgoliaBlueButton className="w-full sm:w-auto h-14 px-8 text-base rounded-full font-body font-bold">
                  Iniciar Projeto
                </AlgoliaBlueButton>
              </Link>
              <Link href="/projetos" className="w-full sm:w-auto inline-flex items-center justify-center h-14 px-8 rounded-full border border-white/20 text-white font-body font-bold text-base backdrop-blur-sm hover:bg-white hover:text-navy transition-all duration-300">
                Nosso Portfólio
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-cream relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none" />
        
        <div className="voxx-container relative z-10">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
            className="max-w-3xl mb-20"
          >
            <div className="flex items-center gap-4 mb-6">
               <span className="w-12 h-[2px] bg-orange" />
               <h3 className="font-body text-orange uppercase tracking-[0.2em] text-sm font-bold">Por que a Voxx</h3>
            </div>
            <h2 className="font-display font-black text-navy leading-tight" style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)' }}>
              Nós não criamos apenas design. <br/>
              <span className="text-muted/50">Nós construímos</span> <span className="italic">autoridade</span>.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
            {[
              { num: '01', title: 'Data-Driven Strategy', desc: 'Não operamos no escuro. Mapeamos jornadas e utilizamos dados para decisões de alto impacto que maximizam o seu ROI.', col: 'md:col-span-5' },
              { num: '02', title: 'Design Imersivo', desc: 'Direção de arte com padrão internacional. Criamos experiências visuais que fixam sua marca na memória do consumidor.', col: 'md:col-span-7' },
              { num: '03', title: 'Tecnologia Escalável', desc: 'Aplicações web extremamente rápidas, otimizadas para SEO e prontas para absorver o crescimento do seu negócio.', col: 'md:col-span-6' },
              { num: '04', title: 'Resultados Mensuráveis', desc: 'Transparência total. Você acompanha cada etapa, KPI e conversão gerada pelas nossas campanhas.', col: 'md:col-span-6' },
            ].map((item, i) => (
              <motion.div 
                key={item.num}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: i * 0.1 }}
                className={`group relative p-10 md:p-14 bg-white rounded-3xl border border-navy/5 overflow-hidden hover:border-orange/20 transition-colors ${item.col}`}
              >
                <div className="absolute top-0 right-0 -translate-y-8 translate-x-8 text-[150px] font-display font-black text-cream/50 group-hover:text-orange/5 transition-colors duration-500 pointer-events-none select-none">
                  {item.num}
                </div>
                <div className="relative z-10">
                  <h3 className="font-display font-bold text-navy text-2xl md:text-3xl mb-4 group-hover:text-orange transition-colors">{item.title}</h3>
                  <p className="font-body text-muted text-lg leading-relaxed max-w-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── O Que Fazemos (Services Showcase) ──────────────────────────── */}
      <section className="py-32 bg-navy relative text-white">
        <div className="voxx-container relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="max-w-2xl">
              <div className="flex items-center gap-4 mb-6">
                 <span className="w-12 h-[2px] bg-orange" />
                 <h3 className="font-body text-orange uppercase tracking-[0.2em] text-sm font-bold">Nossa Expertise</h3>
              </div>
              <h2 className="font-display font-black text-white leading-tight mb-8" style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)' }}>
                Soluções que <span className="text-orange italic">transformam</span> <br/> e impulsionam o seu negócio.
              </h2>
              <Link href="/servicos" className="inline-flex items-center gap-2 font-body text-white hover:text-orange transition-colors border-b border-orange/30 hover:border-orange pb-1">
                Explorar todos os serviços <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: <Sparkles size={32} strokeWidth={1.5} />, title: 'Branding & Design', desc: 'Identidade visual de alto padrão que comunica valor e diferencia sua empresa dos concorrentes no primeiro olhar.' },
              { icon: <Globe size={32} strokeWidth={1.5} />, title: 'Web Experience', desc: 'Desenvolvimento de sites e portais ultrarrápidos, imersivos e desenhados especificamente para converter visitantes em clientes.' },
              { icon: <BarChart2 size={32} strokeWidth={1.5} />, title: 'Performance Digital', desc: 'Tráfego pago avançado, SEO e estratégias data-driven focadas agressivamente no aumento da sua receita.' },
            ].map((s, i) => (
              <motion.div 
                key={s.title}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: i * 0.15 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group p-10 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 transition-colors duration-300 hover:bg-white/10"
              >
                <div className="w-16 h-16 rounded-2xl bg-orange/20 text-orange flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-orange group-hover:text-white transition-all duration-300">
                  {s.icon}
                </div>
                <h3 className="font-display font-bold text-2xl mb-4">{s.title}</h3>
                <p className="font-body text-cream/70 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Projetos em Destaque ─────────────────────────────────── */}
      <section className="py-32 bg-cream">
        <div className="voxx-container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-20">
             <div className="flex items-center justify-center gap-4 mb-6">
                 <span className="w-8 h-[2px] bg-orange" />
                 <h3 className="font-body text-orange uppercase tracking-[0.2em] text-sm font-bold">Showcase</h3>
                 <span className="w-8 h-[2px] bg-orange" />
              </div>
            <h2 className="font-display font-black text-navy leading-tight" style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)' }}>
              Trabalhos que falam <br/> <span className="text-orange italic">por si mesmos.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {[
              { img: '1522202176988-66273c2fd55f', cat: 'Branding Institucional', title: 'Rebranding Consultoria Global', span: 'md:col-span-2 aspect-[21/9]' },
              { img: '1460925895917-afdab827c52f', cat: 'Plataforma Web', title: 'Portal Corporativo B2B', span: 'col-span-1 aspect-[4/5] md:aspect-[4/3]' },
              { img: '1542744173-8e7e53415bb0', cat: 'Campanha Digital', title: 'Lançamento de Produto Tech', span: 'col-span-1 aspect-[4/5] md:aspect-[4/3]' },
            ].map((p, i) => (
              <motion.div 
                key={p.title}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 0.98 }}
                whileTap={{ scale: 0.95 }}
                className={`group relative overflow-hidden rounded-[2rem] cursor-pointer ${p.span}`}
              >
                <Image src={`https://images.unsplash.com/photo-${p.img}?w=1200&q=80&auto=format&fit=crop`} alt={p.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="inline-block px-4 py-1.5 bg-orange text-white text-xs font-bold uppercase tracking-wider rounded-full mb-4">
                      {p.cat}
                    </span>
                    <h3 className="font-display font-bold text-white text-3xl md:text-4xl mb-2">{p.title}</h3>
                    <div className="flex items-center gap-2 text-white/80 font-body opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                      Ver Estudo de Caso <ArrowRight size={16} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Métricas Animadas ─────────────────────────────────────────── */}
      <section className="py-24 bg-cream border-y border-navy/5">
        <div className="voxx-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center divide-x divide-navy/5">
            {[
              { num: 47, suf: '+', lbl: 'Projetos de Alto Impacto' },
              { num: 8, suf: ' Anos', lbl: 'De Excelência Criativa' },
              { num: 120, suf: '+', lbl: 'Marcas Transformadas' },
              { num: 98, suf: '%', lbl: 'Taxa de Retenção' },
            ].map((m, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: i * 0.1 }} className="flex flex-col items-center justify-center">
                <MetricCounter target={m.num} suffix={m.suf} label="" />
                <span className="font-body text-muted text-sm font-medium mt-2 max-w-[120px]">{m.lbl}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionCTA />
    </main>
  )
}
