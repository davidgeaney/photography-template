"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const categories = ["Landscape", "Wildlife", "Architectural", "Travel", "Portrait"]

interface CategoryFiltersProps {
  onCategoryChange?: (category: string | null) => void
}

export default function CategoryFilters({ onCategoryChange }: CategoryFiltersProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>("Landscape")

  const handleCategoryClick = (category: string) => {
    const newCategory = activeCategory === category ? null : category
    setActiveCategory(newCategory)
    onCategoryChange?.(newCategory)
  }

  return (
    <div className="flex flex-wrap gap-3">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => handleCategoryClick(category)}
          className={`relative px-4 py-2 rounded-full border transition-colors duration-300 ${
            activeCategory === category
              ? "border-zinc-200 text-zinc-100"
              : "border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:text-zinc-300"
          }`}
        >
          {activeCategory === category && (
            <motion.span
              layoutId="activeCategoryBg"
              className="absolute inset-0 bg-zinc-800 rounded-full -z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            />
          )}
          {category}
        </button>
      ))}
    </div>
  )
}

