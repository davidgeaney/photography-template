"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight, X } from "lucide-react"

export default function PortfolioSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })
  const [selectedProject, setSelectedProject] = useState<(typeof portfolioItems)[0] | null>(null)

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
        <div className="grid md:grid-cols-2 gap-12 md:gap-24 mb-16">
          <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
            <motion.div variants={itemVariants} className="text-zinc-500">
              (03)
            </motion.div>
            <motion.div variants={itemVariants} className="text-lg font-medium">
              Our Work
            </motion.div>

            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mt-4">
              Explore the artistry and precision behind <span className="text-zinc-400">our portfolio</span> of timeless
              photography
            </motion.h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col justify-end"
          >
            <p className="text-zinc-400 mb-6 max-w-md">
              Immerse yourself in a curated collection of visual narratives, each frame meticulously composed to evoke
              emotion and capture the essence of fleeting moments frozen in time.
            </p>

            <Link
              href="#"
              className="inline-flex items-center gap-2 border border-zinc-700 text-zinc-300 px-6 py-3 rounded-full hover:bg-zinc-900 hover:border-zinc-600 transition-colors group self-start"
            >
              <span className="font-medium">EXPLORE MORE</span>
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-zinc-800 group-hover:bg-zinc-700 transition-colors">
                <ArrowUpRight className="w-3 h-3" />
              </span>
            </Link>
          </motion.div>
        </div>

        <PortfolioGrid setSelectedProject={setSelectedProject} />
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-zinc-950/95 z-50 flex items-center justify-center p-4 md:p-12"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-6xl w-full max-h-[90vh] overflow-auto bg-zinc-900 rounded-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center z-10"
                onClick={() => setSelectedProject(null)}
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative aspect-square md:aspect-auto">
                  <Image
                    src={selectedProject.image || "/placeholder.svg"}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col">
                  <h2 className="text-3xl font-bold mb-2">{selectedProject.title}</h2>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-sm px-3 py-1 bg-zinc-800 rounded-full capitalize">
                      {selectedProject.category}
                    </span>
                    <span className="text-zinc-400">{selectedProject.year}</span>
                  </div>
                  <p className="text-zinc-300 mb-8">{selectedProject.description}</p>

                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div>
                      <h3 className="text-sm text-zinc-500 mb-1">Client</h3>
                      <p>{selectedProject.client}</p>
                    </div>
                    <div>
                      <h3 className="text-sm text-zinc-500 mb-1">Year</h3>
                      <p>{selectedProject.year}</p>
                    </div>
                    <div>
                      <h3 className="text-sm text-zinc-500 mb-1">Category</h3>
                      <p className="capitalize">{selectedProject.category}</p>
                    </div>
                    <div>
                      <h3 className="text-sm text-zinc-500 mb-1">Location</h3>
                      <p>{selectedProject.location}</p>
                    </div>
                  </div>

                  <div className="mt-auto">
                    <button className="inline-flex items-center gap-2 bg-zinc-200 text-zinc-900 px-6 py-3 rounded-full hover:bg-zinc-300 transition-colors group">
                      <span className="font-medium">VIEW FULL PROJECT</span>
                      <span className="w-6 h-6 flex items-center justify-center rounded-full bg-zinc-900 text-zinc-200 group-hover:bg-zinc-800 transition-colors">
                        <ArrowUpRight className="w-3 h-3" />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

const portfolioItems = [
  {
    id: 1,
    title: "Majestic Creatures of the African Savanna",
    description:
      "A breathtaking journey through the wild landscapes of Africa, capturing the raw beauty and power of its magnificent wildlife. This series explores the delicate balance of nature and the untamed spirit of the animal kingdom.",
    category: "Wildlife",
    image: "/placeholder.svg?height=500&width=400",
    featured: true,
    client: "National Geographic",
    year: 2022,
    location: "Serengeti, Tanzania",
  },
  {
    id: 2,
    title: "A Pilgrim's Serenity in the East",
    description:
      "Exploring the spiritual architecture and tranquil moments across ancient temples of Japan. This collection captures the harmony between human craftsmanship and natural surroundings, revealing moments of profound peace and contemplation.",
    category: "Architecture",
    image: "/placeholder.svg?height=500&width=400",
    featured: true,
    client: "Architectural Digest",
    year: 2021,
    location: "Kyoto, Japan",
  },
  {
    id: 3,
    title: "Moments Framed in Portraits",
    description:
      "Intimate portraits capturing the essence of human emotion and character. Each photograph in this series tells a unique story, revealing the depth and complexity of the human experience through careful composition and authentic connection.",
    category: "Portrait",
    image: "/placeholder.svg?height=500&width=400",
    featured: false,
    client: "Vogue Magazine",
    year: 2023,
    location: "New York, USA",
  },
]

interface PortfolioGridProps {
  setSelectedProject: (project: (typeof portfolioItems)[0]) => void
}

function PortfolioGrid({ setSelectedProject }: PortfolioGridProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })

  return (
    <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {portfolioItems.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className={`group relative overflow-hidden rounded-lg ${item.featured ? "md:col-span-1" : "md:col-span-1"}`}
        >
          <div className="relative aspect-[3/4] overflow-hidden">
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.6 }} className="h-full w-full">
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent z-10"></div>
              <div className="absolute inset-0 bg-zinc-950/30 group-hover:bg-zinc-950/10 transition-colors duration-500 z-10"></div>
              <img src={item.image || "/placeholder.svg"} alt={item.title} className="h-full w-full object-cover" />
            </motion.div>

            <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs px-2 py-1 bg-zinc-800/80 rounded-full">{item.category}</span>
                {item.featured && <span className="text-xs px-2 py-1 bg-zinc-700/80 rounded-full">Featured</span>}
              </div>

              <h3 className="text-xl font-medium mb-2 group-hover:text-zinc-100 transition-colors">{item.title}</h3>

              <p className="text-sm text-zinc-400 mb-4 line-clamp-2 group-hover:text-zinc-300 transition-colors">
                {item.description}
              </p>

              <button
                onClick={() => setSelectedProject(item)}
                className="inline-flex items-center gap-2 bg-zinc-800/80 text-zinc-200 px-4 py-2 rounded-full hover:bg-zinc-700 transition-colors text-sm self-start"
              >
                <span>VIEW DETAILS</span>
                <ArrowUpRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

