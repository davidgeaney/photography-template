"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    id: 1,
    question: "What types of photography services do you offer?",
    answer:
      "We offer a comprehensive range of photography services including portrait, landscape, architectural, commercial, wedding, and event photography. Each service is tailored to meet the specific needs and vision of our clients.",
  },
  {
    id: 2,
    question: "How far in advance should I book your services?",
    answer:
      "For events and weddings, we recommend booking at least 3-6 months in advance to ensure availability. For commercial and portrait sessions, 2-4 weeks notice is typically sufficient, though this can vary during peak seasons.",
  },
  {
    id: 3,
    question: "What is your pricing structure?",
    answer:
      "Our pricing varies based on the type of service, duration, location, and deliverables required. We offer packages starting from $499 for basic sessions, with custom quotes available for more complex projects. Please contact us for a detailed quote tailored to your needs.",
  },
  {
    id: 4,
    question: "How long does it take to receive the final images?",
    answer:
      "Delivery times vary by project type. For standard portrait sessions, you can expect your edited images within 1-2 weeks. For weddings and larger events, delivery typically takes 3-4 weeks. Rush delivery options are available for an additional fee.",
  },
  {
    id: 5,
    question: "Do you travel for photography assignments?",
    answer:
      "Yes, we are available for travel both domestically and internationally. Travel fees may apply depending on the location and duration of the assignment. We've worked on projects across North America, Europe, and Asia.",
  },
  {
    id: 6,
    question: "What happens if there's bad weather on the day of an outdoor shoot?",
    answer:
      "For outdoor sessions affected by inclement weather, we offer flexible rescheduling at no additional cost. We monitor weather forecasts closely and will communicate with you in advance if we anticipate any issues.",
  },
]

export default function ContactFAQ() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })
  const [expandedId, setExpandedId] = useState<number | null>(null)

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <section ref={ref} className="py-24 px-6 md:px-12 bg-zinc-900/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Frequently Asked <span className="text-zinc-400">Questions</span>
          </h2>
          <p className="text-zinc-400 mt-4 max-w-2xl mx-auto">
            Find answers to common questions about our services, process, and policies.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border border-zinc-800 rounded-lg overflow-hidden"
              >
                <div
                  className="flex items-center justify-between p-6 cursor-pointer"
                  onClick={() => toggleExpand(faq.id)}
                >
                  <h3 className="text-lg font-medium">{faq.question}</h3>
                  <button className="w-8 h-8 rounded-full border border-zinc-700 flex items-center justify-center flex-shrink-0">
                    {expandedId === faq.id ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                </div>

                <AnimatePresence>
                  {expandedId === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 text-zinc-400 border-t border-zinc-800">{faq.answer}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-zinc-400">
            Still have questions?{" "}
            <a href="#" className="text-zinc-200 underline hover:text-white">
              Contact our team
            </a>{" "}
            for more information.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

