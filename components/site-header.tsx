import Link from "next/link"
import { FunctionSquare, Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <FunctionSquare className="h-6 w-6" />
            <span className="inline-block font-bold">Mathematical Sets</span>
          </Link>
          <nav className="hidden gap-6 md:flex">
            <Link
              href="/sets/mandelbrot"
              className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Mandelbrot
            </Link>
            <Link
              href="/sets/julia"
              className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Julia
            </Link>
            <Link
              href="/sets/burning-ship"
              className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Burning Ship
            </Link>
            <Link
              href="/sets/newton"
              className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Newton
            </Link>
            <Link
              href="/about"
              className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              About
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Fractals</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/sets/mandelbrot">Mandelbrot</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/sets/julia">Julia</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/sets/burning-ship">Burning Ship</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/sets/newton">Newton</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/sets/sierpinski">Sierpinski Triangle</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/sets/lyapunov">Lyapunov</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/sets/phoenix">Phoenix</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/sets/barnsley-fern">Barnsley Fern</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/about">About</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        </div>
      </div>
    </header>
  )
}

