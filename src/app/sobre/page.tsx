'use client'
import Image from 'next/image'
import { CheckCircle2 } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import SectionLabel from '@/components/SectionLabel'
import SectionCTA from '@/components/SectionCTA'

const diferenciais = [
  'Estratégia personalizada',
  'Atendimento próximo',
  'Entrega no prazo',
  'Time especializado',
  'Relatórios transparentes',
  'Foco em resultado',
]

export default function Sobre() {
  useScrollReveal()

  return (
    <main>
      {/* ─── Page Hero ────────────────────────────────────────── */}
      <section className="section" style={{ background: 'var(--navy)', paddingBottom: '80px' }}>
        <div className="voxx-container text-center">
          <h1
            className="font-display font-black text-white mb-5"
            style={{ fontSize: 'clamp(2.25rem, 4vw, 3.5rem)' }}
          >
            Nossa história,{' '}
            <span className="text-orange">nossa identidade</span>
          </h1>
          <p
            className="font-body text-lg max-w-lg mx-auto"
            style={{ color: 'rgba(255,255,255,0.65)' }}
          >
            Construímos marcas com propósito desde 2016.
          </p>
        </div>
      </section>

      {/* ─── História ─────────────────────────────────────────── */}
      <section className="section">
        <div className="voxx-container">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="flex-1 reveal">
              <SectionLabel>Nossa história</SectionLabel>
              <p className="font-body text-dark leading-relaxed mb-5">
                A Voxx nasceu em 2016 com uma missão clara: transformar a forma como marcas se
                comunicam com seu público. Começamos como uma pequena equipe de estrategistas e
                designers apaixonados por resultados reais — não apenas pelo estético, mas pelo
                impacto mensurável.
              </p>
              <p className="font-body text-muted leading-relaxed mb-8">
                Acreditamos que comunicação eficiente vai além da estética. Ela conecta, convence
                e converte. Por isso, integramos estratégia, criatividade e tecnologia em cada
                projeto, do briefing à entrega. Hoje, somos uma equipe multidisciplinar com
                projetos em todo o Brasil, atendendo desde startups em crescimento até marcas
                consolidadas que buscam se reinventar.
              </p>
              <blockquote
                className="pl-6 py-2 font-display italic text-dark"
                style={{
                  borderLeft: '4px solid var(--orange)',
                  fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                }}
              >
                "Comunicação que não gera resultado é apenas ruído. Nosso trabalho é fazer sua
                marca falar com as pessoas certas, da forma certa, no momento certo."
              </blockquote>
            </div>
            <div className="flex-1 reveal">
              <div
                className="relative w-full"
                style={{ borderRadius: 'var(--radius)', overflow: 'hidden', aspectRatio: '4/3' }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80&auto=format&fit=crop"
                  alt="Escritório moderno da Voxx"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Missão / Visão / Valores ─────────────────────────── */}
      <section className="section" style={{ background: '#EDE7D9' }}>
        <div className="voxx-container">
          <div className="text-center mb-12 reveal">
            <SectionLabel>Nossos pilares</SectionLabel>
            <h2
              className="font-display font-bold text-dark"
              style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
            >
              O que nos <span className="text-orange">guia</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div
              className="p-8 reveal"
              style={{ background: 'var(--orange)', borderRadius: 'var(--radius)' }}
            >
              <h3 className="font-display font-bold text-white text-xl mb-4">Missão</h3>
              <p className="font-body leading-relaxed" style={{ color: 'rgba(255,255,255,0.9)' }}>
                Conectar marcas às pessoas certas com estratégia e criatividade, gerando resultados
                reais e duradouros para nossos clientes.
              </p>
            </div>
            <div
              className="p-8 bg-white reveal"
              style={{ borderRadius: 'var(--radius)', border: '1px solid #E8E4DC' }}
            >
              <h3 className="font-display font-bold text-dark text-xl mb-4">Visão</h3>
              <p className="font-body text-muted leading-relaxed">
                Ser referência em comunicação integrada no mercado nacional, reconhecida pela
                excelência estratégica e pelos resultados que entregamos.
              </p>
            </div>
            <div
              className="p-8 bg-white reveal"
              style={{ borderRadius: 'var(--radius)', border: '1px solid #E8E4DC' }}
            >
              <h3 className="font-display font-bold text-dark text-xl mb-4">Valores</h3>
              <p className="font-body text-muted leading-relaxed">
                Transparência · Resultado · Inovação · Parceria
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Diferenciais ─────────────────────────────────────── */}
      <section className="section">
        <div className="voxx-container">
          <div className="text-center mb-12 reveal">
            <SectionLabel>Diferenciais</SectionLabel>
            <h2
              className="font-display font-bold text-dark"
              style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
            >
              Por que somos <span className="text-orange">diferentes</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto reveal">
            {diferenciais.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle2 size={20} className="text-orange flex-shrink-0" />
                <span className="font-body text-dark">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionCTA
        dark
        headline="Quer trabalhar com quem entende do seu negócio?"
        buttonLabel="Fale com a Voxx"
        href="/contato"
      />
    </main>
  )
}
