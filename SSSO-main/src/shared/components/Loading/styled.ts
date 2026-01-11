import { pxToRem } from "@utils/styles"
import { styled } from "@mui/material"

export const LoadingContainer = styled("div", {
  name: "loading",
  slot: "container"
})(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100vw",
  height: "100vh",
  backgroundColor: theme.palette.background.primary,
  zIndex: 9999,
  gap: pxToRem(16),
  "& img": {
    height: pxToRem(80)
  }
}))
