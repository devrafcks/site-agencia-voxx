'use client'

import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Star } from '@phosphor-icons/react'
import SectionCTA from '@/components/SectionCTA'
import SectionLabel from '@/components/SectionLabel'
import { useRef } from 'react'
import Link from 'next/link'

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as any } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
}

export default function Sobre() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] })
  const yImage = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"])

  return (
    <main className="overflow-x-hidden bg-cream selection:bg-orange/20 selection:text-navy">
      {/* ─── Manifesto / Hero ────────────────────────────────────────── */}
      <section className="relative min-h-[50vh] lg:min-h-[60vh] flex items-center pt-32 pb-16 lg:pt-48 lg:pb-24 overflow-hidden bg-navy section-grid">
        <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full bg-cream/5 pointer-events-none rounded-bl-[100px] lg:rounded-bl-[200px]" />
        <div className="voxx-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="lg:col-span-7">
              <motion.h1 variants={fadeInUp} className="font-display font-normal text-white leading-[1.1] mb-8" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
                Voxx Comunicação Inteligente 360 <br/>
                <span className="text-orange italic">Agência do crescimento da sua empresa.</span>
              </motion.h1>
              <motion.div variants={fadeInUp} className="font-body text-cream/70 text-base lg:text-xl leading-relaxed space-y-6 max-w-2xl border-l-4 border-orange/30 pl-6">
                <p>
                  A Voxx é especializada em estratégias de marketing digital para empresas que querem crescer, vender mais e se conectar de verdade com o seu público. Integramos <strong>design, marketing e tecnologia</strong> em uma solução completa, do planejamento à execução.
                </p>
                <p className="hidden md:block">
                  Atendemos empresas de diferentes segmentos com método, transparência e foco total nos seus resultados. Aqui, cada ação tem propósito e cada entrega é mensurável.
                </p>
              </motion.div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, ease: "easeOut" }} className="lg:col-span-5 relative flex flex-col justify-center">
              <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl border border-white/10">
                <Image
                  src="/2808111_18386.jpg"
                  alt="Voxx Inteligência e Comunicação"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                  priority
                />
              </div>

              <motion.div
                initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.8, duration: 0.8 }}
                className="-mt-8 md:-mt-12 relative z-20 bg-white p-6 md:p-8 rounded-3xl shadow-2xl border border-navy/5 max-w-[260px] mx-auto lg:ml-8 lg:mr-auto"
              >
                <Star className="text-orange mb-4" weight="fill" size={32} />
                <p className="font-display font-bold text-navy-medium text-lg md:text-xl leading-tight">Inteligência em Comunicação</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Timeline / Storytelling ─────────────────────────────────────────── */}
      <section className="py-32 bg-cream text-navy relative overflow-hidden" ref={containerRef}>
        <div className="absolute inset-0 opacity-10 mix-blend-overlay" />
        
        <div className="voxx-container relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mb-12 md:mb-24 md:w-1/2">
            <h2 className="font-display font-normal leading-tight text-navy mb-6" style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)' }}>
              Nossa <span className="text-orange italic accent-line">evolução</span> não para.
            </h2>
            <p className="font-body text-muted text-lg">Uma jornada de obsessão por resultados e inovação criativa.</p>
          </motion.div>

          <div className="space-y-14 md:space-y-24 relative">
            {/* Linha conectora */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-navy/10 -translate-x-1/2" />

            {[
              { year: '2019', title: 'O Início', desc: 'Fundação da Voxx Comunicação 360 em Itapetininga, SP, com foco em identidade visual e gestão de redes sociais.', align: 'md:text-right md:pr-16 md:mr-auto' },
              { year: '2021', title: 'Comunicação 360°', desc: 'Expansão dos serviços para tráfego pago, produção de conteúdo e assessoria de imprensa, formando o modelo completo.', align: 'md:text-left md:pl-16 md:ml-auto' },
              { year: '2023', title: 'Crescimento Regional', desc: 'Consolidação como referência em marketing digital na região, atendendo marcas de diversos segmentos com resultados mensuráveis.', align: 'md:text-right md:pr-16 md:mr-auto' },
              { year: 'Hoje', title: 'Parceiros de Crescimento', desc: 'Método próprio, equipe especializada e foco total em fazer cada marca crescer de forma consistente e estratégica.', align: 'md:text-left md:pl-16 md:ml-auto' },
            ].map((item, i) => (
              <motion.div 
                key={item.year}
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} transition={{ delay: i * 0.1 }}
                className={`relative flex flex-col md:w-1/2 ${item.align} pl-12 md:pl-0`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-[unset] md:right-0 top-0 w-8 h-8 rounded-full bg-cream border-4 border-orange -translate-x-1/2 md:translate-x-1/2 z-10" />
                
                <span className="font-display font-black text-orange/20 text-5xl md:text-7xl mb-2">{item.year}</span>
                <h3 className="font-display font-normal text-navy text-2xl md:text-3xl mb-4">{item.title}</h3>
                <p className="font-body text-muted text-lg leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Editorial Image Grid ─────────────────────────────────────── */}
      <section className="py-32 bg-cream">
        <div className="voxx-container">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:h-[800px]">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="md:col-span-8 relative rounded-3xl overflow-hidden group aspect-[4/3] md:aspect-auto md:h-full">
              <Image
                src="/imagens/assessoria-imprensa-tv.jpg"
                alt="Assessoria de imprensa — entrevista para TV"
                fill
                sizes="(max-width: 768px) 100vw, 60vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-navy/20 mix-blend-overlay" />
              <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl max-w-sm">
                <h4 className="font-display font-bold text-navy text-xl mb-2">Estratégia Colaborativa</h4>
                <p className="font-body text-sm text-muted">A inteligência coletiva é o que diferencia uma boa ideia de uma execução genial.</p>
              </div>
            </motion.div>
            <div className="md:col-span-4 grid grid-rows-2 gap-6">
               <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: 0.2 }} className="relative rounded-3xl overflow-hidden group aspect-square md:aspect-auto">
                  <Image
                    src="/imagens/assessoria-imprensa-nativa-fm.jpg"
                    alt="Assessoria de imprensa — Nativa FM 101.1"
                    fill
                    sizes="(max-width: 768px) 100vw, 30vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
               </motion.div>
               <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: 0.4 }} className="bg-orange rounded-3xl p-8 flex flex-col justify-center text-white">
                  <span className="font-display text-6xl font-black mb-4">100%</span>
                  <p className="font-body text-lg font-medium">De comprometimento com o resultado final de cada parceiro.</p>
               </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Valores ─────────────────────────────────────── */}
      <section className="py-32 bg-white relative">
        <div className="voxx-container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-20">
             <SectionLabel>DNA da Voxx</SectionLabel>
            <h2 className="font-display font-normal text-navy leading-tight mt-6" style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)' }}>
              Os pilares que guiam cada estratégia, <br/> cada entrega e cada <span className="text-orange italic">resultado.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              { title: 'Inovação Inquieta', desc: 'O que converte hoje pode não converter amanhã. Por isso vivemos em modo beta: testando, aprendendo e ajustando antes do mercado exigir.' },
              { title: 'Estética com Propósito', desc: 'Design bonito que não vende é decoração. Na Voxx, cada escolha visual é estratégica, feita para gerar desejo, engajamento e conversão.' },
              { title: 'Transparência Brutal', desc: 'Números não mentem, e nós também não. Você recebe o cenário real, as métricas sem filtro e um plano claro sobre o que vem a seguir.' },
              { title: 'Parceria Verdadeira', desc: 'Fornecedor entrega tarefa. Parceiro resolve problema. Nós entramos no seu negócio, entendemos seus objetivos e trabalhamos como se o crescimento da sua empresa fosse também o nosso, porque é.' },
            ].map((v, i) => (
              <motion.div 
                key={v.title}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: i * 0.1 }}
                className="p-10 border border-navy/10 rounded-3xl hover:border-orange/30 hover:shadow-xl transition-all duration-300 bg-cream/30"
              >
                <div className="w-12 h-12 bg-orange/10 text-orange rounded-xl flex items-center justify-center mb-6 font-display font-bold text-xl">
                  {i + 1}
                </div>
                <h3 className="font-display font-normal text-navy-medium text-2xl mb-4">{v.title}</h3>
                <p className="font-body text-muted leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionCTA />
    </main>
  )
}
