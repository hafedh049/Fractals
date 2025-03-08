"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { useFractalStore } from "@/lib/fractal-store"
import { getColor } from "@/lib/color-schemes"
import { ZoomIn, ZoomOut, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PhoenixCanvas() {
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

  // Render the Phoenix fractal
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const { width, height } = canvas
    const imageData = ctx.createImageData(width, height)
    const data = imageData.data

    // Phoenix fractal parameters
    const maxIterations = iterations
    const centerX = 0 + offsetX
    const centerY = 0 + offsetY
    const scale = 3 / (zoom * Math.min(width, height))

    // Phoenix parameters
    const p = -0.5 // Can be adjusted
    const q = 0.0 // Can be adjusted

    // Render the fractal
    for (let x = 0; x < width; x++) {
      for (let y = 0; y < height; y++) {
        // Map pixel coordinates to complex plane
        const cReal = centerX + (x - width / 2) * scale
        const cImag = centerY + (y - height / 2) * scale

        // Phoenix iteration
        let zReal = 0
        let zImag = 0
        let zPrevReal = 0
        let zPrevImag = 0
        let iter = 0

        while (zReal * zReal + zImag * zImag < 4 && iter < maxIterations) {
          // Store the current value before updating
          const tempReal = zReal
          const tempImag = zImag

          // Phoenix formula: z_n+1 = z_n^2 + c + p*z_n-1
          zReal = zReal * zReal - zImag * zImag + cReal + p * zPrevReal
          zImag = 2 * tempReal * zImag + cImag + p * zPrevImag

          // Update the previous value
          zPrevReal = tempReal
          zPrevImag = tempImag

          iter++
        }

        // Color the pixel based on iteration count
        const pixelIndex = (y * width + x) * 4

        if (iter === maxIterations) {
          // Point is in the set - color it black
          data[pixelIndex] = 0
          data[pixelIndex + 1] = 0
          data[pixelIndex + 2] = 0
          data[pixelIndex + 3] = 255
        } else {
          // Point is outside the set - color based on iteration count
          const color = getColor(iter, maxIterations, colorScheme)
          data[pixelIndex] = color.r
          data[pixelIndex + 1] = color.g
          data[pixelIndex + 2] = color.b
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

