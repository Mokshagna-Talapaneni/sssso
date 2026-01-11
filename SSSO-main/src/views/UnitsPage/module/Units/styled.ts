import { NonMuiColors } from "@constants/COLORS"
import { Divider, styled } from "@mui/material"
import { pxToRem } from "@utils/styles" // Assuming your pxToRem utility
import Emblem from "@assets/image/insignia/emblem.jpg"

export const Section = styled("section")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: pxToRem(32),
  background: theme.palette.background.paper,
  padding: pxToRem(80),
  "& .header-container": {
    textAlign: "center"
  }
}))

export const LevelsContainer = styled("div", {
  name: "levels",
  slot: "container"
})({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
})

export const LevelsCard = styled("div", {
  name: "levels",
  slot: "card"
})(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: pxToRem(24),
  boxShadow: theme.shadows[1],
  borderRadius: pxToRem(8),
  padding: pxToRem(24),
  width: pxToRem(600),
  height: pxToRem(300),
  background: `linear-gradient(to right, ${NonMuiColors.FADE_MEDIUM}, ${NonMuiColors.FADE}), url(${Emblem})`
}))

export const LevelsCardConnector = styled(Divider, {
  name: "levels",
  slot: "connector"
})({
  height: pxToRem(80),
  borderWidth: pxToRem(3),
  borderColor: NonMuiColors.PRIMARY
})
