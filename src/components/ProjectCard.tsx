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
