import { pxToRem } from "@utils/styles"
import { styled } from "@mui/material"

export const IntroContainer = styled("div", {
  name: "intro-container",
  slot: "root"
})(({ theme }) => ({
  display: "flex",
  gap: pxToRem(32),
  alignItems: "center",
  padding: pxToRem(64),
  position: "relative",
  background: theme.palette.background.paper,
  "& .right-container": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: pxToRem(16),
    zIndex: 2
  },
  [theme.breakpoints.down("md")]: {
    flexWrap: "wrap"
  }
}))

export const SwamiImageBubbleContainer = styled("div", {
  name: "swami-image",
  slot: "bubble",
  shouldForwardProp: (prop) => prop !== "swamiImage"
})<{ swamiImage: string }>(({ theme, swamiImage }) => ({
  padding: pxToRem(8),
  width: "100%",
  height: pxToRem(700),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 2,
  "& .swami-pic": {
    backgroundImage: `url(${swamiImage})`,
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
    backgroundPosition: "right",
    borderRadius: pxToRem(8),
    backgroundRepeat: "no-repeat"
  }
}))
