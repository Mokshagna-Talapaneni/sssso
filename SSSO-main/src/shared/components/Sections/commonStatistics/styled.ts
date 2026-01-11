import { styled } from "@mui/material"
import { grey } from "@mui/material/colors"
import { pxToRem } from "@utils/styles"

export const Container = styled("div")(({ theme }) => ({
  textAlign: "center",
  padding: pxToRem(20),
  backgroundColor: theme.palette.background.paper
}))

export const Stats = styled("div")({
  display: "flex",
  justifyContent: "space-evenly",
  flexWrap: "wrap",
  gap: pxToRem(20),
  paddingTop: pxToRem(20)
})

export const StatItem = styled("div")(({ theme }) => ({
  textAlign: "center",
  border: `${pxToRem(1)} solid ${grey[300]}`,
  borderRadius: pxToRem(10),
  padding: pxToRem(20),
  background: theme.palette.background.light,
  boxShadow: `0 ${pxToRem(4)} ${pxToRem(8)} rgba(0, 0, 0, 0.1)`,
  width: pxToRem(150)
}))
