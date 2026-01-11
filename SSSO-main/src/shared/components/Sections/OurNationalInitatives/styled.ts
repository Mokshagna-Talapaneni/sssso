import { pxToRem } from "@utils/styles"
import { styled } from "@mui/material"

export const OurNationalInitativesContainer = styled("div", {
  name: "our-national-initatives-container",
  slot: "container"
})((muiConfig) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "auto",
  padding: pxToRem(48),
  background: muiConfig.theme.palette.secondary.main,
  boxSizing: "border-box"
}))

export const Heading = styled("div", {
  name: "heading",
  slot: "container"
})({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  gap: pxToRem(16)
})

export const OurNationalInitativesHeader = styled("div", {
  name: "our-national-initatives-header",
  slot: "container"
})({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  width: "100%",
  gap: pxToRem(16),
  padding: pxToRem(64)
})

export const SectionContainer = styled("section", {
  name: "section-container",
  slot: "root",
  shouldForwardProp: (prop) => prop !== "rowReverse"
})<{ rowReverse?: boolean; backgroundColor?: string }>(
  ({ theme, rowReverse, backgroundColor }) => ({
    display: "flex",
    width: "100%",
    minHeight: pxToRem(600),
    flexDirection: rowReverse ? "row-reverse" : "row",
    background: backgroundColor || theme.palette.background.paper,
    "& .left-container": { flex: "0 0 50%" },
    " & .right-container": {
      flex: "0 0 50%",
      padding: `${pxToRem(64)} ${pxToRem(64)} ${pxToRem(80)}`,
      display: "flex",
      flexDirection: "column",
      gap: pxToRem(16),
      "& ul": {
        margin: 0
      }
    },
    [theme.breakpoints.down("md")]: {
      flexWrap: "wrap",
      "& .left-container": { flex: "0 0 100%" },
      " & .right-container": {
        flex: "0 0 100%"
      }
    }
  })
)

export const CommonIMG = styled("img", {
  name: "common-img",
  slot: "container"
})({
  width: "100%",
  height: "100%",
  objectFit: "fill",
  borderRadius: pxToRem(10)
})
