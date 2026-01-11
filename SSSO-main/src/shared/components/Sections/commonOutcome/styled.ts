import { styled } from "@mui/system"
import bg3 from "@assets/image/bg-3.jpg"
import { pxToRem } from "@utils/styles"

export const OutcomeContainer = styled("div", {
  name: "outcome",
  slot: "container"
})(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "auto",
  padding: pxToRem(48),
  backgroundColor: theme.palette.common.CREME,
  backgroundImage: `url(${bg3})`,
  boxSizing: "border-box",
  gap: pxToRem(100)
}))

export const Outcome = styled("div", {
  name: "objective",
  slot: "container"
})(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "center",
  width: "100%",
  gap: pxToRem(32),
  "& .container": {
    flex: "0 0 50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: pxToRem(16),
    width: pxToRem(10),
    paddingRight: pxToRem(16),
    boxSizing: "border-box"
  },
  "& .slide-container": {
    padding: 0
  },
  [theme.breakpoints.down("md")]: {
    flexWrap: "wrap",
    flexDirection: "row",
    gap: pxToRem(48),
    "& .container": {
      flex: "1 1 100%"
    }
  }
}))

export const TextSection = styled("div")({
  flex: "1 1 60%",
  padding: pxToRem(10)
})

export const OutcomeList = styled("ul")({
  padding: "0",
  margin: "0"
})

export const SubOutcomeList = styled("ul")({
  padding: pxToRem(10),
  margin: "0"
})
