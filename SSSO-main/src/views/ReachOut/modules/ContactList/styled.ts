import { pxToRem } from "@utils/styles"
import { styled } from "@mui/material"
import SwamiImage from "@assets/image/compressed/swami_images/36.webp"
import SwamiImage2 from "@assets/image/compressed/swami_images/39.webp"
import { NonMuiColors } from "@constants/COLORS"
import logo from "@assets/image/insignia/flag.jpg"
import { CSVLink } from "react-csv"

export const ContactListContainer = styled("div", {
  name: "contact-list",
  slot: "container"
})(({ theme }) => ({
  display: "flex",
  gap: pxToRem(24),
  padding: pxToRem(64),
  background: theme.palette.background.paper,
  flexDirection: "column",
  "& .region-level": {
    display: "flex",
    "& .left-container": {
      flex: "0 0 20%",
      background: `linear-gradient(to right, ${NonMuiColors.FADE_MEDIUM}, ${NonMuiColors.FADE}), url(${SwamiImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      borderRadius: pxToRem(8),
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      "& .break": {
        marginTop: pxToRem(16)
      },
      [theme.breakpoints.down("md")]: {
        flex: "0 0 100%",
        flexDirection: "row",
        flexWrap: "no-wrap",
        height: pxToRem(200)
      }
    },
    "& .left-container-2": {
      background: `linear-gradient(to right, ${NonMuiColors.FADE_MEDIUM}, ${NonMuiColors.FADE}), url(${SwamiImage2})`,
      backgroundSize: "cover",
      backgroundPosition: "center"
    },
    "& .right-container": {
      flex: "0 0 80%",
      padding: pxToRem(24),
      display: "flex",
      gap: pxToRem(24),
      flexDirection: "column",
      "& .cards-container": {
        display: "flex",
        gap: pxToRem(16),
        width: "100%",
        flexWrap: "wrap",
        "& .MuiTypography-root": {
          textAlign: "center"
        }
      },
      [theme.breakpoints.down("md")]: {
        flex: "0 0 100%"
      }
    },
    [theme.breakpoints.down("md")]: {
      flexWrap: "wrap",
      gap: pxToRem(24)
    }
  }
}))

export const ReactUsCard = styled("div", {
  name: "contact-list",
  slot: "reach-card"
})(({ theme }) => ({
  padding: pxToRem(24),
  gap: pxToRem(12),
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  borderRadius: pxToRem(8),
  background: `linear-gradient(to right, ${NonMuiColors.FADE_MEDIUM}, ${NonMuiColors.FADE}), url(${logo})`,
  width: "31%",
  backgroundSize: "cover",
  backgroundPosition: "center",
  transition: "all 0.1s linear",
  zIndex: 2,
  "& .MuiTypography-root": {
    textTransform: "capitalize"
  },
  "&:hover": {
    transform: "scale(1.1)"
  },
  "& a": {
    textDecoration: "underline",
    color: "inherit"
  },
  [theme.breakpoints.down("lg")]: {
    width: "48%"
  },
  [theme.breakpoints.down("md")]: {
    width: "100%"
  }
}))

export const CSVLinkButton = styled(CSVLink, {
  name: "csv-link",
  slot: "button"
})({
  textDecoration: "underline",
  color: "inherit"
})
