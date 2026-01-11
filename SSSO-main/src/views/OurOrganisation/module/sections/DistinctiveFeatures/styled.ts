import { pxToRem } from "@utils/styles"
import { styled } from "@mui/material"
import { NonMuiColors } from "@constants/COLORS"

export const DistinctiveFeaturesContainer = styled("div", {
  name: "distinctive-features",
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

export const DistinctiveFeaturesCard = styled("div", {
  name: "distinctive-features",
  slot: "card"
})({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  alignItems: "center",
  alignContent: "flex-end",
  width: "100%",
  height: "100%",
  gap: pxToRem(12),
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  padding: pxToRem(24),
  minHeight: pxToRem(300),
  borderRadius: pxToRem(8),
  background: NonMuiColors.CREME_DARK,
  textAlign: "center",
  "& .icon-container": {
    "& svg": {
      height: pxToRem(160)
    }
  },
  "& .MuiTypography-root": {
    textAlign: "center"
  }
})
