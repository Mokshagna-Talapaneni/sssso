import React from "react"
import { Splide, SplideSlide } from "@splidejs/react-splide"
import { generateSlides } from "@utils/slide"
import { pxToRem } from "@utils/styles"
import SaiImage from "@assets/image/sai-baba-2.png"
import { BasicSlideWrapper } from "./styled"
import { BasicCarouselType } from "./types"

const Component: React.FC<BasicCarouselType> = ({
  perPage = 1,
  height = 300,
  rewind = true,
  easing = "linear",
  cover = true,
  width = "100%",
  gap = 0,
  slides = generateSlides()
}: BasicCarouselType) => {
  return (
    <BasicSlideWrapper>
      <Splide
        options={{
          perPage,
          height: pxToRem(height),
          rewind,
          easing,
          cover,
          width,
          gap: pxToRem(gap)
        }}
        aria-labelledby="basic-example-heading"
      >
        {slides.map((slide) => (
          <SplideSlide key={slide.title}>
            <img src={slide.image} alt={slide.title} />
          </SplideSlide>
        ))}
      </Splide>
    </BasicSlideWrapper>
  )
}

export default Component
