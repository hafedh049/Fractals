import { MandelbrotCanvas } from "@/components/fractal-renderers/mandelbrot-canvas"
import { FractalControls } from "@/components/fractal-controls"

export default function MandelbrotPage() {
  return (
    <div className="container py-8">
      <div className="mb-8 space-y-4">
        <h1 className="text-4xl font-bold">Mandelbrot Set</h1>
        <p className="text-xl text-muted-foreground">
          The Mandelbrot set is one of the most famous fractals in mathematics, named after mathematician Benoit
          Mandelbrot.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_300px]">
        <div className="relative aspect-square w-full overflow-hidden rounded-lg border bg-card">
          <MandelbrotCanvas />
        </div>

        <div className="space-y-8">
          <FractalControls />

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">About the Mandelbrot Set</h2>
            <div className="space-y-2 text-muted-foreground">
              <p>
                The Mandelbrot set is defined as the set of complex numbers c for which the function f(z) = z² + c does
                not diverge when iterated from z = 0.
              </p>
              <p>
                In simpler terms, we test each point c by repeatedly applying the formula z = z² + c, starting with z =
                0. If the value of z remains bounded (doesn't escape to infinity), then c is in the Mandelbrot set.
              </p>
              <p>
                The boundary of the Mandelbrot set forms a fractal, which means it has infinite complexity - you can
                zoom in forever and continue to find new patterns.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

