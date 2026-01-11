import React from "react"
import { IntroSection } from "./module/Introduction"
import { UnitsSection } from "./module/Units"
import { HeroArea } from "@components/HeroArea"
import SwamiImage from "@assets/image/compressed/landscape/4.webp"

const UnitsPage: React.FC = () => {
  return (
    <React.Fragment>
      <HeroArea
        header="Units and Their Functioning"
        subheader="A harmonious network of spiritual and service units working together"
        imageUrl={SwamiImage}
      />
      <IntroSection />
      <UnitsSection />
    </React.Fragment>
  )
}

export default UnitsPage
