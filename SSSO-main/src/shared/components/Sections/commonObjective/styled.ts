import { pxToRem } from "@utils/styles"
import { styled } from "@mui/material"

export const IIprogramsContainer = styled("div", {
  name: "important-initiatives-programs",
  slot: "container"
})((muiConfig) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "auto",
  padding: pxToRem(48),
  background: muiConfig.theme.palette.secondary.main,
  boxSizing: "border-box",
  gap: pxToRem(100)
}))

export const Objective = styled("div", {
  name: "objective",
  slot: "container"
})(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "center",
  width: "100%",
  gap: pxToRem(32),
  "& .container": {
    flex: "0 0 50%",
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
    padding: 0
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

export const CommonIMG = styled("img", {
  name: "common-img",
  slot: "container"
})({
  width: "100%",
  height: pxToRem(400),
  objectFit: "fill",
  borderRadius: pxToRem(10)
})
