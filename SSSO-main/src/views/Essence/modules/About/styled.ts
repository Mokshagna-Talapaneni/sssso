import { NonMuiColors } from "@constants/COLORS"
import { styled } from "@mui/material"
import { pxToRem } from "@utils/styles"

export const AboutContainer = styled("div", {
  name: "about",
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
    zIndex: 2,
    "& .pdf-controls": {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: pxToRem(24),
      "& a": {
        textDecoration: "none",
        "&:hover": {
          color: theme.palette.primary.light
        }
      }
    }
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
      height: pxToRem(480),
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
    backgroundPosition: "center",
    borderRadius: pxToRem(8),
    backgroundRepeat: "no-repeat"
  }
}))

export const PDFContainer = styled("div", { name: "pdf", slot: "container" })(
  ({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100vw",
    height: "100vh",
    gap: pxToRem(32),
    background: theme.palette.background.paper,
    position: "relative",
    "& .react-pdf__Document": {
      height: "90vh !important",
      margin: "auto 0",
      "& .react-pdf__Page": {
        "& .react-pdf__Page__canvas": {
          height: "90vh !important",
          width: `${pxToRem(580)} !important`,

          [theme.breakpoints.down("lg")]: {
            width: `65vh !important`
          }
        },
        "& .react-pdf__Page__textContent": {
          height: "90vh !important"
        }
      }
    },
    [theme.breakpoints.down("md")]: {
      "& .react-pdf__Document": {
        height: "auto !important",
        "& .react-pdf__Page": {
          "& .react-pdf__Page__canvas": {
            height: "auto !important",
            width: `100vw !important`
          },
          "& .react-pdf__Page__textContent": {
            height: "64vh !important"
          }
        }
      }
    },
    "& .controls": {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: pxToRem(24),
      paddingBottom: pxToRem(64),
      [theme.breakpoints.down("lg")]: {
        paddingBottom: pxToRem(80)
      },
      [theme.breakpoints.down("md")]: {
        paddingBottom: pxToRem(128)
      },
      "& .Mui-disabled": {
        "& .MuiTypography-root": {
          color: theme.palette.text.disabled
        }
      }
    },
    "& .close-container": {
      position: "absolute",
      top: pxToRem(16),
      right: pxToRem(16),
      zIndex: 2,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "transparent",
      borderRadius: "50%",
      padding: pxToRem(8),
      cursor: "pointer",
      backgroundColor: theme.palette.primary.main,
      width: pxToRem(32),
      height: pxToRem(32),
      "& svg": {
        fill: theme.palette.primary.light,
        width: pxToRem(32),
        height: pxToRem(32)
      }
    }
  })
)
