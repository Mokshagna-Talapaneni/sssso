import React from "react"
import { Typography } from "@mui/material"
import { Container, TitleContainer } from "./styled"

interface ImpactProps {
  title?: string
  content?: string
}

const Component: React.FC<ImpactProps> = ({ title = "", content = "" }) => {
  return (
    <Container>
      <TitleContainer>
        <Typography variant="h1Bold">{title}</Typography>
      </TitleContainer>
      <Typography variant="h4Bold">{content}</Typography>
    </Container>
  )
}

export default Component
