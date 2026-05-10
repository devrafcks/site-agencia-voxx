'use client'
import { Sparkles, Globe, Share2, TrendingUp, PenLine, Target } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import SectionLabel from '@/components/SectionLabel'
import ServiceCard from '@/components/ServiceCard'
import SectionCTA from '@/components/SectionCTA'

const services = [
  {
    icon: <Sparkles size={28} />,
    title: 'Branding & Identidade Visual',
    description:
      'Criamos a personalidade visual da sua marca — logo, paleta, tipografia e manual de identidade que transmitem quem você é.',
    bullets: ['Criação de logo', 'Manual de marca', 'Papelaria', 'Identidade digital'],
  },
  {
    icon: <Globe size={28} />,
    title: 'Web Design & Desenvolvimento',
    description:
      'Sites institucionais e landing pages de alta conversão, responsivos e otimizados para SEO desde o primeiro pixel.',
    bullets: ['UI/UX Design', 'Desenvolvimento', 'SEO On-page', 'Performance'],
  },
  {
    icon: <Share2 size={28} />,
    title: 'Gestão de Redes Sociais',
    description:
      'Conteúdo estratégico e consistente para criar comunidade e engajamento real com o público que importa para o seu negócio.',
    bullets: ['Calendário editorial', 'Criação de conteúdo', 'Stories e Reels', 'Relatórios mensais'],
  },
  {
    icon: <TrendingUp size={28} />,
    title: 'Tráfego Pago & Performance',
    description:
      'Campanhas no Google e Meta otimizadas para gerar leads e vendas com ROI positivo e escalável.',
    bullets: ['Google Ads', 'Meta Ads', 'Remarketing', 'Análise de dados'],
  },
  {
    icon: <PenLine size={28} />,
    title: 'Produção de Conteúdo',
    description:
      'Textos, fotos e vídeos que comunicam o valor da sua marca de forma autêntica e estratégica.',
    bullets: ['Copywriting', 'Fotografia', 'Vídeo', 'E-mail marketing'],
  },
  {
    icon: <Target size={28} />,
    title: 'Estratégia de Marketing',
    description:
      'Diagnóstico completo e plano de ação para posicionar sua marca e crescer de forma sustentável no mercado.',
    bullets: ['Diagnóstico de marca', 'Planejamento', 'Análise de concorrência', 'Consultoria'],
  },
]

const steps = [
  {
    number: '01',
    title: 'Diagnóstico',
    description: 'Entendemos o negócio, público e objetivos estratégicos da sua marca.',
  },
  {
    number: '02',
    title: 'Estratégia',
    description: 'Criamos o plano de comunicação personalizado para o seu contexto.',
  },
  {
    number: '03',
    title: 'Execução',
    description: 'Colocamos em prática com agilidade, qualidade e atenção ao detalhe.',
  },
  {
    number: '04',
    title: 'Análise',
    description: 'Medimos, aprendemos e otimizamos continuamente os resultados.',
  },
]

export default function Servicos() {
  useScrollReveal()

  return (
    <main>
      {/* ─── Page Hero ────────────────────────────────────────── */}
      <section className="section">
        <div className="voxx-container">
          <div className="max-w-2xl reveal">
            <SectionLabel>Serviços</SectionLabel>
            <h1
              className="font-display font-black text-dark mb-6"
              style={{ fontSize: 'clamp(2.25rem, 4vw, 3.5rem)' }}
            >
              Soluções que <span className="text-orange">movem marcas</span>
            </h1>
            <p className="font-body text-muted text-lg leading-relaxed">
              Do planejamento à execução, entregamos comunicação que gera resultado e
              constrói marcas memoráveis.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Grid de Serviços ─────────────────────────────────── */}
      <div style={{ paddingBottom: 'var(--section-py)' }}>
        <div className="voxx-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 reveal">
            {services.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>
        </div>
      </div>

      {/* ─── Processo de Trabalho ─────────────────────────────── */}
      <section className="section" style={{ background: 'var(--navy)' }}>
        <div className="voxx-container">
          <div className="text-center mb-14 reveal">
            <SectionLabel>Como trabalhamos</SectionLabel>
            <h2
              className="font-display font-bold text-white"
              style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
            >
              Nosso <span className="text-orange">processo</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="reveal">
                <p className="font-display font-black text-orange text-4xl mb-3">
                  {step.number}
                </p>
                <h3 className="font-display font-bold text-white text-lg mb-2">
                  {step.title}
                </h3>
                <p
                  className="font-body text-sm leading-relaxed"
                  style={{ color: 'rgba(255,255,255,0.6)' }}
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionCTA
        dark={false}
        headline="Qual serviço faz sentido para o seu negócio?"
        buttonLabel="Fale com a gente"
        href="/contato"
      />
    </main>
  )
}
