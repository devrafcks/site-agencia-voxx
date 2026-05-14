'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import SectionCTA from '@/components/SectionCTA'
import ProjectsCarousel from '@/components/ProjectsCarousel'

const projects = [
  { id: 1,  image: '/projetos/nunes-gramas-dia-agricultura.jpg',         category: 'Redes Sociais',         title: 'Nunes Gramas',              desc: 'Criação de conteúdo estratégico e gestão de redes sociais para empresa de gramados.' },
  { id: 2,  image: '/projetos/ana-helena-colageno.jpg',                  category: 'Redes Sociais',         title: 'Dra. Ana Helena',            desc: 'Posicionamento digital e conteúdo educativo para dermatologista.' },
  { id: 3,  image: '/projetos/sincomercio-imposto-renda.jpg',            category: 'Redes Sociais',         title: 'Sincomercio',                desc: 'Gestão de redes sociais e criação de conteúdo para entidade comercial regional.' },
  { id: 4,  image: '/projetos/katia-santos-mesobotox.jpg',               category: 'Redes Sociais',         title: 'Dra. Kátia dos Santos',      desc: 'Conteúdo educativo e posicionamento para especialista em harmonização orofacial.' },
  { id: 5,  image: '/projetos/claudia-parenti-crescimento.jpg',          category: 'Redes Sociais',         title: 'Cláudia Parenti Pediatra',   desc: 'Criação visual e gestão de conteúdo para médica pediatra.' },
  { id: 6,  image: '/projetos/festamilho-sao-roque-musica.jpg',          category: 'Redes Sociais',         title: '39ª Festa do Milho',         desc: 'Comunicação visual e promoção digital para evento religioso e cultural.' },
  { id: 7,  image: '/projetos/gabriela-tsukamoto-saude.jpg',             category: 'Redes Sociais',         title: 'Dra. Gabriela Tsukamoto',    desc: 'Conteúdo de saúde e bem-estar para clínica de medicina metabólica.' },
  { id: 8,  image: '/projetos/chocolates-aspen-doces-arabes.jpg',        category: 'Redes Sociais',         title: 'Chocolates Aspen',           desc: 'Criação visual e promoção para marca de chocolates e doces árabes.' },
  { id: 9,  image: '/projetos/af4motors-logo.jpeg',                      category: 'Branding',              title: 'AF4 Motors',                 desc: 'Identidade visual premium para revendedora de seminovos e carros de luxo.' },
  { id: 10, image: '/projetos/4irmaos-logo.jpeg',                        category: 'Branding',              title: '4 Irmãos',                   desc: 'Identidade visual sofisticada com conceito editorial para marca de alto padrão.' },
  { id: 11, image: '/projetos/deltatoners-logo.jpg',                     category: 'Branding',              title: 'Delta Toners',               desc: 'Criação de logo e identidade visual para empresa de cartuchos e toners.' },
  { id: 12, image: '/projetos/luciana-alves-logo.jpeg',                  category: 'Branding',              title: 'Luciana Alves Síndica',      desc: 'Logo e identidade visual profissional para síndica profissional.' },
  { id: 13, image: '/projetos/flx-fiscolex-itapetininga.jpg',            category: 'Redes Sociais',         title: 'FLX Fiscolex',               desc: 'Conteúdo e presença digital para assessoria empresarial e contabilidade.' },
  { id: 14, image: '/projetos/sou-europeu-portugal.jpg',                 category: 'Redes Sociais',         title: 'Sou Europeu',                desc: 'Estratégia de conteúdo para assessoria de dupla cidadania portuguesa.' },
  { id: 15, image: '/projetos/stuque-odontologia-dia-maes.jpg',          category: 'Redes Sociais',         title: 'Stuque Odontologia',         desc: 'Criação de posts sazonais e gestão de redes sociais para clínica odontológica.' },
  { id: 16, image: '/projetos/paroquia-santa-rita-instagram.jpeg',       category: 'Redes Sociais',         title: 'Paróquia Santa Rita',        desc: 'Estratégia e criação de conteúdo digital para instituição religiosa.' },
  { id: 17, image: '/imagens/assessoria-imprensa-tv.jpg',                category: 'Assessoria de Imprensa',title: 'Entrevista para TV',          desc: 'Assessoria de imprensa com cobertura em veículo televisivo regional.' },
  { id: 18, image: '/imagens/assessoria-imprensa-radio.jpg',             category: 'Assessoria de Imprensa',title: 'Participação em Rádio',       desc: 'Estratégia de assessoria de imprensa com inserção em programa de rádio e podcast.' },
  { id: 19, image: '/imagens/assessoria-imprensa-nativa-fm.jpg',         category: 'Assessoria de Imprensa',title: 'Nativa FM 101.1',             desc: 'Assessoria de imprensa com visita e divulgação na Nativa FM Itapetininga.' },
  { id: 20, image: '/imagens/producao-video-sincomercio.jpg',            category: 'Produção de Conteúdo',  title: 'Vídeo Sincomercio',          desc: 'Produção de vídeo institucional para o Sincomercio Regional Itapetininga.' },
  { id: 21, image: '/imagens/producao-evento-show.jpg',                  category: 'Produção de Conteúdo',  title: 'Cobertura de Show',          desc: 'Cobertura fotográfica e de conteúdo em evento musical de grande porte.' },
]

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as any } }
}

export default function Projetos() {
  const [openImage, setOpenImage] = useState<string | undefined>(undefined)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const open = params.get('open')
    if (open) setOpenImage(decodeURIComponent(open))
  }, [])

  const half = Math.ceil(projects.length / 2)
  const row1 = projects.slice(0, half)
  const row2 = projects.slice(half)

  const initialRow1 = row1.find(p => p.image === openImage) ? openImage : undefined
  const initialRow2 = row2.find(p => p.image === openImage) ? openImage : undefined

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

      {/* ─── Carrossel ────────── */}
      <section className="bg-white pb-24 -mt-16 md:-mt-40">
        <ProjectsCarousel projects={row1} initialSelected={initialRow1} />
        <ProjectsCarousel projects={row2} reverse initialSelected={initialRow2} />
      </section>

      <SectionCTA />
    </main>
  )
}
