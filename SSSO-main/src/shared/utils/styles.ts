/**
 * @param px input px as per 1440 * 1024 resolution
 */

export const pxToRem = (px: number) => `${px / 16}rem`
/**
 *
 * @param px input px value
 * @param referenceViewportHeight height of the viewport as in Figma
 * @returns the relative value in vh
 */
export const pxToVh = (px: number, referenceViewportHeight = 1024) =>
  `${100 * (px / referenceViewportHeight)}vh`

/**
 *
 * @param px input px value
 * @param referenceViewportWidth width of the viewport as in Figma
 * @returns the relative value in vh
 */
export const pxToVw = (px: number, referenceViewportWidth = 1440) =>
  `${100 * (px / referenceViewportWidth)}vw`
