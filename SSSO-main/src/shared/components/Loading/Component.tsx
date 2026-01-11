import React from "react"
import { LoadingContainer } from "./styled"
import { Typography } from "@mui/material"
import SarvadharmaLogo from "@assets/image/Sarbadharma.png"

const Component: React.FC = () => {
  return (
    <LoadingContainer>
      <img src={SarvadharmaLogo} alt="Loading" />
      <Typography variant="h1Bold" color="primary.light">
        Loading...
      </Typography>
    </LoadingContainer>
  )
}

export default Component
