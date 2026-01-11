import React from "react"
import { Typography } from "@mui/material"
import {
  DisasterContainer,
  Disaster,
  TitleContainer,
  OutcomeList
} from "./styled"

const Component: React.FC = () => {
  const leftList = React.useMemo(() => {
    return [
      "Skills imparted to trainees",
      "Rescue techniques",
      "Ropes knots",
      "Fire fighting",
      "Water rescue",
      "Building rescue",
      "First-aid",
      "Team building"
    ]
  }, [])
  const rightList = React.useMemo(() => {
    return ["School and college students", "Rural youth", "Other Organisations"]
  }, [])
  return (
    <>
      <TitleContainer>
        <Typography variant="h1Bold">Structure</Typography>
      </TitleContainer>
      <DisasterContainer>
        <Disaster>
          <div className="container">
            <Typography variant="h3Medium" color="#e74c3c">
              Disaster Management Training - 2 Days
            </Typography>
            <Typography>
              Specialised disaster preparedness, discussions on the science of
              natural calamities and motivational aspects are also dealt with
              during the programme.
            </Typography>
            <OutcomeList>
              {leftList.map((lst, index) => (
                <Typography key={index}>
                  {index + 1}. {lst}
                </Typography>
              ))}
            </OutcomeList>
          </div>
          <div className="container slide-container">
            <Typography variant="h3Medium" color="#e74c3c">
              Disaster Management Awareness - 1 Day
            </Typography>
            <Typography>
              A shorter programme on Disaster Awareness conducted to impart
              training to:
            </Typography>
            <OutcomeList>
              {rightList.map((lst, index) => (
                <Typography key={index}>
                  {index + 1}. {lst}
                </Typography>
              ))}
            </OutcomeList>
            <Typography>
              Visual aids, lectures and practical demonstrations by the trained
              youth of our organisation, instill self-confidence in participants
              so they are prepared during a calamity and can carry out basic
              safety protocol.
            </Typography>
          </div>
        </Disaster>
      </DisasterContainer>
    </>
  )
}

export default Component
