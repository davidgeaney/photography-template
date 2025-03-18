"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function ContactInfo() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  const contactDetails = [
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      details: "hello@creacy.studio",
      action: "mailto:hello@creacy.studio",
      actionText: "Send Email",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Phone",
      details: "+1 (555) 123-4567",
      action: "tel:+15551234567",
      actionText: "Call Us",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Studio",
      details: "123 Creative Avenue, New York, NY 10001",
      action: "https://maps.google.com",
      actionText: "Get Directions",
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Working Hours",
      details: "Monday - Friday: 9AM - 6PM",
      action: null,
      actionText: null,
    },
  ]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

      <div className="space-y-6">
        {contactDetails.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="flex items-start gap-4"
          >
            <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center flex-shrink-0">
              {item.icon}
            </div>
            <div>
              <h3 className="font-medium">{item.title}</h3>
              <p className="text-zinc-400 mb-1">{item.details}</p>
              {item.action && (
                <a
                  href={item.action}
                  target={item.action.startsWith("http") ? "_blank" : undefined}
                  rel={item.action.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="text-sm text-zinc-300 hover:text-white transition-colors border-b border-zinc-700 hover:border-zinc-400 inline-block"
                >
                  {item.actionText}
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

