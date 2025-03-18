"use client"

import { useEffect, useState } from "react"

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [cursorVariant, setCursorVariant] = useState("default")

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    const mouseDown = () => setCursorVariant("click")
    const mouseUp = () => setCursorVariant("default")
    const mouseEnterLink = () => setCursorVariant("hover")
    const mouseLeaveLink = () => setCursorVariant("default")

    window.addEventListener("mousemove", mouseMove)
    window.addEventListener("mousedown", mouseDown)
    window.addEventListener("mouseup", mouseUp)

    const links = document.querySelectorAll("a, button")
    links.forEach((link) => {
      link.addEventListener("mouseenter", mouseEnterLink)
      link.addEventListener("mouseleave", mouseLeaveLink)
    })

    return () => {
      window.removeEventListener("mousemove", mouseMove)
      window.removeEventListener("mousedown", mouseDown)
      window.removeEventListener("mouseup", mouseUp)

      links.forEach((link) => {
        link.removeEventListener("mouseenter", mouseEnterLink)
        link.removeEventListener("mouseleave", mouseLeaveLink)
      })
    }
  }, [])

  return (
    <>
      <style jsx global>{`
        * {
          cursor: none;
        }
        
        @media (max-width: 768px) {
          * {
            cursor: auto;
          }
        }
      `}</style>

      <div
        className="hidden md:block fixed top-0 left-0 rounded-full pointer-events-none z-50"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          width: cursorVariant === "hover" ? "40px" : "20px",
          height: cursorVariant === "hover" ? "40px" : "20px",
          backgroundColor: "rgba(255, 255, 255, 0.3)",
          border: "2px solid white",
          transform: "translate(-50%, -50%)",
          transition: "width 0.2s, height 0.2s, opacity 0.2s",
        }}
      />
    </>
  )
}

