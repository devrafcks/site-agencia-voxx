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
