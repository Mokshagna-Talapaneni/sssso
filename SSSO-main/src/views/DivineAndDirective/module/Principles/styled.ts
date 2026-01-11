import { pxToRem } from "@utils/styles"
import { styled } from "@mui/material"
import { NonMuiColors } from "@constants/COLORS"

export const PrinciplesContainer = styled("div", {
  name: "principles",
  slot: "container"
})(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  background: theme.palette.background.light,
  padding: pxToRem(64),
  boxSizing: "border-box",
  gap: pxToRem(32)
}))

export const PrinciplesCard = styled("div", {
  name: "principles",
  slot: "card"
})({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "center",
  width: "100%",
  height: "100%",
  gap: pxToRem(12),
  padding: pxToRem(24),
  minHeight: pxToRem(200),
  borderRadius: pxToRem(2),
  background: NonMuiColors.CREME_DARK,
  textAlign: "center",
  "& .icon-container": {
    "& svg": {
      height: pxToRem(100)
    }
  }
})
