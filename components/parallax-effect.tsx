"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function ParallaxEffect() {
  const [scrollY, setScrollY] = useState(0)
  const [isClient, setIsClient] = useState(false)
  const [dots, setDots] = useState<Array<{ top: number; left: number; size: number; direction: number }>>([])

  useEffect(() => {
    setIsClient(true)
    // Generate dots only on client side
    setDots(Array.from({ length: 20 }).map(() => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: Math.random() * 3 + 1,
      direction: Math.random() > 0.5 ? 1 : -1
    })))
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <div className="absolute top-0 left-0 w-full h-full">
        {isClient && dots.map((dot, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-px bg-zinc-400 rounded-full opacity-30"
            style={{
              top: `${dot.top}%`,
              left: `${dot.left}%`,
              width: `${dot.size}px`,
              height: `${dot.size}px`,
              y: scrollY * (0.1 + Math.random() * 0.2) * dot.direction,
            }}
          />
        ))}

        <div
          className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(120,120,120,0.05)_0%,_rgba(0,0,0,0)_70%)]"
          style={{
            transform: `translateY(${scrollY * 0.1}px)`,
          }}
        />
      </div>
    </div>
  )
}

