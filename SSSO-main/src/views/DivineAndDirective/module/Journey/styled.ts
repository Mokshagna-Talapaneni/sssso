import { NonMuiColors } from "@constants/COLORS"
import { styled } from "@mui/material"
import { pxToRem } from "@utils/styles" // Assuming your pxToRem utility

export const DivineDirectiveContainer = styled("section", {
  name: "divine-and-directive-journey",
  slot: "root"
})(({ theme }) => ({
  backgroundColor: NonMuiColors.WHITE,
  padding: pxToRem(64),
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  gap: pxToRem(64),
  "& .left-container": {
    flex: "1 1 auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  "& .right-container": {
    flex: "0 0 50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: pxToRem(16)
  },
  [theme.breakpoints.down("md")]: {
    flexWrap: "wrap",
    "& .right-container": {
      flex: "1 1 auto",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center"
    }
  }
}))

export const Image = styled("img")({
  width: "100%",
  borderRadius: pxToRem(8), // Assuming rounded-lg is roughly 8px
  boxShadow: `0 ${pxToRem(4)} ${pxToRem(6)} rgba(0, 0, 0, 0.1)` // Equivalent to shadow-lg
})
