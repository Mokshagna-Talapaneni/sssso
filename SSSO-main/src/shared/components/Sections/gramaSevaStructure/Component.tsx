import React from "react"
import { Typography } from "@mui/material"
import {
  Container,
  TitleContainer,
  GroupsList,
  GroupItem,
  GroupMain
} from "./styled"

const Component: React.FC = () => {
  const structure = React.useMemo(
    () => [
      {
        head: "Individual Care",
        subhead: "Help in the form of essentials like food, clothing, etc."
      },
      {
        head: "Education Care",
        subhead: "Provide comprehensive education in human values"
      },
      {
        head: "Medical Care",
        subhead:
          "Render sustained health services through Mobile Medical Vans and Medical Camps."
      },
      {
        head: "Socio Care",
        subhead:
          "Undertaking social infrastructure & welfare projects and helping youth with skill enhancements."
      },
      {
        head: "Spiritual Care",
        subhead:
          "Undertake spiritual activities to rekindle the feeling of devotion"
      },
      {
        head: "Employment Care",
        subhead: "Train and empower residents with economic self-reliance"
      },
      {
        head: "Agri Care",
        subhead:
          "Educate and impart the science of agriculture with the help of eminent Agriculture scientists"
      }
    ],
    []
  )

  return (
    <Container>
      <TitleContainer>
        <Typography variant="h1Bold">Structure</Typography>
      </TitleContainer>
      <Typography variant="h4Medium" color="#555">
        The model encompasses different areas of development of a village which
        brings about holistic transformation of individual lives and community
        living.
      </Typography>
      <GroupsList>
        {structure.map((item, index) => (
          <GroupItem key={index}>
            <GroupMain>
              {index + 1}. {item.head}
            </GroupMain>{" "}
            – {item.subhead}
          </GroupItem>
        ))}
      </GroupsList>
    </Container>
  )
}

export default Component
