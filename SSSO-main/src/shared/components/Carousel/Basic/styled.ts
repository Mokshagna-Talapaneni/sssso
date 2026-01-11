import { pxToRem } from "@utils/styles"
import { styled } from "@mui/material"

export const BasicSlideWrapper = styled("div", {
  name: "basic-slide",
  slot: "wrapper"
})(({ theme }) => ({
  width: "100%",
  [theme.breakpoints.down("md")]: {
    width: "100%"
  }
}))
