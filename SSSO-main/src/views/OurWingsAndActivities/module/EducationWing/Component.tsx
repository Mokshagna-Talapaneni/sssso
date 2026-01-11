import React from "react"
import { ImageContainer, WingsContainer } from "../../styles/wings.styled"
import { Typography } from "@mui/material"
import SPW1 from "@assets/image/compressed/education_wing/2.webp"
import { NonMuiColors } from "@constants/COLORS"
import { SubModuleType } from "../../type"

const Component: React.FC<SubModuleType> = ({ id }: SubModuleType) => {
  return (
    <WingsContainer
      id={id}
      rowReverse
      backgroundColor={NonMuiColors.CREME_DARK}
    >
      <div className="left-container">
        <ImageContainer imgUrl={SPW1} />
      </div>
      <div className="right-container">
        <Typography variant="h1Bold" color="primary.main">
          Education Wing
        </Typography>
        <Typography variant="h2" color="primary.main" textAlign={"justify"}>
          The <b>Education Wing</b> aims to instill{" "}
          <b>human values and cultural awareness</b> in children and families,
          inspired by the teachings of Bhagawan Sri Sathya Sai Baba. It promotes
          a value-based life from an early age.
        </Typography>
        <Typography variant="h2Bold" color="primary.main">
          Activities under the Education Wing include:
        </Typography>
        <Typography variant="h2" color="primary.main">
          <ul>
            <li>
              <b>Bal Vikas Classes</b> for children up to the age of 15
            </li>
            <li>
              <b>Human Values Education</b> and discussions on Indian culture
              and spirituality
            </li>
            <li>
              <b>Parenting Programmes</b> to guide young parents in value-based
              upbringing, in line with Bhagawan’s teachings
            </li>
          </ul>
        </Typography>
      </div>
    </WingsContainer>
  )
}

export default Component
