export type FullViewCarouselType = {
  perPage?: number
  height?: number
  rewind?: boolean
  easing?: "linear" | "ease"
  cover?: boolean
  width?: string
  gap?: number
  hasTrack?: boolean
  slides?: Array<{
    image: string
    title: string
    description: string
  }>
  autoPlay?: boolean
}
