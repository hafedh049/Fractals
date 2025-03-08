import { BurningShipCanvas } from "@/components/fractal-renderers/burning-ship-canvas"
import { FractalControls } from "@/components/fractal-controls"

export default function BurningShipPage() {
  return (
    <div className="container py-8">
      <div className="mb-8 space-y-4">
        <h1 className="text-4xl font-bold">Burning Ship Fractal</h1>
        <p className="text-xl text-muted-foreground">
          The Burning Ship fractal is a variation of the Mandelbrot set with a unique flame-like appearance.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_300px]">
        <div className="relative aspect-square w-full overflow-hidden rounded-lg border bg-card">
          <BurningShipCanvas />
        </div>

        <div className="space-y-8">
          <FractalControls />

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">About the Burning Ship Fractal</h2>
            <div className="space-y-2 text-muted-foreground">
              <p>
                The Burning Ship fractal is a variation of the Mandelbrot set discovered by Michael Michelitsch and Otto
                E. Rössler in 1992.
              </p>
              <p>
                It's generated using a similar iterative function to the Mandelbrot set, but with an important
                difference: the real and imaginary parts of each iteration are taken as absolute values before squaring.
              </p>
              <p>The formula is: z = (|Re(z)| + i|Im(z)|)² + c</p>
              <p>
                This small change creates a dramatically different fractal that resembles a burning ship when viewed
                from a certain angle, hence its name.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

