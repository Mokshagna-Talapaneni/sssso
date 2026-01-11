import { pxToRem } from "@utils/styles"
import { styled } from "@mui/material"
import { NonMuiColors } from "@constants/COLORS"

export const FullViewSlideWrapper = styled("div", {
  name: "full-view-slide",
  slot: "wrapper"
})(({ theme }) => ({
  width: "100%",
  height: `calc(100vh - ${pxToRem(64)})`,
  boxSizing: "border-box",
  "& .splide": {
    position: "relative",
    "& .pagination-content": {
      position: "absolute",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      width: pxToRem(128),
      gap: pxToRem(16),
      right: pxToRem(128),
      bottom: pxToRem(128),
      zIndex: 1,
      "& .splide__arrows": {
        display: "flex",
        gap: pxToRem(32),
        alignItems: "center",
        justifyContent: "flex-end",
        "& .splide__arrow": {
          position: "static",
          background: theme.palette.primary.main
        },
        "& .splide__arrow--prev": {
          "& svg": {
            transform: "rotate(180deg)"
          }
        },
        "& .MuiIconButton-root": {
          width: pxToRem(48),
          height: pxToRem(48),
          transform: "none",
          "& svg": {
            width: pxToRem(32),
            height: pxToRem(32),
            "& path": {
              fill: theme.palette.primary.light
            }
          }
        }
      }
    },
    "& .splide__track": {
      height: `calc(100vh - ${pxToRem(32)})`,
      "& .splide__slide": {
        height: "100% !important"
      }
    }
  },
  [theme.breakpoints.down("md")]: {
    width: "100%",
    "& .splide": {
      "& .pagination-content": {
        right: "50%",
        bottom: pxToRem(64),
        transform: "translate(50%, 0)"
      }
    }
  }
}))

export const SlideContentFullView = styled("div", {
  name: "full-view-slide",
  slot: "content",
  shouldForwardProp: (prop) => prop !== "imgUrl"
})<{ imgUrl: string }>(({ theme, imgUrl }) => ({
  height: "100%",
  width: "100%",
  backgroundImage: `url(${imgUrl})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  boxSizing: "border-box",
  "& .overlay": {
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    background: NonMuiColors.BLACK_FADE_MEDIUM,
    padding: pxToRem(128),
    "& .pagination-wrapper": {
      flex: "0 0 40%",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      content: "''"
    },

    "& .text-wrapper": {
      flex: "1 1 60%",
      display: "flex",
      flexDirection: "column",
      gap: pxToRem(32),
      alignItems: "flex-start",
      justifyContent: "center",
      [theme.breakpoints.down("md")]: {
        flexBasis: "100%",
        textAlign: "center",
        alignItems: "center"
      }
    },
    [theme.breakpoints.down("md")]: {
      padding: `${pxToRem(64)} ${pxToRem(64)} ${pxToRem(144)}`,
      flexWrap: "wrap",
      textAlign: "center",
      alignContent: "flex-end",
      gap: pxToRem(32),
      "& .pagination-wrapper": {
        flexBasis: "100%",
        justifyContent: "center",
        "& .pagination-content": {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          width: pxToRem(128),
          gap: pxToRem(16),
          "& .splide__arrows": {
            display: "flex",
            gap: pxToRem(32),
            alignItems: "center",
            justifyContent: "flex-end",
            "& .splide__arrow": {
              position: "static",
              background: theme.palette.primary.main
            },
            "& .splide__arrow--prev": {
              "& svg": {
                transform: "rotate(180deg)"
              }
            },
            "& .MuiIconButton-root": {
              width: pxToRem(48),
              height: pxToRem(48),
              transform: "none",
              "& svg": {
                width: pxToRem(32),
                height: pxToRem(32),
                "& path": {
                  fill: theme.palette.primary.light
                }
              }
            }
          }
        }
      },
      "& .text-wrapper": {
        flexBasis: "100%"
      }
    }
  }
}))
