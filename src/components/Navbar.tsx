'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

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
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    
    // Prevent scrolling when menu is open
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    
    return () => {
      window.removeEventListener('scroll', onScroll)
      document.body.style.overflow = 'auto'
    }
  }, [menuOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 h-24 flex items-center ${
          scrolled || menuOpen ? 'bg-navy/98 backdrop-blur-md shadow-2xl border-b border-white/5' : 'bg-transparent'
        }`}
      >
        <div className="voxx-container w-full flex items-center justify-between">
          <Link href="/" className="relative h-12 w-40 md:h-14 md:w-48 transition-transform hover:scale-105 z-50" onClick={() => setMenuOpen(false)}>
            <Image 
              src="/logo-white.png" 
              alt="Voxx Logo" 
              fill 
              sizes="192px"
              className="object-contain object-left"
              priority
            />
          </Link>

          <div className="flex items-center gap-6 z-50">
            <button
              className="p-2 text-white hover:text-orange transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              {menuOpen ? <X size={32} strokeWidth={1.5} /> : <Menu size={32} strokeWidth={1.5} />}
            </button>

            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-6 py-3 rounded-full bg-orange text-white text-xs font-body font-bold hover:bg-orange/90 transition-all hover:scale-105 shadow-lg shadow-orange/20 tracking-wider"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885m8.538-17.038A12.015 12.015 0 0 0 12.05.287C5.42.287.024 5.681.022 12.311c0 2.123.553 4.195 1.603 6.02L.05 24l5.815-1.523a11.996 11.996 0 0 0 6.182 1.706h.005c6.629 0 12.025-5.394 12.027-12.025a12.02 12.02 0 0 0-3.491-8.487z"/></svg>
              FALE AGORA
            </a>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 bg-navy flex items-center justify-center pt-24"
          >
            <div className="absolute inset-0 bg-[url('/texture.avif')] opacity-10 mix-blend-overlay pointer-events-none" />
            <nav className="flex flex-col items-center gap-6 md:gap-10 relative z-10 w-full px-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: 0.2 + i * 0.05, duration: 0.5 }}
                >
                  <Link
                    href={link.href}
                    className="font-display text-white text-2xl md:text-4xl lg:text-5xl font-black hover:text-orange transition-colors uppercase tracking-tight"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="mt-8 sm:hidden w-full max-w-xs"
              >
                <a
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-4 rounded-full bg-orange text-white text-sm font-body font-bold shadow-lg tracking-wider"
                  onClick={() => setMenuOpen(false)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885m8.538-17.038A12.015 12.015 0 0 0 12.05.287C5.42.287.024 5.681.022 12.311c0 2.123.553 4.195 1.603 6.02L.05 24l5.815-1.523a11.996 11.996 0 0 0 6.182 1.706h.005c6.629 0 12.025-5.394 12.027-12.025a12.02 12.02 0 0 0-3.491-8.487z"/></svg>
                  FALE AGORA
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
