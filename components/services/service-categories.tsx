"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

const services = [
  {
    id: 1,
    title: "Portrait Photography",
    description: "Capturing personalities and emotions in carefully composed portraits that tell your unique story.",
    features: ["Individual Portraits", "Family Portraits", "Corporate Headshots", "Environmental Portraits"],
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 2,
    title: "Landscape Photography",
    description: "Breathtaking natural vistas and urban landscapes captured with dramatic lighting and composition.",
    features: ["Natural Landscapes", "Urban Cityscapes", "Aerial Photography", "Long Exposure Techniques"],
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 3,
    title: "Event Photography",
    description:
      "Documenting special moments from corporate events to intimate gatherings with an unobtrusive approach.",
    features: ["Corporate Events", "Conferences", "Parties & Celebrations", "Award Ceremonies"],
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 4,
    title: "Commercial Photography",
    description: "Elevating your brand with professional product and promotional photography that sells.",
    features: ["Product Photography", "Food & Beverage", "Real Estate", "Architectural Photography"],
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 5,
    title: "Wedding Photography",
    description: "Telling the story of your special day with a perfect blend of candid moments and artistic portraits.",
    features: ["Full Day Coverage", "Engagement Sessions", "Album Design", "Destination Weddings"],
    image: "/placeholder.svg?height=600&width=800",
  },
]

export default function ServiceCategories() {
  const [activeService, setActiveService] = useState(services[0])
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  return (
    <section ref={ref} className="py-24 px-6 md:px-12 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-2 mb-16"
        >
          <div className="text-zinc-500">(01)</div>
          <h2 className="text-lg font-medium">Our Expertise</h2>
          <h3 className="text-3xl md:text-4xl font-bold mt-4">
            Specialized <span className="text-zinc-400">photography services</span> tailored to your vision
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
            <div className="space-y-4">
              {services.map((service) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: service.id * 0.1 }}
                >
                  <button
                    onClick={() => setActiveService(service)}
                    className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                      activeService.id === service.id
                        ? "bg-zinc-900 border-l-2 border-zinc-400"
                        : "hover:bg-zinc-900/50"
                    }`}
                  >
                    <h3
                      className={`text-xl font-medium ${activeService.id === service.id ? "text-zinc-200" : "text-zinc-500"}`}
                    >
                      {service.title}
                    </h3>
                  </button>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                key={activeService.id + "-details"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-2xl font-bold mb-4">{activeService.title}</h3>
                  <p className="text-zinc-400 mb-6">{activeService.description}</p>

                  <div className="space-y-2 mb-8">
                    {activeService.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-zinc-500"></div>
                        <span className="text-zinc-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 border border-zinc-700 text-zinc-300 px-6 py-3 rounded-full hover:bg-zinc-900 hover:border-zinc-600 transition-colors group self-start"
                >
                  <span className="font-medium">INQUIRE NOW</span>
                  <span className="w-6 h-6 flex items-center justify-center rounded-full bg-zinc-800 group-hover:bg-zinc-700 transition-colors">
                    <ArrowUpRight className="w-3 h-3" />
                  </span>
                </Link>
              </motion.div>

              <motion.div
                key={activeService.id + "-image"}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="relative aspect-[4/3] overflow-hidden rounded-lg"
              >
                <Image
                  src={activeService.image || "/placeholder.svg"}
                  alt={activeService.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

