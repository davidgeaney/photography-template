"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "Elevate Brands",
    quote:
      "Working with Creacy Studio transformed our brand imagery. Their attention to detail and ability to capture our company's essence exceeded all expectations. The photos have significantly improved our marketing materials.",
    image: "/images/sarahjohnsonpfp.jpg",
    showcaseImage: "/images/services/testimonials/sarahjohnsonshowcaseimage.jpg"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Event Coordinator",
    company: "Global Conferences",
    quote:
      "The team at Creacy documented our international conference with such professionalism and artistry. They were unobtrusive yet captured every important moment. The images tell the complete story of our event.",
    image: "/images/michaelchenpfp.jpg",
    showcaseImage: "/images/services/testimonials/michaelchenshowcaseimage.jpg"
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "Bride",
    company: "Wedding Client",
    quote:
      "Our wedding photos are absolutely breathtaking. Creacy has a gift for capturing genuine emotions and creating timeless images. Every time we look at our album, we relive those special moments all over again.",
    image: "/images/emmarodriguezpfp.jpg",
    showcaseImage: "/images/services/testimonials/emmarodriguezshowcaseimage.jpg"
  },
  {
    id: 4,
    name: "David Thompson",
    role: "CEO",
    company: "Architectural Innovations",
    quote:
      "The architectural photography provided by Creacy Studio has been instrumental in showcasing our projects. Their understanding of light, space, and composition brings our designs to life in the most compelling way.",
    image: "/images/davidthompsonpfp.jpg",
    showcaseImage: "/images/services/testimonials/davidthompsonshowcaseimage.jpg"
  },
]

export default function ServiceTestimonials() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section ref={ref} className="py-24 px-6 md:px-12 bg-zinc-900/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-2 mb-16"
        >
          <div className="text-zinc-500">(04)</div>
          <h2 className="text-lg font-medium">Client Testimonials</h2>
          <h3 className="text-3xl md:text-4xl font-bold mt-4">
            What our <span className="text-zinc-400">clients</span> say about our work
          </h3>
        </motion.div>

        <div className="relative">
          <div className="absolute top-1/2 -translate-y-1/2 left-0 md:-left-6 z-10">
            <button
              onClick={goToPrev}
              className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center hover:bg-zinc-800 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>

          <div className="overflow-hidden px-6 md:px-16">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="grid md:grid-cols-2 gap-12 items-center"
              >
                <div className="relative">
                  <div className="absolute -top-8 -left-8 text-zinc-800">
                    <Quote className="w-24 h-24" />
                  </div>
                  <div className="relative z-10">
                    <p className="text-xl md:text-2xl font-light italic text-zinc-300 mb-8">
                      "{testimonials[currentIndex].quote}"
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden">
                        <Image
                          src={testimonials[currentIndex].image || "/placeholder.svg"}
                          alt={testimonials[currentIndex].name}
                          width={100}
                          height={100}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium">{testimonials[currentIndex].name}</h4>
                        <p className="text-sm text-zinc-400">
                          {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative aspect-square rounded-lg overflow-hidden">
                  <Image
                    src={testimonials[currentIndex].showcaseImage}
                    alt={`${testimonials[currentIndex].name}'s project showcase`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent"></div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 right-0 md:-right-6 z-10">
            <button
              onClick={goToNext}
              className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center hover:bg-zinc-800 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index ? "w-6 bg-zinc-400" : "bg-zinc-700"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

