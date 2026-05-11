import Link from 'next/link'
import Image from 'next/image'
import { InstagramLogo, FacebookLogo, LinkedinLogo, WhatsappLogo } from '@phosphor-icons/react/dist/ssr'

export default function Footer() {
  return (
    <footer className="pb-12" style={{ background: 'var(--navy)' }}>
      <div className="voxx-container pt-20 pb-36">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 border-t border-white/10 pt-16">
          <Link href="/" className="relative h-16 w-56 block">
            <Image
              src="/logo-white.png"
              alt="Voxx Logo"
              fill
              sizes="192px"
              className="object-contain"
              priority
            />
          </Link>

          <div className="flex gap-5">
            <a href="https://www.instagram.com/agenciavoxx/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white/40 hover:text-orange transition-all hover:scale-125">
              <InstagramLogo size={32} weight="fill" />
            </a>
            <a href="https://www.facebook.com/agenciavoxx" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white/40 hover:text-orange transition-all hover:scale-125">
              <FacebookLogo size={32} weight="fill" />
            </a>
            <a href="https://www.linkedin.com/company/ag%C3%AAnciavoxx/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-white/40 hover:text-orange transition-all hover:scale-125">
              <LinkedinLogo size={32} weight="fill" />
            </a>
            <a href="https://wa.me/5515997273323" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-white/40 hover:text-orange transition-all hover:scale-125">
              <WhatsappLogo size={32} weight="fill" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
