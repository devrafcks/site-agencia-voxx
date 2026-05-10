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
