'use client'
import { motion } from 'framer-motion'
import { Sparkle, ShareNetwork, TrendUp, Camera, CalendarCheck, Newspaper, ArrowRight, CheckCircle } from '@phosphor-icons/react'
import SectionLabel from '@/components/SectionLabel'
import Link from 'next/link'
import Image from 'next/image'
import SectionCTA from '@/components/SectionCTA'

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as any } }
}

const services = [
  {
    icon: <ShareNetwork size={32} weight="bold" />,
    title: 'Gestão de Redes Sociais',
    desc: 'Planejamento e execução completa da sua presença digital. Conteúdo relevante, calendário editorial e gestão profissional para aumentar engajamento e conversões.',
    features: ['Calendário Editorial Mensal', 'Copy Estratégica para Posts', 'Gestão de Comunidade', 'Relatórios de Desempenho']
  },
  {
    icon: <Sparkle size={32} weight="bold" />,
    title: 'Identidade Visual & Design',
    desc: <>Criamos ou renovamos a identidade da sua marca com design único e impactante que <strong>fortalece o posicionamento</strong> e gera reconhecimento imediato.</>,
    features: ['Naming & Posicionamento', 'Design System Visual', 'Voz e Tom da Marca', 'Manual de Identidade']
  },
  {
    icon: <Camera size={32} weight="bold" />,
    title: 'Produção de Fotos e Vídeos',
    desc: 'Conteúdo visual de qualidade profissional para alimentar suas redes sociais, campanhas digitais e comunicação institucional.',
    features: ['Direcionamento de Conteúdo', 'Produção Fotográfica', 'Produção de Vídeos', 'Edição e Finalização']
  },
  {
    icon: <CalendarCheck size={32} weight="bold" />,
    title: 'Planejamento Estratégico de Conteúdo',
    desc: <>Definição de público, posicionamento e estratégia de conteúdo baseada em dados para <strong>gerar autoridade e vendas</strong> de forma consistente.</>,
    features: ['Análise de Público-Alvo', 'Definição de Posicionamento', 'Estratégia por Canal', 'Organização no Trello']
  },
  {
    icon: <TrendUp size={32} weight="bold" />,
    title: 'Tráfego Pago & Métricas',
    desc: <>Campanhas no Google, Meta e outras plataformas focadas em <strong>clientes qualificados</strong>, com relatórios completos de alcance, engajamento e retorno.</>,
    features: ['Google & Meta Ads', 'Rastreamento Avançado', 'CRO e Testes A/B', 'Dashboards em Tempo Real']
  },
  {
    icon: <Newspaper size={32} weight="bold" />,
    title: 'Assessoria de Imprensa',
    desc: 'Comunicação institucional, relacionamento com veículos de mídia e influenciadores para ampliar o alcance e a autoridade da sua marca.',
    features: ['Releases e Pautas', 'Relacionamento com Mídia', 'Comunicação Institucional', 'Estratégia com Influenciadores']
  }
]

export default function Servicos() {
  return (
    <main className="overflow-x-hidden bg-cream selection:bg-orange/20 selection:text-navy">
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-28 overflow-hidden bg-navy min-h-[60vh] flex items-center section-grid">
        <div className="absolute inset-0 bg-[url('/texture.avif')] opacity-20 mix-blend-overlay" />
        
        {/* Floating Decorative Element */}
        <div className="absolute top-1/2 -right-20 w-96 h-96 bg-orange/10 blur-[120px] rounded-full hidden lg:block" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-orange/5 blur-[100px] rounded-full" />

        <div className="voxx-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="lg:col-span-8">
              <h1 className="font-display font-normal text-white mb-8 leading-[1.05] flex flex-wrap items-center gap-x-6" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.8rem)' }}>
                <span>Soluções completas para</span>
                <span className="flex items-center gap-6">
                  <span className="text-orange italic accent-line">crescimento real.</span>
                  <Sparkle className="text-orange w-8 h-8 md:w-12 md:h-12 animate-pulse" weight="bold" />
                </span>
              </h1>
              <p className="font-body text-cream/70 text-lg md:text-xl leading-relaxed max-w-2xl">
                Da gestão de redes sociais ao tráfego pago, do design à assessoria de imprensa. Tudo integrado para fortalecer sua marca e gerar crescimento consistente.
              </p>
            </motion.div>
            
            <div className="lg:col-span-4 hidden lg:flex justify-end">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="relative w-full aspect-square max-w-[300px]"
              >
                <div className="absolute inset-0 border border-white/10 rounded-full animate-[spin_20s_linear_infinite]" />
                <div className="absolute inset-4 border border-orange/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-4 h-4 bg-orange rounded-full shadow-[0_0_30px_rgba(243,150,66,0.6)]" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-cream -mt-10 relative z-20">
        <div className="voxx-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <motion.div 
                key={s.title}
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUp} transition={{ delay: i * 0.1 }}
                whileHover={{ y: -12, scale: 1.01 }}
                className="group relative bg-white rounded-[2rem] p-8 md:p-12 overflow-hidden shadow-[0_10px_40px_rgba(0,63,92,0.03)] border border-navy/5 hover:border-orange/30 transition-colors duration-500"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-orange/5 rounded-bl-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-navy text-white rounded-2xl flex items-center justify-center mb-8 group-hover:bg-orange transition-colors duration-500 shadow-xl">
                    {s.icon}
                  </div>
                  <h3 className="font-display font-bold text-xl md:text-2xl text-navy mb-4">{s.title}</h3>
                  <p className="font-body text-muted text-lg leading-relaxed mb-8">{s.desc}</p>
                  
                  <div className="pt-8 border-t border-navy/10 space-y-4">
                    {s.features.map(f => (
                      <div key={f} className="flex items-center gap-3">
                        <CheckCircle size={18} weight="bold" className="text-orange" />
                        <span className="font-body text-dark font-medium">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Abordagem Diferenciada ─────────────────────────────────── */}
      <section className="py-32 bg-white border-y border-navy/5">
        <div className="voxx-container">
           <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
             <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="md:col-span-5">
                <SectionLabel>O Diferencial</SectionLabel>
                <h2 className="font-display font-normal text-navy text-4xl leading-tight mt-6 mb-8">
                  Método, organização e <span className="text-orange italic">resultado.</span>
                </h2>
                <p className="font-body text-muted text-lg leading-relaxed mb-8">
                  Cada cliente recebe um plano personalizado de crescimento digital — com calendário editorial, relatórios de desempenho e gestão completa dos canais.
                </p>
                <Link href="/projetos" className="inline-flex items-center gap-2 font-body font-bold text-orange hover:gap-4 transition-all uppercase tracking-widest text-sm">
                   Explore os Resultados <ArrowRight size={18} />
                </Link>
             </motion.div>
             <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: 0.2 }} className="md:col-span-7">
                <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl">
                   <Image 
                     src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80&auto=format&fit=crop" 
                     alt="Dashboard de performance" 
                     fill 
                     sizes="(max-width: 768px) 100vw, 60vw"
                     className="object-cover" 
                   />
                </div>
             </motion.div>
           </div>
        </div>
      </section>

      {/* ─── Processo de Trabalho (Stepped Flow) ─────────────────────────────── */}
      <section className="py-32 bg-navy relative text-white section-grid overflow-hidden">
        <div className="absolute inset-0 bg-[url('/texture.avif')] opacity-10 mix-blend-overlay" />
        <div className="voxx-container relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-24">
            <SectionLabel>Metodologia Voxx</SectionLabel>
            <h2 className="font-display font-normal text-white mt-6 leading-tight" style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)' }}>
              Como garantimos a <span className="text-orange italic accent-line">excelência.</span>
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-[2px] bg-white/10" />
            {[
              { number: '01', title: 'Imersão Profunda', description: 'Mergulhamos no seu modelo de negócios para identificar gargalos e oportunidades invisíveis.' },
              { number: '02', title: 'Visão Estratégica', description: 'Desenhamos o plano de ataque completo, definindo canais, tom de voz e KPIs fundamentais.' },
              { number: '03', title: 'Ataque Criativo', description: 'Execução implacável por um time de especialistas, do primeiro wireframe à campanha rodando.' },
              { number: '04', title: 'Evolução Contínua', description: 'Medimos tudo. Escalamos o que funciona e otimizamos incansavelmente a máquina de vendas.' },
            ].map((step, i) => (
              <motion.div 
                key={step.number}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: i * 0.15 }}
                className="relative text-center md:text-left pt-8 md:pt-0"
              >
                <div className="w-24 h-24 mx-auto md:mx-0 bg-navy border-2 border-orange text-orange rounded-full flex items-center justify-center font-display font-black text-3xl mb-8 shadow-[0_0_30px_rgba(243,150,66,0.2)]">
                  {step.number}
                </div>
                <h3 className="font-display font-bold text-white text-2xl mb-4">{step.title}</h3>
                <p className="font-body text-cream/60 leading-relaxed text-lg">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA Final ─────────────────────────────── */}
      <SectionCTA />
    </main>
  )
}
