import React from "react"
import { OurWings } from "./module/sections/OurWings"
import { DashboardContainer } from "./styles/styled"
import { PrashantiLive } from "./module/sections/PrashantLive"
import { NationalInitiatives } from "./module/sections/NationalInitiatives"
import { VidyaJyoti } from "./module/sections/VidyaJyoti"
import { OurJourney } from "./module/sections/OurJourney"
import { MainCarousel } from "./module/sections/MainCarousel"
import { AboutUs } from "./module/sections/AboutUS"

const Container: React.FC = () => {
  return (
    <DashboardContainer>
      <MainCarousel />
      <AboutUs />
      <OurJourney />
      <PrashantiLive />
      <OurWings />
      <NationalInitiatives />
      <VidyaJyoti />
    </DashboardContainer>
  )
}

export default Container
