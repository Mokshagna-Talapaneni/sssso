import { styled } from "@mui/material"
import { pxToRem } from "@utils/styles"
import { NonMuiColors } from "@constants/COLORS"

export const SectionContainer = styled("section", {
  name: "directives-section",
  slot: "root"
})(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: pxToRem(32),
  background: theme.palette.background.paper,
  padding: pxToRem(32),
  "& .header-container": {
    textAlign: "center"
  }
}))

export const ContentContainer = styled("div", {
  name: "directives-section",
  slot: "container"
})(({ theme }) => ({
  padding: pxToRem(16)
}))

export const Grid = styled("div", {
  name: "directives-section",
  slot: "grid"
})(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: pxToRem(32),
  [theme.breakpoints.up("sm")]: {
    gridTemplateColumns: "repeat(2, 1fr)"
  },
  [theme.breakpoints.up("lg")]: {
    gridTemplateColumns: "repeat(3, 1fr)"
  }
}))

export const Card = {
  Wrapper: styled("div", {
    name: "directive-card",
    slot: "wrapper"
  })(({ theme }) => ({
    height: "100%",
    background: theme.palette.background.light,
    borderRadius: pxToRem(8),
    boxShadow: theme.shadows[1],
    transition: "transform 200ms, box-shadow 200ms",
    display: "flex",
    flexDirection: "column",
    padding: pxToRem(32),
    "&:hover": {
      transform: "translateY(-4px)",
      boxShadow: theme.shadows[4]
    }
  })),
  Image: styled("div", {
    name: "directive-card",
    slot: "image"
  })<{ imgUrl: string }>(({ theme, imgUrl }) => ({
    backgroundImage: `url(${imgUrl})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: pxToRem(300)
  })),
  Content: styled("div", {
    name: "directive-card",
    slot: "content"
  })(() => ({
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignContent: "flex-start",
    gap: pxToRem(24),
    "& ul": {
      marginTop: pxToRem(8),
      padding: `${pxToRem(0)} ${pxToRem(16)}`
    },
    "& .card-content": {
      padding: `${0} ${pxToRem(16)}`
    }
  })),
  Header: styled("div", {
    name: "directive-card",
    slot: "header"
  })(() => ({
    display: "flex",
    alignItems: "center",
    gap: pxToRem(12)
  })),

  Icon: styled("div", {
    name: "directive-card",
    slot: "icon"
  })(({ theme }) => ({
    color: theme.palette.primary.main
  }))
}
