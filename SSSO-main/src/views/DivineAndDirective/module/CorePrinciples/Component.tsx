import React from "react"
import { ImageContainer } from "./styled"
import { Typography } from "@mui/material"
import SPW1 from "@assets/image/compressed/swami_images/8.webp"
import { CorePrinciplesContainer } from "./styled"

const Component: React.FC = () => {
  return (
    <CorePrinciplesContainer>
      <div className="left-container">
        <ImageContainer imgUrl={SPW1} />
      </div>
      <div className="right-container">
        <Typography variant="h1Bold" color="primary.main">
          Core Universal Principles of the Organisation
        </Typography>
        <Typography variant="h2Bold" color="primary.main">
          Bhagawan Sri Sathya Sai Baba has said:
        </Typography>
        <Typography variant="h2Cursive">
          “Service is the life-breath of the Sri Sathya Sai Seva Organisations.
          Remember the truth that you are born to serve society.”
        </Typography>
        <Typography variant="h2Bold" color="primary.main">
          Core Priciples include:
        </Typography>
        <Typography variant="h2" color="primary.main">
          <ul>
            <li>
              There are <b>no fees</b> for joining the Organisation.
            </li>
            <li>
              <b>Solicitation of funds</b>, directly or indirectly, is strictly
              prohibited. Daily expenses are to be contributed voluntarily by
              members. The Sri Sathya Sai Seva Organisations and its units must
              not collect money or materials from outside sources.
            </li>
            <li>
              The Organisation shall not associate or partner with any other
              <b>religious or political</b> organisation.
            </li>
            <li>
              The Organisation does not seek <b>publicity</b> for its
              activities. Its units should not promote pomp or show.
            </li>
            <li>
              The Sri Sathya Sai Seva Organisations <b>shall never establish</b>
              connections with any government body at any level.
            </li>
            <li>
              There must always be{" "}
              <b>proper separation between male and female members</b> in all
              activities of the Organisation.
            </li>
          </ul>
        </Typography>
      </div>
    </CorePrinciplesContainer>
  )
}

export default Component
