"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const processSteps = [
  {
    id: 1,
    number: "01",
    title: "Consultation",
    description:
      "We begin with an in-depth consultation to understand your vision, requirements, and expectations for the photography project.",
  },
  {
    id: 2,
    number: "02",
    title: "Planning & Preparation",
    description:
      "Our team meticulously plans every aspect of the shoot, from location scouting to lighting setups and equipment preparation.",
  },
  {
    id: 3,
    number: "03",
    title: "The Photoshoot",
    description:
      "On the day of the shoot, our professional photographers work their magic, capturing moments with technical precision and artistic vision.",
  },
  {
    id: 4,
    number: "04",
    title: "Post-Production",
    description:
      "After the shoot, we carefully select and edit the best images, enhancing colors, contrast, and composition to perfection.",
  },
  {
    id: 5,
    number: "05",
    title: "Delivery & Feedback",
    description:
      "We deliver your finalized images in your preferred format, followed by a feedback session to ensure complete satisfaction.",
  },
]

export default function ServiceProcess() {
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
          <h2 className="text-lg font-medium">Our Process</h2>
          <h3 className="text-3xl md:text-4xl font-bold mt-4">
            How we <span className="text-zinc-400">transform</span> your vision into reality
          </h3>
        </motion.div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-px bg-zinc-800 md:-translate-x-px"></div>

          <div className="space-y-12 md:space-y-24 relative">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 md:gap-16`}
              >
                <div className="flex md:w-1/2 items-center gap-4">
                  <div className="relative">
                    <div className="w-14 h-14 rounded-full bg-zinc-800 flex items-center justify-center z-10 relative">
                      <span className="text-xl font-bold">{step.number}</span>
                    </div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-zinc-800/30 animate-pulse"></div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                    <p className="text-zinc-400">{step.description}</p>
                  </div>
                </div>
                <div className="md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

