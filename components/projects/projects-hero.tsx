"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"

export default function ProjectsHero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <div ref={containerRef} className="relative h-screen overflow-hidden">
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <Image
          src="/images/projects/projectsherobackground.jpg"
          alt="Photography portfolio"
          fill
          priority
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/70 via-zinc-900/50 to-zinc-950"></div>
      </motion.div>

      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl"
        >
          <div className="mb-4 inline-block px-3 py-1 border border-zinc-700 rounded-full text-sm text-zinc-400">
            OUR PORTFOLIO
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-zinc-100 mb-6">
            A <span className="text-zinc-400">visual journey</span> through our creative lens
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto">
            Explore our diverse collection of photographic works spanning various genres, styles, and subjects.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <div className="w-0.5 h-16 bg-gradient-to-b from-transparent via-zinc-700 to-zinc-500"></div>
            <span className="text-sm text-zinc-500">SCROLL TO EXPLORE</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

