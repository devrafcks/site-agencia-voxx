'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Sparkle, Globe, ShareNetwork, ChartBar, Users, CheckCircle, CaretRight } from '@phosphor-icons/react'
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
    <main className="relative overflow-x-hidden bg-cream selection:bg-orange/20 selection:text-navy">
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
            preload="auto"
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
              className="font-display font-normal text-white leading-[1.05] tracking-tight mb-8"
              style={{ fontSize: 'clamp(2.8rem, 7vw, 6.5rem)' }}
            >
              <motion.span variants={fadeInUp} className="block">Somos parceiros</motion.span>
              <motion.span variants={fadeInUp} className="block">
                de <span className="text-orange accent-line">crescimento.</span>
              </motion.span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
              className="font-body text-cream/80 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl"
            >
              Agência 360° especializada em comunicação estratégica. Unimos design, marketing e tecnologia para gerar <strong>crescimento real e mensurável</strong> para a sua marca.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center gap-4"
            >
              <a href="https://wa.me/5515997273323" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <AlgoliaBlueButton className="w-full sm:w-auto h-14 px-8 text-base rounded-full font-body font-bold">
                  Solicitar Orçamento
                </AlgoliaBlueButton>
              </a>
              <Link href="/projetos" className="w-full sm:w-auto inline-flex items-center justify-center h-14 px-8 rounded-full border border-white/20 text-white font-body font-bold text-base backdrop-blur-sm hover:bg-white hover:text-navy transition-all duration-300">
                Ver Portfólio
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-cream relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none" />

        <div className="voxx-container relative z-10">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
            className="max-w-3xl mb-12"
          >
            <div className="flex items-center gap-4 mb-6">
               <span className="w-12 h-[2px] bg-orange" />
               <h3 className="font-body text-orange uppercase tracking-[0.2em] text-sm font-bold">Por que a Voxx</h3>
            </div>
            <h2 className="font-display font-normal text-navy leading-tight" style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)' }}>
              Empresas de sucesso não apostam na sorte. <br className="hidden sm:block" />
              <span className="text-muted/50">Elas investem em</span> <span className="italic">marketing profissional.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
            {[
              { num: '01', title: 'Estratégia 360°', desc: <>Planejamento completo: do posicionamento de marca ao calendário editorial, com <strong>método e dados</strong> orientando cada decisão.</>, col: 'md:col-span-5' },
              { num: '02', title: 'Identidade Visual', desc: 'Criamos ou renovamos a identidade da sua marca com design único que fortalece o posicionamento e gera reconhecimento imediato.', col: 'md:col-span-7' },
              { num: '03', title: 'Tráfego e Conversão', desc: <>Gestão de tráfego pago focada em <strong>clientes qualificados</strong>, com relatórios completos de alcance, engajamento e retorno.</>, col: 'md:col-span-6' },
              { num: '04', title: 'Resultados Reais', desc: 'Transparência total. Você acompanha cada entrega, métrica e conversão gerada pelas nossas ações.', col: 'md:col-span-6' },
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
                  <h3 className="font-display font-normal text-navy text-2xl md:text-3xl mb-4 group-hover:text-orange transition-colors">{item.title}</h3>
                  <p className="font-body text-muted text-lg leading-relaxed max-w-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── O Que Fazemos (Services Showcase) ──────────────────────────── */}
      <section className="py-20 bg-navy relative text-white section-grid">
        <div className="voxx-container relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="max-w-2xl">
              <div className="flex items-center gap-4 mb-6">
                 <span className="w-12 h-[2px] bg-orange" />
                 <h3 className="font-body text-orange uppercase tracking-[0.2em] text-sm font-bold">Nossa Expertise</h3>
              </div>
              <h2 className="font-display font-normal text-white leading-tight mb-8" style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)' }}>
                Tudo integrado para <span className="text-orange italic accent-line">fortalecer</span> <br className="hidden md:block" /> sua marca e gerar crescimento.
              </h2>
              <Link href="/servicos" className="inline-flex items-center gap-2 font-body text-white hover:text-orange transition-colors border-b border-orange/30 hover:border-orange pb-1">
                Explorar todos os serviços <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: <ShareNetwork size={32} weight="bold" />, title: 'Gestão de Redes Sociais', desc: 'Planejamento estratégico, conteúdo relevante e gestão profissional para aumentar engajamento, alcance e conversões.', bg: 'bg-[var(--cream)]', text: 'text-dark' },
              { icon: <Sparkle size={32} weight="bold" />, title: 'Identidade Visual & Branding', desc: 'Criamos ou renovamos a identidade da sua marca com design único e impactante que fortalece o posicionamento no mercado.', bg: 'bg-white', text: 'text-dark' },
              { icon: <ChartBar size={32} weight="bold" />, title: 'Tráfego Pago & Métricas', desc: 'Campanhas online focadas em clientes qualificados, com análise constante e relatórios de desempenho para maximizar o retorno.', bg: 'bg-[#FFF5EC]', text: 'text-dark' },
            ].map((s, i) => (
              <motion.div
                key={s.title}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: i * 0.15 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`group p-10 ${s.bg} rounded-[20px] border border-transparent transition-all duration-300 flex flex-col`}
              >
                <div className="w-16 h-16 rounded-2xl bg-orange/20 text-orange flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-orange group-hover:text-white transition-all duration-300">
                  {s.icon}
                </div>
                <h3 className={`font-display font-bold text-2xl mb-4 ${s.text}`}>{s.title}</h3>
                <p className={`font-body leading-relaxed flex-1 ${s.text} opacity-70`}>{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Editorial Callout ───────────────────────────────────── */}
      <div className="bg-cream py-10">
        <div className="voxx-container">
          <div className="dashed-frame border-navy/25 text-navy max-w-2xl mx-auto text-center">
            <p className="font-display font-normal text-2xl leading-snug">
              Aqui, tudo é pensado para um único objetivo: fazer sua marca <span className="text-orange italic">crescer de verdade.</span>
            </p>
          </div>
        </div>
      </div>

      {/* ─── Projetos em Destaque ─────────────────────────────────── */}
      <section className="py-20 bg-cream">
        <div className="voxx-container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-10">
             <div className="flex items-center justify-center gap-4 mb-6">
                 <span className="w-8 h-[2px] bg-orange" />
                 <h3 className="font-body text-orange uppercase tracking-[0.2em] text-sm font-bold">Showcase</h3>
                 <span className="w-8 h-[2px] bg-orange" />
              </div>
            <h2 className="font-display font-normal text-navy leading-tight" style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)' }}>
              Trabalhos que falam <br/> <span className="text-orange italic">por si mesmos.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {[
              { img: '1522202176988-66273c2fd55f', cat: 'Branding Institucional', title: 'Rebranding Consultoria Global', span: 'md:col-span-2 aspect-[4/5] md:aspect-[21/9]' },
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
                  <div className="md:translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="inline-block px-4 py-1.5 bg-orange text-white text-xs font-bold uppercase tracking-wider rounded-full mb-4">
                      {p.cat}
                    </span>
                    <h3 className="font-display font-normal text-white text-3xl md:text-4xl mb-2">{p.title}</h3>
                    <div className="flex items-center gap-2 text-white/80 font-body md:opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 text-center md:divide-x md:divide-navy/5">
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
