"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Lonely Life at the Baltimore",
    camera: "Shot with Sony a6000",
    image: "/images/home/lonelylifeatbaltimore.jpg",
  },
  {
    id: 2,
    title: "A Symphony of Seasons",
    camera: "Shot with Canon EOS R5",
    image: "/images/home/asymphonyofseasons.jpg",
  },
  {
    id: 3,
    title: "Urban Geometry",
    camera: "Shot with Fujifilm X-T4",
    image: "/images/home/urbangeometry.jpg",
  },
  {
    id: 4,
    title: "Whispers of Nature",
    camera: "Shot with Nikon Z7",
    image: "/images/home/whispersofnature.jpg",
  },
  {
    id: 5,
    title: "Ethereal Portraits",
    camera: "Shot with Leica Q2",
    image: "/images/home/etherealportraits.jpg",
  },
]

interface ProjectSliderProps {
  onSlideChange?: (slide: number) => void
}

export default function ProjectSlider({ onSlideChange }: ProjectSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [direction, setDirection] = useState(0) // -1 for prev, 1 for next
  const sliderRef = useRef<HTMLDivElement>(null)

  const goToNext = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % projects.length)
  }

  const goToPrev = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  useEffect(() => {
    if (onSlideChange) {
      onSlideChange(currentIndex + 1)
    }
  }, [currentIndex, onSlideChange])

  // Reset animation state after transition completes
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false)
    }, 600)
    return () => clearTimeout(timer)
  }, [currentIndex])

  // Get next project for preview
  const nextProject = projects[(currentIndex + 1) % projects.length]

  return (
    <div className="relative flex items-center">
      <button
        onClick={goToPrev}
        disabled={isAnimating}
        className="absolute left-0 z-10 -ml-4 w-8 h-8 flex items-center justify-center bg-zinc-800/80 rounded-full text-zinc-200 hover:bg-zinc-700 transition-colors disabled:opacity-50"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>

      <div ref={sliderRef} className="overflow-hidden w-full relative h-[160px] md:h-[200px]">
        {/* Current Project */}
        <div
          className={`absolute top-0 left-0 transition-all duration-500 ease-out flex flex-col ${
            isAnimating && direction === 1
              ? "opacity-0 -translate-x-8 -translate-y-4 scale-95 rotate-[-5deg]"
              : isAnimating && direction === -1
                ? "opacity-0 translate-x-8 -translate-y-4 scale-95 rotate-[5deg]"
                : "opacity-100 translate-x-0 translate-y-0 scale-100 rotate-0"
          }`}
        >
          <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-lg">
            <Image
              src={projects[currentIndex].image || "/placeholder.svg"}
              alt={projects[currentIndex].title}
              width={300}
              height={300}
              className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
            />
          </div>
          <div className="mt-3">
            <h3 className="text-sm font-medium text-zinc-200">{projects[currentIndex].title}</h3>
            <p className="text-xs text-zinc-400 mt-1">{projects[currentIndex].camera}</p>
          </div>
        </div>

        {/* Next Project Preview */}
        <div
          className={`absolute top-0 left-[calc(100%_-_96px)] md:left-[calc(100%_-_128px)] transition-all duration-500 ease-out opacity-60 hover:opacity-100 ${
            isAnimating && direction === 1
              ? "translate-x-[-100%] scale-100 opacity-100"
              : isAnimating && direction === -1
                ? "translate-x-[100%] scale-90 opacity-0"
                : "translate-x-0 scale-100"
          }`}
        >
          <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-lg">
            <Image
              src={nextProject.image || "/placeholder.svg"}
              alt={nextProject.title}
              width={300}
              height={300}
              className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
            />
          </div>
          <div className="mt-3">
            <h3 className="text-sm font-medium text-zinc-300">{nextProject.title}</h3>
            <p className="text-xs text-zinc-500 mt-1">{nextProject.camera}</p>
          </div>
        </div>
      </div>

      <button
        onClick={goToNext}
        disabled={isAnimating}
        className="absolute right-0 z-10 -mr-4 w-8 h-8 flex items-center justify-center bg-zinc-800/80 rounded-full text-zinc-200 hover:bg-zinc-700 transition-colors disabled:opacity-50"
      >
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  )
}

