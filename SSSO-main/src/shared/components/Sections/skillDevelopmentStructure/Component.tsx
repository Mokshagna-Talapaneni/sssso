import React from "react"
import { Typography } from "@mui/material"
import { Container, TitleContainer } from "./styled"

const Component: React.FC = () => {
  const structure = React.useMemo(
    () => [
      `Unemployed youth from Sri Sathya Sai Village Integrated Program (SSSVIP) villages and its
            neighbourhood are trained in multi-skills that are required in the rural areas.`,
      `A by-product of the SSSVIP, the SSSSDP conducts an extensive survey of local areas, with
            regards to local employment potential and community requirements`,
      `Experienced faculty and well-trained experts in required fields contribute to teaching
            the youth.`,
      `To enrich participants and improve their potential to make a livelihood, the centres offer
            a wide variety of skills including electrical, plumbing and mechanical skills, tailoring, Zardosi,
            Maggam and associated skills like fashion design, Home-care nursing, kitchen and
            agri-based skills. More recently computer classes and even spoken English classes are being offered.`,
      `The trained youth are then assisted to set up small service centres in their villages, enabling
            them to gain economic independence`
    ],
    []
  )

  return (
    <Container>
      <TitleContainer>
        <Typography variant="h1Bold">Structure</Typography>
      </TitleContainer>
      {structure.map((item, index) => (
        <Typography variant="h4Medium" color="#555" key={index}>
          {index + 1}. {item}
          <br />
          <br />
        </Typography>
      ))}
    </Container>
  )
}

export default Component
