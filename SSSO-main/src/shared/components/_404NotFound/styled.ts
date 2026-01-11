import { styled } from "@mui/material"

export const _404NotFoundContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "70vh",
  backgroundColor: theme.palette.background.primary,
  color: theme.palette.primary.light,
  "& .nav-to-home": {
    color: theme.palette.primary.light,
    textDecoration: "underline",
    "&:hover": {
      color: theme.palette.background.paper
    }
  }
}))
