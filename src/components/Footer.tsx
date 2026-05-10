import Link from 'next/link'
import Image from 'next/image'
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

          <div className="flex gap-10">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-orange transition-all hover:scale-125">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-orange transition-all hover:scale-125">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
