import { NewtonCanvas } from "@/components/fractal-renderers/newton-canvas"
import { FractalControls } from "@/components/fractal-controls"

export default function NewtonPage() {
  return (
    <div className="container py-8">
      <div className="mb-8 space-y-4">
        <h1 className="text-4xl font-bold">Newton Fractal</h1>
        <p className="text-xl text-muted-foreground">
          The Newton fractal is based on Newton's method for finding roots of complex functions.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_300px]">
        <div className="relative aspect-square w-full overflow-hidden rounded-lg border bg-card">
          <NewtonCanvas />
        </div>

        <div className="space-y-8">
          <FractalControls />

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">About the Newton Fractal</h2>
            <div className="space-y-2 text-muted-foreground">
              <p>
                The Newton fractal is generated using Newton's method, a numerical algorithm for finding the roots of a
                function.
              </p>
              <p>
                For a complex function f(z), Newton's method iterates the formula: z<sub>n+1</sub> = z<sub>n</sub> - f(z
                <sub>n</sub>)/f'(z<sub>n</sub>)
              </p>
              <p>
                The fractal is created by coloring each point in the complex plane based on which root the iteration
                converges to and how quickly it converges.
              </p>
              <p>This implementation uses the function f(z) = z³ - 1, which has three roots in the complex plane.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

