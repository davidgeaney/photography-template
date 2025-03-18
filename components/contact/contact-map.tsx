"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useInView } from "framer-motion"

export default function ContactMap() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })
  const mapRef = useRef<HTMLDivElement>(null)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient || !mapRef.current) return

    const dots = []
    for (let i = 0; i < 100; i++) {
      const dot = document.createElement("div")
      dot.className = "absolute rounded-full bg-zinc-700"
      dot.style.width = `${Math.random() * 4 + 1}px`
      dot.style.height = `${Math.random() * 4 + 1}px`
      dot.style.left = `${Math.random() * 100}%`
      dot.style.top = `${Math.random() * 100}%`
      dot.style.opacity = `${Math.random() * 0.5 + 0.2}`
      dots.push(dot)
      mapRef.current.appendChild(dot)
    }

    // Add a marker for the studio location
    const marker = document.createElement("div")
    marker.className = "absolute w-4 h-4 bg-zinc-200 rounded-full"
    marker.style.left = "50%"
    marker.style.top = "50%"
    marker.style.transform = "translate(-50%, -50%)"
    mapRef.current.appendChild(marker)

    // Add a pulse effect
    const pulse = document.createElement("div")
    pulse.className = "absolute w-12 h-12 bg-zinc-200/20 rounded-full animate-ping"
    pulse.style.left = "50%"
    pulse.style.top = "50%"
    pulse.style.transform = "translate(-50%, -50%)"
    mapRef.current.appendChild(pulse)

    return () => {
      dots.forEach((dot) => dot.remove())
      marker.remove()
      pulse.remove()
    }
  }, [isClient])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl font-bold mb-6">Studio Location</h2>

      <div className="relative rounded-lg overflow-hidden">
        <div ref={mapRef} className="w-full h-64 bg-zinc-800 relative"></div>
        <div className="absolute inset-0 border border-zinc-700 rounded-lg pointer-events-none"></div>
        <div className="absolute bottom-4 left-4 bg-zinc-900/80 backdrop-blur-sm px-4 py-2 rounded-lg">
          <p className="text-sm font-medium">Creacy Photography Studio</p>
          <p className="text-xs text-zinc-400">123 Creative Avenue, New York</p>
        </div>
      </div>
    </motion.div>
  )
}

