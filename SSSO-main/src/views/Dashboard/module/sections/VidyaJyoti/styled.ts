import { pxToRem } from "@utils/styles"
import { styled } from "@mui/material"
import { NonMuiColors } from "@constants/COLORS"
import NationalInitiativesImage from "@assets/image/compressed/vidya_jyoti/5.webp"

export const VidyaJyotiContainer = styled("div", {
  name: "vidya-jyoti",
  slot: "container"
})(({ theme }) => ({
  display: "flex",
  flexDirection: "row-reverse",
  alignItems: "center",
  width: "100%",
  boxSizing: "border-box",
  padding: pxToRem(64),
  background: theme.palette.secondary.main,
  gap: pxToRem(32),
  "& .container": {
    flex: "0 0 50%",
    display: "flex",
    flexDirection: "column"
  },
  "& .container-resize": {
    flex: "1 1 50%"
  },
  [theme.breakpoints.down("md")]: {
    flexWrap: "wrap",
    flexDirection: "row",
    "& .container": {
      flex: "0 0 100%"
    }
  }
}))

export const VidyaJyotiDescription = styled("div", {
  name: "vidya-jyoti-description",
  slot: "container"
})(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  gap: pxToRem(16),
  width: `100%`,
  "& .divider": {
    width: "100%",
    margin: `${pxToRem(16)} 0 0`,
    backgroundColor: NonMuiColors.WHITE
  },
  [theme.breakpoints.down("md")]: {
    width: "100%"
  }
}))

export const VidyaJyotiImageContainer = styled("div", {
  name: "vidya-jyoti",
  slot: "image-container"
})(({ theme }) => ({
  height: pxToRem(500),
  width: "100%",
  backgroundImage: `url(${NationalInitiativesImage})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  borderRadius: pxToRem(8),
  boxSizing: "border-box",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-end",
  "-webkit-box-shadow": `-${pxToRem(2)} ${pxToRem(2)} ${pxToRem(15)} -${pxToRem(6)} rgba(0,0,0,0.75)`,
  "-moz-box-shadow": `-${pxToRem(2)} ${pxToRem(2)} ${pxToRem(15)} -${pxToRem(6)} rgba(0,0,0,0.75)`,
  boxShadow: `-${pxToRem(2)} ${pxToRem(2)} ${pxToRem(15)} -${pxToRem(6)} rgba(0,0,0,0.75)`,
  "& .hover-div": {
    height: "auto",
    transition: "all 0.2s linear",
    width: "100%",
    padding: pxToRem(24),
    boxSizing: "border-box",
    backgroundColor: NonMuiColors.FADE_MEDIUM,
    backdropFilter: `blur(4px)`,
    borderRadius: `0 0 ${pxToRem(8)} ${pxToRem(8)}`,
    "& .link-to-page": {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      textDecoration: "none",
      "& svg": {
        fill: theme.palette.secondary.light
      }
    }
  },
  "&:hover": {
    "& .hover-div": {
      backdropFilter: `blur(16px)`
    }
  }
}))
