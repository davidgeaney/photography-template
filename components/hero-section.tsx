"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import CategoryFilters from "./category-filters"
import ProjectSlider from "./project-slider"

const categoryImages = {
  Landscape: "/images/home/background/landscape.jpg",
  Wildlife: "/images/home/background/wildlife.jpg",
  Architectural: "/images/home/background/architectural.jpg",
  Travel: "/images/home/background/travel.jpg",
  Portrait: "/images/home/background/portrait.jpg",
}

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const [currentSlide, setCurrentSlide] = useState(1)
  const [selectedCategory, setSelectedCategory] = useState<string | null>("Landscape")
  const totalSlides = 5

  const handleCategoryChange = (category: string | null) => {
    setSelectedCategory(category)
  }

  return (
    <div ref={containerRef} className="relative h-screen overflow-hidden">
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <Image
          src={selectedCategory ? categoryImages[selectedCategory as keyof typeof categoryImages] : "/images/photographyherobg.jpg"}
          alt={selectedCategory ? `${selectedCategory} photography` : "Modern architecture"}
          fill
          priority
          className="object-cover opacity-50 transition-opacity duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/70 via-zinc-900/50 to-zinc-950"></div>
      </motion.div>

      <div className="relative z-10 h-full flex flex-col justify-between pt-32 pb-24 px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-zinc-100">
            Capturing beautiful moment inside lens and shutterspeed
          </h1>
        </motion.div>

        <div className="w-full">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            <CategoryFilters onCategoryChange={handleCategoryChange} />

            <div className="w-full md:w-auto flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="text-zinc-400 text-sm">
                  <span className="text-zinc-200 font-medium">{String(currentSlide).padStart(2, "0")}</span>
                  <span className="mx-2">/</span>
                  <span>{String(totalSlides).padStart(2, "0")}</span>
                </div>
                <div className="w-48 md:w-64 h-0.5 bg-zinc-800 relative">
                  <div
                    className="absolute top-0 left-0 h-full bg-zinc-400 transition-all duration-500"
                    style={{ width: `${(currentSlide / totalSlides) * 100}%` }}
                  ></div>
                </div>
              </div>

              <ProjectSlider onSlideChange={setCurrentSlide} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

