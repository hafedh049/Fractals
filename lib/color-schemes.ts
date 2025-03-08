interface Color {
  r: number
  g: number
  b: number
}

export function getColor(iteration: number, maxIterations: number, scheme: string): Color {
  // If the point is in the set, return black
  if (iteration === maxIterations) {
    return { r: 0, g: 0, b: 0 }
  }

  // Normalize the iteration count
  const normalized = iteration / maxIterations

  switch (scheme) {
    case "classic":
      return classicColorScheme(normalized)
    case "rainbow":
      return rainbowColorScheme(normalized)
    case "fire":
      return fireColorScheme(normalized)
    case "ocean":
      return oceanColorScheme(normalized)
    case "grayscale":
      return grayscaleColorScheme(normalized)
    default:
      return classicColorScheme(normalized)
  }
}

function classicColorScheme(normalized: number): Color {
  // Classic blue-to-white color scheme
  const value = Math.floor(normalized * 255)
  return {
    r: value,
    g: value < 128 ? 0 : (value - 128) * 2,
    b: value,
  }
}

function rainbowColorScheme(normalized: number): Color {
  // Full rainbow color scheme
  const hue = normalized * 360
  return hsvToRgb(hue, 1.0, 1.0)
}

function fireColorScheme(normalized: number): Color {
  // Fire color scheme (black -> red -> orange -> yellow -> white)
  if (normalized < 0.25) {
    const t = normalized * 4
    return {
      r: Math.floor(255 * t),
      g: 0,
      b: 0,
    }
  } else if (normalized < 0.5) {
    const t = (normalized - 0.25) * 4
    return {
      r: 255,
      g: Math.floor(255 * t),
      b: 0,
    }
  } else if (normalized < 0.75) {
    const t = (normalized - 0.5) * 4
    return {
      r: 255,
      g: 255,
      b: Math.floor(255 * t),
    }
  } else {
    const t = (normalized - 0.75) * 4
    const v = Math.floor(255 * (1 - t) + 255 * t)
    return {
      r: v,
      g: v,
      b: v,
    }
  }
}

function oceanColorScheme(normalized: number): Color {
  // Ocean color scheme (deep blue -> teal -> white)
  if (normalized < 0.5) {
    const t = normalized * 2
    return {
      r: 0,
      g: Math.floor(255 * t),
      b: Math.floor(128 + 127 * t),
    }
  } else {
    const t = (normalized - 0.5) * 2
    return {
      r: Math.floor(255 * t),
      g: 255,
      b: 255,
    }
  }
}

function grayscaleColorScheme(normalized: number): Color {
  // Simple grayscale
  const value = Math.floor(normalized * 255)
  return {
    r: value,
    g: value,
    b: value,
  }
}

function hsvToRgb(h: number, s: number, v: number): Color {
  let r = 0,
    g = 0,
    b = 0

  const i = Math.floor(h / 60) % 6
  const f = h / 60 - i
  const p = v * (1 - s)
  const q = v * (1 - f * s)
  const t = v * (1 - (1 - f) * s)

  switch (i) {
    case 0:
      r = v
      g = t
      b = p
      break
    case 1:
      r = q
      g = v
      b = p
      break
    case 2:
      r = p
      g = v
      b = t
      break
    case 3:
      r = p
      g = q
      b = v
      break
    case 4:
      r = t
      g = p
      b = v
      break
    case 5:
      r = v
      g = p
      b = q
      break
  }

  return {
    r: Math.floor(r * 255),
    g: Math.floor(g * 255),
    b: Math.floor(b * 255),
  }
}

