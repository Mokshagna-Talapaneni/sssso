import { grey } from "@mui/material/colors"
import { NonMuiColors } from "../constants/COLORS"
import { pxToRem } from "../utils/styles"

const GlobalStylesConfig = {
  body: {
    margin: 0,
    padding: 0
  },
  div: { boxSizing: "border-box" },
  ul: { margin: 0 },
  "#root": {
    height: "100vh",
    width: "100vw",
    overflowX: "hidden",
    overflowY: "auto",
    fontFamily: "roboto, sans-serif"
  },
  "*::webkit-scrollbar": {
    width: 14,
    backgroundColor: NonMuiColors.WHITE
  },
  "*::webkit-scrollbar-thumb": {
    backgroundColor: grey[100],
    borderRadius: 6,
    border: `${pxToRem(4)} solid transparent`,
    boxShadow: `inset 0 0 12px rgba(0,0,0,0.2)`,
    backgroundClip: "padding-box"
  },
  "*::webkit-scrollbar-track": {
    backgroundColor: NonMuiColors.WHITE,
    border: `${pxToRem(1)} solid ${grey[200]}`,
    borderRadius: 2
  }
}

export default GlobalStylesConfig
