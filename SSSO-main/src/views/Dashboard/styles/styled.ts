import { pxToRem } from "@utils/styles"
import { styled } from "@mui/material"
import { Link, NavLink } from "react-router"

export const DashboardContainer = styled("div", {
  name: "dashboard",
  slot: "container"
})({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  gap: 0
})

export const OutlinedButton = styled(Link, {
  name: "outlined",
  slot: "button"
})<{ usePrimaryMain?: boolean }>(({ theme, usePrimaryMain = false }) => ({
  textDecoration: "none",
  padding: `${pxToRem(8)} ${pxToRem(16)}`,
  borderRadius: pxToRem(32),
  border: `${pxToRem(2)} solid ${usePrimaryMain ? theme.palette.primary.main : theme.palette.primary.light}`,
  color: usePrimaryMain
    ? theme.palette.primary.main
    : theme.palette.primary.light,
  "-webkit-box-shadow": `-${pxToRem(2)} ${pxToRem(2)} ${pxToRem(12)} -${pxToRem(3)} rgba(0,0,0,0.63)`,
  "-moz-box-shadow": ` -${pxToRem(2)} ${pxToRem(2)} ${pxToRem(12)} -${pxToRem(3)} rgba(0,0,0,0.63)`,
  boxShadow: `-${pxToRem(2)} ${pxToRem(2)} ${pxToRem(12)} -${pxToRem(3)} rgba(0,0,0,0.63)`,
  textTransform: "none",
  "&:hover": {
    background: usePrimaryMain
      ? theme.palette.primary.main
      : theme.palette.error.main,
    color: theme.palette.primary.light,
    borderColor: usePrimaryMain
      ? theme.palette.primary.main
      : theme.palette.error.main,
    "& svg": {
      fill: theme.palette.primary.light
    }
  },
  "& svg": {
    fill: usePrimaryMain
      ? theme.palette.primary.main
      : theme.palette.primary.light,
    width: pxToRem(14),
    height: pxToRem(14),
    marginBottom: pxToRem(2)
  },
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: pxToRem(8),
  margin: `${pxToRem(32)} 0 ${pxToRem(48)}`
}))

export const OutlinedButtonTransparent = styled(NavLink, {
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
    "& svg": {
      fill: theme.palette.primary.light
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
  margin: `${pxToRem(16)} 0 ${pxToRem(32)} ${pxToRem(-16)}`
}))
