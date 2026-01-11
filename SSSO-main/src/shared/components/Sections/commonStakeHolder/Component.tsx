import React from "react"
import { Typography } from "@mui/material"
import { Container, Grid, Stakeholder } from "./styled"
interface stakeholderProps {
  stakeholders?: Array<{
    img?: any
    title?: string
  }>
  content?: string
}

const Component: React.FC<stakeholderProps> = ({
  stakeholders = [],
  content = ""
}) => {
  return (
    <Container>
      <Typography variant="h1Bold">Stakeholders</Typography>
      <Typography variant="h4Bold">{content}</Typography>
      <Grid>
        {stakeholders.map((stakeholder, index) => (
          <Stakeholder>
            {stakeholder.img}
            <Typography key={index} variant="h4Medium">
              {stakeholder.title}
            </Typography>
          </Stakeholder>
        ))}
      </Grid>
    </Container>
  )
}

export default Component
