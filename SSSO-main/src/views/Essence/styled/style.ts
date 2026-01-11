import { pxToRem } from "@utils/styles"
import { Button, styled } from "@mui/material"

export const OutlinedButtonTransparent = styled(Button, {
  name: "outlined",
  slot: "button-transparent"
})(({ theme }) => ({
  textDecoration: "none",
  padding: `${pxToRem(8)} ${pxToRem(16)}`,
  color: theme.palette.primary.main,
  textTransform: "none",
  borderRadius: pxToRem(32),
  transition: "all 0.1s linear",
  border: `${pxToRem(1)} solid ${theme.palette.primary.main}`,
  "&:hover": {
    margin: `${pxToRem(16)} 0 ${pxToRem(32)}`,
    background: theme.palette.primary.main,
    color: theme.palette.primary.light,
    border: 0,
    "& svg": {
      fill: theme.palette.primary.light
    },
    "& a": {
      color: theme.palette.primary.light
    }
  },
  "& svg": {
    fill: theme.palette.primary.main,
    width: pxToRem(14),
    height: pxToRem(14),
    marginBottom: pxToRem(2)
  },
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: pxToRem(8),
  margin: `${pxToRem(16)} 0 ${pxToRem(32)} ${pxToRem(-16)}`,
  "& a": {
    color: theme.palette.primary.main
  }
}))
