"use client"

import { useState, useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"
import { ArrowUpRight, Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isActive = (path: string) => {
    return pathname === path
  }

  // Handle navigation with scroll to top
  const handleNavigation = (path: string) => {
    // Close mobile menu if open
    if (isMenuOpen) {
      setIsMenuOpen(false)
    }

    // If we're already on the page, just scroll to top
    if (pathname === path) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    } else {
      // Navigate to the new page with scroll restoration
      router.push(path, { scroll: true })
    }
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center transition-all duration-200 ${
          scrolled
            ? "bg-zinc-950/90 backdrop-blur-md"
            : "bg-gradient-to-b from-zinc-900/80 to-transparent backdrop-blur-sm"
        }`}
      >
        <button onClick={() => handleNavigation("/")} className="flex items-center gap-2 z-50">
          <div className="w-10 h-10 bg-zinc-200 rounded-md flex items-center justify-center">
            <span className="text-zinc-900 font-bold text-xl">C</span>
          </div>
          <span className="font-medium tracking-wide">CREACY</span>
        </button>

        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => handleNavigation("/")}
            className={`${
              isActive("/") ? "text-zinc-200" : "text-zinc-500"
            } hover:text-white transition-colors relative group`}
          >
            Home
            <span
              className={`absolute bottom-0 left-0 h-0.5 bg-zinc-200 transition-all duration-200 ${
                isActive("/") ? "w-full" : "w-0 group-hover:w-full"
              }`}
            ></span>
          </button>
          <button
            onClick={() => handleNavigation("/services")}
            className={`${
              isActive("/services") ? "text-zinc-200" : "text-zinc-500"
            } hover:text-white transition-colors relative group`}
          >
            Services
            <span
              className={`absolute bottom-0 left-0 h-0.5 bg-zinc-200 transition-all duration-200 ${
                isActive("/services") ? "w-full" : "w-0 group-hover:w-full"
              }`}
            ></span>
          </button>
          <button
            onClick={() => handleNavigation("/projects")}
            className={`${
              isActive("/projects") ? "text-zinc-200" : "text-zinc-500"
            } hover:text-white transition-colors relative group`}
          >
            Projects
            <span
              className={`absolute bottom-0 left-0 h-0.5 bg-zinc-200 transition-all duration-200 ${
                isActive("/projects") ? "w-full" : "w-0 group-hover:w-full"
              }`}
            ></span>
          </button>
          <button
            onClick={() => handleNavigation("/contact")}
            className={`${
              isActive("/contact") ? "text-zinc-200" : "text-zinc-500"
            } hover:text-white transition-colors relative group`}
          >
            Contact
            <span
              className={`absolute bottom-0 left-0 h-0.5 bg-zinc-200 transition-all duration-200 ${
                isActive("/contact") ? "w-full" : "w-0 group-hover:w-full"
              }`}
            ></span>
          </button>
        </div>

        <div className="flex items-center gap-4 z-50">
          <button
            onClick={() => handleNavigation("/contact")}
            className="hidden md:flex items-center gap-2 bg-white text-zinc-900 px-4 py-2 rounded-full hover:bg-zinc-200 transition-colors"
          >
            <span className="font-medium">BOOK A CALL</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
          <button className="md:hidden text-zinc-200" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-zinc-950/95 z-40 flex flex-col items-center justify-center md:hidden"
          >
            <div className="flex flex-col items-center gap-8 text-2xl">
              <button
                onClick={() => handleNavigation("/")}
                className={`${isActive("/") ? "text-zinc-200" : "text-zinc-400"} hover:text-white transition-colors`}
              >
                Home
              </button>
              <button
                onClick={() => handleNavigation("/services")}
                className={`${isActive("/services") ? "text-zinc-200" : "text-zinc-400"} hover:text-white transition-colors`}
              >
                Services
              </button>
              <button
                onClick={() => handleNavigation("/projects")}
                className={`${isActive("/projects") ? "text-zinc-200" : "text-zinc-400"} hover:text-white transition-colors`}
              >
                Projects
              </button>
              <button
                onClick={() => handleNavigation("/contact")}
                className={`${isActive("/contact") ? "text-zinc-200" : "text-zinc-400"} hover:text-white transition-colors`}
              >
                Contact
              </button>
              <button
                onClick={() => handleNavigation("/contact")}
                className="mt-4 flex items-center gap-2 bg-white text-zinc-900 px-6 py-3 rounded-full hover:bg-zinc-200 transition-colors"
              >
                <span className="font-medium">BOOK A CALL</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

