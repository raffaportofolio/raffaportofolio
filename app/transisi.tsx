'use client'

import { useEffect } from 'react'

export default function PageTransition({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Semua section dikasih initial state
    const sections = document.querySelectorAll('section')
    sections.forEach((section) => {
      section.style.opacity = '0'
      section.style.transform = 'translateY(60px)'
      section.style.transition = 'opacity 1.15s ease, transform 1.15s ease'
    })

    // Observer yang trigger animasi saat section masuk viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            el.style.opacity = '1'
            el.style.transform = 'translateY(0)'
          }
        })
      },
      { threshold: 0.15 }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return <>{children}</>
}