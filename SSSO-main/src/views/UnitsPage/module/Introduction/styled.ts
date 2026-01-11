import { NonMuiColors } from "@constants/COLORS"
import { styled } from "@mui/material"
import { pxToRem } from "@utils/styles" // Assuming your pxToRem utility

export const Section = styled("section")(({ theme }) => ({
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
  borderRadius: pxToRem(12), // Slightly more rounded corners
  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.15)", // More pronounced shadow
  width: "100%", // Ensure image is responsive
  height: "auto" // Maintain aspect ratio
})
