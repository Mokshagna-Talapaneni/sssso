import React from "react"
import { OurJourneyComponent } from "./types"
import {
  OurJourneyContainer,
  SwamiImageBubbleContainer,
  TabButton,
  TabButtonContainer
} from "./styled"
import { Typography } from "@mui/material"
import BottomImage from "@assets/image/administration.png"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import { OutlinedButtonTransparent } from "@views/Dashboard/styles/styled"
import SwamiImage from "@assets/image/compressed/swami_images/24.webp"

const Component: React.FC<OurJourneyComponent> = ({
  currentView,
  setView,
  tabConfig
}: OurJourneyComponent) => {
  return (
    <OurJourneyContainer>
      <div className="left-section">
        <SwamiImageBubbleContainer swamiImage={SwamiImage}>
          <div className="swami-pic"></div>
        </SwamiImageBubbleContainer>
      </div>
      <div className="right-section">
        <Typography variant="h4Bold">Our Journey</Typography>
        <Typography variant="h1Bold">
          The Core Of Sri Sathya Sai Seva Organisations
        </Typography>
        <TabButtonContainer>
          {Object.keys(tabConfig).map((config) => (
            <TabButton
              onClick={setView.bind(this, config)}
              className={currentView === config ? "tab-active" : "tab-inactive"}
            >
              <Typography variant="h4Medium">
                {tabConfig[config].label}
              </Typography>
            </TabButton>
          ))}
        </TabButtonContainer>
        <Typography variant="h2Bold">
          {tabConfig[currentView].heading}
        </Typography>
        <Typography variant="h4" whiteSpace={"pre-line"}>
          {tabConfig[currentView].desc}
        </Typography>
        <OutlinedButtonTransparent
          to={tabConfig[currentView].knowMorePath}
          target="_blank"
        >
          <Typography variant="h4Medium">Know more</Typography>
          <ArrowForwardIcon />
        </OutlinedButtonTransparent>
        <div className="img-container">
          <img src={BottomImage} alt="Admin-Building-Prashanti" />
        </div>
      </div>
    </OurJourneyContainer>
  )
}

export default Component
