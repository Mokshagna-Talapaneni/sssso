import { pxToRem } from "@utils/styles"
import { styled } from "@mui/material"
import SwamiImage from "@assets/image/compressed/landscape/2.webp"
import SwamiImage2 from "@assets/image/compressed/landscape/1.webp"
import SwamiImage3 from "@assets/image/compressed/landscape/6.webp"

export const OurWingsContainer = styled("div", {
  name: "our-wings",
  slot: "container"
})((muiConfig) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "auto",
  background: muiConfig.theme.palette.background.paper,
  boxSizing: "border-box"
}))

export const OurWingsHeader = styled("div", {
  name: "our-wings-header",
  slot: "container"
})({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  width: "100%",
  gap: pxToRem(16),
  padding: pxToRem(48)
})

export const ServiceWingContainer = styled("div", {
  name: "service-wing",
  slot: "container"
})(({ theme }) => ({
  display: "flex",
  flexDirection: "row-reverse",
  justifyContent: "flex-start",
  alignItems: "center",
  width: "100%",
  gap: pxToRem(32),
  background: `linear-gradient(to right, ${theme.palette.background.secondary}, ${theme.palette.background.secondary}),url(${SwamiImage})`,
  backgroundSize: "cover",
  backgroundBlendMode: "hard-light",
  padding: pxToRem(48),
  "& .container": {
    flex: "1 1 50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: pxToRem(16),
    width: pxToRem(10),
    paddingRight: pxToRem(16),
    boxSizing: "border-box"
  },
  "& .slide-container": {
    padding: 0,
    flex: "0 0 50%"
  },
  [theme.breakpoints.down("md")]: {
    flexWrap: "wrap",
    flexDirection: "row",
    gap: pxToRem(48),
    "& .container": {
      flex: "1 1 100%"
    }
  }
}))

export const SpiritualWingContainer = styled("div", {
  name: "spiritual-wing",
  slot: "container"
})(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-start",
  flexDirection: "row",
  alignItems: "center",
  width: "100%",
  gap: pxToRem(32),
  padding: pxToRem(48),
  background: `linear-gradient(to right, ${theme.palette.background.secondary}, ${theme.palette.background.secondary}),url(${SwamiImage2})`,
  backgroundSize: "cover",
  backgroundBlendMode: "hard-light",
  "& .container": {
    flex: "1 1 50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: pxToRem(16),
    width: pxToRem(10),
    paddingLeft: pxToRem(16),
    boxSizing: "border-box"
  },
  "& .slide-container": {
    justifyContent: "flex-end",
    alignItems: "flex-end",
    padding: 0,
    flex: "0 0 50%"
  },
  [theme.breakpoints.down("md")]: {
    flexWrap: "wrap",
    flexDirection: "row-reverse",
    gap: pxToRem(48),
    "& .container": {
      flex: "1 1 100%"
    }
  }
}))

export const EducationWingContainer = styled("div", {
  name: "education-wing",
  slot: "container"
})(({ theme }) => ({
  display: "flex",
  flexDirection: "row-reverse",
  justifyContent: "flex-start",
  alignItems: "center",
  background: `linear-gradient(to right, ${theme.palette.background.secondary}, ${theme.palette.background.secondary}),url(${SwamiImage3})`,
  backgroundSize: "cover",
  backgroundBlendMode: "hard-light",
  width: "100%",
  gap: pxToRem(32),
  padding: pxToRem(48),
  "& .container": {
    flex: "1 1 50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: pxToRem(16),
    width: pxToRem(10),
    paddingRight: pxToRem(16),
    boxSizing: "border-box"
  },
  "& .slide-container": {
    padding: 0,
    flex: "0 0 50%"
  },
  [theme.breakpoints.down("md")]: {
    flexWrap: "wrap",
    flexDirection: "row",
    gap: pxToRem(48),
    "& .container": {
      flex: "1 1 100%"
    }
  }
}))

export const QuotesContainer = styled("div", {
  name: "quotes-container",
  slot: "root"
})(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  gap: pxToRem(24),
  padding: pxToRem(80),
  textAlign: "center"
}))
