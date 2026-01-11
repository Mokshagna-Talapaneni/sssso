import React from "react"
import { Typography } from "@mui/material"
import { Container, TitleContainer } from "./styled"
const Component: React.FC = () => {
  return (
    <Container>
      <TitleContainer>
        <Typography variant="h1Bold">Structure</Typography>
      </TitleContainer>
      <Typography variant="h4Medium">
        This Cleanliness drive conducted over a period of 18 days, is spread
        over different categories viz.
      </Typography>
      <Typography variant="h4Medium">
        <ul>
          <li>Cleaning of public places</li>
          <li>Worship Places of different religions as well as Villages</li>
          <li>Water sources like lakes, ponds and wells</li>
          <li>Destitute homes</li>
          <li>Old age homes</li>
          <li>Orphanages etc.</li>
        </ul>
      </Typography>
      <Typography variant="h4Medium">
        Every Samithi in every state took active part in chalking out specific
        plan of actions and works towards keeping the places and surroundings
        clean.
      </Typography>
    </Container>
  )
}

export default Component
