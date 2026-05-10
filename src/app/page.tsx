'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Sparkles, Globe, Share2, BarChart2, Users2, CheckCircle2 } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import SectionLabel from '@/components/SectionLabel'
import ServiceCard from '@/components/ServiceCard'
import ProjectCard from '@/components/ProjectCard'
import MetricCounter from '@/components/MetricCounter'
import SectionCTA from '@/components/SectionCTA'

const clientLogos = [
  'Empresa Alpha', 'Conecta', 'BrandMax', 'Inova Corp', 'TechSul', 'Grupo Nexus',
]

const previewServices = [
  {
    icon: <Sparkles size={28} />,
    title: 'Branding & Identidade',
    description:
      'Criamos a personalidade visual da sua marca com estratégia e propósito. Do conceito ao manual de identidade.',
  },
  {
    icon: <Globe size={28} />,
    title: 'Web Design & Dev',
    description:
      'Sites institucionais e landing pages de alta conversão, responsivos e otimizados para SEO desde o primeiro pixel.',
  },
  {
    icon: <Share2 size={28} />,
    title: 'Gestão de Redes Sociais',
    description:
      'Conteúdo estratégico e consistente para criar comunidade e engajamento real com o público que importa.',
  },
]

const previewProjects = [
  {
    image: '1553877522-43269e4ea94b',
    alt: 'Rebranding para empresa de consultoria',
    category: 'Branding',
    title: 'Rebranding Completo',
  },
  {
    image: '1460925895917-afdab827c52f',
    alt: 'Site institucional B2B moderno',
    category: 'Web',
    title: 'Site Institucional B2B',
  },
  {
    image: '1542744173-8e7e53415bb0',
    alt: 'Campanha de lançamento em redes sociais',
    category: 'Social',
    title: 'Campanha de Lançamento',
  },
]

const diferenciais = [
  {
    icon: <BarChart2 size={32} className="text-orange" />,
    title: 'Estratégia data-driven',
    description:
      'Decisões baseadas em dados reais, não em achismos. Cada ação tem métricas e objetivos claros.',
  },
  {
    icon: <Users2 size={32} className="text-orange" />,
    title: 'Time multidisciplinar',
    description:
      'Estrategistas, designers, desenvolvedores e redatores trabalhando juntos em cada projeto.',
  },
  {
    icon: <CheckCircle2 size={32} className="text-orange" />,
    title: 'Resultados mensuráveis',
    description:
      'Relatórios transparentes e acompanhamento contínuo para você sempre saber o ROI das ações.',
  },
]

export default function Home() {
  useScrollReveal()

  return (
    <main>
      {/* ─── Hero ─────────────────────────────────────────────── */}
      <section style={{ padding: '80px 0' }}>
        <div className="voxx-container">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 md:basis-3/5">
              <h1
                className="font-display font-black text-dark mb-6"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.05 }}
              >
                Fazemos sua marca{' '}
                <span className="text-orange">falar</span>{' '}
                com quem importa
              </h1>
              <p className="font-body text-muted text-lg leading-relaxed mb-8 max-w-lg">
                Estratégia, criatividade e tecnologia integradas para gerar resultados
                reais para o seu negócio.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contato"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-orange text-white font-body font-medium hover:bg-[#e08535] transition-colors"
                >
                  Solicitar orçamento →
                </Link>
                <Link
                  href="/projetos"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-navy text-navy font-body font-medium hover:bg-navy hover:text-white transition-colors"
                >
                  Ver projetos
                </Link>
              </div>
            </div>
            <div className="hidden md:block md:basis-2/5">
              <div
                className="relative w-full"
                style={{ borderRadius: 'var(--radius)', overflow: 'hidden', aspectRatio: '4/3' }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1522202176988-66273c3fd55f?w=800&q=80&auto=format&fit=crop"
                  alt="Equipe Voxx em reunião criativa"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Clientes ─────────────────────────────────────────── */}
      <section className="py-12 bg-white overflow-hidden">
        <div className="voxx-container mb-8">
          <p className="font-body text-center text-muted text-sm tracking-widest uppercase">
            Marcas que confiam no nosso trabalho
          </p>
        </div>
        <div className="overflow-hidden">
          <div className="marquee-track">
            {[...clientLogos, ...clientLogos].map((logo, i) => (
              <div
                key={i}
                className="flex-shrink-0 font-display font-semibold text-dark text-lg"
                style={{ opacity: 0.35 }}
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── O que fazemos (preview) ──────────────────────────── */}
      <section className="section">
        <div className="voxx-container">
          <div className="reveal mb-12">
            <SectionLabel>O que fazemos</SectionLabel>
            <h2
              className="font-display font-bold text-dark"
              style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
            >
              Soluções que <span className="text-orange">transformam</span> negócios
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 reveal">
            {previewServices.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>
          <div className="mt-10 reveal">
            <Link href="/servicos" className="font-body text-orange hover:underline font-medium">
              Ver todos os serviços →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Diferenciais ─────────────────────────────────────── */}
      <section className="section" style={{ background: 'var(--navy)' }}>
        <div className="voxx-container">
          <div className="text-center mb-14 reveal">
            <h2
              className="font-display font-bold text-white"
              style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
            >
              Por que escolher a <span className="text-orange">Voxx?</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {diferenciais.map((d) => (
              <div key={d.title} className="text-center reveal">
                <div className="flex justify-center mb-4">{d.icon}</div>
                <h3 className="font-display font-bold text-white text-lg mb-3">{d.title}</h3>
                <p
                  className="font-body text-sm leading-relaxed"
                  style={{ color: 'rgba(255,255,255,0.65)' }}
                >
                  {d.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Projetos preview ─────────────────────────────────── */}
      <section className="section">
        <div className="voxx-container">
          <div className="reveal mb-12">
            <SectionLabel>Projetos</SectionLabel>
            <h2
              className="font-display font-bold text-dark"
              style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
            >
              <span className="text-orange">Ideias reais,</span> resultados concretos
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 reveal">
            {previewProjects.map((p) => (
              <ProjectCard key={p.title} {...p} />
            ))}
          </div>
          <div className="mt-10 text-center reveal">
            <Link
              href="/projetos"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-navy text-navy font-body font-medium hover:bg-navy hover:text-white transition-colors"
            >
              Ver portfólio completo →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Métricas ─────────────────────────────────────────── */}
      <section className="section bg-white">
        <div className="voxx-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            <MetricCounter target={47}  suffix="+" label="Projetos entregues" />
            <MetricCounter target={8}   suffix="+" label="Anos de mercado" />
            <MetricCounter target={120} suffix="+" label="Clientes atendidos" />
            <MetricCounter target={98}  suffix="%" label="Taxa de satisfação" />
          </div>
        </div>
      </section>

      {/* ─── CTA Final ────────────────────────────────────────── */}
      <SectionCTA
        dark
        headline="Pronto para transformar sua comunicação?"
        buttonLabel="Fale com a gente"
        href="/contato"
      />
    </main>
  )
}
