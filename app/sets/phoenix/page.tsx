import { PhoenixCanvas } from "@/components/fractal-renderers/phoenix-canvas"
import { FractalControls } from "@/components/fractal-controls"

export default function PhoenixPage() {
  return (
    <div className="container py-8">
      <div className="mb-8 space-y-4">
        <h1 className="text-4xl font-bold">Phoenix Fractal</h1>
        <p className="text-xl text-muted-foreground">
          The Phoenix fractal is a variation with an additional term in the formula.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_300px]">
        <div className="relative aspect-square w-full overflow-hidden rounded-lg border bg-card">
          <PhoenixCanvas />
        </div>

        <div className="space-y-8">
          <FractalControls />

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">About the Phoenix Fractal</h2>
            <div className="space-y-2 text-muted-foreground">
              <p>
                The Phoenix fractal is a variation of the Mandelbrot set that includes a dependency on the previous
                iteration.
              </p>
              <p>
                Its formula is z<sub>n+1</sub> = z<sub>n</sub>² + c + p·z<sub>n-1</sub>, where p is an additional
                parameter that creates the unique "phoenix-like" patterns.
              </p>
              <p>
                This fractal is named "Phoenix" because it appears to rise from its own ashes, with new patterns
                emerging from previous iterations.
              </p>
              <p>
                The additional term in the formula creates more complex and varied patterns than the standard Mandelbrot
                set, with intricate spirals and flame-like structures.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

