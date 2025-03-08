import { JuliaCanvas } from "@/components/fractal-renderers/julia-canvas"
import { FractalControls } from "@/components/fractal-controls"

export default function JuliaPage() {
  return (
    <div className="container py-8">
      <div className="mb-8 space-y-4">
        <h1 className="text-4xl font-bold">Julia Sets</h1>
        <p className="text-xl text-muted-foreground">
          Julia sets are closely related to the Mandelbrot set and were studied by French mathematician Gaston Julia.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_300px]">
        <div className="relative aspect-square w-full overflow-hidden rounded-lg border bg-card">
          <JuliaCanvas />
        </div>

        <div className="space-y-8">
          <FractalControls isJulia={true} />

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">About Julia Sets</h2>
            <div className="space-y-2 text-muted-foreground">
              <p>
                Julia sets are fractals that are obtained from a complex function through an iterative process. Each
                Julia set is associated with a complex parameter c.
              </p>
              <p>
                Unlike the Mandelbrot set, which tests different c values with a starting z = 0, Julia sets fix a
                specific c value and test different starting points z.
              </p>
              <p>
                The formula is the same: z = z² + c, but we iterate this formula for different starting values of z,
                with c remaining constant.
              </p>
              <p>
                There is a deep connection between the Mandelbrot set and Julia sets: the appearance of the Julia set
                for a parameter c depends on whether c belongs to the Mandelbrot set.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

