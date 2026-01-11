/*
 * Adaptive Coefficient for Responsive Container
 */

export const ADAPTIVE_COEFFICIENT: {
  [Key in "SMALLER" | "TARGET" | "WIDER"]: number
} = Object.freeze({
  SMALLER: 0.825, // width >= 1280 < 1920 = 125%
  TARGET: 0.66, // width >= 1280 < 1920 = 100%
  WIDER: 0.528 // width >= 1920 = 80%
})
