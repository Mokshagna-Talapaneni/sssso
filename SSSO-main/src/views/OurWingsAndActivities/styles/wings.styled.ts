import { pxToRem } from "@utils/styles"
import { styled } from "@mui/material"

export const WingsContainer = styled("section", {
  name: "wings-container",
  slot: "root",
  shouldForwardProp: (prop) => prop !== "rowReverse"
})<{ rowReverse?: boolean; backgroundColor?: string }>(
  ({ theme, rowReverse, backgroundColor }) => ({
    display: "flex",
    width: "100%",
    minHeight: pxToRem(800),
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

export const ImageContainer = styled("div", {
  name: "image-container",
  slot: "root",
  shouldForwardProp: (prop) => prop !== "imgUrl"
})<{ imgUrl: string }>(({ theme, imgUrl }) => ({
  width: "100%",
  height: "100%",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundImage: `url(${imgUrl})`,
  [theme.breakpoints.down("md")]: {
    height: pxToRem(500)
  }
}))
