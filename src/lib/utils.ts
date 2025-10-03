import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

// merge tailwind classes and handle conflicts (later classes override earlier ones)
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function generateGradient(from: string, to: string, direction = "135deg") {
  return `linear-gradient(${direction}, ${from}, ${to})`
}

// convert hex color to rgba with custom alpha transparency
export function hexToRgba(hex: string, alpha: number) {
  const r = parseInt(hex.slice(1, 3), 16) // skip # and get first 2 chars
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

