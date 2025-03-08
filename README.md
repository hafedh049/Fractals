# Mathematical Sets Explorer

![Mathematical Sets Explorer](https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20%2880%29-HoNl7LKqhMVgTwTOlQhlpdhakGmPPF.png)

An interactive web application for exploring and visualizing various mathematical sets and fractals. Built with Next.js, React, and Canvas API.

## Features

- Interactive fractal visualizations
- Real-time parameter adjustments
- Multiple color schemes
- Zoom and pan controls
- Educational content about each set

## Available Sets

### Mandelbrot Set
![Mandelbrot Set](https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20%2875%29-CmnmrlpToXf6NgTOMB31C6Xzh8VRkU.png)
The most famous fractal, discovered by Benoit Mandelbrot. It's defined as the set of complex numbers c for which the function f(z) = z² + c does not diverge when iterated from z = 0.

### Julia Sets
![Julia Sets](https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20%2876%29-bp5sw5iLkohcpXyFHfhJVsZ0Ly2Yw5.png)
Related to the Mandelbrot set, Julia sets are created by fixing the c value and testing different starting points z. Each point in the Mandelbrot set corresponds to a connected Julia set.

### Burning Ship Fractal
![Burning Ship](https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20%2877%29-W6aCPgQC5pLw0mCQkEgnW6Zp58PRKT.png)
A variation of the Mandelbrot set where the real and imaginary parts are taken as absolute values before squaring, creating a unique flame-like appearance.

### Newton Fractal
![Newton Fractal](https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20%2878%29-LMkNhU3AXGZ85riSXP1QTY4PPuCYvG.png)
Based on Newton's method for finding roots of complex functions, this fractal shows the convergence behavior of different starting points to the roots of a polynomial.

## How to Use

1. Select a fractal type from the navigation menu
2. Use the mouse wheel or zoom buttons to zoom in/out
3. Click and drag to pan around
4. Adjust parameters:
   - Iterations: Control the detail level
   - Color Scheme: Change the visualization style
   - Set-specific parameters (e.g., Julia constant)

## Controls

- **Zoom**: Mouse wheel or zoom buttons
- **Pan**: Click and drag
- **Reset View**: Reset button (↺)
- **Iterations**: Slider control
- **Color Scheme**: Dropdown selection

## Technical Details

- Built with Next.js and React
- Uses Canvas API for rendering
- Implements complex number calculations
- Responsive design for all screen sizes
- Dark theme optimized for fractal visualization

## Getting Started

```bash
# Clone the repository
git clone https://github.com/yourusername/mathematical-sets.git

# Install dependencies
cd mathematical-sets
npm install

# Run the development server
npm run dev
```
