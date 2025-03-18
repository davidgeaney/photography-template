"use client"

import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { ArrowUpRight, X } from "lucide-react"

// Generate a large array of projects
const projectsData = Array.from({ length: 24 }, (_, i) => ({
  id: i + 1,
  title: [
    "Urban Reflections",
    "Serene Wilderness",
    "Architectural Geometry",
    "Portrait of Solitude",
    "Coastal Dreams",
    "Mountain Majesty",
    "City Lights",
    "Desert Whispers",
  ][i % 8],
  category: ["landscape", "portrait", "architecture", "commercial", "wedding", "travel"][i % 6],
  description:
    "A captivating exploration of form, light, and emotion captured through our unique photographic perspective.",
  client: ["Vogue Magazine", "National Geographic", "Architectural Digest", "Sony", "Private Client", "Tourism Board"][
    i % 6
  ],
  year: 2020 + (i % 4),
  image: `/placeholder.svg?height=${600 + (i % 3) * 100}&width=${500 + (i % 3) * 100}`,
}))

export default function ProjectsGallery() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })
  const [selectedProject, setSelectedProject] = useState<(typeof projectsData)[0] | null>(null)
  const [activeCategory, setActiveCategory] = useState("all")
  const [filteredProjects, setFilteredProjects] = useState(projectsData)

  // Listen for category changes from the ProjectsCategories component
  useEffect(() => {
    const handleCategoryChange = (event: CustomEvent) => {
      setActiveCategory(event.detail.category)
    }

    window.addEventListener("categoryChange" as any, handleCategoryChange)
    return () => {
      window.removeEventListener("categoryChange" as any, handleCategoryChange)
    }
  }, [])

  // Filter projects when activeCategory changes
  useEffect(() => {
    if (activeCategory === "all") {
      setFilteredProjects(projectsData)
    } else {
      setFilteredProjects(projectsData.filter((project) => project.category === activeCategory))
    }
  }, [activeCategory])

  return (
    <section ref={ref} className="py-12 px-6 md:px-12 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        {filteredProjects.length === 0 ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-16">
            <h3 className="text-2xl font-medium mb-4">No projects found</h3>
            <p className="text-zinc-400">
              No projects match the selected category. Try selecting a different category.
            </p>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: (index % 12) * 0.05 }}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                  <div className="absolute inset-0 bg-zinc-900/30 group-hover:bg-zinc-900/10 transition-colors duration-500 z-10"></div>
                  <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.6 }} className="h-full w-full">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-zinc-900 to-transparent z-10">
                    <h3 className="text-xl font-medium group-hover:text-zinc-100 transition-colors">{project.title}</h3>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-xs px-2 py-1 bg-zinc-800/80 rounded-full capitalize">
                        {project.category}
                      </span>
                      <span className="text-xs text-zinc-400">{project.year}</span>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-zinc-900/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
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
                      <p>New York, USA</p>
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

