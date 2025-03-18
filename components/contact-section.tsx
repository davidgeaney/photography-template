"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react"

export default function ContactSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

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
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-12"
        >
          <div>
            <motion.div variants={itemVariants} className="text-zinc-500">
              (05)
            </motion.div>
            <motion.div variants={itemVariants} className="text-lg font-medium">
              Contact Us
            </motion.div>

            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mt-6">
              Let's <span className="text-zinc-400">discuss</span> your vision{" "}
              <span className="text-zinc-400">with us</span>
            </motion.h2>

            <motion.div variants={itemVariants} className="mt-12">
              <Link
                href="#"
                className="inline-flex items-center gap-2 bg-zinc-200 text-zinc-900 px-8 py-4 rounded-full hover:bg-zinc-300 transition-colors group"
              >
                <span className="font-medium">GET IN TOUCH</span>
                <span className="w-6 h-6 flex items-center justify-center rounded-full bg-zinc-900 text-zinc-200 group-hover:bg-zinc-800 transition-colors">
                  <ArrowUpRight className="w-3 h-3" />
                </span>
              </Link>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-12 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-zinc-400">hello@creacy.studio</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p className="text-zinc-400">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium">Studio</h3>
                  <p className="text-zinc-400">123 Creative Avenue, New York, NY 10001</p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-zinc-500 to-zinc-700 rounded-lg blur opacity-20"></div>
            <div className="relative bg-zinc-900 p-6 md:p-8 rounded-lg">
              <h3 className="text-xl font-medium mb-6">Send us a message</h3>

              <form className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm text-zinc-400">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-zinc-500 transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm text-zinc-400">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-zinc-500 transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm text-zinc-400">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-zinc-500 transition-all resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-zinc-200 text-zinc-900 py-3 rounded-lg font-medium hover:bg-zinc-300 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

