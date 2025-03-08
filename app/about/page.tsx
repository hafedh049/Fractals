export default function AboutPage() {
  return (
    <div className="container py-8">
      <div className="mx-auto max-w-3xl space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">About Mathematical Sets</h1>
          <p className="text-xl text-muted-foreground">
            Exploring the fascinating world of mathematical sets and fractals
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">What are Fractals?</h2>
          <p>
            Fractals are infinitely complex patterns that are self-similar across different scales. They are created by
            repeating a simple process over and over in an ongoing feedback loop.
          </p>
          <p>
            The term "fractal" was coined by mathematician Benoit Mandelbrot in 1975. Mandelbrot based it on the Latin
            frāctus, meaning "broken" or "fractured", and used it to extend the concept of theoretical fractional
            dimensions to geometric patterns in nature.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Mathematical Sets</h2>
          <p>In this application, we explore several famous mathematical sets that exhibit fractal properties:</p>

          <div className="space-y-2">
            <h3 className="text-xl font-semibold">The Mandelbrot Set</h3>
            <p>
              The Mandelbrot set is defined as the set of complex numbers c for which the function f(z) = z² + c does
              not diverge when iterated from z = 0. It's one of the most famous fractals and was discovered by Benoit
              Mandelbrot in 1980.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Julia Sets</h3>
            <p>
              Julia sets are closely related to the Mandelbrot set. While the Mandelbrot set is created by testing
              different values of c with a starting z = 0, Julia sets fix a specific c value and test different starting
              points z. Each point in the Mandelbrot set corresponds to a connected Julia set.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-semibold">The Burning Ship Fractal</h3>
            <p>
              The Burning Ship fractal is a variation of the Mandelbrot set where the real and imaginary parts of each
              iteration are taken as absolute values before squaring. This creates a shape that resembles a burning ship
              when viewed from a certain angle.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">How to Use This Application</h2>
          <p>Each fractal visualization allows you to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Zoom in and out using the mouse wheel or the zoom buttons</li>
            <li>Pan around by clicking and dragging</li>
            <li>Adjust the number of iterations to increase detail</li>
            <li>Change color schemes to view the fractal differently</li>
            <li>For Julia sets, you can modify the constant parameter to explore different patterns</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">About the Developer</h2>
          <p>
            This application was created as an educational tool to help visualize and understand the beauty of
            mathematical sets and fractals. It uses React, Next.js, and the HTML Canvas API to render the fractals in
            real-time.
          </p>
        </div>
      </div>
    </div>
  )
}

