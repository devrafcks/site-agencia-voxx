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
