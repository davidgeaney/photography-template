"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Check, X, ArrowUpRight, Info } from "lucide-react"
import Link from "next/link"

// Define the pricing tiers
const pricingTiers = [
  {
    id: "essential",
    name: "Essential",
    price: "$499",
    description: "Perfect for individuals and small projects requiring professional photography.",
    features: [
      { name: "2-hour photography session", included: true },
      { name: "1 location", included: true },
      { name: "20 edited digital images", included: true },
      { name: "Online gallery", included: true },
      { name: "Personal use license", included: true },
      { name: "Multiple outfit changes", included: false },
      { name: "Express delivery (3 days)", included: false },
      { name: "Commercial use license", included: false },
      { name: "Printed photo album", included: false },
      { name: "Dedicated art director", included: false },
    ],
    popular: false,
  },
  {
    id: "premium",
    name: "Premium",
    price: "$899",
    description: "Ideal for businesses and events needing comprehensive photography coverage.",
    features: [
      { name: "4-hour photography session", included: true },
      { name: "2 locations", included: true },
      { name: "50 edited digital images", included: true },
      { name: "Online gallery with download options", included: true },
      { name: "Personal use license", included: true },
      { name: "Multiple outfit changes", included: true },
      { name: "Express delivery (3 days)", included: true },
      { name: "Commercial use license", included: true },
      { name: "Printed photo album", included: false },
      { name: "Dedicated art director", included: false },
    ],
    popular: true,
  },
  {
    id: "ultimate",
    name: "Ultimate",
    price: "$1,499",
    description: "Complete photography solution for major events and professional marketing needs.",
    features: [
      { name: "Full-day photography session (8 hours)", included: true },
      { name: "Multiple locations", included: true },
      { name: "100+ edited digital images", included: true },
      { name: "Online gallery with download options", included: true },
      { name: "Personal use license", included: true },
      { name: "Multiple outfit changes", included: true },
      { name: "Express delivery (48 hours)", included: true },
      { name: "Commercial use license", included: true },
      { name: "Printed photo album", included: true },
      { name: "Dedicated art director", included: true },
    ],
    popular: false,
  },
]

// Define specialized packages
const specializedPackages = [
  {
    id: "wedding",
    name: "Wedding Collection",
    price: "$2,499",
    description: "Comprehensive wedding photography package to capture your special day.",
    highlights: [
      "Full-day coverage (up to 10 hours)",
      "Engagement session included",
      "Second photographer",
      "Online gallery with high-resolution images",
      "Custom wedding album",
    ],
  },
  {
    id: "commercial",
    name: "Commercial Brand Package",
    price: "$1,899",
    description: "Professional photography for product launches, marketing campaigns, and brand identity.",
    highlights: [
      "Full-day studio session",
      "Product and lifestyle photography",
      "Commercial use license",
      "Professional retouching",
      "Express delivery options",
    ],
  },
  {
    id: "event",
    name: "Corporate Event Coverage",
    price: "$1,299",
    description: "Comprehensive coverage for corporate events, conferences, and company milestones.",
    highlights: [
      "Up to 6 hours of coverage",
      "Multiple photographers available",
      "Same-day highlight delivery",
      "Complete gallery within 5 business days",
      "Corporate usage rights included",
    ],
  },
]

// Define add-ons
const addOns = [
  {
    name: "Additional Hour",
    price: "$150",
    description: "Extend your photography session with an additional hour of coverage.",
  },
  {
    name: "Rush Delivery",
    price: "$200",
    description: "Receive your edited photos within 24 hours of your session.",
  },
  {
    name: "Second Photographer",
    price: "$350",
    description: "Add a second professional photographer for more comprehensive coverage.",
  },
  {
    name: "Printed Album",
    price: "$299",
    description: "Premium 20-page photo album with your selected images.",
  },
  {
    name: "Raw Files",
    price: "$250",
    description: "Receive all unedited raw files from your photography session.",
  },
  {
    name: "Location Scouting",
    price: "$175",
    description: "Professional location scouting prior to your photography session.",
  },
]

export default function DetailedPricing() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState("standard")
  const [showTooltip, setShowTooltip] = useState<string | null>(null)

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

        {/* Pricing Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-full border border-zinc-800 p-1">
            <button
              onClick={() => setActiveTab("standard")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === "standard" ? "bg-zinc-800 text-zinc-200" : "text-zinc-400 hover:text-zinc-300"
              }`}
            >
              Standard Packages
            </button>
            <button
              onClick={() => setActiveTab("specialized")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === "specialized" ? "bg-zinc-800 text-zinc-200" : "text-zinc-400 hover:text-zinc-300"
              }`}
            >
              Specialized Services
            </button>
            <button
              onClick={() => setActiveTab("addons")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === "addons" ? "bg-zinc-800 text-zinc-200" : "text-zinc-400 hover:text-zinc-300"
              }`}
            >
              Add-ons
            </button>
          </div>
        </div>

        {/* Standard Pricing Tiers */}
        <AnimatePresence mode="wait">
          {activeTab === "standard" && (
            <motion.div
              key="standard"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-3 gap-8"
            >
              {pricingTiers.map((plan) => (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: pricingTiers.indexOf(plan) * 0.1 }}
                  className={`relative rounded-xl ${
                    plan.popular ? "border-2 border-zinc-400" : "border border-zinc-800"
                  } p-6 md:p-8 transition-all duration-300 ${
                    hoveredPlan === plan.id ? "bg-zinc-900" : "bg-zinc-900/50"
                  }`}
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
                        {feature.included ? (
                          <Check className="w-5 h-5 text-zinc-400 mt-0.5 flex-shrink-0" />
                        ) : (
                          <X className="w-5 h-5 text-zinc-700 mt-0.5 flex-shrink-0" />
                        )}
                        <span className={feature.included ? "text-zinc-300" : "text-zinc-600"}>{feature.name}</span>
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
            </motion.div>
          )}

          {/* Specialized Packages */}
          {activeTab === "specialized" && (
            <motion.div
              key="specialized"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              {specializedPackages.map((pkg, index) => (
                <motion.div
                  key={pkg.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="border border-zinc-800 rounded-xl p-6 md:p-8 bg-zinc-900/50 hover:bg-zinc-900 transition-colors"
                >
                  <div className="grid md:grid-cols-3 gap-8">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                      <div className="flex items-end gap-1 mb-4">
                        <span className="text-3xl font-bold">{pkg.price}</span>
                        <span className="text-zinc-500 mb-1">/ package</span>
                      </div>
                      <p className="text-zinc-400">{pkg.description}</p>
                    </div>

                    <div className="md:col-span-2">
                      <h4 className="text-sm uppercase text-zinc-500 mb-4">Package Highlights</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        {pkg.highlights.map((highlight, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <Check className="w-5 h-5 text-zinc-400 mt-0.5 flex-shrink-0" />
                            <span className="text-zinc-300">{highlight}</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-8">
                        <Link
                          href="/contact"
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-200 text-zinc-900 hover:bg-zinc-300 transition-colors group"
                        >
                          <span className="font-medium">GET A QUOTE</span>
                          <span className="w-6 h-6 flex items-center justify-center rounded-full bg-zinc-900 text-zinc-200 group-hover:bg-zinc-800 transition-colors">
                            <ArrowUpRight className="w-3 h-3" />
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Add-ons */}
          {activeTab === "addons" && (
            <motion.div
              key="addons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {addOns.map((addon, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="border border-zinc-800 rounded-lg p-6 bg-zinc-900/50 hover:bg-zinc-900 transition-colors"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-medium">{addon.name}</h3>
                      <span className="text-xl font-bold">{addon.price}</span>
                    </div>
                    <p className="text-zinc-400 mb-6">{addon.description}</p>
                    <button className="text-zinc-300 text-sm border-b border-zinc-700 pb-0.5 hover:text-zinc-100 hover:border-zinc-400 transition-colors">
                      Add to Package
                    </button>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-12 p-6 border border-zinc-800 rounded-lg bg-zinc-900/30"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center flex-shrink-0">
                    <Info className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Custom Requirements?</h3>
                    <p className="text-zinc-400 mb-4">
                      Need something specific that's not listed here? We offer fully customized photography solutions
                      tailored to your unique needs.
                    </p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-zinc-300 hover:text-white transition-colors group"
                    >
                      <span>Contact us for a custom quote</span>
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-zinc-400 mb-6">
            All packages include basic image editing, color correction, and delivery of high-resolution digital files.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-zinc-200 text-zinc-900 px-8 py-4 rounded-full hover:bg-zinc-300 transition-colors group"
          >
            <span className="font-medium">BOOK A CONSULTATION</span>
            <span className="w-6 h-6 flex items-center justify-center rounded-full bg-zinc-900 text-zinc-200 group-hover:bg-zinc-800 transition-colors">
              <ArrowUpRight className="w-3 h-3" />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

