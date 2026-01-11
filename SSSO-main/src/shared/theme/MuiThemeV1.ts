import { NonMuiColors } from "@constants/COLORS"
import { createTheme } from "@mui/material"
import { grey } from "@mui/material/colors"
import { pxToRem } from "@utils/styles"

/*
 *
 * Declarations to Override Theme
 *
 */

declare module "@mui/material/styles" {
  //Add self added features to theme
  interface Theme {
    status: {
      danger: string
    }
  }
  interface TypeBackground {
    light: string
    primary: string
    secondary: string
    dark: string
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string
    }
  }
}

/**
 * @Module_Augmentation for the theme typography
 */

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    banner: true
    bannerMedium: true
    bannerBold: true
    h1: true
    h1Medium: true
    h1Bold: true
    h2: true
    h2Medium: true
    h2Bold: true
    h3: true
    h3Medium: true
    h3Bold: true
    h4: true
    h4Bold: true
    h4Medium: true
    h5: false
    h6: false
    caption: true
    captionMedium: true
    captionBold: true
    subtitle1: false
    subtitle2: false
    overline: false
    bodyText: true
    bodyTextMedium: true
    bodyTextBold: true
    smallBody: true
    smallBodyMedium: true
    smallBodyBold: true
    extraSmallBody: true
    h1Cursive: true
    h1CursiveBold: true
    h1CursiveMedium: true
    h2Cursive: true
    h2CursiveBold: true
    h2CursiveMedium: true
    h3Cursive: true
    h3CursiveBold: true
    h3CursiveMedium: true
    h4Cursive: true
    h4CursiveBold: true
    h4CursiveMedium: true
    bodyTextCursive: true
    bodyTextCursiveMedium: true
    bodyTextCursiveBold: true
    smallBodyCursive: true
    smallBodyCursiveMedium: true
    smallBodyCursiveBold: true
    captionCursive: true
    captionCursiveMedium: true
    captionCursiveBold: true
    extraSmallBodyCursive: true
  }
}

declare module "@mui/material/styles" {
  interface TypographyVariants {
    banner: React.CSSProperties
    bannerMedium: React.CSSProperties
    bannerBold: React.CSSProperties
    h1Bold: React.CSSProperties
    h1Medium: React.CSSProperties
    h2Bold: React.CSSProperties
    h2Medium: React.CSSProperties
    h3Bold: React.CSSProperties
    h3Medium: React.CSSProperties
    h4Bold: React.CSSProperties
    h4Medium: React.CSSProperties
    bodyText: React.CSSProperties
    bodyTextMedium: React.CSSProperties
    bodyTextBold: React.CSSProperties
    smallBody: React.CSSProperties
    smallBodyMedium: React.CSSProperties
    smallBodyBold: React.CSSProperties
    captionMedium: React.CSSProperties
    captionBold: React.CSSProperties
    extraSmallBody: React.CSSProperties
    h1Cursive: React.CSSProperties
    h1CursiveBold: React.CSSProperties
    h1CursiveMedium: React.CSSProperties
    h2Cursive: React.CSSProperties
    h2CursiveBold: React.CSSProperties
    h2CursiveMedium: React.CSSProperties
    h3Cursive: React.CSSProperties
    h3CursiveBold: React.CSSProperties
    h3CursiveMedium: React.CSSProperties
    h4Cursive: React.CSSProperties
    h4CursiveBold: React.CSSProperties
    h4CursiveMedium: React.CSSProperties
    bodyTextCursive: React.CSSProperties
    bodyTextCursiveMedium: React.CSSProperties
    bodyTextCursiveBold: React.CSSProperties
    smallBodyCursive: React.CSSProperties
    smallBodyCursiveMedium: React.CSSProperties
    smallBodyCursiveBold: React.CSSProperties
    captionCursive: React.CSSProperties
    captionCursiveMedium: React.CSSProperties
    captionCursiveBold: React.CSSProperties
    extraSmallBodyCursive: React.CSSProperties
  }

  // allow configuration using `createTheme()`
  interface TypographyVariantsOptions {
    banner?: React.CSSProperties
    bannerMedium?: React.CSSProperties
    bannerBold?: React.CSSProperties
    h1Bold?: React.CSSProperties
    h1Medium?: React.CSSProperties
    h2Bold?: React.CSSProperties
    h2Medium?: React.CSSProperties
    h3Bold?: React.CSSProperties
    h3Medium?: React.CSSProperties
    h4Bold?: React.CSSProperties
    h4Medium?: React.CSSProperties
    bodyText?: React.CSSProperties
    bodyTextMedium?: React.CSSProperties
    bodyTextBold?: React.CSSProperties
    smallBody?: React.CSSProperties
    smallBodyMedium?: React.CSSProperties
    smallBodyBold?: React.CSSProperties
    captionMedium?: React.CSSProperties
    captionBold?: React.CSSProperties
    extraSmallBody?: React.CSSProperties
    h1Cursive?: React.CSSProperties
    h1CursiveBold?: React.CSSProperties
    h1CursiveMedium?: React.CSSProperties
    h2Cursive?: React.CSSProperties
    h2CursiveBold?: React.CSSProperties
    h2CursiveMedium?: React.CSSProperties
    h3Cursive?: React.CSSProperties
    h3CursiveBold?: React.CSSProperties
    h3CursiveMedium?: React.CSSProperties
    h4Cursive?: React.CSSProperties
    h4CursiveBold?: React.CSSProperties
    h4CursiveMedium?: React.CSSProperties
    bodyTextCursive?: React.CSSProperties
    bodyTextCursiveMedium?: React.CSSProperties
    bodyTextCursiveBold?: React.CSSProperties
    smallBodyCursive?: React.CSSProperties
    smallBodyCursiveMedium?: React.CSSProperties
    smallBodyCursiveBold?: React.CSSProperties
    captionCursive?: React.CSSProperties
    captionCursiveMedium?: React.CSSProperties
    captionCursiveBold?: React.CSSProperties
    extraSmallBodyCursive?: React.CSSProperties
  }
}

/**
 * @Module_Augmentation for the theme Styles
 */

/**
 * @theme as per 1440 * 1024 resolution
 */

export default createTheme({
  palette: {
    primary: {
      main: NonMuiColors.PRIMARY,
      light: NonMuiColors.WHITE
    },
    secondary: {
      main: NonMuiColors.SECONDARY,
      light: grey["900"]
    },
    error: {
      main: NonMuiColors.RED
    },
    text: {
      primary: NonMuiColors.PRIMARY,
      secondary: NonMuiColors.SECONDARY,
      disabled: grey[500]
    },
    common: {
      black: NonMuiColors.BLACK,
      white: NonMuiColors.WHITE
    },
    background: {
      primary: NonMuiColors.DARK_BROWN,
      secondary: NonMuiColors.SECONDARY,
      light: NonMuiColors.WHITE,
      paper: NonMuiColors.CREME
    }
  },
  typography: {
    fontFamily: "roboto",
    allVariants: {
      margin: 0,
      textAlign: "justify",
      letterSpacing: "0.02em",
      wordBreak: "normal",
      overflowWrap: "break-word"
    },
    banner: {
      fontSize: pxToRem(64),
      fontStyle: "normal",
      lineHeight: pxToRem(72),
      fontWeight: 400
    },
    bannerMedium: {
      fontSize: pxToRem(64),
      fontStyle: "normal",
      lineHeight: pxToRem(72),
      fontWeight: 500
    },
    bannerBold: {
      fontSize: pxToRem(64),
      fontStyle: "normal",
      lineHeight: pxToRem(72),
      fontWeight: 600
    },
    h1: {
      fontSize: pxToRem(40),
      fontStyle: "normal",
      lineHeight: pxToRem(60),
      fontWeight: 400
    },
    h1Medium: {
      fontSize: pxToRem(40),
      fontStyle: "normal",
      lineHeight: pxToRem(60),
      fontWeight: 500
    },
    h1Bold: {
      fontSize: pxToRem(40),
      fontStyle: "normal",
      lineHeight: pxToRem(60),
      fontWeight: 600
    },
    h2: {
      fontSize: pxToRem(24),
      fontStyle: "normal",
      lineHeight: pxToRem(36),
      fontWeight: 400
    },
    h2Medium: {
      fontSize: pxToRem(24),
      fontStyle: "normal",
      lineHeight: pxToRem(36),
      fontWeight: 500
    },
    h2Bold: {
      fontSize: pxToRem(24),
      fontStyle: "normal",
      lineHeight: pxToRem(36),
      fontWeight: 600
    },
    h3: {
      fontSize: pxToRem(20),
      fontStyle: "normal",
      lineHeight: pxToRem(29),
      fontWeight: 400
    },
    h3Medium: {
      fontSize: pxToRem(20),
      fontStyle: "normal",
      lineHeight: pxToRem(29),
      fontWeight: 500
    },
    h3Bold: {
      fontSize: pxToRem(20),
      fontStyle: "normal",
      lineHeight: pxToRem(29),
      fontWeight: 600
    },
    h4: {
      fontSize: pxToRem(18),
      fontStyle: "normal",
      lineHeight: pxToRem(26),
      fontWeight: 400
    },
    h4Medium: {
      fontSize: pxToRem(18),
      fontStyle: "normal",
      lineHeight: pxToRem(26),
      fontWeight: 500
    },
    h4Bold: {
      fontSize: pxToRem(18),
      fontStyle: "normal",
      lineHeight: pxToRem(26),
      fontWeight: 600
    },
    bodyText: {
      fontSize: pxToRem(14),
      fontStyle: "normal",
      lineHeight: pxToRem(21),
      fontWeight: 400
    },
    bodyTextMedium: {
      fontSize: pxToRem(14),
      fontStyle: "normal",
      lineHeight: pxToRem(21),
      fontWeight: 500
    },
    bodyTextBold: {
      fontSize: pxToRem(14),
      fontStyle: "normal",
      lineHeight: pxToRem(21),
      fontWeight: 600
    },
    smallBody: {
      fontSize: pxToRem(12),
      fontStyle: "normal",
      lineHeight: pxToRem(18),
      fontWeight: 400
    },
    smallBodyMedium: {
      fontSize: pxToRem(12),
      fontStyle: "normal",
      lineHeight: pxToRem(18),
      fontWeight: 500
    },
    smallBodyBold: {
      fontSize: pxToRem(12),
      fontStyle: "normal",
      lineHeight: pxToRem(18),
      fontWeight: 600
    },
    caption: {
      fontSize: pxToRem(10),
      fontStyle: "normal",
      lineHeight: pxToRem(12.5),
      fontWeight: 400
    },
    captionMedium: {
      fontSize: pxToRem(10),
      fontStyle: "normal",
      lineHeight: pxToRem(12.5),
      fontWeight: 500
    },
    captionBold: {
      fontSize: pxToRem(10),
      fontStyle: "normal",
      lineHeight: pxToRem(12.5),
      fontWeight: 600
    },
    extraSmallBody: {
      fontSize: pxToRem(10),
      fontStyle: "normal",
      lineHeight: pxToRem(15),
      fontWeight: 400
    },
    h1Cursive: {
      fontFamily: '"Satisfy", cursive',
      fontSize: pxToRem(40),
      fontStyle: "normal",
      lineHeight: pxToRem(60),
      fontWeight: 400
    },
    h1CursiveMedium: {
      fontFamily: '"Satisfy", cursive',
      fontSize: pxToRem(40),
      fontStyle: "normal",
      lineHeight: pxToRem(60),
      fontWeight: 500
    },
    h1CursiveBold: {
      fontFamily: '"Satisfy", cursive',
      fontSize: pxToRem(40),
      fontStyle: "normal",
      lineHeight: pxToRem(60),
      fontWeight: 600
    },
    h2Cursive: {
      fontFamily: '"Satisfy", cursive',
      fontSize: pxToRem(24),
      fontStyle: "normal",
      lineHeight: pxToRem(36),
      fontWeight: 400
    },
    h2CursiveMedium: {
      fontFamily: '"Satisfy", cursive',
      fontSize: pxToRem(24),
      fontStyle: "normal",
      lineHeight: pxToRem(36),
      fontWeight: 500
    },
    h2CursiveBold: {
      fontFamily: '"Satisfy", cursive',
      fontSize: pxToRem(24),
      fontStyle: "normal",
      lineHeight: pxToRem(36),
      fontWeight: 600
    },
    h3Cursive: {
      fontFamily: '"Satisfy", cursive',
      fontSize: pxToRem(20),
      fontStyle: "normal",
      lineHeight: pxToRem(29),
      fontWeight: 400
    },
    h3CursiveMedium: {
      fontFamily: '"Satisfy", cursive',
      fontSize: pxToRem(20),
      fontStyle: "normal",
      lineHeight: pxToRem(29),
      fontWeight: 500
    },
    h3CursiveBold: {
      fontFamily: '"Satisfy", cursive',
      fontSize: pxToRem(20),
      fontStyle: "normal",
      lineHeight: pxToRem(29),
      fontWeight: 600
    },
    h4Cursive: {
      fontFamily: '"Satisfy", cursive',
      fontSize: pxToRem(18),
      fontStyle: "normal",
      lineHeight: pxToRem(26),
      fontWeight: 400
    },
    h4CursiveMedium: {
      fontFamily: '"Satisfy", cursive',
      fontSize: pxToRem(18),
      fontStyle: "normal",
      lineHeight: pxToRem(26),
      fontWeight: 500
    },
    h4CursiveBold: {
      fontFamily: '"Satisfy", cursive',
      fontSize: pxToRem(18),
      fontStyle: "normal",
      lineHeight: pxToRem(26),
      fontWeight: 600
    },
    bodyTextCursive: {
      fontFamily: '"Satisfy", cursive',
      fontSize: pxToRem(14),
      fontStyle: "normal",
      lineHeight: pxToRem(21),
      fontWeight: 400
    },
    bodyTextCursiveMedium: {
      fontFamily: '"Satisfy", cursive',
      fontSize: pxToRem(14),
      fontStyle: "normal",
      lineHeight: pxToRem(21),
      fontWeight: 500
    },
    bodyTextCursiveBold: {
      fontFamily: '"Satisfy", cursive',
      fontSize: pxToRem(14),
      fontStyle: "normal",
      lineHeight: pxToRem(21),
      fontWeight: 600
    },
    smallBodyCursive: {
      fontFamily: '"Satisfy", cursive',
      fontSize: pxToRem(12),
      fontStyle: "normal",
      lineHeight: pxToRem(18),
      fontWeight: 400
    },
    smallBodyCursiveMedium: {
      fontFamily: '"Satisfy", cursive',
      fontSize: pxToRem(12),
      fontStyle: "normal",
      lineHeight: pxToRem(18),
      fontWeight: 500
    },
    smallBodyCursiveBold: {
      fontFamily: '"Satisfy", cursive',
      fontSize: pxToRem(12),
      fontStyle: "normal",
      lineHeight: pxToRem(18),
      fontWeight: 600
    },
    captionCursive: {
      fontFamily: '"Satisfy", cursive',
      fontSize: pxToRem(10),
      fontStyle: "normal",
      lineHeight: pxToRem(12.5),
      fontWeight: 400
    },
    captionCursiveMedium: {
      fontFamily: '"Satisfy", cursive',
      fontSize: pxToRem(10),
      fontStyle: "normal",
      lineHeight: pxToRem(12.5),
      fontWeight: 500
    },
    captionCursiveBold: {
      fontFamily: '"Satisfy", cursive',
      fontSize: pxToRem(10),
      fontStyle: "normal",
      lineHeight: pxToRem(12.5),
      fontWeight: 600
    },
    extraSmallBodyCursive: {
      fontFamily: '"Satisfy", cursive',
      fontSize: pxToRem(10),
      fontStyle: "normal",
      lineHeight: pxToRem(15),
      fontWeight: 400
    }
  },
  components: {
    MuiIconButton: {
      styleOverrides: {
        root: {
          padding: pxToRem(8)
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",
          padding: `${pxToRem(6)} ${pxToRem(8)}`
        }
      }
    }
  }
})
