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
