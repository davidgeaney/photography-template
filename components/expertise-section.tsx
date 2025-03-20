"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"

const categories = ["Landscape", "Wildlife", "Architectural", "Travel", "Portrait"]

const expertiseImages = {
  Landscape: "/images/landscape.jpg",
  Wildlife: "/images/wildlife.jpg",
  Architectural: "/images/architectural.jpg",
  Travel: "/images/travel.jpg",
  Portrait: "/images/portrait.jpg",
}

export default function ExpertiseSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })
  const [activeCategory, setActiveCategory] = useState("Landscape")

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  }

  return (
    <section ref={ref} className="py-24 px-6 md:px-12 bg-zinc-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-2 mb-12"
        >
          <div className="text-zinc-500">(02)</div>
          <h2 className="text-lg font-medium">Our Expertise</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
            <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold leading-tight mb-12">
              When moments captured every dreams crafted into beautiful reality
            </motion.h2>

            <motion.div 
              variants={itemVariants} 
              className="relative aspect-video overflow-hidden rounded-lg"
              key={activeCategory}
            >
              <Image
                src={expertiseImages[activeCategory as keyof typeof expertiseImages]}
                alt={`${activeCategory} photography showcase`}
                fill
                className="object-cover transition-opacity duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent opacity-70"></div>
            </motion.div>
          </motion.div>

          <div className="flex flex-col justify-center">
            <div className="space-y-6">
              {categories.map((category) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ duration: 0.5, delay: categories.indexOf(category) * 0.1 }}
                >
                  <button
                    onClick={() => setActiveCategory(category)}
                    className={`text-2xl font-medium transition-all duration-300 flex items-center ${
                      activeCategory === category ? "text-zinc-100" : "text-zinc-500 hover:text-zinc-300"
                    }`}
                  >
                    <span
                      className={`relative overflow-hidden inline-block ${
                        activeCategory === category ? "w-8" : "w-0"
                      } transition-all duration-300 mr-4`}
                    >
                      <span className="absolute top-1/2 w-full h-px bg-zinc-400"></span>
                    </span>
                    {category}
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

