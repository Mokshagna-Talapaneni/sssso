import React from "react"
import SwamiImage from "@assets/image/compressed/landscape/2.webp"
import { HeroArea } from "@components/HeroArea"
import { Introduction } from "./module/Introduction"
import { SpiritualWing } from "./module/SpiritualWing"
import { EducationWing } from "./module/EducationWing"
import { ServiceWing } from "./module/ServiceWing"
import { useParams, useSearchParams } from "react-router"

const Container: React.FC = () => {
  const [searchParams] = useSearchParams()

  React.useEffect(() => {
    document.getElementById(searchParams.get("id") as string)?.scrollIntoView()
  }, [])

  return (
    <React.Fragment>
      <HeroArea
        header="Wings of the Organisation"
        subheader="Three pillars of transformation: Spiritual, Educational, and Service"
        imageUrl={SwamiImage}
      />
      <Introduction />
      <SpiritualWing id="spiritual-wing" />
      <EducationWing id="education-wing" />
      <ServiceWing id="service-wing" />
    </React.Fragment>
  )
}

export default Container
