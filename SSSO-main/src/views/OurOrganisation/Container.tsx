import React from "react"
import { HeroArea } from "@components/HeroArea"
import SwamiImage from "@assets/image/compressed/landscape/3.webp"
import { IntroSection } from "./module/sections/Intro"
import { DistinctiveFeaturesSection } from "./module/sections/DistinctiveFeatures"
import { Objective } from "./module/sections/Objective"

const Container: React.FC = () => {
  return (
    <React.Fragment>
      <HeroArea
        header="Sri Sathya Sai Seva Organisations"
        subheader="About Us"
        imageUrl={SwamiImage}
      />
      <IntroSection />
      <DistinctiveFeaturesSection />
      {/* <Objective /> */}
    </React.Fragment>
  )
}

export default Container
