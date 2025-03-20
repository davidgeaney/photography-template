"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"

export default function ContactHero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <div ref={containerRef} className="relative h-[70vh] overflow-hidden">
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <Image
          src="/images/contact/contactpageherobackground.jpg"
          alt="Contact us"
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
            GET IN TOUCH
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-zinc-100 mb-6">
            Let's <span className="text-zinc-400">create</span> something extraordinary
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto">
            We're excited to hear about your project. Reach out to us and let's start a conversation.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

