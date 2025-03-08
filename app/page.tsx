import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Explore the Beauty of Mathematical Sets
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Discover the fascinating world of fractals and mathematical sets through interactive visualizations.
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild>
                  <Link href="/sets/mandelbrot">
                    Start Exploring <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Featured Set
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">The Mandelbrot Set</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  The most famous fractal, discovered by Benoit Mandelbrot. It's defined as the set of complex numbers
                  for which the function f(z) = z² + c does not diverge when iterated.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild>
                    <Link href="/sets/mandelbrot">Explore Mandelbrot</Link>
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative h-[300px] w-[300px] overflow-hidden rounded-xl bg-black">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-700 via-blue-900 to-black opacity-70"></div>
                  <div className="absolute inset-0 bg-[url('/placeholder.svg?height=300&width=300')] bg-cover bg-center mix-blend-overlay"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Explore Different Sets</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Dive into the world of mathematical sets and discover their unique properties and visual beauty.
                </p>
              </div>
            </div>

            <div className="relative mt-12">
              <div className="flex justify-between absolute -top-16 right-0 space-x-2">
                <Button variant="outline" size="sm" id="prev-btn" className="rounded-full w-8 h-8 p-0">
                  <span className="sr-only">Previous</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                </Button>
                <Button variant="outline" size="sm" id="next-btn" className="rounded-full w-8 h-8 p-0">
                  <span className="sr-only">Next</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </Button>
              </div>

              <div className="overflow-hidden">
                <div
                  className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-6 md:grid-cols-2 lg:grid-cols-3"
                  id="fractal-carousel"
                >
                  {/* Original Fractals */}
                  <div
                    className="animate-fade-up opacity-0"
                    style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
                  >
                    <Card className="bg-card/60 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20">
                      <CardHeader>
                        <CardTitle>Mandelbrot Set</CardTitle>
                        <CardDescription>The most famous fractal in mathematics</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="relative h-[200px] w-full overflow-hidden rounded-lg bg-gradient-to-br from-purple-700 via-blue-900 to-black transition-all duration-500 hover:bg-gradient-to-r">
                          <div className="absolute bottom-3 right-3 flex space-x-1">
                            <Button
                              size="icon"
                              variant="outline"
                              className="h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-4 w-4"
                              >
                                <polygon points="5 3 19 12 5 21 5 3" />
                              </svg>
                              <span className="sr-only">Play zoom animation</span>
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button asChild className="w-full transition-all duration-300 hover:bg-purple-700">
                          <Link href="/sets/mandelbrot">Explore</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>

                  <div
                    className="animate-fade-up opacity-0"
                    style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
                  >
                    <Card className="bg-card/60 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/20">
                      <CardHeader>
                        <CardTitle>Julia Sets</CardTitle>
                        <CardDescription>Related to the Mandelbrot set with unique patterns</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="relative h-[200px] w-full overflow-hidden rounded-lg bg-gradient-to-br from-green-700 via-teal-900 to-black transition-all duration-500 hover:bg-gradient-to-r">
                          <div className="absolute bottom-3 right-3 flex space-x-1">
                            <Button
                              size="icon"
                              variant="outline"
                              className="h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-4 w-4"
                              >
                                <polygon points="5 3 19 12 5 21 5 3" />
                              </svg>
                              <span className="sr-only">Play zoom animation</span>
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button asChild className="w-full transition-all duration-300 hover:bg-green-700">
                          <Link href="/sets/julia">Explore</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>

                  <div
                    className="animate-fade-up opacity-0"
                    style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
                  >
                    <Card className="bg-card/60 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/20">
                      <CardHeader>
                        <CardTitle>Burning Ship</CardTitle>
                        <CardDescription>A variation that resembles a burning ship</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="relative h-[200px] w-full overflow-hidden rounded-lg bg-gradient-to-br from-orange-700 via-red-900 to-black transition-all duration-500 hover:bg-gradient-to-r">
                          <div className="absolute bottom-3 right-3 flex space-x-1">
                            <Button
                              size="icon"
                              variant="outline"
                              className="h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-4 w-4"
                              >
                                <polygon points="5 3 19 12 5 21 5 3" />
                              </svg>
                              <span className="sr-only">Play zoom animation</span>
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button asChild className="w-full transition-all duration-300 hover:bg-orange-700">
                          <Link href="/sets/burning-ship">Explore</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>

                  {/* Additional Fractals */}
                  <div
                    className="animate-fade-up opacity-0"
                    style={{ animationDelay: "0.7s", animationFillMode: "forwards" }}
                  >
                    <Card className="bg-card/60 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20">
                      <CardHeader>
                        <CardTitle>Newton Fractal</CardTitle>
                        <CardDescription>Based on Newton's method for finding roots</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="relative h-[200px] w-full overflow-hidden rounded-lg bg-gradient-to-br from-blue-600 via-indigo-800 to-black transition-all duration-500 hover:bg-gradient-to-r">
                          <div className="absolute bottom-3 right-3 flex space-x-1">
                            <Button
                              size="icon"
                              variant="outline"
                              className="h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-4 w-4"
                              >
                                <polygon points="5 3 19 12 5 21 5 3" />
                              </svg>
                              <span className="sr-only">Play zoom animation</span>
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button asChild className="w-full transition-all duration-300 hover:bg-blue-700">
                          <Link href="/sets/newton">Explore</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>

                  <div
                    className="animate-fade-up opacity-0"
                    style={{ animationDelay: "0.9s", animationFillMode: "forwards" }}
                  >
                    <Card className="bg-card/60 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pink-500/20">
                      <CardHeader>
                        <CardTitle>Lyapunov Fractal</CardTitle>
                        <CardDescription>Visualizing chaos in dynamical systems</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="relative h-[200px] w-full overflow-hidden rounded-lg bg-gradient-to-br from-pink-600 via-purple-800 to-black transition-all duration-500 hover:bg-gradient-to-r">
                          <div className="absolute bottom-3 right-3 flex space-x-1">
                            <Button
                              size="icon"
                              variant="outline"
                              className="h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-4 w-4"
                              >
                                <polygon points="5 3 19 12 5 21 5 3" />
                              </svg>
                              <span className="sr-only">Play zoom animation</span>
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button asChild className="w-full transition-all duration-300 hover:bg-pink-700">
                          <Link href="/sets/lyapunov">Explore</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>

                  <div
                    className="animate-fade-up opacity-0"
                    style={{ animationDelay: "1.1s", animationFillMode: "forwards" }}
                  >
                    <Card className="bg-card/60 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/20">
                      <CardHeader>
                        <CardTitle>Sierpinski Triangle</CardTitle>
                        <CardDescription>A classic self-similar fractal pattern</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="relative h-[200px] w-full overflow-hidden rounded-lg bg-gradient-to-br from-red-600 via-red-800 to-black transition-all duration-500 hover:bg-gradient-to-r">
                          <div className="absolute bottom-3 right-3 flex space-x-1">
                            <Button
                              size="icon"
                              variant="outline"
                              className="h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-4 w-4"
                              >
                                <polygon points="5 3 19 12 5 21 5 3" />
                              </svg>
                              <span className="sr-only">Play zoom animation</span>
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button asChild className="w-full transition-all duration-300 hover:bg-red-700">
                          <Link href="/sets/sierpinski">Explore</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>

                  <div
                    className="animate-fade-up opacity-0"
                    style={{ animationDelay: "1.3s", animationFillMode: "forwards" }}
                  >
                    <Card className="bg-card/60 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20">
                      <CardHeader>
                        <CardTitle>Tricorn (Mandelbar)</CardTitle>
                        <CardDescription>The "anti-Mandelbrot" with complex conjugation</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="relative h-[200px] w-full overflow-hidden rounded-lg bg-gradient-to-br from-cyan-600 via-blue-800 to-black transition-all duration-500 hover:bg-gradient-to-r">
                          <div className="absolute bottom-3 right-3 flex space-x-1">
                            <Button
                              size="icon"
                              variant="outline"
                              className="h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-4 w-4"
                              >
                                <polygon points="5 3 19 12 5 21 5 3" />
                              </svg>
                              <span className="sr-only">Play zoom animation</span>
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button asChild className="w-full transition-all duration-300 hover:bg-cyan-700">
                          <Link href="/sets/tricorn">Explore</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>

                  <div
                    className="animate-fade-up opacity-0"
                    style={{ animationDelay: "1.5s", animationFillMode: "forwards" }}
                  >
                    <Card className="bg-card/60 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-amber-500/20">
                      <CardHeader>
                        <CardTitle>Phoenix Fractal</CardTitle>
                        <CardDescription>A variation with an additional term in the formula</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="relative h-[200px] w-full overflow-hidden rounded-lg bg-gradient-to-br from-amber-600 via-orange-800 to-black transition-all duration-500 hover:bg-gradient-to-r">
                          <div className="absolute bottom-3 right-3 flex space-x-1">
                            <Button
                              size="icon"
                              variant="outline"
                              className="h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-4 w-4"
                              >
                                <polygon points="5 3 19 12 5 21 5 3" />
                              </svg>
                              <span className="sr-only">Play zoom animation</span>
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button asChild className="w-full transition-all duration-300 hover:bg-amber-700">
                          <Link href="/sets/phoenix">Explore</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>

                  <div
                    className="animate-fade-up opacity-0"
                    style={{ animationDelay: "1.7s", animationFillMode: "forwards" }}
                  >
                    <Card className="bg-card/60 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/20">
                      <CardHeader>
                        <CardTitle>Barnsley Fern</CardTitle>
                        <CardDescription>An iterated function system resembling a fern</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="relative h-[200px] w-full overflow-hidden rounded-lg bg-gradient-to-br from-emerald-600 via-green-800 to-black transition-all duration-500 hover:bg-gradient-to-r">
                          <div className="absolute bottom-3 right-3 flex space-x-1">
                            <Button
                              size="icon"
                              variant="outline"
                              className="h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-4 w-4"
                              >
                                <polygon points="5 3 19 12 5 21 5 3" />
                              </svg>
                              <span className="sr-only">Play zoom animation</span>
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button asChild className="w-full transition-all duration-300 hover:bg-emerald-700">
                          <Link href="/sets/barnsley-fern">Explore</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* Add this script at the end of the component, just before the final closing tags */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
        document.addEventListener('DOMContentLoaded', function() {
          const carousel = document.getElementById('fractal-carousel');
          const prevBtn = document.getElementById('prev-btn');
          const nextBtn = document.getElementById('next-btn');
          
          let scrollAmount = 0;
          const cardWidth = 350; // Approximate width of a card + gap
          
          prevBtn.addEventListener('click', function() {
            scrollAmount = Math.max(scrollAmount - cardWidth * 3, 0);
            carousel.scrollTo({
              left: scrollAmount,
              behavior: 'smooth'
            });
          });
          
          nextBtn.addEventListener('click', function() {
            scrollAmount = Math.min(scrollAmount + cardWidth * 3, carousel.scrollWidth - carousel.clientWidth);
            carousel.scrollTo({
              left: scrollAmount,
              behavior: 'smooth'
            });
          });
          
          // Handle play/pause zoom buttons
          const playButtons = document.querySelectorAll('.h-8.w-8.rounded-full');
          playButtons.forEach(button => {
            button.addEventListener('click', function(e) {
              e.preventDefault();
              const isPlaying = this.getAttribute('data-playing') === 'true';
              
              // Toggle play/pause state
              if (isPlaying) {
                this.setAttribute('data-playing', 'false');
                this.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="h-4 w-4"><polygon points="5 3 19 12 5 21 5 3" /></svg><span class="sr-only">Play zoom animation</span>';
              } else {
                this.setAttribute('data-playing', 'true');
                this.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="h-4 w-4"><rect x="6" y="4" width="4" height="16" /><rect x="14" y="4" width="4" height="16" /></svg><span class="sr-only">Pause zoom animation</span>';
                
                // Simulate zoom animation on the card's background
                const cardContent = this.closest('.relative');
                if (cardContent) {
                  cardContent.classList.add('zooming');
                  
                  // Remove the class after animation completes if paused
                  setTimeout(() => {
                    if (this.getAttribute('data-playing') === 'false') {
                      cardContent.classList.remove('zooming');
                    }
                  }, 10000); // 10 second animation
                }
              }
            });
          });
        });
      `,
        }}
      />
    </div>
  )
}

