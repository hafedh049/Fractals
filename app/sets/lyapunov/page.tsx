import { LyapunovCanvas } from "@/components/fractal-renderers/lyapunov-canvas"
import { FractalControls } from "@/components/fractal-controls"

export default function LyapunovPage() {
  return (
    <div className="container py-8">
      <div className="mb-8 space-y-4">
        <h1 className="text-4xl font-bold">Lyapunov Fractal</h1>
        <p className="text-xl text-muted-foreground">The Lyapunov fractal visualizes chaos in dynamical systems.</p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_300px]">
        <div className="relative aspect-square w-full overflow-hidden rounded-lg border bg-card">
          <LyapunovCanvas />
        </div>

        <div className="space-y-8">
          <FractalControls />

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">About the Lyapunov Fractal</h2>
            <div className="space-y-2 text-muted-foreground">
              <p>
                Lyapunov fractals are named after Russian mathematician Aleksandr Lyapunov and are related to the study
                of dynamical systems and chaos theory.
              </p>
              <p>
                These fractals visualize the behavior of a system that follows different rules in sequence, such as the
                logistic map with alternating parameters.
              </p>
              <p>
                The colors represent the Lyapunov exponent, which measures how quickly nearby trajectories diverge or
                converge. Positive exponents (often shown in bright colors) indicate chaotic behavior, while negative
                exponents (darker colors) indicate stable behavior.
              </p>
              <p>
                The patterns reveal regions of stability and chaos in the parameter space, showing the complex boundary
                between order and disorder.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

