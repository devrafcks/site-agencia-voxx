import type { ReactNode } from 'react'

export default function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <span className="flex items-center gap-1 text-orange uppercase tracking-widest text-xs font-body font-medium mb-4">
      <span aria-hidden="true">›</span>
      <span>{children}</span>
    </span>
  )
}
