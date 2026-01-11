import React from "react"
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide"
import { generateSlides } from "@utils/slide"
import { pxToRem } from "@utils/styles"
import { FullViewSlideWrapper, SlideContentFullView } from "./styled"
import { FullViewCarouselType } from "./types"
import { IconButton, Typography } from "@mui/material"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import { addZeroPrefix } from "@utils/number"

//TODO: Update Props to make this dynamic
const Component: React.FC<FullViewCarouselType> = ({
  perPage = 1,
  height = 300,
  rewind = true,
  easing = "linear",
  cover = true,
  width = "100%",
  gap = 0,
  hasTrack = false,
  slides = generateSlides(),
  autoPlay = false
}: FullViewCarouselType) => {
  const [activeIndex, setActiveIndex] = React.useState(0)

  return (
    <FullViewSlideWrapper>
      <Splide
        options={{
          perPage,
          height: pxToRem(height),
          rewind,
          easing,
          cover,
          width,
          gap: pxToRem(gap),
          pagination: false,
          autoplay: autoPlay,
          interval: 3000,
          type: "loop",
          pauseOnHover: false
        }}
        hasTrack={hasTrack}
        aria-labelledby="basic-example-heading"
      >
        <div className="pagination-content">
          <Typography variant="h4Medium" color="primary.light">
            {addZeroPrefix(activeIndex + 1)}/{addZeroPrefix(slides?.length)}
          </Typography>
          <div className="splide__arrows">
            <IconButton
              className="splide__arrow splide__arrow--prev"
              onClick={() =>
                setActiveIndex(
                  activeIndex === 0 ? slides.length - 1 : activeIndex - 1
                )
              }
            >
              <ArrowForwardIcon />
            </IconButton>
            <IconButton
              className="splide__arrow splide__arrow--next"
              onClick={() =>
                setActiveIndex(
                  activeIndex === slides?.length - 1 ? 0 : activeIndex + 1
                )
              }
            >
              <ArrowForwardIcon />
            </IconButton>
          </div>
        </div>
        <SplideTrack>
          {slides.map((slide, index) => (
            <SplideSlide key={slide.title + index}>
              <SlideContentFullView imgUrl={slide.image}>
                <div className="overlay">
                  <div className="container text-wrapper">
                    <Typography
                      variant="bannerBold"
                      component={"div"}
                      color="primary.light"
                    >
                      {slide.title}
                    </Typography>
                    <Typography
                      variant="h3Medium"
                      component={"div"}
                      color="primary.light"
                    >
                      {slide.description}
                    </Typography>
                  </div>
                  <div className="container pagination-wrapper"></div>
                </div>
              </SlideContentFullView>
            </SplideSlide>
          ))}
        </SplideTrack>
      </Splide>
    </FullViewSlideWrapper>
  )
}

export default Component
