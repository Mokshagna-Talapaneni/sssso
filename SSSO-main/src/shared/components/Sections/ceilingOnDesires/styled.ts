import { pxToRem } from "@utils/styles"
import { styled } from "@mui/material"

export const CeilingOnDesireContainer = styled("div", {
  name: "ceiling-on-desire",
  slot: "container"
})((muiConfig) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "auto",
  padding: pxToRem(48),
  background: muiConfig.theme.palette.secondary.main,
  boxSizing: "border-box",
  gap: pxToRem(0)
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
  gap: pxToRem(16),
  paddingBottom: pxToRem(50)
})

export const QuotesContainer = styled("div", {
  name: "quotes-container",
  slot: "root"
})(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  gap: pxToRem(24),
  padding: `0 ${pxToRem(80)}`,
  [theme.breakpoints.down("md")]: {
    padding: `0 ${pxToRem(32)}`
  }
}))

export const MidContainer = styled("section", {
  name: "mid-container",
  slot: "root",
  shouldForwardProp: (prop) => prop !== "rowReverse"
})<{ rowReverse?: boolean; backgroundColor?: string }>(
  ({ theme, rowReverse, backgroundColor }) => ({
    display: "flex",
    width: "100%",
    minHeight: pxToRem(600),
    borderRadius: pxToRem(10),
    flexDirection: rowReverse ? "row-reverse" : "row",
    background: backgroundColor || theme.palette.background.paper,
    "& .left-container": {
      flex: "0 0 50%",
      padding: `${pxToRem(64)} ${pxToRem(64)} ${pxToRem(80)}`,
      display: "flex",
      flexDirection: "column",
      gap: pxToRem(16),
      "& ul": {
        margin: 0
      }
    },
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

export const SectionContainer = styled("section", {
  name: "section-container",
  slot: "root",
  shouldForwardProp: (prop) => prop !== "rowReverse"
})<{ rowReverse?: boolean; backgroundColor?: string }>(
  ({ theme, rowReverse, backgroundColor }) => ({
    display: "flex",
    width: "100%",
    minHeight: pxToRem(600),
    borderRadius: pxToRem(10),
    flexDirection: rowReverse ? "row-reverse" : "row",
    background: backgroundColor || theme.palette.background.paper,
    "& .left-container": { flex: "0 0 55%" },
    " & .right-container": {
      flex: "0 0 45%",
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
