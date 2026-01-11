import { pxToRem } from "@utils/styles"
import { styled } from "@mui/material"

export const JoinUsContainer = styled("div", {
  name: "join-us",
  slot: "root"
})({
  display: "flex",
  gap: pxToRem(48),
  justifyContent: "flex-start",
  alignItems: "center",
  padding: pxToRem(80),
  "& .join-root": {
    display: "flex",
    flexDirection: "column",
    gap: pxToRem(24),
    justifyContent: "flex-start",
    alignItems: "flex-start",
    "& .join-container": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      "& .MuiButton-root": {
        textDecoration: "underline"
      }
    }
  },
  "& .icon-container": {
    "& svg": {
      width: pxToRem(80),
      height: pxToRem(80)
    }
  }
})
