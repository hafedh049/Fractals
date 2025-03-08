"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { useFractalStore } from "@/lib/fractal-store"
import { getColor } from "@/lib/color-schemes"
import { ZoomIn, ZoomOut, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"

export function NewtonCanvas() {
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

  // Render the Newton fractal
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const { width, height } = canvas
    const imageData = ctx.createImageData(width, height)
    const data = imageData.data

    // Newton fractal parameters
    const maxIterations = iterations
    const centerX = 0 + offsetX
    const centerY = 0 + offsetY
    const scale = 4 / (zoom * Math.min(width, height))

    // Tolerance for convergence
    const tolerance = 1e-6

    // Roots of z^3 - 1 = 0
    const roots = [
      { real: 1, imag: 0 },
      { real: -0.5, imag: Math.sqrt(3) / 2 },
      { real: -0.5, imag: -Math.sqrt(3) / 2 },
    ]

    // Colors for each root
    const rootColors = [
      { r: 255, g: 0, b: 0 }, // Red
      { r: 0, g: 255, b: 0 }, // Green
      { real: 0, g: 0, b: 255 }, // Blue
    ]

    // Render the fractal
    for (let x = 0; x < width; x++) {
      for (let y = 0; y < height; y++) {
        // Map pixel coordinates to complex plane
        let zReal = centerX + (x - width / 2) * scale
        let zImag = centerY + (y - height / 2) * scale

        // Newton's method iteration
        let iter = 0
        let rootIndex = -1

        while (iter < maxIterations) {
          // Compute z^3
          const z3Real = zReal * zReal * zReal - 3 * zReal * zImag * zImag
          const z3Imag = 3 * zReal * zReal * zImag - zImag * zImag * zImag

          // Compute z^2
          const z2Real = zReal * zReal - zImag * zImag
          const z2Imag = 2 * zReal * zImag

          // Compute (z^3 - 1) / (3 * z^2)
          const numeratorReal = z3Real - 1
          const numeratorImag = z3Imag

          const denominatorReal = 3 * z2Real
          const denominatorImag = 3 * z2Imag

          const denominatorMagnitudeSquared = denominatorReal * denominatorReal + denominatorImag * denominatorImag

          // Compute z - (z^3 - 1) / (3 * z^2)
          const nextZReal =
            zReal - (numeratorReal * denominatorReal + numeratorImag * denominatorImag) / denominatorMagnitudeSquared
          const nextZImag =
            zImag - (numeratorImag * denominatorReal - numeratorReal * denominatorImag) / denominatorMagnitudeSquared

          // Check if we've converged to a root
          for (let i = 0; i < roots.length; i++) {
            const distanceSquared =
              (nextZReal - roots[i].real) * (nextZReal - roots[i].real) +
              (nextZImag - roots[i].imag) * (nextZImag - roots[i].imag)

            if (distanceSquared < tolerance) {
              rootIndex = i
              break
            }
          }

          if (rootIndex !== -1) {
            break
          }

          // Check if we're not making progress
          const distanceSquared = (nextZReal - zReal) * (nextZReal - zReal) + (nextZImag - zImag) * (nextZImag - zImag)

          if (distanceSquared < tolerance) {
            break
          }

          zReal = nextZReal
          zImag = nextZImag
          iter++
        }

        // Color the pixel based on which root it converged to and how quickly
        const pixelIndex = (y * width + x) * 4

        if (rootIndex !== -1) {
          // Use the standard color scheme but blend with the root color
          const color = getColor(iter, maxIterations, colorScheme)
          const rootColor = rootColors[rootIndex]

          // Blend based on iteration count
          const blendFactor = iter / maxIterations
          data[pixelIndex] = Math.floor(color.r * blendFactor + rootColor.r * (1 - blendFactor))
          data[pixelIndex + 1] = Math.floor(color.g * blendFactor + rootColor.g * (1 - blendFactor))
          data[pixelIndex + 2] = Math.floor(color.b * blendFactor + rootColor.b * (1 - blendFactor))
          data[pixelIndex + 3] = 255
        } else {
          // Didn't converge to any root
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
    const scale = 4 / (zoom * Math.min(width, height))

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

