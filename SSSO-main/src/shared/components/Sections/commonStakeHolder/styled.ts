import { styled } from "@mui/system"
import { pxToRem } from "@utils/styles"
import bg2 from "@assets/image/bg-2.jpg"

export const CommonIMG = styled("img", {
  name: "common-img",
  slot: "container"
})({
  width: "100%",
  objectFit: "fill",
  borderRadius: pxToRem(10)
})
export const Container = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  textAlign: "left",
  padding: pxToRem(64),
  gap: pxToRem(24),
  maxWidth: "100%",
  alignContent: "center",
  borderRadius: pxToRem(10),
  backgroundColor: theme.palette.common.CREME,
  backgroundImage: `url(${bg2})`
}))

export const Grid = styled("div")({
  display: "grid",
  gridTemplateColumns: `repeat(auto-fit, minmax(${pxToRem(150)}, 1fr))`,
  gap: pxToRem(10)
})

export const Stakeholder = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: pxToRem(10),
  alignItems: "center"
})
