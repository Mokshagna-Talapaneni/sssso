import { NonMuiColors } from "@constants/COLORS"
import { styled } from "@mui/material"
import { pxToRem } from "@utils/styles" // Assuming your pxToRem utility

export const Section = styled("section")({
  maxWidth: pxToRem(1152), // Assuming max-w-7xl is roughly 1152px
  margin: "0 auto",
  paddingLeft: pxToRem(16), // Assuming px-4 is roughly 16px
  paddingRight: pxToRem(16),
  paddingBottom: pxToRem(80) // Assuming pb-20 is roughly 80px
})

export const Grid = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: pxToRem(32),
  position: "relative",
  [theme.breakpoints.up("md")]: {
    // md breakpoint
    gridTemplateColumns: "1fr 1fr 1fr"
  }
}))

export const CardWrapper = styled("div")({
  backgroundColor: "white",
  borderRadius: pxToRem(8), // Assuming rounded-2xl is roughly 8px
  boxShadow: `0 ${pxToRem(4)} ${pxToRem(6)} rgba(0, 0, 0, 0.1)`, // Equivalent to shadow-lg
  overflow: "hidden",
  transition: "transform 300ms, box-shadow 300ms",
  "&:hover": {
    transform: "translateY(-8px)", // Assuming -translate-y-2 is roughly -8px
    boxShadow: `0 ${pxToRem(8)} ${pxToRem(12)} rgba(0, 0, 0, 0.2)`, // Equivalent to shadow-xl
    "& .card-content": {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "100%",
      height: "100%",
      background: NonMuiColors.FADE,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      "& .MuiTypography-root": {
        textAlign: "justify",
        color: NonMuiColors.PRIMARY
      }
    },
    "& .image-container": {
      height: "100%",
      zIndex: 1
    }
  },
  "& .card-content": {
    "& .MuiTypography-root": {
      textAlign: "justify"
    }
  }
})

export const ImageContainer = styled("div")({
  height: pxToRem(300), // Assuming h-64 is roughly 256px
  overflow: "hidden"
})

export const Image = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  transition: "transform 300ms",
  "&:hover": {
    transform: "scale(1.1)" // Equivalent to scale-110
  }
})

export const CardContent = styled("div")({
  padding: pxToRem(24), // Assuming p-6 is roughly 24px,
  display: "flex",
  gap: pxToRem(16),
  zIndex: 2,
  flexDirection: "column"
})
