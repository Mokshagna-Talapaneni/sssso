import { pxToRem } from "@utils/styles"
import { styled } from "@mui/material"
import { NonMuiColors } from "@constants/COLORS"
import SwamiImage from "@assets/image/sai-baba-2.png"
import Quote from "@assets/svg/quote.svg"
import zIndex from "@mui/material/styles/zIndex"

export const AboutUsContainer = styled("div", {
  name: "about-us",
  slot: "container"
})(({ theme }) => ({
  position: "relative",
  boxSizing: "border-box",
  padding: pxToRem(48),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: pxToRem(24),
  background: theme.palette.background.paper,
  color: NonMuiColors.BLACK,
  flexDirection: "row-reverse",
  "&:before": {
    content: "' '",
    position: "absolute",
    top: "50%",
    right: "0",
    width: "50%",
    height: "100%",
    display: "block",
    background: theme.palette.primary.main,
    transform: "translateY(-50%)",
    borderRadius: "0% 100% 0% 100% / 0% 0% 100% 100%",
    zIndex: 1
  },
  "& .left-section": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: pxToRem(16),
    boxSizing: "border-box",
    gap: pxToRem(16),
    zIndex: 2,
    [theme.breakpoints.down("md")]: {
      width: "100%"
    }
  },
  "& .right-section": {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "column",
    gap: pxToRem(16),
    zIndex: 2
  },
  [theme.breakpoints.up("lg")]: {
    "& .left-section": {
      flex: "0 0 50%"
    },
    "& .right-section": {
      flex: "1 1 50%"
    }
  },
  [theme.breakpoints.down("lg")]: {
    flexWrap: "wrap",
    flexDirection: "column",
    borderBottom: `${pxToRem(2)} solid ${theme.palette.primary.main}`,
    "&:before": {
      content: "' '",
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "40%",
      transform: "translateY(0)",
      borderRadius: "1% 99% 50% 50% / 0% 0% 100% 100% "
    }
  }
}))

export const SwamiImageBubbleContainer = styled("div", {
  name: "swami-image",
  slot: "bubble",
  shouldForwardProp: (prop) => prop !== "swamiImage"
})<{ swamiImage: string }>(({ theme, swamiImage }) => ({
  padding: pxToRem(8),
  width: pxToRem(300),
  height: pxToRem(500),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "& .swami-pic": {
    backgroundImage: `url(${swamiImage})`,
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
    backgroundPosition: "right",
    borderRadius: pxToRem(8),
    backgroundRepeat: "no-repeat"
  }
}))
