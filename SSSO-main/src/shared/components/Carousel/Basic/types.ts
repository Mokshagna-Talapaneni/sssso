export type BasicCarouselType = {
  perPage?: number
  height?: number
  rewind?: boolean
  easing?: "linear" | "ease"
  cover?: boolean
  width?: string
  gap?: number
  slides?: Array<{
    image: string
    title: string
    description: string
  }>
}
