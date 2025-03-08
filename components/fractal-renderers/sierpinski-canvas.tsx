"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { useFractalStore } from "@/lib/fractal-store"
import { ZoomIn, ZoomOut, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SierpinskiCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { iterations, colorScheme, zoom, setZoom, offsetX, setOffsetX, offsetY, setOffsetY, resetView } =
    useFractalStore()

  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 })

  // Handle canvas resize
  useEffect(() => {
    const updateCanvasSize = () => {
      if (canvasRef.current) {
        const container = canvasRef.current.parentElement
        if (container) {
          const { width, height } = container.getBoundingClientRect()
          setCanvasSize({ width, height })
          canvasRef.current.width = width
          canvasRef.current.height = height
        }
      }
    }

    updateCanvasSize()
    window.addEventListener("resize", updateCanvasSize)
    return () => window.removeEventListener("resize", updateCanvasSize)
  }, [])

  // Render the Sierpinski Triangle
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const { width, height } = canvas

    // Clear the canvas
    ctx.clearRect(0, 0, width, height)

    // Set up the initial triangle
    const size = Math.min(width, height) * 0.8 * zoom
    const centerX = width / 2 + offsetX * size
    const centerY = height / 2 + offsetY * size

    // Calculate the vertices of the main triangle
    const p1 = { x: centerX, y: centerY - size / 2 }
    const p2 = { x: centerX - size / 2, y: centerY + size / 2 }
    const p3 = { x: centerX + size / 2, y: centerY + size / 2 }

    // Choose color based on the selected scheme
    let fillColor
    switch (colorScheme) {
      case "classic":
        fillColor = "#3498db"
        break
      case "rainbow":
        fillColor = "#ff00ff"
        break
      case "fire":
        fillColor = "#ff3300"
        break
      case "ocean":
        fillColor = "#00ccff"
        break
      case "grayscale":
        fillColor = "#666666"
        break
      default:
        fillColor = "#3498db"
    }

    // Set the fill style
    ctx.fillStyle = fillColor

    // Recursive function to draw the Sierpinski triangle
    function drawSierpinskiTriangle(
      p1: { x: number; y: number },
      p2: { x: number; y: number },
      p3: { x: number; y: number },
      depth: number,
    ) {
      if (depth === 0) {
        // Draw a filled triangle
        ctx.beginPath()
        ctx.moveTo(p1.x, p1.y)
        ctx.lineTo(p2.x, p2.y)
        ctx.lineTo(p3.x, p3.y)
        ctx.closePath()
        ctx.fill()
        return
      }

      // Calculate the midpoints of the sides
      const p12 = { x: (p1.x + p2.x) / 2, y: (p1.y + p2.y) / 2 }
      const p23 = { x: (p2.x + p3.x) / 2, y: (p2.y + p3.y) / 2 }
      const p31 = { x: (p3.x + p1.x) / 2, y: (p3.y + p1.y) / 2 }

      // Recursively draw the three sub-triangles
      drawSierpinskiTriangle(p1, p12, p31, depth - 1)
      drawSierpinskiTriangle(p12, p2, p23, depth - 1)
      drawSierpinskiTriangle(p31, p23, p3, depth - 1)
    }

    // Start the recursion with the main triangle
    // Use iterations as the depth, but cap it to prevent excessive recursion
    const maxDepth = Math.min(iterations / 10, 10)
    drawSierpinskiTriangle(p1, p2, p3, maxDepth)
  }, [iterations, colorScheme, zoom, offsetX, offsetY, canvasSize])

  // Handle mouse interactions
  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    setIsDragging(true)
    setDragStart({ x: e.clientX, y: e.clientY })
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDragging || !canvasRef.current) return

    const dx = e.clientX - dragStart.x
    const dy = e.clientY - dragStart.y
    const { width, height } = canvasRef.current
    const scale = 2 / (zoom * Math.min(width, height))

    setOffsetX(offsetX + dx * scale)
    setOffsetY(offsetY + dy * scale)
    setDragStart({ x: e.clientX, y: e.clientY })
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleWheel = (e: React.WheelEvent<HTMLCanvasElement>) => {
    e.preventDefault()
    const zoomFactor = e.deltaY > 0 ? 0.9 : 1.1
    setZoom(zoom * zoomFactor)
  }

  const handleZoomIn = () => {
    setZoom(zoom * 1.5)
  }

  const handleZoomOut = () => {
    setZoom(zoom / 1.5)
  }

  return (
    <>
      <canvas
        ref={canvasRef}
        className="h-full w-full cursor-move"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onWheel={handleWheel}
      />
      <div className="absolute bottom-4 right-4 flex gap-2">
        <Button variant="secondary" size="icon" onClick={handleZoomIn}>
          <ZoomIn className="h-4 w-4" />
        </Button>
        <Button variant="secondary" size="icon" onClick={handleZoomOut}>
          <ZoomOut className="h-4 w-4" />
        </Button>
        <Button variant="secondary" size="icon" onClick={resetView}>
          <RotateCcw className="h-4 w-4" />
        </Button>
      </div>
    </>
  )
}

