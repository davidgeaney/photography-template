"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Check, ArrowUpRight } from "lucide-react"
import Link from "next/link"

const pricingPlans = [
  {
    id: 1,
    name: "Essential",
    price: "$499",
    description: "Perfect for individuals and small projects requiring professional photography.",
    features: [
      "2-hour photography session",
      "1 location",
      "20 edited digital images",
      "Online gallery",
      "Personal use license",
    ],
    popular: false,
  },
  {
    id: 2,
    name: "Premium",
    price: "$899",
    description: "Ideal for businesses and events needing comprehensive photography coverage.",
    features: [
      "4-hour photography session",
      "2 locations",
      "50 edited digital images",
      "Online gallery with download options",
      "Commercial use license",
      "Express delivery (3 days)",
    ],
    popular: true,
  },
  {
    id: 3,
    name: "Ultimate",
    price: "$1,499",
    description: "Complete photography solution for major events and professional marketing needs.",
    features: [
      "Full-day photography session (8 hours)",
      "Multiple locations",
      "100+ edited digital images",
      "Online gallery with download options",
      "Commercial use license",
      "Express delivery (48 hours)",
      "Printed photo album",
      "Dedicated art director",
    ],
    popular: false,
  },
]

export default function ServicePricing() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null)

  return (
    <section ref={ref} className="py-24 px-6 md:px-12 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-2 mb-16"
        >
          <div className="text-zinc-500">(03)</div>
          <h2 className="text-lg font-medium">Our Pricing</h2>
          <div className="grid md:grid-cols-2 gap-8 mt-4">
            <h3 className="text-3xl md:text-4xl font-bold">
              Transparent <span className="text-zinc-400">pricing</span> for exceptional quality
            </h3>
            <p className="text-zinc-400">
              Choose from our carefully crafted packages designed to meet different needs and budgets, or contact us for
              a custom quote tailored to your specific requirements.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: plan.id * 0.1 }}
              className={`relative rounded-xl ${
                plan.popular ? "border-2 border-zinc-400" : "border border-zinc-800"
              } p-6 md:p-8 transition-all duration-300 ${hoveredPlan === plan.id ? "bg-zinc-900" : "bg-zinc-900/50"}`}
              onMouseEnter={() => setHoveredPlan(plan.id)}
              onMouseLeave={() => setHoveredPlan(null)}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-zinc-400 text-zinc-900 text-xs font-bold px-3 py-1 rounded-full">
                  MOST POPULAR
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-zinc-400 text-sm mb-4">{plan.description}</p>
                <div className="flex items-end gap-1 mb-2">
                  <span className="text-3xl md:text-4xl font-bold">{plan.price}</span>
                  <span className="text-zinc-500 mb-1">/ package</span>
                </div>
              </div>

              <div className="space-y-3 mb-8">
                {plan.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-zinc-400 mt-0.5 flex-shrink-0" />
                    <span className="text-zinc-300">{feature}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/contact"
                className={`inline-flex items-center gap-2 w-full justify-center px-6 py-3 rounded-full transition-colors group ${
                  plan.popular
                    ? "bg-zinc-200 text-zinc-900 hover:bg-zinc-300"
                    : "border border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:border-zinc-600"
                }`}
              >
                <span className="font-medium">SELECT PLAN</span>
                <span
                  className={`w-6 h-6 flex items-center justify-center rounded-full ${
                    plan.popular
                      ? "bg-zinc-900 text-zinc-200 group-hover:bg-zinc-800"
                      : "bg-zinc-800 group-hover:bg-zinc-700"
                  } transition-colors`}
                >
                  <ArrowUpRight className="w-3 h-3" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-zinc-400">
            Need a custom solution?{" "}
            <Link href="/contact" className="text-zinc-200 underline hover:text-white">
              Contact us
            </Link>{" "}
            for a personalized quote.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

