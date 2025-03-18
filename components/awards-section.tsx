"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronUp, Award } from "lucide-react"
import Image from "next/image"

const awards = [
  {
    id: 1,
    year: 2019,
    title: "Sony World Photography Awards",
    description: "Recognition for exceptional landscape photography showcasing natural wonders.",
    expanded: false,
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: 2,
    year: 2020,
    title: "Travel Photographer Of The Year",
    description: "Honored for capturing cultural narratives through immersive visual storytelling.",
    expanded: false,
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: 3,
    year: 2022,
    title: "Magnum Photography Award",
    description: "Celebrated for innovative approaches to documentary photography.",
    expanded: false,
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: 4,
    year: 2023,
    title: "International Photography Awards",
    description: "Recognized for technical excellence and artistic vision in portrait photography.",
    expanded: false,
    image: "/placeholder.svg?height=300&width=500",
  },
]

export default function AwardsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })
  const [expandedId, setExpandedId] = useState<number | null>(null)

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id)
  }

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
    <section ref={ref} className="py-24 px-6 md:px-12 bg-zinc-900/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-16"
        >
          <motion.div variants={itemVariants} className="text-zinc-500">
            (04)
          </motion.div>
          <motion.div variants={itemVariants} className="text-lg font-medium">
            Recognition
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mt-6">
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold">
              <span className="text-zinc-400">Award</span> is a pixel that reflecting our ongoing{" "}
              <span className="text-zinc-400">dedication</span> to innovation and excellence
            </motion.h2>

            <motion.p variants={itemVariants} className="text-zinc-400">
              Each accolade represents not just recognition, but a milestone in our journey to push the boundaries of
              visual storytelling and photographic craftsmanship.
            </motion.p>
          </div>
        </motion.div>

        <div className="space-y-4">
          {awards.map((award, index) => (
            <motion.div
              key={award.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border-b border-zinc-800 pb-4"
            >
              <div
                className="flex items-center justify-between cursor-pointer py-4"
                onClick={() => toggleExpand(award.id)}
              >
                <div className="flex items-center gap-6">
                  <span className="text-xl font-medium text-zinc-500">{award.year}</span>
                  <h3 className="text-xl font-medium">{award.title}</h3>
                </div>
                <button className="w-8 h-8 rounded-full border border-zinc-700 flex items-center justify-center">
                  {expandedId === award.id ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
              </div>

              <AnimatePresence>
                {expandedId === award.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="py-4 grid md:grid-cols-2 gap-6">
                      <div className="relative aspect-video rounded-lg overflow-hidden">
                        <Image
                          src={award.image || "/placeholder.svg"}
                          alt={award.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-zinc-900/80 flex items-center justify-center">
                          <Award className="w-6 h-6 text-zinc-200" />
                        </div>
                      </div>
                      <div className="flex flex-col justify-center">
                        <h4 className="text-lg font-medium mb-2">{award.title}</h4>
                        <p className="text-zinc-400">{award.description}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

