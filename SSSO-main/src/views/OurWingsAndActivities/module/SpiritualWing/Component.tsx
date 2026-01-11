import React from "react"
import { ImageContainer, WingsContainer } from "../../styles/wings.styled"
import { Typography } from "@mui/material"
import SPW1 from "@assets/image/compressed/spiritual_wing/5.webp"
import { SubModuleType } from "../../type"

const Component: React.FC<SubModuleType> = ({ id }: SubModuleType) => {
  return (
    <WingsContainer id={id}>
      <div className="left-container">
        <ImageContainer imgUrl={SPW1} />
      </div>
      <div className="right-container">
        <Typography variant="h1Bold" color="primary.main">
          Spiritual Wing
        </Typography>
        <Typography variant="h2" color="primary.main" textAlign={"justify"}>
          Spirituality is the root of the tree of life. Just as a tree’s growth
          depends on the strength of its roots, one’s life blossoms through a
          firm spiritual foundation. The Spiritual Wing nurtures the inner self
          and guides members toward spiritual growth and self-realisation.
        </Typography>
        <Typography variant="h2Bold" color="primary.main">
          Activities under the Spiritual Wing include:
        </Typography>
        <Typography variant="h2" color="primary.main">
          <ul>
            <li>Bhajans (devotional singing)</li>
            <li>Nagar Sankirtan</li>
            <li>Study circles</li>
            <li>Japam and Meditation</li>
            <li>Spiritual Classes and Discourses</li>
          </ul>
        </Typography>
      </div>
    </WingsContainer>
  )
}

export default Component
