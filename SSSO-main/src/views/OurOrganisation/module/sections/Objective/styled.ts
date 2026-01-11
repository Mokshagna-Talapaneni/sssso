import { NonMuiColors } from "@constants/COLORS"
import { styled } from "@mui/material"
import { pxToRem } from "@utils/styles" // Assuming your pxToRem utility

export const ObjectiveContainer = styled("section", {
  name: "objective",
  slot: "container"
})({
  padding: pxToRem(64),
  backgroundColor: NonMuiColors.CREME_DARK,
  textAlign: "center"
})
