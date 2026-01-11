import SwamiImage from "@assets/image/compressed/landscape/5.webp"
import { HeroArea } from "@components/HeroArea"
import React from "react"
import { InsigniasSection } from "./module/InsigniasAbout"
import { IntroSection } from "./module/Introduction"

const Insignias: React.FC = () => {
  return (
    <React.Fragment>
      <HeroArea
        header="Sacred Insignias"
        subheader="Discover the profound meaning behind our spiritual symbols"
        imageUrl={SwamiImage}
      />
      <IntroSection />
      <InsigniasSection />
    </React.Fragment>
  )
}
export default Insignias
