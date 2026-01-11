import { pxToRem } from "@utils/styles"
import { Button, styled } from "@mui/material"
import { NonMuiColors } from "@constants/COLORS"

export const OurJourneyContainer = styled("div", {
  name: "our-journey",
  slot: "container"
})(({ theme }) => ({
  position: "relative",
  boxSizing: "border-box",
  padding: `${pxToRem(48)} ${pxToRem(54)}`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: pxToRem(24),
  background: theme.palette.background.paper,
  color: NonMuiColors.BLACK,
  "& .left-section": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: pxToRem(16),
    boxSizing: "border-box"
  },
  "& .right-section": {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "column",
    gap: pxToRem(16),
    paddingBottom: pxToRem(200)
  },
  "& .img-container": {
    display: "flex",
    "& img": {
      height: pxToRem(200),
      marginBottom: pxToRem(-1)
    }
  },
  [theme.breakpoints.up("md")]: {
    "& .left-section": {
      flex: "0 0 auto",
      width: pxToRem(460)
    },
    "& .right-section": {
      flex: "1 1 auto"
    },
    "& .img-container": {
      alignItems: "flex-end",
      justifyContent: "flex-end",
      width: "100%",
      position: "absolute",
      right: pxToRem(32),
      bottom: 0
    }
  },
  [theme.breakpoints.down("md")]: {
    flexWrap: "wrap",
    "& .img-container": {
      alignItems: "center",
      justifyContent: "center",
      position: "absolute",
      right: 0,
      bottom: 0
    }
  }
}))

export const TabButtonContainer = styled("div", {
  name: "tab",
  slot: "button-container"
})(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: pxToRem(24),
  "& .tab-active": {
    background: theme.palette.primary.main,
    color: theme.palette.primary.light,
    "&:hover": {
      background: theme.palette.primary.dark,
      color: theme.palette.primary.light
    }
  }
}))

export const TabButton = styled(Button, {
  name: "tab",
  slot: "button"
})(({ theme }) => ({
  padding: `${pxToRem(8)} ${pxToRem(16)}`,
  borderRadius: pxToRem(32),
  background: theme.palette.primary.light,
  color: theme.palette.primary.main,
  "-webkit-box-shadow": `-${pxToRem(2)} ${pxToRem(2)} ${pxToRem(12)} -${pxToRem(3)} rgba(0,0,0,0.63)`,
  "-moz-box-shadow": ` -${pxToRem(2)} ${pxToRem(2)} ${pxToRem(12)} -${pxToRem(3)} rgba(0,0,0,0.63)`,
  boxShadow: `-${pxToRem(2)} ${pxToRem(2)} ${pxToRem(12)} -${pxToRem(3)} rgba(0,0,0,0.63)`,
  textTransform: "none",
  "&:hover": {
    background: theme.palette.primary.main,
    color: theme.palette.primary.light
  }
}))

export const SwamiImageBubbleContainer = styled("div", {
  name: "swami-image",
  slot: "bubble",
  shouldForwardProp: (prop) => prop !== "swamiImage"
})<{ swamiImage: string }>(({ theme, swamiImage }) => ({
  padding: pxToRem(8),
  background: theme.palette.primary.main,
  width: pxToRem(600),
  height: pxToRem(560),
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "& .swami-pic": {
    backgroundImage: `url(${swamiImage})`,
    width: pxToRem(588),
    height: pxToRem(548),
    backgroundSize: "cover",
    backgroundPosition: "right",
    borderRadius: "50%",
    backgroundRepeat: "no-repeat"
  },
  [theme.breakpoints.up("md")]: {
    marginLeft: "-70%"
  }
}))
