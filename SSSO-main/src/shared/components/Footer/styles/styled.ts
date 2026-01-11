import { NonMuiColors } from "@constants/COLORS"
import { pxToRem } from "@utils/styles"
import { colors, Divider, styled } from "@mui/material"

export const FooterContainer = styled("footer", {
  name: "footer",
  slot: "root"
})(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: NonMuiColors.PRIMARY,
  color: NonMuiColors.WHITE,
  boxSizing: "border-box",
  flexWrap: "nowrap",
  "& .content-area": {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: `0 ${pxToRem(64)}`,
    [theme.breakpoints.down("lg")]: {
      flexWrap: "wrap"
    }
  },
  "& .copyright-area": {
    padding: pxToRem(24),
    textAlign: "center",
    backgroundColor: NonMuiColors.BLACK,
    width: "100%"
  }
}))

export const LeftContainer = styled("section", {
  name: "left-container",
  slot: "root"
})(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  flexDirection: "column",
  boxSizing: "border-box",
  flex: "1 1 auto",
  "& #seva-org-container": {
    display: "flex",
    flexDirection: "column",
    gap: pxToRem(16),
    justifyContent: "center",
    alignItems: "flex-start",
    padding: `${pxToRem(64)} ${pxToRem(32)}`,
    width: "100%",
    boxSizing: "border-box",
    "& .image-container": {
      width: pxToRem(300),
      "& img": {
        width: "100%"
      }
    },
    "& .swami-image-quote": {
      display: "flex",
      gap: pxToRem(16),
      justifyContent: "center",
      alignItems: "center",
      textAlign: "justify",
      "& .quote-item-image": {
        flex: "1 1 auto",
        width: pxToRem(16)
      },
      "& .quote-item-text": {
        flex: "0 0 50%",
        color: NonMuiColors.FADE_MEDIUM
      }
    }
  },
  "& .link-container": {
    display: "flex",
    flexDirection: "column",
    gap: pxToRem(16),
    justifyContent: "center",
    alignItems: "flex-start",
    paddingTop: pxToRem(32),
    "& .links": {
      display: "flex",
      gap: pxToRem(32),
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      "& .MuiIconButton-root": {
        width: pxToRem(40),
        height: pxToRem(40),
        "& svg": {
          width: pxToRem(40),
          height: pxToRem(40),
          "& path": {
            fill: NonMuiColors.WHITE
          }
        },
        "&:hover": {
          "& svg": {
            width: pxToRem(40),
            height: pxToRem(40),
            "& path": {
              fill: NonMuiColors.CREME_DARK
            }
          }
        }
      }
    }
  },
  [theme.breakpoints.down("md")]: {
    flex: "1 1 100%"
  }
}))

export const RightContainer = styled("section", {
  name: "right-container",
  slot: "root"
})(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  gap: pxToRem(32),
  flex: "0 0 auto",
  boxSizing: "border-box",
  height: "100%",
  padding: pxToRem(32),
  "& a": {
    textDecoration: "none",
    color: "inherit",
    "&:hover": {
      color: NonMuiColors.CREME_DARK
    }
  },
  "& #seva-org-links": {
    display: "flex",
    gap: pxToRem(32),
    justifyContent: "space-between",
    alignItems: "flex-start",
    width: "100%",
    boxSizing: "border-box",
    "& .MuiTypography-root": {
      textTransform: "capitalize"
    },
    "& .link-header": {
      display: "flex",
      flexDirection: "column",
      gap: pxToRem(8)
    },
    "& .important-links": {
      display: "flex",
      flexDirection: "column",
      gap: pxToRem(24),
      justifyContent: "flex-start",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flex: "1 0 auto"
    },
    "& .site-links": {
      display: "flex",
      flexDirection: "column",
      gap: pxToRem(24),
      justifyContent: "flex-start",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flex: "1 0 auto"
    },
    [theme.breakpoints.down("lg")]: { flexWrap: "wrap" }
  },
  [theme.breakpoints.down("lg")]: {
    borderTop: `${pxToRem(1)} solid ${NonMuiColors.FADE_MEDIUM}`,
    width: "100%"
  },
  [theme.breakpoints.down("md")]: {
    flex: "1 1 100%",
    justifyContent: "flex-start",
    height: "auto",
    borderTop: `${pxToRem(1)} solid ${NonMuiColors.FADE_MEDIUM}`
  }
}))

export const DividerHeader = styled(Divider, {
  name: "header",
  slot: "divider"
})({
  borderColor: NonMuiColors.WHITE,
  width: "100%",
  borderWidth: pxToRem(2)
})
