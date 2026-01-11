import React from "react"
import SwamiImage from "@assets/image/compressed/landscape/5.webp"
import { HeroArea } from "@components/HeroArea"
import { About } from "./modules/About"

const Component: React.FC = () => {
  return (
    <React.Fragment>
      <HeroArea
        header="The Essence"
        subheader="Discover the profound meaning behind our organisation"
        imageUrl={SwamiImage}
      />
      <About />
    </React.Fragment>
  )
}

export default Component
