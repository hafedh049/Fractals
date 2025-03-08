import { BarnsleyFernCanvas } from "@/components/fractal-renderers/barnsley-fern-canvas"
import { FractalControls } from "@/components/fractal-controls"

export default function BarnsleyFernPage() {
  return (
    <div className="container py-8">
      <div className="mb-8 space-y-4">
        <h1 className="text-4xl font-bold">Barnsley Fern</h1>
        <p className="text-xl text-muted-foreground">
          The Barnsley Fern is an iterated function system that resembles a natural fern.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_300px]">
        <div className="relative aspect-square w-full overflow-hidden rounded-lg border bg-card">
          <BarnsleyFernCanvas />
        </div>

        <div className="space-y-8">
          <FractalControls />

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">About the Barnsley Fern</h2>
            <div className="space-y-2 text-muted-foreground">
              <p>
                The Barnsley Fern was created by mathematician Michael Barnsley as an example of how complex,
                natural-looking structures can emerge from simple mathematical rules.
              </p>
              <p>
                Unlike many other fractals, the Barnsley Fern is created using an iterated function system (IFS) with
                four affine transformations.
              </p>
              <p>
                Each transformation has a probability associated with it, and points are plotted by randomly applying
                these transformations repeatedly.
              </p>
              <p>
                The resulting pattern closely resembles a natural fern, demonstrating how mathematical processes can
                model biological forms - a concept known as mathematical biology or biomathematics.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

