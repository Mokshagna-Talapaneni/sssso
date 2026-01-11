import { NonMuiColors } from "@constants/COLORS"
import { styled } from "@mui/material"
import { pxToRem } from "@utils/styles" // Assuming your pxToRem utility

export const Section = styled("section")({
  padding: pxToRem(64),
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: pxToRem(24),
  width: "100%",
  boxSizing: "border-box"
})

export const Divider = styled("div")({
  width: pxToRem(96),
  height: pxToRem(4),
  backgroundColor: NonMuiColors.PRIMARY,
  margin: "0 auto",
  borderRadius: pxToRem(2)
})
