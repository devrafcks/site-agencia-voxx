# Voxx Agency Site Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a complete 4-page institutional website for Voxx communication agency in Next.js 16 App Router with Tailwind v4 styling.

**Architecture:** Tailwind v4 with `@theme` tokens for the Voxx brand palette and fonts (Besley + DM Sans). Shared layout component renders Navbar + Footer around page content. Interactive client components (Navbar, MetricCounter, Projetos filter) are scoped — pages use `'use client'` for `useScrollReveal`. The `/contato` page and `AccessibilityWidget` are left untouched.

**Tech Stack:** Next.js 16 · React 19 · TypeScript · Tailwind v4 · next/font/google · next/image · lucide-react

---

## File Map

| File | Action | Purpose |
|---|---|---|
| `next.config.ts` | Modify | Add Unsplash remote pattern for `next/image` |
| `src/app/globals.css` | Modify | Replace with Voxx @theme tokens + utility classes |
| `src/app/layout.tsx` | Modify | Swap fonts to Besley+DM Sans; add Navbar+Footer |
| `src/hooks/useScrollReveal.ts` | Create | IntersectionObserver scroll reveal hook |
| `src/components/Button.tsx` | Create | Reusable button: primary / secondary / ghost |
| `src/components/SectionLabel.tsx` | Create | `› TEXTO` orange uppercase label |
| `src/components/SectionCTA.tsx` | Create | Full-width CTA block, dark and light variants |
| `src/components/Navbar.tsx` | Create | Fixed navbar, sticky scroll style, mobile hamburger |
| `src/components/Footer.tsx` | Create | Navy footer, 3 columns, social icons |
| `src/components/ServiceCard.tsx` | Create | Icon + title + description + bullet list card |
| `src/components/ProjectCard.tsx` | Create | Image card with category pill + hover overlay |
| `src/components/MetricCounter.tsx` | Create | Animated counter with IntersectionObserver |
| `src/app/page.tsx` | Modify | Full Home page (7 sections) |
| `src/app/sobre/page.tsx` | Create | Sobre page (4 sections) |
| `src/app/about/` | Delete | Replaced by `sobre/` |
| `src/app/servicos/page.tsx` | Create | Serviços page (4 sections) |
| `src/app/o-que-fazemos/` | Delete | Replaced by `servicos/` |
| `src/app/projetos/page.tsx` | Modify | Full Projetos page with filter |

---

## Task 1: Foundation — Config, Design System, Layout

**Files:**
- Modify: `next.config.ts`
- Modify: `src/app/globals.css`
- Modify: `src/app/layout.tsx`

- [ ] **Step 1: Update next.config.ts to allow Unsplash images**

```ts
// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
```

- [ ] **Step 2: Replace globals.css with Voxx design system**

```css
/* src/app/globals.css */
@import "tailwindcss";

@theme {
  --color-orange: #F39642;
  --color-navy: #003F5C;
  --color-cream: #F5F0E6;
  --color-dark: #0E1C26;
  --color-muted: #6B7D8A;
  --font-display: var(--font-besley), Georgia, serif;
  --font-body: var(--font-dm-sans), sans-serif;
}

:root {
  --orange:       #F39642;
  --navy:         #003F5C;
  --cream:        #F5F0E6;
  --white:        #FFFFFF;
  --dark:         #0E1C26;
  --muted:        #6B7D8A;
  --radius:       14px;
  --radius-pill:  50px;
  --max-width:    1200px;
  --section-py:   96px;
}

*, *::before, *::after { box-sizing: border-box; }

body {
  font-family: var(--font-body);
  background: var(--cream);
  color: var(--dark);
  -webkit-font-smoothing: antialiased;
}

h1, h2, h3, h4 {
  font-family: var(--font-display);
  line-height: 1.1;
}

.voxx-container {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 24px;
}

.section {
  padding: var(--section-py) 0;
}

/* Scroll reveal */
.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.reveal.visible {
  opacity: 1;
  transform: none;
}

/* ServiceCard hover — CSS only, no JS handlers */
.service-card {
  transition: box-shadow 0.3s ease, transform 0.3s ease;
}
.service-card:hover {
  box-shadow: 0 20px 48px rgba(0, 63, 92, 0.10);
  transform: translateY(-4px);
}

/* Client logos marquee */
@keyframes marquee {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
.marquee-track {
  display: flex;
  gap: 4rem;
  animation: marquee 20s linear infinite;
  width: max-content;
}
```

- [ ] **Step 3: Update layout.tsx — swap fonts, add Navbar + Footer, keep AccessibilityWidget**

```tsx
// src/app/layout.tsx
import type { Metadata } from "next";
import { Besley, DM_Sans } from "next/font/google";
import { AccessibilityWidget } from "@/components/accessibility-widget";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const besley = Besley({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  variable: "--font-besley",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Voxx | Agência de Comunicação",
  description:
    "Estratégia, criatividade e tecnologia integradas para gerar resultados reais para o seu negócio.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${besley.variable} ${dmSans.variable}`}>
      <body className="min-h-screen flex flex-col bg-cream text-dark antialiased">
        <Navbar />
        <div id="seeb-content-wrapper" className="flex-1 flex flex-col pt-16">
          {children}
        </div>
        <Footer />
        <AccessibilityWidget />
      </body>
    </html>
  );
}
```

- [ ] **Step 4: Type-check**

```
npx tsc --noEmit
```

Expected: no errors (Navbar and Footer don't exist yet — ignore "module not found" errors at this step; they'll be fixed in Tasks 3–4)

- [ ] **Step 5: Commit**

```
git add next.config.ts src/app/globals.css src/app/layout.tsx
git commit -m "feat: voxx design system foundation — fonts, palette, layout"
```

---

## Task 2: Utility Components — useScrollReveal, Button, SectionLabel, SectionCTA

**Files:**
- Create: `src/hooks/useScrollReveal.ts`
- Create: `src/components/Button.tsx`
- Create: `src/components/SectionLabel.tsx`
- Create: `src/components/SectionCTA.tsx`

- [ ] **Step 1: Create useScrollReveal hook**

```ts
// src/hooks/useScrollReveal.ts
'use client'
import { useEffect } from 'react'

export function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible')
        }),
      { threshold: 0.15 }
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}
```

- [ ] **Step 2: Create Button component**

```tsx
// src/components/Button.tsx
import Link from 'next/link'

type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'ghost'
  href?: string
  onClick?: () => void
  children: React.ReactNode
  className?: string
}

export default function Button({
  variant = 'primary',
  href,
  onClick,
  children,
  className = '',
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-body font-medium text-sm transition-all duration-200 cursor-pointer'

  const variants = {
    primary:   'bg-orange text-white border-0 hover:bg-[#e08535]',
    secondary: 'border-2 border-navy text-navy bg-transparent hover:bg-navy hover:text-white',
    ghost:     'border-0 text-orange bg-transparent hover:underline px-0 py-0',
  }

  const cls = `${base} ${variants[variant]} ${className}`

  if (href) return <Link href={href} className={cls}>{children}</Link>
  return (
    <button type="button" onClick={onClick} className={cls}>
      {children}
    </button>
  )
}
```

- [ ] **Step 3: Create SectionLabel component**

```tsx
// src/components/SectionLabel.tsx
export default function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex items-center gap-1 text-orange uppercase tracking-widest text-xs font-body font-medium mb-4">
      <span aria-hidden="true">›</span>
      <span>{children}</span>
    </span>
  )
}
```

- [ ] **Step 4: Create SectionCTA component**

```tsx
// src/components/SectionCTA.tsx
import Link from 'next/link'

type SectionCTAProps = {
  headline: string
  accentWord?: string
  buttonLabel?: string
  href?: string
  dark?: boolean
}

function renderHeadline(headline: string, accentWord?: string) {
  if (!accentWord) return <>{headline}</>
  const parts = headline.split(accentWord)
  return (
    <>
      {parts[0]}
      <span className="text-orange">{accentWord}</span>
      {parts[1]}
    </>
  )
}

export default function SectionCTA({
  headline,
  accentWord,
  buttonLabel = 'Fale com a gente',
  href = '/contato',
  dark = false,
}: SectionCTAProps) {
  return (
    <section
      className="section"
      style={{ background: dark ? 'var(--navy)' : 'var(--orange)' }}
    >
      <div className="voxx-container text-center">
        <h2
          className="font-display text-3xl md:text-4xl font-bold text-white mb-8 leading-tight"
        >
          {renderHeadline(headline, accentWord)}
        </h2>
        <Link
          href={href}
          className={
            dark
              ? 'inline-flex items-center gap-2 px-8 py-4 rounded-full font-body font-medium text-sm bg-orange text-white hover:bg-[#e08535] transition-colors'
              : 'inline-flex items-center gap-2 px-8 py-4 rounded-full font-body font-medium text-sm border-2 border-white text-white hover:bg-white hover:text-orange transition-colors'
          }
        >
          {buttonLabel}
        </Link>
      </div>
    </section>
  )
}
```

- [ ] **Step 5: Type-check**

```
npx tsc --noEmit
```

Expected: no errors

- [ ] **Step 6: Commit**

```
git add src/hooks/useScrollReveal.ts src/components/Button.tsx src/components/SectionLabel.tsx src/components/SectionCTA.tsx
git commit -m "feat: utility components — Button, SectionLabel, SectionCTA, useScrollReveal"
```

---

## Task 3: Navbar

**Files:**
- Create: `src/components/Navbar.tsx`

- [ ] **Step 1: Create Navbar.tsx**

```tsx
// src/components/Navbar.tsx
'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '/',          label: 'Home' },
  { href: '/sobre',     label: 'Sobre' },
  { href: '/servicos',  label: 'Serviços' },
  { href: '/projetos',  label: 'Projetos' },
  { href: '/contato',   label: 'Contato' },
]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={
        scrolled
          ? {
              background: 'rgba(245, 240, 230, 0.92)',
              backdropFilter: 'blur(16px)',
              boxShadow: '0 1px 20px rgba(0,0,0,0.06)',
            }
          : { background: 'transparent' }
      }
    >
      <div className="voxx-container flex items-center justify-between h-16">
        <Link href="/" className="font-display font-bold text-xl text-navy">
          Voxx
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body text-sm text-dark hover:text-orange transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contato"
          className="hidden md:inline-flex items-center px-6 py-2.5 rounded-full bg-orange text-white text-sm font-body font-medium hover:bg-[#e08535] transition-colors"
        >
          Fale Conosco
        </Link>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-dark"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: menuOpen ? '400px' : '0',
          background: 'rgba(245, 240, 230, 0.97)',
          backdropFilter: 'blur(16px)',
        }}
      >
        <nav className="voxx-container flex flex-col py-6 gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body text-dark hover:text-orange transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contato"
            className="self-start inline-flex items-center px-6 py-2.5 rounded-full bg-orange text-white text-sm font-body font-medium hover:bg-[#e08535] transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Fale Conosco
          </Link>
        </nav>
      </div>
    </header>
  )
}
```

- [ ] **Step 2: Type-check**

```
npx tsc --noEmit
```

Expected: no errors

- [ ] **Step 3: Commit**

```
git add src/components/Navbar.tsx
git commit -m "feat: sticky navbar with mobile hamburger menu"
```

---

## Task 4: Footer

**Files:**
- Create: `src/components/Footer.tsx`

- [ ] **Step 1: Create Footer.tsx**

```tsx
// src/components/Footer.tsx
import Link from 'next/link'
import { Instagram, Linkedin } from 'lucide-react'

const links = [
  { href: '/',         label: 'Home' },
  { href: '/sobre',    label: 'Sobre' },
  { href: '/servicos', label: 'Serviços' },
  { href: '/projetos', label: 'Projetos' },
  { href: '/contato',  label: 'Contato' },
]

export default function Footer() {
  return (
    <footer style={{ background: 'var(--navy)' }}>
      <div className="voxx-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo + tagline */}
          <div>
            <p className="font-display font-bold text-2xl text-white mb-3">Voxx</p>
            <p
              className="font-body text-sm leading-relaxed"
              style={{ color: 'rgba(255,255,255,0.6)' }}
            >
              Conectamos marcas às pessoas certas com estratégia e criatividade.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="font-display font-semibold text-white mb-5">Links Rápidos</p>
            <nav className="flex flex-col gap-3">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-body text-sm transition-colors hover:text-white"
                  style={{ color: 'rgba(255,255,255,0.6)' }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div>
            <p className="font-display font-semibold text-white mb-5">Redes Sociais</p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-orange"
                style={{ color: 'rgba(255,255,255,0.6)' }}
                aria-label="Instagram"
              >
                <Instagram size={22} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-orange"
                style={{ color: 'rgba(255,255,255,0.6)' }}
                aria-label="LinkedIn"
              >
                <Linkedin size={22} />
              </a>
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-orange"
                style={{ color: 'rgba(255,255,255,0.6)' }}
                aria-label="WhatsApp"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <div className="voxx-container py-4 text-center">
          <p className="font-body text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>
            © 2025 Voxx. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
```

- [ ] **Step 2: Type-check and verify layout renders (Navbar + Footer now both exist)**

```
npx tsc --noEmit
```

Expected: no errors

- [ ] **Step 3: Commit**

```
git add src/components/Footer.tsx
git commit -m "feat: navy footer with quick links and social icons"
```

---

## Task 5: Content Components — ServiceCard, ProjectCard, MetricCounter

**Files:**
- Create: `src/components/ServiceCard.tsx`
- Create: `src/components/ProjectCard.tsx`
- Create: `src/components/MetricCounter.tsx`

- [ ] **Step 1: Create ServiceCard.tsx**

```tsx
// src/components/ServiceCard.tsx
import { ReactNode } from 'react'

type ServiceCardProps = {
  icon: ReactNode
  title: string
  description: string
  bullets?: string[]
}

export default function ServiceCard({ icon, title, description, bullets }: ServiceCardProps) {
  return (
    <div
      className="bg-white p-8 service-card"
      style={{
        border: '1px solid #E8E4DC',
        borderRadius: 'var(--radius)',
      }}
    >
      <div className="text-orange mb-5">{icon}</div>
      <h3 className="font-display font-bold text-xl text-dark mb-3">{title}</h3>
      <p className="font-body text-sm leading-relaxed text-muted mb-4">{description}</p>
      {bullets && bullets.length > 0 && (
        <ul className="flex flex-col gap-1.5">
          {bullets.map((b) => (
            <li key={b} className="flex items-center gap-2 font-body text-sm text-muted">
              <span className="text-orange" aria-hidden="true">·</span>
              {b}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
```

- [ ] **Step 2: Create ProjectCard.tsx**

```tsx
// src/components/ProjectCard.tsx
import Image from 'next/image'

type ProjectCardProps = {
  image: string
  alt: string
  category: string
  title: string
}

export default function ProjectCard({ image, alt, category, title }: ProjectCardProps) {
  return (
    <div
      className="relative overflow-hidden group cursor-pointer"
      style={{ borderRadius: 'var(--radius)', aspectRatio: '4/3' }}
    >
      <Image
        src={`https://images.unsplash.com/photo-${image}?w=800&q=80&auto=format&fit=crop`}
        alt={alt}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
      {/* Category pill */}
      <span
        className="absolute top-4 left-4 font-body text-xs font-medium text-white px-3 py-1 z-10"
        style={{ background: 'var(--orange)', borderRadius: 'var(--radius-pill)' }}
      >
        {category}
      </span>
      {/* Hover overlay */}
      <div
        className="absolute inset-0 flex items-center justify-center z-10 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        style={{ background: 'rgba(0,63,92,0.85)' }}
      >
        <div className="text-center px-6">
          <p className="font-display font-bold text-white text-xl mb-2">{title}</p>
          <p className="font-body text-sm" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Ver projeto →
          </p>
        </div>
      </div>
    </div>
  )
}
```

- [ ] **Step 3: Create MetricCounter.tsx**

```tsx
// src/components/MetricCounter.tsx
'use client'
import { useState, useEffect, useRef } from 'react'

type MetricCounterProps = {
  target: number
  suffix?: string
  label: string
}

export default function MetricCounter({ target, suffix = '', label }: MetricCounterProps) {
  const [count, setCount]         = useState(0)
  const containerRef              = useRef<HTMLDivElement>(null)
  const started                   = useRef(false)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return
        started.current = true

        const duration  = 1500
        const steps     = 60
        const increment = target / steps
        let current     = 0

        const timer = setInterval(() => {
          current += increment
          if (current >= target) {
            setCount(target)
            clearInterval(timer)
          } else {
            setCount(Math.floor(current))
          }
        }, duration / steps)
      },
      { threshold: 0.5 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [target])

  return (
    <div ref={containerRef} className="text-center">
      <p
        className="font-display font-black text-orange"
        style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1 }}
      >
        {count}{suffix}
      </p>
      <p className="font-body text-muted mt-2 text-sm">{label}</p>
    </div>
  )
}
```

- [ ] **Step 4: Type-check**

```
npx tsc --noEmit
```

Expected: no errors

- [ ] **Step 5: Commit**

```
git add src/components/ServiceCard.tsx src/components/ProjectCard.tsx src/components/MetricCounter.tsx
git commit -m "feat: ServiceCard, ProjectCard, MetricCounter components"
```

---

## Task 6: Home Page

**Files:**
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Replace page.tsx with full Home implementation**

```tsx
// src/app/page.tsx
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
```

- [ ] **Step 2: Type-check**

```
npx tsc --noEmit
```

Expected: no errors

- [ ] **Step 3: Start dev server and verify Home page visually**

```
npm run dev
```

Open `http://localhost:3000`. Verify:
- Hero section: headline with orange "falar", two buttons, image on right
- Clientes: scrolling logo marquee
- Serviços preview: 3 service cards
- Diferenciais: navy section, 3 columns
- Projetos preview: 3 project cards with category pills
- Métricas: 4 animated counters (scroll into view to trigger)
- CTA Final: navy section
- Navbar: sticky + mobile menu at <768px
- Footer: navy, 3 columns

- [ ] **Step 4: Commit**

```
git add src/app/page.tsx
git commit -m "feat: home page — hero, services preview, diferenciais, metrics, projects preview"
```

---

## Task 7: Sobre Page

**Files:**
- Create: `src/app/sobre/page.tsx`
- Delete: `src/app/about/` folder

- [ ] **Step 1: Create sobre/page.tsx**

```tsx
// src/app/sobre/page.tsx
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
```

- [ ] **Step 2: Delete the old about/ folder**

```
Remove-Item -Recurse -Force src/app/about
```

- [ ] **Step 3: Type-check**

```
npx tsc --noEmit
```

Expected: no errors

- [ ] **Step 4: Verify `/sobre` in browser**

Navigate to `http://localhost:3000/sobre`. Verify:
- Navy hero section with headline and muted subtitle
- História section: text left, image right, styled blockquote with orange left border
- Missão (orange card) / Visão / Valores (white cards) in 3-column grid
- Diferenciais list with orange checkmark icons
- CTA Final in navy

- [ ] **Step 5: Commit**

```
git add src/app/sobre/
git rm -r src/app/about/
git commit -m "feat: sobre page — historia, missao, diferenciais; remove about/ stub"
```

---

## Task 8: Serviços Page

**Files:**
- Create: `src/app/servicos/page.tsx`
- Delete: `src/app/o-que-fazemos/` folder

- [ ] **Step 1: Create servicos/page.tsx**

```tsx
// src/app/servicos/page.tsx
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
      <section style={{ paddingBottom: 'var(--section-py)' }}>
        <div className="voxx-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 reveal">
            {services.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>
        </div>
      </section>

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
```

- [ ] **Step 2: Delete the old o-que-fazemos/ folder**

```
Remove-Item -Recurse -Force src/app/o-que-fazemos
```

- [ ] **Step 3: Type-check**

```
npx tsc --noEmit
```

Expected: no errors

- [ ] **Step 4: Verify `/servicos` in browser**

Navigate to `http://localhost:3000/servicos`. Verify:
- Hero with headline "Soluções que movem marcas" (accent orange)
- 3×2 grid of ServiceCards, each with icon, title, description, bullets
- Hover on cards lifts them with shadow
- Navy Processo section: 01–04 steps with orange numbers
- Orange CTA section with white outline button

- [ ] **Step 5: Commit**

```
git add src/app/servicos/
git rm -r src/app/o-que-fazemos/
git commit -m "feat: servicos page — 6 service cards, 4-step process; remove o-que-fazemos/ stub"
```

---

## Task 9: Projetos Page

**Files:**
- Modify: `src/app/projetos/page.tsx`

- [ ] **Step 1: Replace projetos/page.tsx with full implementation**

```tsx
// src/app/projetos/page.tsx
'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import SectionLabel from '@/components/SectionLabel'
import ProjectCard from '@/components/ProjectCard'
import SectionCTA from '@/components/SectionCTA'

type Category = 'Todos' | 'Branding' | 'Web' | 'Social' | 'Performance'

const CATEGORIES: Category[] = ['Todos', 'Branding', 'Web', 'Social', 'Performance']

const projects = [
  {
    id: 1,
    category: 'Branding' as Category,
    title: 'Rebranding Completo',
    image: '1553877522-43269e4ea94b',
    alt: 'Rebranding completo para empresa de consultoria nacional',
  },
  {
    id: 2,
    category: 'Web' as Category,
    title: 'Site Institucional B2B',
    image: '1460925895917-afdab827c52f',
    alt: 'Site institucional moderno para empresa B2B',
  },
  {
    id: 3,
    category: 'Social' as Category,
    title: 'Campanha de Lançamento',
    image: '1542744173-8e7e53415bb0',
    alt: 'Campanha de lançamento de produto em redes sociais',
  },
  {
    id: 4,
    category: 'Branding' as Category,
    title: 'Identidade Visual Startup',
    image: '1486325212027-8081e485255e',
    alt: 'Identidade visual para startup de tecnologia',
  },
  {
    id: 5,
    category: 'Performance' as Category,
    title: 'Landing Page + Tráfego',
    image: '1551434678-e076c223a692',
    alt: 'Landing page com campanha de tráfego pago otimizado',
  },
  {
    id: 6,
    category: 'Social' as Category,
    title: 'Gestão de Conteúdo 6m',
    image: '1497366216548-37526070297c',
    alt: 'Gestão de conteúdo para redes sociais por 6 meses',
  },
]

export default function Projetos() {
  useScrollReveal()
  const [active, setActive] = useState<Category>('Todos')

  const filtered =
    active === 'Todos' ? projects : projects.filter((p) => p.category === active)

  return (
    <main>
      {/* ─── Page Hero ────────────────────────────────────────── */}
      <section className="section">
        <div className="voxx-container">
          <div className="max-w-2xl reveal">
            <SectionLabel>Portfólio</SectionLabel>
            <h1
              className="font-display font-black text-dark mb-6"
              style={{ fontSize: 'clamp(2.25rem, 4vw, 3.5rem)' }}
            >
              <span className="text-orange">Ideias reais,</span>{' '}
              resultados concretos
            </h1>
            <p className="font-body text-muted text-lg leading-relaxed">
              Cada projeto aqui representa estratégia pensada do briefing ao resultado.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Filtros ──────────────────────────────────────────── */}
      <div style={{ paddingBottom: '48px' }}>
        <div className="voxx-container">
          <div className="flex flex-wrap gap-3">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActive(cat)}
                className="px-5 py-2 rounded-full font-body text-sm font-medium transition-all duration-200"
                style={{
                  background: active === cat ? 'var(--navy)' : 'white',
                  color:      active === cat ? 'white' : 'var(--dark)',
                  border:     `1.5px solid ${active === cat ? 'var(--navy)' : '#E8E4DC'}`,
                  cursor:     'pointer',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ─── Grid de Projetos ─────────────────────────────────── */}
      <div style={{ paddingBottom: 'var(--section-py)' }}>
        <div className="voxx-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p) => (
              <ProjectCard
                key={p.id}
                image={p.image}
                alt={p.alt}
                category={p.category}
                title={p.title}
              />
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="font-body text-muted text-center py-16">
              Nenhum projeto nesta categoria ainda.
            </p>
          )}
        </div>
      </div>

      {/* ─── Case Destaque ────────────────────────────────────── */}
      <section className="section" style={{ background: '#EDE7D9' }}>
        <div className="voxx-container">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 reveal">
              <div
                className="relative w-full"
                style={{ borderRadius: 'var(--radius)', overflow: 'hidden', aspectRatio: '4/3' }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1522202176988-66273c3fd55f?w=800&q=80&auto=format&fit=crop"
                  alt="Reunião de equipe no case B2B de leads"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="flex-1 reveal">
              <SectionLabel>Case de sucesso</SectionLabel>
              <h2
                className="font-display font-bold text-dark mb-4"
                style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)' }}
              >
                Como aumentamos 3x os leads de um cliente B2B em 90 dias
              </h2>
              <p className="font-body text-muted leading-relaxed mb-4">
                Uma empresa de software B2B chegou até nós com um problema claro: tráfego no
                site, mas leads qualificados insuficientes. O desafio era converter visitantes
                em oportunidades reais de negócio.
              </p>
              <p className="font-body text-muted leading-relaxed mb-6">
                Redesenhamos a estratégia de conteúdo, criamos uma landing page focada em
                conversão e implementamos campanhas de tráfego pago segmentadas. Em 90 dias,
                os resultados superaram as expectativas da equipe comercial.
              </p>
              <div
                className="inline-block px-6 py-4 mb-8"
                style={{ background: 'var(--navy)', borderRadius: 'var(--radius)' }}
              >
                <p className="font-display font-black text-orange text-3xl">+312%</p>
                <p
                  className="font-body text-sm mt-1"
                  style={{ color: 'rgba(255,255,255,0.8)' }}
                >
                  em leads qualificados
                </p>
              </div>
              <div>
                <Link
                  href="/contato"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-orange text-white font-body font-medium hover:bg-[#e08535] transition-colors"
                >
                  Ver case completo →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionCTA
        dark
        headline="Quer um projeto assim? Fale com a gente."
        buttonLabel="Fale com a Voxx"
        href="/contato"
      />
    </main>
  )
}
```

- [ ] **Step 2: Type-check**

```
npx tsc --noEmit
```

Expected: no errors

- [ ] **Step 3: Verify `/projetos` in browser**

Navigate to `http://localhost:3000/projetos`. Verify:
- Hero section with accent orange headline
- Filter pills: clicking "Branding" shows only Branding projects, "Todos" shows all 6
- 3-column project grid with category pills and hover overlay
- Case Destaque: image left, content right, "+312%" metric in navy block
- CTA Final

- [ ] **Step 4: Run full TypeScript and build check**

```
npx tsc --noEmit
npm run build
```

Expected: build completes without errors

- [ ] **Step 5: Commit**

```
git add src/app/projetos/page.tsx
git commit -m "feat: projetos page — filterable grid, case destaque, CTA"
```

---

## Self-Review Checklist

**Spec coverage:**
- [x] next.config.ts with Unsplash remote pattern — Task 1
- [x] globals.css with @theme Voxx palette + CSS utilities — Task 1
- [x] Besley + DM Sans fonts in layout — Task 1
- [x] Navbar sticky + mobile hamburger — Task 3
- [x] Footer navy + social icons — Task 4
- [x] Button (primary / secondary / ghost) — Task 2
- [x] SectionLabel (› TEXT) — Task 2
- [x] SectionCTA (dark + light variants) — Task 2
- [x] ServiceCard with hover CSS — Task 5
- [x] ProjectCard with category pill + hover overlay — Task 5
- [x] MetricCounter animated — Task 5
- [x] useScrollReveal hook — Task 2
- [x] Home: all 7 sections — Task 6
- [x] Sobre: all 4 sections — Task 7
- [x] Serviços: all 4 sections — Task 8
- [x] Projetos: filter + grid + case + CTA — Task 9
- [x] Delete about/ → replaced by sobre/ — Task 7
- [x] Delete o-que-fazemos/ → replaced by servicos/ — Task 8
- [x] /contato untouched — no task touches it
- [x] AccessibilityWidget untouched — layout.tsx keeps the import
- [x] Client logos as placeholders (user will replace later) — Task 6

**No placeholders:** All code is complete and concrete — no "TBD" or "TODO" items.

**Type consistency:** `ServiceCard` props (icon, title, description, bullets) used identically in Tasks 5, 6, 8. `ProjectCard` props (image, alt, category, title) used identically in Tasks 5, 6, 9. `MetricCounter` props (target, suffix, label) defined in Task 5 and used correctly in Task 6. `SectionCTA` props (dark, headline, buttonLabel, href) consistent across all pages.
