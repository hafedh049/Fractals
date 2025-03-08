"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { useFractalStore } from "@/lib/fractal-store"
import { ZoomIn, ZoomOut, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"

export function BarnsleyFernCanvas() {
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

  // Render the Barnsley Fern
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const { width, height } = canvas

    // Clear the canvas
    ctx.clearRect(0, 0, width, height)

    // Choose color based on the selected scheme
    let fernColor
    switch (colorScheme) {
      case "classic":
        fernColor = "#00AA00"
        break
      case "rainbow":
        fernColor = "#00FF00"
        break
      case "fire":
        fernColor = "#FF9900"
        break
      case "ocean":
        fernColor = "#00CCFF"
        break
      case "grayscale":
        fernColor = "#AAAAAA"
        break
      default:
        fernColor = "#00AA00"
    }

    // Set the fill style
    ctx.fillStyle = fernColor

    // Calculate the scale and offset for rendering
    const scale = Math.min(width, height) * 0.08 * zoom
    const xOffset = width / 2 + offsetX * scale * 10
    const yOffset = height * 0.9 + offsetY * scale * 10

    // Barnsley Fern transformation coefficients
    const transformations = [
      { a: 0, b: 0, c: 0, d: 0.16, e: 0, f: 0, probability: 0.01 },
      { a: 0.85, b: 0.04, c: -0.04, d: 0.85, e: 0, f: 1.6, probability: 0.85 },
      { a: 0.2, b: -0.26, c: 0.23, d: 0.22, e: 0, f: 1.6, probability: 0.07 },
      { a: -0.15, b: 0.28, c: 0.26, d: 0.24, e: 0, f: 0.44, probability: 0.07 },
    ]

    // Start with a point at the origin
    let x = 0
    let y = 0

    // Number of points to plot (based on iterations)
    const numPoints = iterations * 1000

    // Plot the fern
    for (let i = 0; i < numPoints; i++) {
      // Choose a random transformation based on probabilities
      const r = Math.random()
      let transform
      let cumulativeProbability = 0

      for (const t of transformations) {
        cumulativeProbability += t.probability
        if (r <= cumulativeProbability) {
          transform = t
          break
        }
      }

      if (!transform) transform = transformations[0]

      // Apply the transformation
      const xNew = transform.a * x + transform.b * y + transform.e
      const yNew = transform.c * x + transform.d * y + transform.f

      x = xNew
      y = yNew

      // Plot the point (skip the first few iterations as they may be outliers)
      if (i > 20) {
        // Map the point to canvas coordinates
        const canvasX = xOffset + x * scale
        const canvasY = yOffset - y * scale

        // Draw a small point
        ctx.fillRect(canvasX, canvasY, 1, 1)
      }
    }
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
    const scale = 0.1 / zoom

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

