"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"

const categories = [
  { id: "all", name: "All Projects" },
  { id: "portrait", name: "Portrait" },
  { id: "landscape", name: "Landscape" },
  { id: "architecture", name: "Architecture" },
  { id: "commercial", name: "Commercial" },
  { id: "wedding", name: "Wedding" },
  { id: "travel", name: "Travel" },
]

export default function ProjectsCategories() {
  const [activeCategory, setActiveCategory] = useState("all")
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  // Dispatch a custom event when the category changes
  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId)

    // Create and dispatch a custom event
    const event = new CustomEvent("categoryChange", {
      detail: { category: categoryId },
    })
    window.dispatchEvent(event)
  }

  return (
    <section ref={ref} className="py-12 px-6 md:px-12 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`relative px-6 py-3 rounded-full transition-colors duration-300 ${
                activeCategory === category.id ? "text-zinc-100" : "text-zinc-500 hover:text-zinc-300"
              }`}
            >
              {activeCategory === category.id && (
                <motion.span
                  layoutId="activeCategoryBg"
                  className="absolute inset-0 bg-zinc-800 rounded-full -z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                />
              )}
              {category.name}
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

