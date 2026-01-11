import React from "react"
import { Typography } from "@mui/material"
import {
  OutcomeContainer,
  Outcome,
  TextSection,
  OutcomeList,
  SubOutcomeList
} from "./styled"
import { BasicCarousel } from "@components/Carousel"

interface ComponentProps {
  title?: string
  outcomes?: Array<{
    id?: number
    content?: string
    subcontent?: string[]
  }>
  outcomeImg?: Array<{
    image: string
    title: string
    description: string
  }>
}

const Component: React.FC<ComponentProps> = ({
  title = "",
  outcomes = [],
  outcomeImg = []
}) => {
  return (
    <OutcomeContainer>
      <Outcome>
        <div className="container slide-container">
          <BasicCarousel height={400} perPage={2} gap={8} slides={outcomeImg} />
        </div>
        <div className="container">
          <TextSection>
            {title && <Typography variant="h1Bold">{title}</Typography>}
            <Typography variant="h4Medium">
              <ul>
                {outcomes.map((outcome, index) => (
                  <>
                    <li>{outcome.content}</li>
                    {outcome.subcontent && (
                      <ul>
                        {outcome.subcontent.map((sub, subIndex) => (
                          <li>{sub}</li>
                        ))}
                      </ul>
                    )}
                  </>
                ))}
              </ul>
            </Typography>
          </TextSection>
        </div>
      </Outcome>
    </OutcomeContainer>
  )
}

export default Component
