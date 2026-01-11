import React from "react"
import { CeilingOnDesire } from "@components/Sections/ceilingOnDesires"
import COD from "@assets/image/compressed/ceilingOnDesire/1.webp"
import { HeroArea } from "@components/HeroArea"

const Container: React.FC = () => {
  return (
    <>
      <HeroArea header="Ceiling On Desire" subheader="" imageUrl={COD} />
      <CeilingOnDesire />
    </>
  )
}

export default Container
