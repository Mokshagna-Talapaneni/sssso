import { pxToRem } from "@utils/styles"
import { styled } from "@mui/material"
import { NonMuiColors } from "@constants/COLORS"

export const ContactContainer = styled("section", {
  name: "contact-container",
  slot: "root",
  shouldForwardProp: (prop) => prop !== "rowReverse"
})<{ rowReverse?: boolean; backgroundColor?: string }>(
  ({ theme, rowReverse, backgroundColor }) => ({
    display: "flex",
    width: "100%",
    minHeight: pxToRem(400),
    borderRadius: pxToRem(10),
    flexDirection: rowReverse ? "row-reverse" : "row",
    background: backgroundColor || theme.palette.background.paper,
    "& .left-container": {
      flex: "0 0 40%"
    },
    " & .right-container": {
      flex: "0 0 60%",
      padding: pxToRem(80),
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      gap: pxToRem(16),
      "& ul": {
        margin: 0,
        padding: 0,
        width: "90%"
      }
    },
    [theme.breakpoints.down("md")]: {
      flexWrap: "wrap",
      "& .left-container": { flex: "0 0 100%" },
      " & .right-container": {
        flex: "0 0 100%"
      }
    }
  })
)

export const SUBLIST = styled("li", {
  name: "sub-list",
  slot: "container"
})({
  display: "flex",
  flexDirection: "row",
  paddingTop: pxToRem(8),
  listStyleType: "none",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  gap: pxToRem(12),
  "& .icon-wrapper": {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: pxToRem(8)
  },
  "& svg": {
    flex: "0 0 auto"
  },
  "& .MuiTypography-root": {
    flex: "1 1 auto",
    padding: `${pxToRem(8)} 0`
  },
  "& a": {
    textDecoration: "underline",
    color: NonMuiColors.PRIMARY
  }
})

export const CommonIMG = styled("img", {
  name: "common-img",
  slot: "container"
})({
  width: "100%",
  height: "100%",
  objectFit: "fill",
  borderRadius: pxToRem(10)
})
