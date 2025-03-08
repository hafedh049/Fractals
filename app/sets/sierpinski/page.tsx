import { SierpinskiCanvas } from "@/components/fractal-renderers/sierpinski-canvas"
import { FractalControls } from "@/components/fractal-controls"

export default function SierpinskiPage() {
  return (
    <div className="container py-8">
      <div className="mb-8 space-y-4">
        <h1 className="text-4xl font-bold">Sierpinski Triangle</h1>
        <p className="text-xl text-muted-foreground">
          The Sierpinski Triangle is a classic self-similar fractal pattern.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_300px]">
        <div className="relative aspect-square w-full overflow-hidden rounded-lg border bg-card">
          <SierpinskiCanvas />
        </div>

        <div className="space-y-8">
          <FractalControls />

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">About the Sierpinski Triangle</h2>
            <div className="space-y-2 text-muted-foreground">
              <p>
                The Sierpinski Triangle is one of the most famous fractals, first described by Polish mathematician
                Wacław Sierpiński in 1915.
              </p>
              <p>
                It can be constructed by starting with a solid triangle, then repeatedly removing the central triangle
                (connecting the midpoints of each side) from each remaining triangle.
              </p>
              <p>
                This process creates a self-similar pattern where each part is a reduced copy of the whole,
                demonstrating the property of exact self-similarity.
              </p>
              <p>
                The Sierpinski Triangle has a fractal dimension of approximately 1.585, meaning it's more complex than a
                line (dimension 1) but doesn't quite fill a plane (dimension 2).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

