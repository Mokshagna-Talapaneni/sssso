import React from "react"
import { _404NotFoundContainer } from "./styled"
import { Typography } from "@mui/material"
import { NavLink } from "react-router"

const Component: React.FC = () => {
  return (
    <_404NotFoundContainer>
      <Typography variant="h1Bold">
        We’re sorry, but the page you are looking for cannot be found.
      </Typography>
      <Typography variant="h2Medium">
        Please return to the{" "}
        <NavLink to={"/"} className={"nav-to-home"}>
          homepage
        </NavLink>{" "}
        or use the navigation above to continue your exploration.
      </Typography>
    </_404NotFoundContainer>
  )
}

export default Component
