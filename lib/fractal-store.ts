"use client"

import { create } from "zustand"

interface JuliaConstant {
  real: number
  imag: number
}

interface FractalState {
  iterations: number
  setIterations: (iterations: number) => void

  colorScheme: string
  setColorScheme: (scheme: string) => void

  zoom: number
  setZoom: (zoom: number) => void

  offsetX: number
  setOffsetX: (offsetX: number) => void

  offsetY: number
  setOffsetY: (offsetY: number) => void

  juliaConstant: JuliaConstant
  setJuliaConstant: (constant: JuliaConstant) => void

  resetView: () => void
}

export const useFractalStore = create<FractalState>((set) => ({
  iterations: 100,
  setIterations: (iterations) => set({ iterations }),

  colorScheme: "classic",
  setColorScheme: (colorScheme) => set({ colorScheme }),

  zoom: 1,
  setZoom: (zoom) => set({ zoom }),

  offsetX: 0,
  setOffsetX: (offsetX) => set({ offsetX }),

  offsetY: 0,
  setOffsetY: (offsetY) => set({ offsetY }),

  juliaConstant: { real: -0.7269, imag: 0.1889 },
  setJuliaConstant: (juliaConstant) => set({ juliaConstant }),

  resetView: () => set({ zoom: 1, offsetX: 0, offsetY: 0 }),
}))

