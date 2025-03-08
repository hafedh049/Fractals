"use client"

import { useState, useEffect } from "react"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useFractalStore } from "@/lib/fractal-store"
import { AlertTriangle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface FractalControlsProps {
  isJulia?: boolean
}

export function FractalControls({ isJulia = false }: FractalControlsProps) {
  const { iterations, setIterations, colorScheme, setColorScheme, resetView, juliaConstant, setJuliaConstant } =
    useFractalStore()

  const [realPart, setRealPart] = useState("")
  const [imagPart, setImagPart] = useState("")
  const { toast } = useToast()

  // Initialize the real and imag part state from the store
  useEffect(() => {
    if (juliaConstant) {
      setRealPart(juliaConstant.real.toString())
      setImagPart(juliaConstant.imag.toString())
    }
  }, [juliaConstant])

  const handleJuliaConstantChange = () => {
    const real = Number.parseFloat(realPart)
    const imag = Number.parseFloat(imagPart)

    if (!isNaN(real) && !isNaN(imag)) {
      setJuliaConstant({ real, imag })
    }
  }

  const handleIterationChange = (value: number[]) => {
    const newIterations = value[0]
    setIterations(newIterations)

    if (newIterations > 200) {
      toast({
        title: "Performance Warning",
        description: "High iteration counts (>200) may slow down rendering.",
        variant: "warning",
        duration: 3000,
      })
    }
  }

  return (
    <div className="space-y-6 rounded-lg border bg-card p-4">
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <h3 className="font-medium">Iterations: {iterations}</h3>
          {iterations > 200 && (
            <div className="flex items-center text-amber-500 text-xs gap-1">
              <AlertTriangle className="h-3 w-3" />
              <span>May slow down</span>
            </div>
          )}
        </div>
        <Slider value={[iterations]} min={10} max={1000} step={10} onValueChange={handleIterationChange} />
      </div>

      <div className="space-y-2">
        <Label htmlFor="colorScheme">Color Scheme</Label>
        <Select value={colorScheme} onValueChange={setColorScheme}>
          <SelectTrigger id="colorScheme">
            <SelectValue placeholder="Select color scheme" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="classic">Classic</SelectItem>
            <SelectItem value="rainbow">Rainbow</SelectItem>
            <SelectItem value="fire">Fire</SelectItem>
            <SelectItem value="ocean">Ocean</SelectItem>
            <SelectItem value="grayscale">Grayscale</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {isJulia && (
        <div className="space-y-3">
          <h3 className="font-medium">Julia Constant</h3>
          <div className="grid grid-cols-2 gap-2">
            <div className="space-y-1">
              <Label htmlFor="realPart">Real Part</Label>
              <Input
                id="realPart"
                value={realPart}
                onChange={(e) => setRealPart(e.target.value)}
                onBlur={handleJuliaConstantChange}
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="imagPart">Imaginary Part</Label>
              <Input
                id="imagPart"
                value={imagPart}
                onChange={(e) => setImagPart(e.target.value)}
                onBlur={handleJuliaConstantChange}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <Button
              variant="outline"
              onClick={() => {
                setRealPart("-0.7269")
                setImagPart("0.1889")
                setJuliaConstant({ real: -0.7269, imag: 0.1889 })
              }}
            >
              Dendrite
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                setRealPart("-0.8")
                setImagPart("0.156")
                setJuliaConstant({ real: -0.8, imag: 0.156 })
              }}
            >
              Spiral
            </Button>
          </div>
        </div>
      )}

      <div className="pt-2">
        <Button onClick={resetView} className="w-full">
          Reset View
        </Button>
      </div>
    </div>
  )
}

