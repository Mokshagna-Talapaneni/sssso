import { NonMuiColors } from "@constants/COLORS"
import { styled } from "@mui/material"
import { pxToRem } from "@utils/styles" // Assuming your pxToRem utility

export const IntroContainer = styled("section")({
  padding: pxToRem(64),
  backgroundColor: NonMuiColors.CREME_DARK,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: pxToRem(16)
})
