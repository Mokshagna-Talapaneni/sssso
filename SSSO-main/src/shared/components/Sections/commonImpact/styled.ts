import { styled } from "@mui/material"
import bg2 from "@assets/image/bg-2.jpg"
import { pxToRem } from "@utils/styles"

export const Container = styled("div")(({ theme }) => ({
  maxWidth: "100%",
  padding: pxToRem(64),
  backgroundColor: theme.palette.background.paper,
  borderRadius: pxToRem(10),
  boxShadow: `0 ${pxToRem(4)} ${pxToRem(8)} rgba(0, 0, 0, 0.1)`,
  textAlign: "left",
  backgroundImage: `url(${bg2})`
}))

export const TitleContainer = styled("div")({
  marginBottom: pxToRem(20)
})
