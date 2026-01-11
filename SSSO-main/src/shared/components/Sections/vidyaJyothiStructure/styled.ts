import { Padding } from "@mui/icons-material"
import { styled } from "@mui/material"
import { pxToRem } from "@utils/styles"

export const Container = styled("div")({
  padding: pxToRem(64),
  margin: "0 auto",
  textAlign: "left"
})
