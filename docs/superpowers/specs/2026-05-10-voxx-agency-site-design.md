# Voxx Agency Site — Design Spec

**Date:** 2026-05-10  
**Status:** Approved  
**Project:** Next.js institutional site for Voxx communication agency

---

## Overview

Build a 4-page institutional website for **Voxx** using the existing Next.js App Router project. The site replaces placeholder stubs with fully implemented pages: Home, Sobre, Serviços, and Projetos. The existing `/contato` page and `AccessibilityWidget` component are not modified.

---

## Stack & Constraints

- **Framework:** Next.js with App Router (already configured)
- **Language:** TypeScript (.tsx)
- **Styling:** Tailwind CSS with `@theme` customization (existing Tailwind setup kept, NOT replaced with CSS Modules)
- **Fonts:** `next/font/google` — Besley (display) + DM Sans (body), replacing current Montserrat/Playfair
- **Images:** `next/image` with Unsplash IDs from the spec
- **`'use client'`:** Only on interactive components — Navbar (mobile menu), MetricCounter (animation), Projetos filter (useState)
- **Do not touch:** `src/app/contato/page.tsx`, `src/components/accessibility-widget.tsx`

---

## Design System

### Color Palette (via `@theme` in globals.css)

| Token | Hex | Purpose |
|---|---|---|
| `orange` | `#F39642` | CTAs, accent words in titles, MetricCounter numbers |
| `navy` | `#003F5C` | Dark sections, sticky navbar background |
| `cream` | `#F5F0E6` | Page background |
| `white` | `#FFFFFF` | Cards, surfaces |
| `dark` | `#0E1C26` | Body text |
| `muted` | `#6B7D8A` | Secondary text |

### Typography

| Font | Weights | Variable | Usage |
|---|---|---|---|
| Besley | 400, 600, 700, 900 | `--font-display` | h1–h4, MetricCounter numbers |
| DM Sans | 300, 400, 500 | `--font-body` | Body text, labels, captions |

### Tokens

```
--radius: 14px
--radius-pill: 50px
--max-width: 1200px
--section-py: 96px
```

### Animations

- **Scroll reveal:** `useScrollReveal` hook — `IntersectionObserver` adds `.visible` class → `opacity 0→1` + `translateY 24px→0` transition `.6s ease`
- **MetricCounter:** `IntersectionObserver` + `setInterval` animates 0 → target number
- **Client logos:** CSS infinite scroll animation (horizontal marquee)
- **Navbar scroll:** adds `.scrolled` class at `scrollY > 50px` → backdrop blur + shadow

---

## File Structure

```
src/
  app/
    layout.tsx               ← Update: Besley + DM Sans fonts, keep AccessibilityWidget
    globals.css              ← Update: @theme with Voxx palette, keep Tailwind
    page.tsx                 ← Home (full implementation)
    sobre/
      page.tsx               ← Replace about/ (delete about/)
    servicos/
      page.tsx               ← Replace o-que-fazemos/ (delete o-que-fazemos/)
    projetos/
      page.tsx               ← Replace stub
    contato/
      page.tsx               ← DO NOT TOUCH
  components/
    Navbar.tsx               ← 'use client' — sticky, mobile hamburger
    Footer.tsx               ← Navy bg, 3 columns, SVG social icons
    Button.tsx               ← variant: primary | secondary | ghost
    SectionLabel.tsx         ← "› TEXTO" in orange uppercase
    ServiceCard.tsx          ← icon + title + description + bullets
    ProjectCard.tsx          ← image + category pill + hover overlay
    MetricCounter.tsx        ← 'use client' — animated counter
    SectionCTA.tsx           ← reusable CTA block, dark | light variants
  hooks/
    useScrollReveal.ts       ← 'use client' — IntersectionObserver reveal
  lib/
    utils.ts                 ← existing, do not modify
```

**Config changes:**
- `next.config.ts` → add `images.remotePatterns` for `images.unsplash.com`

---

## Component Specifications

### `Button.tsx`
- **Props:** `variant: 'primary' | 'secondary' | 'ghost'`, `href?: string`, `onClick?: fn`, `children`, `className?: string`
- Renders `<a>` if `href` provided, `<button>` otherwise
- **primary:** bg `#F39642`, white text, pill border-radius, hover darken 10%
- **secondary:** border `#003F5C`, navy text, transparent bg, hover → navy bg + white text
- **ghost:** no border, orange text, underline on hover

### `Navbar.tsx` (`'use client'`)
- Logo left: "Voxx" in Besley 700
- Center links: Home · Sobre · Serviços · Projetos · Contato
- Right: `<Button variant="primary">Fale Conosco</Button>` → `/contato`
- Sticky: `.scrolled` at `scrollY > 50px` → `backdrop-blur-md bg-cream/92 shadow`
- Mobile `<768px`: hamburger SVG → dropdown column menu with slide animation

### `Footer.tsx`
- Navy background, white text
- 3 columns: [Logo "Voxx" + tagline] | [Quick links] | [Social icons SVG]
- Social: Instagram, LinkedIn, WhatsApp (`https://wa.me/[NUMBER]`)
- Bottom bar: `© 2025 Voxx. Todos os direitos reservados.`

### `SectionLabel.tsx`
- Renders: `› TEXTO` — orange, uppercase, wide letter-spacing
- Usage: `<SectionLabel>O que fazemos</SectionLabel>`

### `ServiceCard.tsx`
- **Props:** `icon: ReactNode`, `title: string`, `description: string`, `bullets?: string[]`, `href?: string`
- White card, border `1px solid #E8E4DC`, `border-radius: 14px`
- Hover: shadow `0 20px 48px rgba(0,63,92,0.10)` + `translateY(-4px)`

### `ProjectCard.tsx`
- **Props:** `image: string`, `alt: string`, `category: string`, `title: string`
- Full-bleed image, orange category pill top-left
- Hover: navy overlay `rgba(0,63,92,0.85)` + centered white title + "Ver projeto →"

### `MetricCounter.tsx` (`'use client'`)
- **Props:** `target: number`, `suffix?: string`, `label: string`
- IntersectionObserver + setInterval: animates 0 → target
- Number: Besley 900, `clamp(2.5rem, 5vw, 4rem)`, color `#F39642`

### `SectionCTA.tsx`
- **Props:** `headline: string`, `accentWord?: string`, `buttonLabel: string`, `href: string`, `dark?: boolean`
- `dark=true`: navy bg, white text, orange button
- `dark=false`: orange bg, white text, white outline button

---

## Pages

### Home — `app/page.tsx`

**Sections (in order):**

1. **Hero** — 60/40 two-column layout
   - Headline: `Fazemos sua marca falar com quem importa` (accent on "falar")
   - Subtitle: `Estratégia, criatividade e tecnologia integradas para gerar resultados reais para o seu negócio.`
   - Buttons: `Solicitar orçamento →` (primary) + `Ver projetos` (secondary → `/projetos`)
   - Right image: Unsplash `1522202176988-66273c3fd55f`

2. **Clientes** — `Marcas que confiam no nosso trabalho`
   - 6 placeholder divs (Besley, grayscale, opacity 0.4)
   - CSS infinite horizontal scroll animation
   - Note: user will replace placeholders with real logos later

3. **O que fazemos** (preview) — 3 ServiceCards
   - SectionLabel + headline: `Soluções que transformam negócios` (accent on "transformam")
   - Cards: Branding & Identidade | Web Design & Dev | Gestão de Redes
   - Ghost CTA link: `Ver todos os serviços →`

4. **Diferenciais** — navy background, 3 columns
   - Headline: `Por que escolher a Voxx?`
   - Items: Estratégia data-driven | Time multidisciplinar | Resultados mensuráveis
   - Orange SVG icons

5. **Projetos preview** — 3 ProjectCards
   - Headline: `Ideias reais, resultados concretos` (accent on "Ideias reais")
   - Asymmetric grid: 1 large left + 2 smaller right
   - Link: `Ver portfólio completo →`

6. **Métricas** — white background, 4 MetricCounters
   - `47+` Projetos entregues | `8+` Anos de mercado | `120+` Clientes atendidos | `98%` Taxa de satisfação

7. **CTA Final** — `<SectionCTA dark headline="Pronto para transformar sua comunicação?" buttonLabel="Fale com a gente" href="/contato" />`

---

### Sobre — `app/sobre/page.tsx`

1. **Page Hero** — navy bg, white text
   - Headline: `Nossa história, nossa identidade` (accent on "nossa identidade")
   - Subtitle: `Construímos marcas com propósito desde 2016.`

2. **História** — 2 columns (text left, image right)
   - Image: `1497366216548-37526070297c`
   - Blockquote: vertical `4px solid orange` border, Besley italic, large font
   - Copy: founding story, purpose, evolution

3. **Missão / Visão / Valores** — 3 cards side by side
   - Missão: orange bg, white text — "Conectar marcas às pessoas certas com estratégia e criatividade."
   - Visão: white bg — "Ser referência em comunicação integrada no mercado nacional."
   - Valores: white bg — "Transparência · Resultado · Inovação · Parceria"

4. **Diferenciais** — SectionLabel + 2-column list, 6 items with orange SVG checkmarks
   - Estratégia personalizada | Atendimento próximo | Entrega no prazo | Time especializado | Relatórios transparentes | Foco em resultado

5. **CTA Final** — `<SectionCTA dark />`

---

### Serviços — `app/servicos/page.tsx`

1. **Page Hero** — cream bg
   - Headline: `Soluções que movem marcas` (accent on "movem marcas")
   - Subtitle: `Do planejamento à execução, entregamos comunicação que gera resultado.`

2. **Grid 6 ServiceCards** — 3×2 grid
   - Branding & Identidade Visual
   - Web Design & Desenvolvimento
   - Gestão de Redes Sociais
   - Tráfego Pago & Performance
   - Produção de Conteúdo
   - Estratégia de Marketing

3. **Processo de Trabalho** — 4 horizontal steps with connecting line
   - 01 Diagnóstico → 02 Estratégia → 03 Execução → 04 Análise

4. **CTA Final** — `<SectionCTA dark headline="Qual serviço faz sentido para o seu negócio?" />`

---

### Projetos — `app/projetos/page.tsx` (`'use client'`)

1. **Page Hero**
   - Headline: `Ideias reais, resultados concretos` (accent on "Ideias reais")
   - Subtitle: `Cada projeto aqui representa estratégia pensada do briefing ao resultado.`

2. **Filtros** — category pills with `useState`
   - Pills: Todos | Branding | Web | Social | Performance
   - Active: navy bg + white text

3. **Grid 6 ProjectCards** — filtered by category
   - Rebranding Completo (Branding) | Site Institucional B2B (Web) | Campanha de Lançamento (Social) | Identidade Visual Startup (Branding) | Landing Page + Tráfego (Performance) | Gestão de Conteúdo 6m (Social)

4. **Case Destaque** — 2 columns (large image + text)
   - Image: `1522202176988-66273c3fd55f`
   - Headline: `Como aumentamos 3x os leads de um cliente B2B em 90 dias`
   - Result highlight: `+312% em leads qualificados`
   - Button: `Ver case completo →` (primary)

5. **CTA Final** — `<SectionCTA dark headline="Quer um projeto assim? Fale com a gente." />`

---

## Responsiveness

| Breakpoint | Behavior |
|---|---|
| `< 1024px` | 3-col grids → 2-col |
| `< 768px` | All grids → 1-col, hero → single column, hero image hidden, navbar → hamburger |
| `< 480px` | Metrics grid → 1-col |

---

## Implementation Order

1. `next.config.ts` — add Unsplash image domain
2. `app/globals.css` — update `@theme` with Voxx palette + Tailwind utilities
3. `app/layout.tsx` — swap fonts to Besley + DM Sans, keep AccessibilityWidget
4. `hooks/useScrollReveal.ts`
5. `components/Button.tsx`
6. `components/SectionLabel.tsx`
7. `components/SectionCTA.tsx`
8. `components/Navbar.tsx`
9. `components/Footer.tsx`
10. `components/ServiceCard.tsx`
11. `components/ProjectCard.tsx`
12. `components/MetricCounter.tsx`
13. `app/page.tsx` (Home)
14. `app/sobre/page.tsx` + delete `app/about/`
15. `app/servicos/page.tsx` + delete `app/o-que-fazemos/`
16. `app/projetos/page.tsx`

---

## Out of Scope

- `/contato` page implementation
- Real client logos (user will provide later)
- WhatsApp number (placeholder in Footer)
- `Photograph Signature` font (no `.woff2` file available — omitted per spec)
