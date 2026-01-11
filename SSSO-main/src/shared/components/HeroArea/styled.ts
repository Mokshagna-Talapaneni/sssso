import { NonMuiColors } from "@constants/COLORS"
import { Divider, styled } from "@mui/material"
import { pxToRem } from "@utils/styles"

export const HeroContainer = styled("div", {
  name: "hero-area",
  slot: "root",
  shouldForwardProp: (prop) => prop !== "imgUrl"
})<{ imgUrl: string }>(({ imgUrl }) => ({
  position: "relative",
  height: pxToRem(500),
  backgroundImage: `url(${imgUrl})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex", // Add this to make it a flex container
  alignItems: "center", // Align items vertically in the center
  justifyContent: "center" // Align items horizontally in the center
}))

export const HeroOverlay = styled("div", {
  name: "hero-area",
  slot: "overlay"
})({
  position: "absolute",
  inset: 0,
  background:
    "linear-gradient(to right, rgba(194, 65, 12, 0.6), rgba(194, 65, 12, 0.4))"
})

export const ContentWrapper = styled("div", {
  name: "hero-area",
  slot: "content-wrapper"
})({
  padding: `0 ${pxToRem(24)}`,
  height: "100%",
  display: "flex",
  flexDirection: "column", // Stack items vertically
  alignItems: "center", // Align items horizontally in the center
  justifyContent: "center", // Align items vertically in the center
  textAlign: "center", // Center text within the container
  gap: pxToRem(8) // Add gap between items
})
