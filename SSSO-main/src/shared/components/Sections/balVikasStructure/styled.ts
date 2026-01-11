import { styled } from "@mui/material"
import { pxToRem } from "@utils/styles"

export const Container = styled("div")({
  padding: pxToRem(64),
  margin: "0 auto",
  // maxWidth: pxToRem(900),
  textAlign: "left"
})

export const TitleContainer = styled("div")({
  marginBottom: pxToRem(20)
})

export const PrinciplesList = styled("ul")({
  padding: "1",
  margin: `0 0 ${pxToRem(20)}`,
  textAlign: "left"
})

export const PrincipleItem = styled("li")({
  marginBottom: pxToRem(10)
})

export const TechniquesGrid = styled("div")({
  display: "flex",
  flexWrap: "wrap",
  gap: pxToRem(20),
  justifyContent: "space-between"
})

export const Technique = styled("div")({
  flexBasis: pxToRem(100),
  flexGrow: 1,
  flexShrink: 0,
  padding: pxToRem(10)
})

export const Icon = styled("img")({
  width: pxToRem(50),
  height: pxToRem(50),
  marginBottom: pxToRem(5)
})

export const GroupsList = styled("ul")({
  listStyle: "none",
  padding: "0",
  margin: `0 0 ${pxToRem(20)}`,
  textAlign: "left"
})

export const GroupItem = styled("li")({
  marginBottom: pxToRem(10)
})
