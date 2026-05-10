import type { ReactNode } from 'react'

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
