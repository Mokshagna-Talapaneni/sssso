import React from "react"
import { OurNationalInitatives } from "@components/Sections/OurNationalInitatives"
import { HeroArea } from "@components/HeroArea"
import Swami from "@assets/image/compressed/landscape/1.webp"
const Container: React.FC = () => {
  return (
    <>
      <HeroArea
        header="Our National Initiatives"
        subheader="The Divine Mission of Sathya Sai Baba"
        imageUrl={Swami}
      />
      <OurNationalInitatives />
    </>
  )
}

export default Container
