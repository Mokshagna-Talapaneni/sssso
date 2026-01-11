import SwamiImage from "@assets/image/compressed/landscape/6.webp"
import { HeroArea } from "@components/HeroArea"
import React from "react"
import { DirectivesSection } from "./module/Directives"
import { JourneySection } from "./module/Journey"
import { Principles } from "./module/Principles"
import { CorePrinciples } from "./module/CorePrinciples"

const DivineAndDirective: React.FC = () => {
  return (
    <React.Fragment>
      <HeroArea
        header="Divine Directives"
        subheader="Guidelines for Spiritual Growth and Divine Connection"
        imageUrl={SwamiImage}
      />
      <JourneySection />
      <DirectivesSection />
      <CorePrinciples />
      <Principles />
    </React.Fragment>
  )
}
export default DivineAndDirective
