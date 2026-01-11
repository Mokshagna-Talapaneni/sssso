import React from "react"
import { ImageContainer, WingsContainer } from "../../styles/wings.styled"
import { Typography } from "@mui/material"
import SPW1 from "@assets/image/compressed/service_wing/9.webp"
import { SubModuleType } from "../../type"

const Component: React.FC<SubModuleType> = ({ id }: SubModuleType) => {
  return (
    <WingsContainer id={id}>
      <div className="left-container">
        <ImageContainer imgUrl={SPW1} />
      </div>
      <div className="right-container">
        <Typography variant="h1Bold" color="primary.main">
          Service Wing
        </Typography>
        <Typography variant="h2Bold" color="primary.main">
          Bhagawan Sri Sathya Sai Baba has said:
        </Typography>
        <Typography variant="h2Cursive">
          “Service is the life-breath of the Sri Sathya Sai Seva Organisations.
          Remember the truth that you are born to serve society.”
        </Typography>
        <Typography variant="h2" color="primary.main" textAlign={"justify"}>
          The <b>Service Wing</b> carries out numerous social welfare
          activities, focusing on <b>selfless service</b> to society. These acts
          not only benefit the community but also help volunteers{" "}
          <b>grow spiritually</b>, ultimately leading toward{" "}
          <b>self-realisation</b>.
        </Typography>
        <Typography variant="h2Bold" color="primary.main">
          Key Service Activities include:
        </Typography>
        <Typography variant="h2" color="primary.main">
          <ul>
            <li>Narayan Seva (serving food to the needy)</li>
            <li>Cleaning Drives Medical Camps Gram Seva (village service)</li>
            <li>Blood Donation Camps</li>
            <li>Vocational Training Visits to Old-Age Homes and Orphanages</li>
            <li>Providing Relief During Natural Calamities</li>
            <li>SRP (Sai Rehabilitation Programme)</li>
          </ul>
        </Typography>
      </div>
    </WingsContainer>
  )
}

export default Component
