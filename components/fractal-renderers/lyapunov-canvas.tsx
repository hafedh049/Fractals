"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { useFractalStore } from "@/lib/fractal-store"
import { getColor } from "@/lib/color-schemes"
import { ZoomIn, ZoomOut, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"

export function LyapunovCanvas() {
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

  // Render the Lyapunov fractal
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const { width, height } = canvas
    const imageData = ctx.createImageData(width, height)
    const data = imageData.data

    // Lyapunov fractal parameters
    const maxIterations = Math.min(iterations, 200) // Cap iterations for performance
    const centerX = 0 + offsetX
    const centerY = 0 + offsetY
    const scale = 3 / (zoom * Math.min(width, height))

    // Sequence of A and B values (can be customized)
    const sequence = "AB"

    // Render the fractal
    for (let x = 0; x < width; x++) {
      for (let y = 0; y < height; y++) {
        // Map pixel coordinates to parameter space (a, b)
        const a = 2.5 + (x - width / 2) * scale + centerX
        const b = 3.4 + (y - height / 2) * scale + centerY

        // Skip invalid parameter ranges
        if (a <= 0 || a >= 4 || b <= 0 || b >= 4) {
          const pixelIndex = (y * width + x) * 4
          data[pixelIndex] = 0
          data[pixelIndex + 1] = 0
          data[pixelIndex + 2] = 0
          data[pixelIndex + 3] = 255
          continue
        }

        // Calculate Lyapunov exponent
        let sum = 0
        let xn = 0.5 // Initial value

        // Discard transient iterations
        for (let i = 0; i < 100; i++) {
          const r = sequence[i % sequence.length] === "A" ? a : b
          xn = r * xn * (1 - xn)
        }

        // Calculate the exponent
        for (let i = 0; i < maxIterations; i++) {
          const r = sequence[i % sequence.length] === "A" ? a : b
          const xNext = r * xn * (1 - xn)

          // Avoid log(0)
          if (xn === 0 || xn === 1) {
            sum -= 10 // Large negative value
          } else {
            sum += Math.log(Math.abs(r * (1 - 2 * xn)))
          }

          xn = xNext
        }

        const lyapunovExponent = sum / maxIterations

        // Color the pixel based on the Lyapunov exponent
        const pixelIndex = (y * width + x) * 4

        if (lyapunovExponent > 0) {
          // Chaotic behavior (positive exponent)
          const normalizedExponent = Math.min(lyapunovExponent / 2, 1)
          const color = getColor(Math.floor(normalizedExponent * maxIterations), maxIterations, colorScheme)
          data[pixelIndex] = color.r
          data[pixelIndex + 1] = color.g
          data[pixelIndex + 2] = color.b
          data[pixelIndex + 3] = 255
        } else if (lyapunovExponent < 0) {
          // Stable behavior (negative exponent)
          const normalizedExponent = Math.min(Math.abs(lyapunovExponent) / 2, 1)
          const intensity = Math.floor(255 * normalizedExponent)

          // Use different colors for stable regions based on color scheme
          switch (colorScheme) {
            case "classic":
              data[pixelIndex] = 0
              data[pixelIndex + 1] = 0
              data[pixelIndex + 2] = intensity
              break
            case "rainbow":
              data[pixelIndex] = intensity
              data[pixelIndex + 1] = 0
              data[pixelIndex + 2] = 255 - intensity
              break
            case "fire":
              data[pixelIndex] = intensity
              data[pixelIndex + 1] = 0
              data[pixelIndex + 2] = 0
              break
            case "ocean":
              data[pixelIndex] = 0
              data[pixelIndex + 1] = intensity
              data[pixelIndex + 2] = 255 - intensity / 2
              break
            case "grayscale":
              data[pixelIndex] = intensity
              data[pixelIndex + 1] = intensity
              data[pixelIndex + 2] = intensity
              break
            default:
              data[pixelIndex] = 0
              data[pixelIndex + 1] = 0
              data[pixelIndex + 2] = intensity
          }
          data[pixelIndex + 3] = 255
        } else {
          // Neutral (zero exponent)
          data[pixelIndex] = 0
          data[pixelIndex + 1] = 0
          data[pixelIndex + 2] = 0
          data[pixelIndex + 3] = 255
        }
      }
    }

    ctx.putImageData(imageData, 0, 0)
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
    const scale = 3 / (zoom * Math.min(width, height))

    setOffsetX(offsetX - dx * scale)
    setOffsetY(offsetY - dy * scale)
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

