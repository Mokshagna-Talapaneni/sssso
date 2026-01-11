import { NonMuiColors } from "@constants/COLORS"
import { AppBar, Button, Drawer, Popover, styled } from "@mui/material"
import { grey } from "@mui/material/colors"
import { pxToRem } from "@utils/styles"
import { NavLink } from "react-router"

export const NavAppBar = styled(AppBar, {
  name: "nav-app-bar",
  slot: "root"
})({
  position: "fixed",
  "& .MuiContainer-root": {
    padding: `0 ${pxToRem(24)} 0 0`,
    position: "relative",
    margin: 0,
    maxWidth: "100%"
  }
})

export const NavMenuLogoContainer = styled("div", {
  name: "nav-menu",
  slot: "logo-container"
})({
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  gap: pxToRem(48)
})

export const LogoWrapper = styled("div", {
  name: "nav-menu",
  slot: "logo-wrapper"
})({
  display: "flex",
  boxSizing: "border-box",
  borderRadius: "0% 100% 35% 65% / 100% 0% 100% 0%",
  background: NonMuiColors.WHITE,
  width: pxToRem(400),
  padding: `${pxToRem(8)} ${pxToRem(24)}`,
  "& .nav-logo-img": {
    height: pxToRem(90)
  },
  position: "absolute",
  left: 0,
  top: 0
})

export const NavMenuItemsContainer = styled("div", {
  name: "nav-menu",
  slot: "items-container"
})(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: pxToRem(12),
  [theme.breakpoints.down("lg")]: {
    display: "none"
  },
  "& .nav-links-active": {
    borderBottom: `${pxToRem(2.5)} solid ${theme.palette.primary.light}`
  }
}))

export const NavMenuItemsCollapsedButtonContainer = styled("div", {
  name: "nav-menu-collapsed",
  slot: "button-container"
})(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  [theme.breakpoints.up("lg")]: {
    display: "none"
  },
  "& svg": {
    fill: theme.palette.primary.light,
    width: pxToRem(32),
    height: pxToRem(32)
  }
}))

export const NavLinkButton = styled(NavLink, {
  name: "react-router",
  slot: "nav-link"
})(({ theme, id }) => ({
  fontFamily: "roboto,sans-serif",
  textDecoration: "none",
  color: id?.includes("sub-menu")
    ? theme.palette.primary.main
    : theme.palette.primary.light,
  background: id?.includes("sub-menu")
    ? theme.palette.primary.contrastText
    : "transparent",
  transition: "all 0.1s linear",
  border: 0,
  cursor: "pointer",
  borderRadius: 0,
  padding: `${pxToRem(6)} ${pxToRem(8)}`,
  "&:hover": {
    borderBottom: id?.includes("sub-menu")
      ? `${pxToRem(2.5)} solid ${theme.palette.primary.main}`
      : `${pxToRem(2.5)} solid ${theme.palette.primary.light}`,
    background: id?.includes("sub-menu") ? NonMuiColors.FADE : "none",
    color: id?.includes("sub-menu") ? "inherit" : NonMuiColors.CREME_DARK
  },
  [theme.breakpoints.down("lg")]: {
    "&:hover": {
      borderBottom: `${pxToRem(2.5)} solid ${theme.palette.primary.main}`
    }
  }
}))

export const NavLinkButtonWidthChild = styled(Button, {
  name: "react-router",
  slot: "nav-link-child"
})(({ theme }) => ({
  textDecoration: "none",
  color: theme.palette.primary.light,
  transition: "all 0.1s linear",
  border: 0,
  cursor: "pointer",
  textTransform: "capitalize",
  borderRadius: 0,
  "&:hover": {
    borderBottom: `${pxToRem(2.5)} solid ${theme.palette.primary.light}`,
    background: "transparent",
    color: NonMuiColors.CREME_DARK
  },
  [theme.breakpoints.down("lg")]: {
    "&:hover": {
      borderBottom: `${pxToRem(2.5)} solid ${theme.palette.primary.main}`
    }
  }
}))

export const NavDrawer = styled(Drawer, {
  name: "nav-menu",
  slot: "drawer"
})(({ theme }) => ({
  display: "block",
  [theme.breakpoints.up("lg")]: {
    display: "none"
  },
  "& .MuiDrawer-paper": {
    boxSizing: "border-box",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: NonMuiColors.FADE,
    padding: pxToRem(80),
    position: "relative"
  }
}))

export const DrawerContainer = styled("div", {
  name: "drawer",
  slot: "container"
})(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: pxToRem(48),
  flexDirection: "column",
  width: "100%",
  height: "100%",
  "& .nav-links": {
    color: theme.palette.primary.main
  },
  "& .nav-links-active": {
    color: theme.palette.primary.main,
    borderBottom: `${pxToRem(2.5)} solid ${theme.palette.primary.main}`
  },
  "& .close-icon": {
    position: "absolute",
    right: pxToRem(48),
    top: pxToRem(48),
    "& svg": {
      width: pxToRem(32),
      height: pxToRem(32),
      fill: theme.palette.primary.main
    }
  },
  "& .back-button": {
    display: "flex",
    gap: pxToRem(8),
    padding: pxToRem(8)
  }
}))

export const ContentFiller = styled("div", {
  name: "content-filler",
  slot: "root"
})({
  content: '" "',
  padding: pxToRem(32)
})

export const PopoverContainer = styled(Popover, {
  name: "navbar-menu",
  slot: "popover-container"
})(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: pxToRem(8),
    padding: pxToRem(8),
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    alignContent: "center",
    background: NonMuiColors.WHITE,
    minWidth: pxToRem(218)
  },
  "& .MuiDivider-root": {
    width: "100%"
  },
  "& .sub-menu-links": {
    padding: ` ${pxToRem(12)} ${pxToRem(16)}`,
    boxSizing: "border-box",
    width: "100%"
  },
  "& .nav-links-active": {
    borderBottom: `${pxToRem(2.5)} solid ${theme.palette.primary.main}`,
    background: grey[100]
  }
}))