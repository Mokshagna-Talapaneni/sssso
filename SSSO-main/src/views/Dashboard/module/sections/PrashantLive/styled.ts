import { pxToRem } from "@utils/styles"
import { styled } from "@mui/material"

export const PrashantiLiveContainer = styled("div", {
  name: "prashanti-live",
  slot: "container"
})({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  boxSizing: "border-box"
})

export const PrashantiLiveEmbedContainer = styled("div", {
  name: "prashanti-live",
  slot: "embed-container"
})({
  display: "flex",
  flexDirection: "column",
  height: pxToRem(600),
  width: "100%",
  "& .youtube-player": {
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
    "& .youtube-iframe": {
      width: "100%",
      height: "100%"
    }
  }
})

export const PrashantiLiveDescriptionContainer = styled("div", {
  name: "prashanti-live",
  slot: "description-container"
})(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  padding: `${pxToRem(48)} ${pxToRem(80)} ${pxToRem(64)}`,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: theme.palette.background.primary,
  gap: pxToRem(16),
  boxSizing: "border-box",
  "& .highlight": {
    color: theme.palette.error.main
  },
  [theme.breakpoints.down("md")]: {
    padding: pxToRem(48)
  }
}))
