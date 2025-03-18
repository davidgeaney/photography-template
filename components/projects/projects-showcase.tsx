"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"

const featuredProjects = [
  {
    id: 1,
    title: "Ethereal Landscapes",
    description:
      "An award-winning series capturing the mystical beauty of remote landscapes across five continents, showcasing nature's grandeur in its purest form.",
    image: "/placeholder.svg?height=800&width=1200",
    awards: ["International Photography Awards", "Fine Art Photography Awards"],
  },
  {
    id: 2,
    title: "Urban Perspectives",
    description:
      "A visual exploration of metropolitan architecture and urban life, examining the relationship between humans and the built environment.",
    image: "/placeholder.svg?height=800&width=1200",
    awards: ["Architectural Photography Awards", "Sony World Photography Awards"],
  },
  {
    id: 3,
    title: "Faces of Humanity",
    description:
      "An intimate portrait series documenting diverse individuals across cultures, celebrating the universal human experience through compelling visual storytelling.",
    image: "/placeholder.svg?height=800&width=1200",
    awards: ["Portrait Photography Awards", "National Geographic Photo Contest"],
  },
]

export default function ProjectsShowcase() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  return (
    <section ref={ref} className="py-24 px-6 md:px-12 bg-zinc-900/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-2 mb-16"
        >
          <div className="text-zinc-500">(02)</div>
          <h2 className="text-lg font-medium">Featured Projects</h2>
          <h3 className="text-3xl md:text-4xl font-bold mt-4">
            Signature <span className="text-zinc-400">works</span> that define our artistic vision
          </h3>
        </motion.div>

        <div className="space-y-24">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "md:grid-flow-dense" : ""}`}
            >
              <div className={index % 2 === 1 ? "md:col-start-2" : ""}>
                <span className="text-zinc-500 text-sm">Featured Project</span>
                <h3 className="text-2xl md:text-3xl font-bold mt-2 mb-4">{project.title}</h3>
                <p className="text-zinc-400 mb-6">{project.description}</p>

                <div className="mb-8">
                  <h4 className="text-sm text-zinc-500 mb-2">Recognition</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.awards.map((award, i) => (
                      <span key={i} className="text-xs px-3 py-1 bg-zinc-800 rounded-full">
                        {award}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="text-zinc-300 border-b border-zinc-700 pb-1 hover:text-zinc-100 hover:border-zinc-400 transition-colors">
                  View Project Details
                </button>
              </div>

              <div className={`relative ${index % 2 === 1 ? "md:col-start-1" : ""}`}>
                <div className="aspect-[4/3] overflow-hidden rounded-lg">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={1200}
                    height={800}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

