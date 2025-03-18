"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Dawn's Glow at Misty Peaks Horizon",
    location: "Yosemite, USA",
    camera: "Sony Alpha A7R IV",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 2,
    title: "Ethereal Fog in Alpine Valley",
    location: "Swiss Alps, Switzerland",
    camera: "Canon EOS R5",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 3,
    title: "Twilight Reflections on Crystal Lake",
    location: "Banff, Canada",
    camera: "Nikon Z9",
    image: "/placeholder.svg?height=600&width=800",
  },
]

export default function FeaturedProject() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.3 })
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const [currentIndex, setCurrentIndex] = useState(0)

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length)
  }

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const progressPercentage = ((currentIndex + 1) / projects.length) * 100

  return (
    <section ref={containerRef} className="relative py-24 px-6 md:px-12 bg-zinc-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4"
          >
            <div className="text-zinc-500">(02)</div>
            <h2 className="text-lg font-medium">Our Expertise</h2>

            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mt-4">
              When moments captured every dreams crafted into beautiful reality
            </h3>

            <div className="mt-8 flex items-center gap-4">
              <div className="flex flex-col">
                <span className="text-sm text-zinc-400">Location</span>
                <span className="font-medium">{projects[currentIndex].location}</span>
              </div>
              <div className="h-8 w-px bg-zinc-700"></div>
              <div className="flex flex-col">
                <span className="text-sm text-zinc-400">Camera</span>
                <span className="font-medium">{projects[currentIndex].camera}</span>
              </div>
            </div>

            <div className="mt-auto pt-8 flex items-center gap-4">
              <button
                onClick={goToPrev}
                className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center hover:bg-zinc-800 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex-1 h-0.5 bg-zinc-800 relative">
                <motion.div
                  className="absolute top-0 left-0 h-full bg-zinc-400"
                  initial={{ width: `${(currentIndex / projects.length) * 100}%` }}
                  animate={{ width: `${progressPercentage}%` }}
                  transition={{ duration: 0.3 }}
                ></motion.div>
              </div>
              <button
                onClick={goToNext}
                className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center hover:bg-zinc-800 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>

          <motion.div style={{ y, opacity }} className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <div className="absolute inset-0 z-10 bg-gradient-to-r from-zinc-900/30 to-transparent pointer-events-none"></div>

            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: currentIndex === index ? 1 : 0,
                  scale: currentIndex === index ? 1 : 1.1,
                }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="absolute inset-0"
                style={{ display: currentIndex === index ? "block" : "none" }}
              >
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              </motion.div>
            ))}

            <motion.div
              className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-zinc-900 to-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <h3 className="text-xl font-medium">{projects[currentIndex].title}</h3>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

