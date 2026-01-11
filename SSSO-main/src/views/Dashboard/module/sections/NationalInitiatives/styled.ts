import { pxToRem } from "@utils/styles"
import { styled } from "@mui/material"
import { grey } from "@mui/material/colors"
import GS4 from "@assets/image/compressed/gram_seva/4.webp"
import { NonMuiColors } from "@constants/COLORS"

export const NationalInitiativesContainer = styled("div", {
  name: "national-initiatives",
  slot: "container"
})(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  width: "100%",
  boxSizing: "border-box",
  padding: `${pxToRem(48)} ${pxToRem(48)} ${pxToRem(64)}`,
  background: grey[200],
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
    flexDirection: "row-reverse",
    "& .container": {
      flex: "0 0 100%"
    }
  }
}))

export const NationalInitiativeDescription = styled("div", {
  name: "national-initiatives-description",
  slot: "container"
})(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  gap: pxToRem(16),
  width: `calc(100% - ${pxToRem(48)})`,
  "& .divider": {
    width: "100%",
    margin: `${pxToRem(16)} 0 0`
  },
  [theme.breakpoints.down("md")]: {
    width: "100%"
  }
}))

export const NationalInitiativesImageContainer = styled("div", {
  name: "national-initiatives",
  slot: "image-container"
})(({ theme }) => ({
  height: pxToRem(500),
  width: "100%",
  backgroundImage: `url(${GS4})`,
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
