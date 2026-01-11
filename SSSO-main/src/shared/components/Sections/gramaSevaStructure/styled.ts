import { styled } from "@mui/material"
import { pxToRem } from "@utils/styles"

export const Container = styled("div")({
  padding: pxToRem(64),
  margin: "0 auto",
  textAlign: "left"
})

export const TitleContainer = styled("div")({
  marginBottom: pxToRem(20)
})

export const GroupsList = styled("ul")({
  listStyle: "none",
  padding: "0",
  margin: `${pxToRem(30)} ${pxToRem(20)} ${pxToRem(20)}`,
  textAlign: "left",
  fontFamily: "sans-serif"
})

export const GroupItem = styled("li")({
  marginBottom: pxToRem(10)
})

export const GroupMain = styled("span")({
  fontWeight: "bold",
  color: "rgb(247, 79, 34)"
})
