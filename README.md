Thought for 6 seconds### Mathematical Sets Explorer





An interactive web application for exploring and visualizing various mathematical sets and fractals. Built with Next.js, React, and Canvas API.

## Features

- Interactive fractal visualizations
- Real-time parameter adjustments
- Multiple color schemes
- Zoom and pan controls
- Educational content about each set


## Available Sets

### Mandelbrot Set




The most famous fractal, discovered by Benoit Mandelbrot. It's defined as the set of complex numbers c for which the function f(z) = z² + c does not diverge when iterated from z = 0.

### Julia Sets




Related to the Mandelbrot set, Julia sets are created by fixing the c value and testing different starting points z. Each point in the Mandelbrot set corresponds to a connected Julia set.

### Burning Ship Fractal




A variation of the Mandelbrot set where the real and imaginary parts are taken as absolute values before squaring, creating a unique flame-like appearance.

### Newton Fractal




Based on Newton's method for finding roots of complex functions, this fractal shows the convergence behavior of different starting points to the roots of a polynomial.

## How to Use

1. Select a fractal type from the navigation menu
2. Use the mouse wheel or zoom buttons to zoom in/out
3. Click and drag to pan around
4. Adjust parameters:

1. Iterations: Control the detail level
2. Color Scheme: Change the visualization style
3. Set-specific parameters (e.g., Julia constant)





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

```shellscript
# Clone the repository
git clone https://github.com/yourusername/mathematical-sets.git

# Install dependencies
cd mathematical-sets
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## License

MIT License - feel free to use this code for your own projects!

