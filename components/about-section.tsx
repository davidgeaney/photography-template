"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  }

  return (
    <section ref={ref} className="py-24 px-6 md:px-12 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-2 mb-12"
        >
          <div className="text-zinc-500">(01)</div>
          <h2 className="text-lg font-medium">About Us</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-24">
          <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8"
            >
              Capturing life's most precious moments with artistry and a touch of magic
            </motion.h2>

            <motion.p variants={itemVariants} className="text-zinc-400 mb-8">
              We are a collective of passionate photographers dedicated to transforming fleeting moments into timeless
              memories. Our approach combines technical precision with artistic vision, allowing us to create images
              that not only document but also evoke emotion and tell compelling stories.
            </motion.p>

            <motion.p variants={itemVariants} className="text-zinc-400 mb-8">
              Founded in 2015, our studio has grown from a small team of enthusiasts to a renowned photography agency
              serving clients across the globe. We believe that every frame has the potential to become a masterpiece,
              and we pour our heart and soul into making that potential a reality.
            </motion.p>

            <motion.div variants={itemVariants} className="mt-8">
              <Link
                href="#"
                className="inline-flex items-center gap-2 border border-zinc-700 text-zinc-300 px-6 py-3 rounded-full hover:bg-zinc-900 hover:border-zinc-600 transition-colors group"
              >
                <span className="font-medium">LEARN MORE</span>
                <span className="w-6 h-6 flex items-center justify-center rounded-full bg-zinc-800 group-hover:bg-zinc-700 transition-colors">
                  <ArrowUpRight className="w-3 h-3" />
                </span>
              </Link>
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=600&width=450"
                  alt="Photography showcase"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="relative aspect-[1/1] overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=450&width=450"
                  alt="Photography showcase"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="space-y-6 mt-12"
            >
              <div className="relative aspect-[1/1] overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=450&width=450"
                  alt="Photography showcase"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=600&width=450"
                  alt="Photography showcase"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-8 border border-zinc-800 rounded-lg hover:bg-zinc-900/50 transition-colors"
          >
            <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-zinc-400"
              >
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Our Vision</h3>
            <p className="text-zinc-400">
              To redefine visual storytelling through innovative photography that captures the essence of human
              experience and inspires emotional connections.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="p-8 border border-zinc-800 rounded-lg hover:bg-zinc-900/50 transition-colors"
          >
            <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-zinc-400"
              >
                <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" />
                <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" />
                <path d="M2 7h20" />
                <path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Our Approach</h3>
            <p className="text-zinc-400">
              We blend technical expertise with artistic sensibility, creating a collaborative environment where your
              vision meets our creative execution.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="p-8 border border-zinc-800 rounded-lg hover:bg-zinc-900/50 transition-colors"
          >
            <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-zinc-400"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Our Promise</h3>
            <p className="text-zinc-400">
              We commit to delivering exceptional quality, personalized service, and images that exceed expectations
              while respecting your unique vision.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

