"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export default function ServiceCTA() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  return (
    <section ref={ref} className="py-24 px-6 md:px-12 bg-zinc-950">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to <span className="text-zinc-400">transform</span> your vision into reality?
          </h2>
          <p className="text-lg text-zinc-400 mb-12 max-w-2xl mx-auto">
            Let's collaborate to create stunning visuals that capture your unique story and elevate your brand.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-zinc-200 text-zinc-900 px-8 py-4 rounded-full hover:bg-zinc-300 transition-colors group"
            >
              <span className="font-medium">GET IN TOUCH</span>
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-zinc-900 text-zinc-200 group-hover:bg-zinc-800 transition-colors">
                <ArrowUpRight className="w-3 h-3" />
              </span>
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 border border-zinc-700 text-zinc-300 px-8 py-4 rounded-full hover:bg-zinc-900 hover:border-zinc-600 transition-colors group"
            >
              <span className="font-medium">VIEW OUR WORK</span>
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-zinc-800 group-hover:bg-zinc-700 transition-colors">
                <ArrowUpRight className="w-3 h-3" />
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

